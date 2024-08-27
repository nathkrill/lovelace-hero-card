/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { HeroCardConfig } from './types';
import { customElement, property, state } from 'lit/decorators';
import { formfieldDefinition } from '../elements/formfield';
import { selectDefinition } from '../elements/select';
import { switchDefinition } from '../elements/switch';
import { textfieldDefinition } from '../elements/textfield';

@customElement('hero-card-editor')
export class BoilerplateCardEditor extends ScopedRegistryHost(LitElement) implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: HeroCardConfig;

  @state() private _helpers?: any;

  private _initialized = false;

  static elementDefinitions = {
    ...textfieldDefinition,
    ...selectDefinition,
    ...switchDefinition,
    ...formfieldDefinition,
  };

  public setConfig(config: HeroCardConfig): void {
    this._config = config;

    this.loadCardHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  get _heading(): string {
    return this._config?.heading || '';
  }

  get _subheading(): string {
    return this._config?.subheading || '';
  }

  get _entity_image(): boolean {
    return this._config?.entity_image || false;
  }

  get _foreground_image(): boolean {
    return this._config?.foreground_image || false;
  }


  get _entity(): string {
    return this._config?.entity || '';
  }

  get _image_url(): string {
    return this._config?.image_url || '';
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) {
      return html``;
    }

    // You can restrict on domain type
    const entities = Object.keys(this.hass.states);

    return html`
      <mwc-textfield
        label="Heading (Optional)"
        .value=${this._heading}
        .configValue=${'heading'}
        @input=${this._valueChanged}
      ></mwc-textfield>
      <mwc-textfield
        label="Subheading (Optional)"
        .value=${this._subheading}
        .configValue=${'subheading'}
        @input=${this._valueChanged}
      ></mwc-textfield>
      <mwc-formfield .label=${`Entity Image ${this._entity_image ? 'off' : 'on'}`}>
        <mwc-switch
          .checked=${this._entity_image !== false}
          .configValue=${'entity_image'}
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
      ${this._entity_image ? html`
        <mwc-select
          naturalMenuWidth
          fixedMenuPosition
          label="Entity"
          .configValue=${'entity'}
          .value=${this._entity}
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
        >
          ${entities.map((entity) => {
            return html`<mwc-list-item .value=${entity}>${entity}</mwc-list-item>`;
          })}
        </mwc-select>
      ` : html`
        <mwc-textfield
          label="Image URL"
          .value=${this._image_url}
          .configValue=${'image_url'}
          @input=${this._valueChanged}
        ></mwc-textfield>
      `}
      <mwc-formfield .label=${`Show Foreground Image ${this._entity_image ? 'show' : 'hide'}`}>
        <mwc-switch
          .checked=${this._foreground_image !== false}
          .configValue=${'foreground_image'}
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        const tmpConfig = { ...this._config };
        delete tmpConfig[target.configValue];
        this._config = tmpConfig;
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static styles: CSSResultGroup = css`
    mwc-select,
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
    }
    mwc-formfield {
      padding-bottom: 8px;
    }
    mwc-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }
  `;
}
