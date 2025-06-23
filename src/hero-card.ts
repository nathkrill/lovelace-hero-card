/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, PropertyValues, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types. https://github.com/custom-cards/custom-card-helpers
import registerTemplates from 'ha-template';
import {registerDynamicColor,DynamicColor} from 'material-color-web-component';


import type { HeroCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  HERO-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'hero-card',
  name: 'Hero Card',
  description: 'A template custom card for you to create something awesome',
});

registerTemplates();
registerDynamicColor();

@customElement('hero-card')
export class HeroCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('hero-card-editor');
  }

  public static getStubConfig(): Record<string, unknown> {
    return {};
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit.dev/docs/components/properties/
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private config!: HeroCardConfig;

  // https://lit.dev/docs/components/properties/#accessors-custom
  public setConfig(config: HeroCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.entity_image && !config.entity) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entity_image && !config.image_url) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Hero Card',
      ...config,
    };
  }

  // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private _getImageSource(): string {
    if (this.config.entity_image) {
      return this.entity.attributes.entity_picture || ''
    }
    return this.config.image_url || ''
  }

  get entity() {
    const entity_id = this.config.entity || '';
    const entity = this.hass.states[entity_id]
    return entity
  }

  protected firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties)
        const colorEl: DynamicColor = this.renderRoot.querySelector("dynamic-color");
        const imageEl = this.renderRoot.querySelector("img");
        if (imageEl === null || colorEl === null) {
          return;
        }
        const observerconfig = { attributes: true };
        const callback = (mutationList) => {
            for (const mutation of mutationList) {
              if (mutation.type === "childList") {
                // console.log("A child node has been added or removed.");
              } else if (mutation.type === "attributes") {
                if (mutation.attributeName === 'src') {
                    colorEl?.refresh()
                }
              }
            }
          };
        const observer = new MutationObserver(callback);
        observer.observe(imageEl, observerconfig);
    }

  // https://lit.dev/docs/components/rendering/
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }

    return html`
      <dynamic-color>
        <div
          @action=${this._handleAction}
          .actionHandler=${actionHandler({
            hasHold: hasAction(this.config.hold_action),
            hasDoubleClick: hasAction(this.config.double_tap_action),
          })}
          tabindex="0"
          style='--bg-image: url("${this._getImageSource()}")'
        >
          <figure>
            <img class='background' src='${this._getImageSource()}' loading='lazy' />
          </figure>
          <figcaption>
            ${this.config.heading ? html`
              <h1>
                <ha-template
                  hass=${this.hass}
                  template=${this.config.heading}
                  value=${''}
                ></ha-template>  
              </h1>
            ` : ''}
            ${this.config.subheading ? html`
              <p>
                <ha-template
                  hass=${this.hass}
                  template=${this.config.subheading}
                  value=${''}
                ></ha-template>  
              </p>
            ` : ''}
          </figcaption>
        </div>
      </dynamic-color>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html` ${errorCard} `;
  }

  // https://lit.dev/docs/components/styles/
  static get styles(): CSSResultGroup {
    return css`
      :host,* {
        box-sizing: border-box;
        cursor: pointer;
      }
      :host {
      }
      div {
        background-color: var(--md-sys-color-surface-variant);
        position:relative;
        padding: calc(2 * var(--column-gap)) calc(2.5 * var(--column-gap));
        border-radius: calc(2 * var(--column-gap));
        overflow: clip;
        min-height: 12em;
        display: flex;
        flex-flow: column;
        justify-content:flex-end;
        color: var(--md-sys-color-on-surface-variant);
        transition: color 1.5s ease-in-out;
      }
      figure {
        position:absolute;
        z-index: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        margin: 0;
      }
      figcaption {
        position:absolute;
        z-index: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        flex-flow: column;
        justify-content:flex-end;
        padding: calc(2 * var(--column-gap)) calc(2.5 * var(--column-gap));
        --mix-color: color-mix(in srgb, var(--md-sys-color-on-secondary) 90%, #FFFFFF00 10%);
        background: radial-gradient(ellipse 100% 60% at 20% 80%, var(--mix-color) 30%, transparent)
      }
      picture {
        position:relative;
        display: block;
        padding: var(--column-gap);
      }
      img,svg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position:relative;
        transition:  1.5s ease-in-out;
        transition-property: transform;
        will-change: transform;
      }
      h1,p {
        position:relative;
        margin: 0;
        line-height: 1;
      }
      h1 {
        margin-block: 1rex;
      }
      @media (hover: hover) {
        div:hover img {
          transform: scale(1.2);
        }
      }
    `;
  }
}
