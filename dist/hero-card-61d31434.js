/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function n(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window,a=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),c=new WeakMap;class l{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(e,t))}return t}toString(){return this.cssText}}const h=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new l(r,t,s)},u=(t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=i.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))},d=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var m;const f=window,p=f.trustedTypes,g=p?p.emptyScript:"",y=f.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},b=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},w="finalized";class C extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Ep(r,e);void 0!==n&&(this._$Ev.set(n,r),t.push(n))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(w))return!1;this[w]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=_){var n;const o=this.constructor._$Ep(t,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:v).toAttribute(e,r.type);this._$El=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$El=null}}_$AK(t,e){var r;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:v;this._$El=o,this[o]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||b)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;C[w]=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},null==y||y({ReactiveElement:C}),(null!==(m=f.reactiveElementVersions)&&void 0!==m?m:f.reactiveElementVersions=[]).push("1.6.3");const P=window,A=P.trustedTypes,M=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,E=`<${x}>`,I=document,S=()=>I.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,D="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,B=/>/g,H=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),z=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),q=new WeakMap,G=I.createTreeWalker(I,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const Y=(t,e)=>{const r=t.length-1,n=[];let o,i=2===e?"<svg>":"",a=R;for(let e=0;e<r;e++){const r=t[e];let s,c,l=-1,h=0;for(;h<r.length&&(a.lastIndex=h,c=a.exec(r),null!==c);)h=a.lastIndex,a===R?"!--"===c[1]?a=F:void 0!==c[1]?a=B:void 0!==c[2]?(U.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=H):void 0!==c[3]&&(a=H):a===H?">"===c[0]?(a=null!=o?o:R,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?H:'"'===c[3]?N:L):a===N||a===L?a=H:a===F||a===B?a=R:(a=H,o=void 0);const u=a===H&&t[e+1].startsWith("/>")?" ":"";i+=a===R?r+E:l>=0?(n.push(s),r.slice(0,l)+"$lit$"+r.slice(l)+$+u):r+$+(-2===l?(n.push(void 0),e):u)}return[W(t,i+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};class K{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0;const a=t.length-1,s=this.parts,[c,l]=Y(t,e);if(this.el=K.createElement(c,r),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=G.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const r=l[i++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?rt:"@"===e[1]?nt:Q})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(U.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],S()),G.nextNode(),s.push({type:2,index:++o});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===x)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)s.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const r=I.createElement("template");return r.innerHTML=t,r}}function J(t,e,r=t,n){var o,i,a,s;if(e===z)return e;let c=void 0!==n?null===(o=r._$Co)||void 0===o?void 0:o[n]:r._$Cl;const l=T(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(i=null==c?void 0:c._$AO)||void 0===i||i.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,r,n)),void 0!==n?(null!==(a=(s=r)._$Co)&&void 0!==a?a:s._$Co=[])[n]=c:r._$Cl=c),void 0!==c&&(e=J(t,c._$AS(t,e.values),c,n)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:I).importNode(r,!0);G.currentNode=o;let i=G.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new Z(i,i.nextSibling,this,t):1===c.type?e=new c.ctor(i,c.name,c.strings,this,t):6===c.type&&(e=new ot(i,this,t)),this._$AV.push(e),c=n[++s]}a!==(null==c?void 0:c.index)&&(i=G.nextNode(),a++)}return G.currentNode=I,o}v(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Z{constructor(t,e,r,n){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),T(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(I.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=K.createElement(W(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(r);else{const t=new X(o,this),e=t.u(this.options);t.v(r),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Z(this.k(S()),this.k(S()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,r,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const o=this.strings;let i=!1;if(void 0===o)t=J(this,t,e,0),i=!T(t)||t!==this._$AH&&t!==z,i&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=J(this,n[r+a],e,a),s===z&&(s=this._$AH[a]),i||(i=!T(s)||s!==this._$AH[a]),s===j?t=j:t!==j&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}i&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const et=A?A.emptyScript:"";class rt extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class nt extends Q{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=J(this,t,e,0))&&void 0!==r?r:j)===z)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const it=P.litHtmlPolyfillSupport;null==it||it(K,Z),(null!==(k=P.litHtmlVersions)&&void 0!==k?k:P.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at,st;class ct extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{var n,o;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let a=i._$litPart$;if(void 0===a){const t=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;i._$litPart$=a=new Z(e.insertBefore(S(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}ct.finalized=!0,ct._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ct});const lt=globalThis.litElementPolyfillSupport;null==lt||lt({LitElement:ct}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ut=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function dt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):ut(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function mt(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=({finisher:t,descriptor:e})=>(r,n)=>{var o;if(void 0===n){const n=null!==(o=r.originalKey)&&void 0!==o?o:r.key,i=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(r.key)}:{...r,key:n};return null!=t&&(i.finisher=function(e){t(e,n)}),i}{const o=r.constructor;void 0!==e&&Object.defineProperty(r,n,e(n)),null==t||t(o,n)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var pt;const gt=null!=(null===(pt=window.HTMLSlotElement)||void 0===pt?void 0:pt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function yt(t){const{slot:e,selector:r}=null!=t?t:{};return ft({descriptor:n=>({get(){var n;const o="slot"+(e?`[name=${e}]`:":not([name])"),i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(o),a=null!=i?gt(i,t):[];return r?a.filter((t=>t.matches(r))):a},enumerable:!0,configurable:!0})})}var vt,bt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(vt||(vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(bt||(bt={}));var _t=["closed","locked","off"],wt=function(t,e,r,n){n=n||{},r=null==r?{}:r;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=r,t.dispatchEvent(o),o},Ct=function(t){wt(window,"haptic",t)},kt=function(t,e,r,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Ct("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(r.entity||r.camera_image)&&wt(t,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":n.navigation_path&&function(t,e,r){void 0===r&&(r=!1),r?history.replaceState(null,"",e):history.pushState(null,"",e),wt(window,"location-changed",{replace:r})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":r.entity&&(function(t,e){(function(t,e,r){void 0===r&&(r=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),i="group"===o?"homeassistant":o;switch(o){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off"}t.callService(i,n,{entity_id:e})})(t,e,_t.includes(t.states[e].state))}(e,r.entity),Ct("success"));break;case"call-service":if(!n.service)return void Ct("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),Ct("success");break;case"fire-dom-event":wt(t,"ll-custom",n)}};function Pt(t){return void 0!==t&&"none"!==t.action}function At(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}class Mt extends ct{constructor(){super(...arguments),this.template="",this.variables={},this.value=null,this.unsubscribePromise=null}connectedCallback(){super.connectedCallback(),this.hass?this.unsubscribePromise||this.template&&(this.unsubscribePromise=this.hass.connection.subscribeMessage((t=>{this.value=t.result}),{type:"render_template",template:this.template,variables:this.variables})):console.warn("hass object is not provided")}async disconnectedCallback(){if(super.disconnectedCallback(),this.unsubscribePromise)try{const t=await this.unsubscribePromise;return this.unsubscribePromise=null,t()}catch(t){if("not_found"!==t.code)throw t}}render(){var t;return null!==(t=this.value)&&void 0!==t?t:j}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(t){return t<0?-1:0===t?0:1}function xt(t,e,r){return(1-r)*t+r*e}function Et(t,e,r){return r<t?t:r>e?e:r}function It(t){return(t%=360)<0&&(t+=360),t}function St(t){return(t%=360)<0&&(t+=360),t}function Tt(t,e){return 180-Math.abs(Math.abs(t-e)-180)}function Ot(t,e){return[t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2]]}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At([dt()],Mt.prototype,"hass",void 0),At([dt()],Mt.prototype,"template",void 0),At([dt()],Mt.prototype,"variables",void 0),At([dt()],Mt.prototype,"value",void 0),At([mt()],Mt.prototype,"unsubscribePromise",void 0);const Dt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Rt=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ft=[95.047,100,108.883];function Bt(t,e,r){return(255<<24|(255&t)<<16|(255&e)<<8|255&r)>>>0}function Ht(t){return Bt(Wt(t[0]),Wt(t[1]),Wt(t[2]))}function Lt(t){return t>>16&255}function Nt(t){return t>>8&255}function Ut(t){return 255&t}function Vt(t,e,r){const n=Rt,o=n[0][0]*t+n[0][1]*e+n[0][2]*r,i=n[1][0]*t+n[1][1]*e+n[1][2]*r,a=n[2][0]*t+n[2][1]*e+n[2][2]*r;return Bt(Wt(o),Wt(i),Wt(a))}function zt(t){const e=function(t){return Ot([Gt(Lt(t)),Gt(Nt(t)),Gt(Ut(t))],Dt)}(t)[1];return 116*Yt(e/100)-16}function jt(t){return 100*Kt((t+16)/116)}function qt(t){return 116*Yt(t/100)-16}function Gt(t){const e=t/255;return e<=.040449936?e/12.92*100:100*Math.pow((e+.055)/1.055,2.4)}function Wt(t){const e=t/100;let r=0;return r=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,n=0,o=255,(i=Math.round(255*r))<n?n:i>o?o:i;var n,o,i}function Yt(t){return t>216/24389?Math.pow(t,1/3):(903.2962962962963*t+16)/116}function Kt(t){const e=t*t*t;return e>216/24389?e:(116*t-16)/903.2962962962963}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static make(t=function(){return Ft}(),e=200/Math.PI*jt(50)/100,r=50,n=2,o=!1){const i=t,a=.401288*i[0]+.650173*i[1]+-.051461*i[2],s=-.250268*i[0]+1.204414*i[1]+.045854*i[2],c=-.002079*i[0]+.048952*i[1]+.953127*i[2],l=.8+n/10,h=l>=.9?xt(.59,.69,10*(l-.9)):xt(.525,.59,10*(l-.8));let u=o?1:l*(1-1/3.6*Math.exp((-e-42)/92));u=u>1?1:u<0?0:u;const d=l,m=[u*(100/a)+1-u,u*(100/s)+1-u,u*(100/c)+1-u],f=1/(5*e+1),p=f*f*f*f,g=1-p,y=p*e+.1*g*g*Math.cbrt(5*e),v=jt(r)/t[1],b=1.48+Math.sqrt(v),_=.725/Math.pow(v,.2),w=_,C=[Math.pow(y*m[0]*a/100,.42),Math.pow(y*m[1]*s/100,.42),Math.pow(y*m[2]*c/100,.42)],k=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)];return new Jt(v,(2*k[0]+k[1]+.05*k[2])*_,_,w,h,d,m,y,Math.pow(y,.25),b)}constructor(t,e,r,n,o,i,a,s,c,l){this.n=t,this.aw=e,this.nbb=r,this.ncb=n,this.c=o,this.nc=i,this.rgbD=a,this.fl=s,this.fLRoot=c,this.z=l}}Jt.DEFAULT=Jt.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t,e,r,n,o,i,a,s,c){this.hue=t,this.chroma=e,this.j=r,this.q=n,this.m=o,this.s=i,this.jstar=a,this.astar=s,this.bstar=c}distance(t){const e=this.jstar-t.jstar,r=this.astar-t.astar,n=this.bstar-t.bstar,o=Math.sqrt(e*e+r*r+n*n);return 1.41*Math.pow(o,.63)}static fromInt(t){return Xt.fromIntInViewingConditions(t,Jt.DEFAULT)}static fromIntInViewingConditions(t,e){const r=(65280&t)>>8,n=255&t,o=Gt((16711680&t)>>16),i=Gt(r),a=Gt(n),s=.41233895*o+.35762064*i+.18051042*a,c=.2126*o+.7152*i+.0722*a,l=.01932141*o+.11916382*i+.95034478*a,h=.401288*s+.650173*c-.051461*l,u=-.250268*s+1.204414*c+.045854*l,d=-.002079*s+.048952*c+.953127*l,m=e.rgbD[0]*h,f=e.rgbD[1]*u,p=e.rgbD[2]*d,g=Math.pow(e.fl*Math.abs(m)/100,.42),y=Math.pow(e.fl*Math.abs(f)/100,.42),v=Math.pow(e.fl*Math.abs(p)/100,.42),b=400*$t(m)*g/(g+27.13),_=400*$t(f)*y/(y+27.13),w=400*$t(p)*v/(v+27.13),C=(11*b+-12*_+w)/11,k=(b+_-2*w)/9,P=(20*b+20*_+21*w)/20,A=(40*b+20*_+w)/20,M=180*Math.atan2(k,C)/Math.PI,$=M<0?M+360:M>=360?M-360:M,x=$*Math.PI/180,E=A*e.nbb,I=100*Math.pow(E/e.aw,e.c*e.z),S=4/e.c*Math.sqrt(I/100)*(e.aw+4)*e.fLRoot,T=$<20.14?$+360:$,O=5e4/13*(.25*(Math.cos(T*Math.PI/180+2)+3.8))*e.nc*e.ncb*Math.sqrt(C*C+k*k)/(P+.305),D=Math.pow(O,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),R=D*Math.sqrt(I/100),F=R*e.fLRoot,B=50*Math.sqrt(D*e.c/(e.aw+4)),H=(1+100*.007)*I/(1+.007*I),L=1/.0228*Math.log(1+.0228*F),N=L*Math.cos(x),U=L*Math.sin(x);return new Xt($,R,I,S,F,B,H,N,U)}static fromJch(t,e,r){return Xt.fromJchInViewingConditions(t,e,r,Jt.DEFAULT)}static fromJchInViewingConditions(t,e,r,n){const o=4/n.c*Math.sqrt(t/100)*(n.aw+4)*n.fLRoot,i=e*n.fLRoot,a=e/Math.sqrt(t/100),s=50*Math.sqrt(a*n.c/(n.aw+4)),c=r*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),h=1/.0228*Math.log(1+.0228*i),u=h*Math.cos(c),d=h*Math.sin(c);return new Xt(r,e,t,o,i,s,l,u,d)}static fromUcs(t,e,r){return Xt.fromUcsInViewingConditions(t,e,r,Jt.DEFAULT)}static fromUcsInViewingConditions(t,e,r,n){const o=e,i=r,a=Math.sqrt(o*o+i*i),s=(Math.exp(.0228*a)-1)/.0228/n.fLRoot;let c=Math.atan2(i,o)*(180/Math.PI);c<0&&(c+=360);const l=t/(1-.007*(t-100));return Xt.fromJchInViewingConditions(l,s,c,n)}toInt(){return this.viewed(Jt.DEFAULT)}viewed(t){const e=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),n=this.hue*Math.PI/180,o=.25*(Math.cos(n+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=o*(5e4/13)*t.nc*t.ncb,s=i/t.nbb,c=Math.sin(n),l=Math.cos(n),h=23*(s+.305)*r/(23*a+11*r*l+108*r*c),u=h*l,d=h*c,m=(460*s+451*u+288*d)/1403,f=(460*s-891*u-261*d)/1403,p=(460*s-220*u-6300*d)/1403,g=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),y=$t(m)*(100/t.fl)*Math.pow(g,1/.42),v=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),b=$t(f)*(100/t.fl)*Math.pow(v,1/.42),_=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),w=$t(p)*(100/t.fl)*Math.pow(_,1/.42),C=y/t.rgbD[0],k=b/t.rgbD[1],P=w/t.rgbD[2];return Vt(1.86206786*C-1.01125463*k+.14918677*P,.38752654*C+.62144744*k-.00897398*P,-.0158415*C-.03412294*k+1.04996444*P)}static fromXyzInViewingConditions(t,e,r,n){const o=.401288*t+.650173*e-.051461*r,i=-.250268*t+1.204414*e+.045854*r,a=-.002079*t+.048952*e+.953127*r,s=n.rgbD[0]*o,c=n.rgbD[1]*i,l=n.rgbD[2]*a,h=Math.pow(n.fl*Math.abs(s)/100,.42),u=Math.pow(n.fl*Math.abs(c)/100,.42),d=Math.pow(n.fl*Math.abs(l)/100,.42),m=400*$t(s)*h/(h+27.13),f=400*$t(c)*u/(u+27.13),p=400*$t(l)*d/(d+27.13),g=(11*m+-12*f+p)/11,y=(m+f-2*p)/9,v=(20*m+20*f+21*p)/20,b=(40*m+20*f+p)/20,_=180*Math.atan2(y,g)/Math.PI,w=_<0?_+360:_>=360?_-360:_,C=w*Math.PI/180,k=b*n.nbb,P=100*Math.pow(k/n.aw,n.c*n.z),A=4/n.c*Math.sqrt(P/100)*(n.aw+4)*n.fLRoot,M=w<20.14?w+360:w,$=5e4/13*(1/4*(Math.cos(M*Math.PI/180+2)+3.8))*n.nc*n.ncb*Math.sqrt(g*g+y*y)/(v+.305),x=Math.pow($,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),E=x*Math.sqrt(P/100),I=E*n.fLRoot,S=50*Math.sqrt(x*n.c/(n.aw+4)),T=(1+100*.007)*P/(1+.007*P),O=Math.log(1+.0228*I)/.0228,D=O*Math.cos(C),R=O*Math.sin(C);return new Xt(w,E,P,A,I,S,T,D,R)}xyzInViewingConditions(t){const e=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),n=this.hue*Math.PI/180,o=.25*(Math.cos(n+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),a=o*(5e4/13)*t.nc*t.ncb,s=i/t.nbb,c=Math.sin(n),l=Math.cos(n),h=23*(s+.305)*r/(23*a+11*r*l+108*r*c),u=h*l,d=h*c,m=(460*s+451*u+288*d)/1403,f=(460*s-891*u-261*d)/1403,p=(460*s-220*u-6300*d)/1403,g=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),y=$t(m)*(100/t.fl)*Math.pow(g,1/.42),v=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),b=$t(f)*(100/t.fl)*Math.pow(v,1/.42),_=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),w=$t(p)*(100/t.fl)*Math.pow(_,1/.42),C=y/t.rgbD[0],k=b/t.rgbD[1],P=w/t.rgbD[2];return[1.86206786*C-1.01125463*k+.14918677*P,.38752654*C+.62144744*k-.00897398*P,-.0158415*C-.03412294*k+1.04996444*P]}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{static sanitizeRadians(t){return(t+8*Math.PI)%(2*Math.PI)}static trueDelinearized(t){const e=t/100;let r=0;return r=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,255*r}static chromaticAdaptation(t){const e=Math.pow(Math.abs(t),.42);return 400*$t(t)*e/(e+27.13)}static hueOf(t){const e=Ot(t,Zt.SCALED_DISCOUNT_FROM_LINRGB),r=Zt.chromaticAdaptation(e[0]),n=Zt.chromaticAdaptation(e[1]),o=Zt.chromaticAdaptation(e[2]),i=(11*r+-12*n+o)/11,a=(r+n-2*o)/9;return Math.atan2(a,i)}static areInCyclicOrder(t,e,r){return Zt.sanitizeRadians(e-t)<Zt.sanitizeRadians(r-t)}static intercept(t,e,r){return(e-t)/(r-t)}static lerpPoint(t,e,r){return[t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e,t[2]+(r[2]-t[2])*e]}static setCoordinate(t,e,r,n){const o=Zt.intercept(t[n],e,r[n]);return Zt.lerpPoint(t,o,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,e){const r=Zt.Y_FROM_LINRGB[0],n=Zt.Y_FROM_LINRGB[1],o=Zt.Y_FROM_LINRGB[2],i=e%4<=1?0:100,a=e%2==0?0:100;if(e<4){const e=i,s=a,c=(t-e*n-s*o)/r;return Zt.isBounded(c)?[c,e,s]:[-1,-1,-1]}if(e<8){const e=i,s=a,c=(t-s*r-e*o)/n;return Zt.isBounded(c)?[s,c,e]:[-1,-1,-1]}{const e=i,s=a,c=(t-e*r-s*n)/o;return Zt.isBounded(c)?[e,s,c]:[-1,-1,-1]}}static bisectToSegment(t,e){let r=[-1,-1,-1],n=r,o=0,i=0,a=!1,s=!0;for(let c=0;c<12;c++){const l=Zt.nthVertex(t,c);if(l[0]<0)continue;const h=Zt.hueOf(l);a?(s||Zt.areInCyclicOrder(o,h,i))&&(s=!1,Zt.areInCyclicOrder(o,e,h)?(n=l,i=h):(r=l,o=h)):(r=l,n=l,o=h,i=h,a=!0)}return[r,n]}static midpoint(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,e){const r=Zt.bisectToSegment(t,e);let n=r[0],o=Zt.hueOf(n),i=r[1];for(let t=0;t<3;t++)if(n[t]!==i[t]){let r=-1,a=255;n[t]<i[t]?(r=Zt.criticalPlaneBelow(Zt.trueDelinearized(n[t])),a=Zt.criticalPlaneAbove(Zt.trueDelinearized(i[t]))):(r=Zt.criticalPlaneAbove(Zt.trueDelinearized(n[t])),a=Zt.criticalPlaneBelow(Zt.trueDelinearized(i[t])));for(let s=0;s<8&&!(Math.abs(a-r)<=1);s++){const s=Math.floor((r+a)/2),c=Zt.CRITICAL_PLANES[s],l=Zt.setCoordinate(n,c,i,t),h=Zt.hueOf(l);Zt.areInCyclicOrder(o,e,h)?(i=l,a=s):(n=l,o=h,r=s)}}return Zt.midpoint(n,i)}static inverseChromaticAdaptation(t){const e=Math.abs(t),r=Math.max(0,27.13*e/(400-e));return $t(t)*Math.pow(r,1/.42)}static findResultByJ(t,e,r){let n=11*Math.sqrt(r);const o=Jt.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,o.n),.73),a=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,s=Math.sin(t),c=Math.cos(t);for(let t=0;t<5;t++){const l=n/100,h=0===e||0===n?0:e/Math.sqrt(l),u=Math.pow(h*i,1/.9),d=o.aw*Math.pow(l,1/o.c/o.z)/o.nbb,m=23*(d+.305)*u/(23*a+11*u*c+108*u*s),f=m*c,p=m*s,g=(460*d+451*f+288*p)/1403,y=(460*d-891*f-261*p)/1403,v=(460*d-220*f-6300*p)/1403,b=Ot([Zt.inverseChromaticAdaptation(g),Zt.inverseChromaticAdaptation(y),Zt.inverseChromaticAdaptation(v)],Zt.LINRGB_FROM_SCALED_DISCOUNT);if(b[0]<0||b[1]<0||b[2]<0)return 0;const _=Zt.Y_FROM_LINRGB[0],w=Zt.Y_FROM_LINRGB[1],C=Zt.Y_FROM_LINRGB[2],k=_*b[0]+w*b[1]+C*b[2];if(k<=0)return 0;if(4===t||Math.abs(k-r)<.002)return b[0]>100.01||b[1]>100.01||b[2]>100.01?0:Ht(b);n-=(k-r)*n/(2*k)}return 0}static solveToInt(t,e,r){if(e<1e-4||r<1e-4||r>99.9999)return function(t){const e=Wt(jt(t));return Bt(e,e,e)}(r);const n=(t=St(t))/180*Math.PI,o=jt(r),i=Zt.findResultByJ(n,e,o);if(0!==i)return i;return Ht(Zt.bisectToLimit(o,n))}static solveToCam(t,e,r){return Xt.fromInt(Zt.solveToInt(t,e,r))}}Zt.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],Zt.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],Zt.Y_FROM_LINRGB=[.2126,.7152,.0722],Zt.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{static from(t,e,r){return new Qt(Zt.solveToInt(t,e,r))}static fromInt(t){return new Qt(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(Zt.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(Zt.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(Zt.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const e=Xt.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=zt(t),this.argb=t}setInternalState(t){const e=Xt.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=zt(t),this.argb=t}inViewingConditions(t){const e=Xt.fromInt(this.toInt()).xyzInViewingConditions(t),r=Xt.fromXyzInViewingConditions(e[0],e[1],e[2],Jt.make());return Qt.from(r.hue,r.chroma,qt(e[1]))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static harmonize(t,e){const r=Qt.fromInt(t),n=Qt.fromInt(e),o=Tt(r.hue,n.hue),i=Math.min(.5*o,15),a=St(r.hue+i*(s=r.hue,St(n.hue-s)<=180?1:-1));var s;return Qt.from(a,r.chroma,r.tone).toInt()}static hctHue(t,e,r){const n=te.cam16Ucs(t,e,r),o=Xt.fromInt(n),i=Xt.fromInt(t);return Qt.from(o.hue,i.chroma,zt(t)).toInt()}static cam16Ucs(t,e,r){const n=Xt.fromInt(t),o=Xt.fromInt(e),i=n.jstar,a=n.astar,s=n.bstar,c=i+(o.jstar-i)*r,l=a+(o.astar-a)*r,h=s+(o.bstar-s)*r;return Xt.fromUcs(c,l,h).toInt()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static ratioOfTones(t,e){return t=Et(0,100,t),e=Et(0,100,e),ee.ratioOfYs(jt(t),jt(e))}static ratioOfYs(t,e){const r=t>e?t:e;return(r+5)/((r===e?t:e)+5)}static lighter(t,e){if(t<0||t>100)return-1;const r=jt(t),n=e*(r+5)-5,o=ee.ratioOfYs(n,r),i=Math.abs(o-e);if(o<e&&i>.04)return-1;const a=qt(n)+.4;return a<0||a>100?-1:a}static darker(t,e){if(t<0||t>100)return-1;const r=jt(t),n=(r+5)/e-5,o=ee.ratioOfYs(r,n),i=Math.abs(o-e);if(o<e&&i>.04)return-1;const a=qt(n)-.4;return a<0||a>100?-1:a}static lighterUnsafe(t,e){const r=ee.lighter(t,e);return r<0?100:r}static darkerUnsafe(t,e){const r=ee.darker(t,e);return r<0?0:r}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static isDisliked(t){const e=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,r=Math.round(t.chroma)>16,n=Math.round(t.tone)<65;return e&&r&&n}static fixIfDisliked(t){return re.isDisliked(t)?Qt.from(t.hue,t.chroma,70):t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromPalette(t){return new ne(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,e,r,n,o,i,a,s){if(this.name=t,this.palette=e,this.tone=r,this.isBackground=n,this.background=o,this.secondBackground=i,this.contrastCurve=a,this.toneDeltaPair=s,this.hctCache=new Map,!o&&i)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!o&&a)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(o&&!a)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const e=this.hctCache.get(t);if(null!=e)return e;const r=this.getTone(t),n=this.palette(t).getHct(r);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,n),n}getTone(t){const e=t.contrastLevel<0;if(this.toneDeltaPair){const r=this.toneDeltaPair(t),n=r.roleA,o=r.roleB,i=r.delta,a=r.polarity,s=r.stayTogether,c=this.background(t).getTone(t),l="nearer"===a||"lighter"===a&&!t.isDark||"darker"===a&&t.isDark,h=l?n:o,u=l?o:n,d=this.name===h.name,m=t.isDark?1:-1,f=h.contrastCurve.getContrast(t.contrastLevel),p=u.contrastCurve.getContrast(t.contrastLevel),g=h.tone(t);let y=ee.ratioOfTones(c,g)>=f?g:ne.foregroundTone(c,f);const v=u.tone(t);let b=ee.ratioOfTones(c,v)>=p?v:ne.foregroundTone(c,p);return e&&(y=ne.foregroundTone(c,f),b=ne.foregroundTone(c,p)),(b-y)*m>=i||(b=Et(0,100,y+i*m),(b-y)*m>=i||(y=Et(0,100,b-i*m))),50<=y&&y<60?m>0?(y=60,b=Math.max(b,y+i*m)):(y=49,b=Math.min(b,y+i*m)):50<=b&&b<60&&(s?m>0?(y=60,b=Math.max(b,y+i*m)):(y=49,b=Math.min(b,y+i*m)):b=m>0?60:49),d?y:b}{let r=this.tone(t);if(null==this.background)return r;const n=this.background(t).getTone(t),o=this.contrastCurve.getContrast(t.contrastLevel);if(ee.ratioOfTones(n,r)>=o||(r=ne.foregroundTone(n,o)),e&&(r=ne.foregroundTone(n,o)),this.isBackground&&50<=r&&r<60&&(r=ee.ratioOfTones(49,n)>=o?49:60),this.secondBackground){const[e,n]=[this.background,this.secondBackground],[i,a]=[e(t).getTone(t),n(t).getTone(t)],[s,c]=[Math.max(i,a),Math.min(i,a)];if(ee.ratioOfTones(s,r)>=o&&ee.ratioOfTones(c,r)>=o)return r;const l=ee.lighter(s,o),h=ee.darker(c,o),u=[];-1!==l&&u.push(l),-1!==h&&u.push(h);return ne.tonePrefersLightForeground(i)||ne.tonePrefersLightForeground(a)?l<0?100:l:1===u.length?u[0]:h<0?0:h}return r}}static foregroundTone(t,e){const r=ee.lighterUnsafe(t,e),n=ee.darkerUnsafe(t,e),o=ee.ratioOfTones(r,t),i=ee.ratioOfTones(n,t);if(ne.tonePrefersLightForeground(t)){const t=Math.abs(o-i)<.1&&o<e&&i<e;return o>=e||o>=i||t?r:n}return i>=e||i>=o?n:r}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return ne.tonePrefersLightForeground(t)&&!ne.toneAllowsLightForeground(t)?49:t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;!function(t){t[t.MONOCHROME=0]="MONOCHROME",t[t.NEUTRAL=1]="NEUTRAL",t[t.TONAL_SPOT=2]="TONAL_SPOT",t[t.VIBRANT=3]="VIBRANT",t[t.EXPRESSIVE=4]="EXPRESSIVE",t[t.FIDELITY=5]="FIDELITY",t[t.CONTENT=6]="CONTENT",t[t.RAINBOW=7]="RAINBOW",t[t.FRUIT_SALAD=8]="FRUIT_SALAD"}(oe||(oe={}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(t,e,r,n){this.low=t,this.normal=e,this.medium=r,this.high=n}getContrast(t){return t<=-1?this.low:t<0?xt(this.low,this.normal,(t- -1)/1):t<.5?xt(this.normal,this.medium,(t-0)/.5):t<1?xt(this.medium,this.high,(t-.5)/.5):this.high}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e,r,n,o){this.roleA=t,this.roleB=e,this.delta=r,this.polarity=n,this.stayTogether=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){return t.variant===oe.FIDELITY||t.variant===oe.CONTENT}function ce(t){return t.variant===oe.MONOCHROME}function le(t,e){const r=t.inViewingConditions(function(t){return Jt.make(void 0,void 0,t.isDark?30:80,void 0,void 0)}(e));return ne.tonePrefersLightForeground(t.tone)&&!ne.toneAllowsLightForeground(r.tone)?ne.enableLightForeground(t.tone):ne.enableLightForeground(r.tone)}class he{static highestSurface(t){return t.isDark?he.surfaceBright:he.surfaceDim}}he.contentAccentToneDelta=15,he.primaryPaletteKeyColor=ne.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone}),he.secondaryPaletteKeyColor=ne.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone}),he.tertiaryPaletteKeyColor=ne.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone}),he.neutralPaletteKeyColor=ne.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone}),he.neutralVariantPaletteKeyColor=ne.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone}),he.background=ne.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),he.onBackground=ne.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>he.background,contrastCurve:new ie(3,3,4.5,7)}),he.surface=ne.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0}),he.surfaceDim=ne.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:87,isBackground:!0}),he.surfaceBright=ne.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?24:98,isBackground:!0}),he.surfaceContainerLowest=ne.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?4:100,isBackground:!0}),he.surfaceContainerLow=ne.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?10:96,isBackground:!0}),he.surfaceContainer=ne.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?12:94,isBackground:!0}),he.surfaceContainerHigh=ne.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?17:92,isBackground:!0}),he.surfaceContainerHighest=ne.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?22:90,isBackground:!0}),he.onSurface=ne.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>he.highestSurface(t),contrastCurve:new ie(4.5,7,11,21)}),he.surfaceVariant=ne.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0}),he.onSurfaceVariant=ne.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>he.highestSurface(t),contrastCurve:new ie(3,4.5,7,11)}),he.inverseSurface=ne.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20}),he.inverseOnSurface=ne.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>he.inverseSurface,contrastCurve:new ie(4.5,7,11,21)}),he.outline=ne.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>he.highestSurface(t),contrastCurve:new ie(1.5,3,4.5,7)}),he.outlineVariant=ne.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7)}),he.shadow=ne.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0}),he.scrim=ne.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0}),he.surfaceTint=ne.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0}),he.primary=ne.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>ce(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(3,4.5,7,11),toneDeltaPair:t=>new ae(he.primaryContainer,he.primary,15,"nearer",!1)}),he.onPrimary=ne.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>ce(t)?t.isDark?10:90:t.isDark?20:100,background:t=>he.primary,contrastCurve:new ie(4.5,7,11,21)}),he.primaryContainer=ne.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>se(t)?le(t.sourceColorHct,t):ce(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.primaryContainer,he.primary,15,"nearer",!1)}),he.onPrimaryContainer=ne.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>se(t)?ne.foregroundTone(he.primaryContainer.tone(t),4.5):ce(t)?t.isDark?0:100:t.isDark?90:10,background:t=>he.primaryContainer,contrastCurve:new ie(4.5,7,11,21)}),he.inversePrimary=ne.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>he.inverseSurface,contrastCurve:new ie(3,4.5,7,11)}),he.secondary=ne.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(3,4.5,7,11),toneDeltaPair:t=>new ae(he.secondaryContainer,he.secondary,15,"nearer",!1)}),he.onSecondary=ne.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>ce(t)?t.isDark?10:100:t.isDark?20:100,background:t=>he.secondary,contrastCurve:new ie(4.5,7,11,21)}),he.secondaryContainer=ne.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{const e=t.isDark?30:90;if(ce(t))return t.isDark?30:85;if(!se(t))return e;let r=function(t,e,r,n){let o=r,i=Qt.from(t,e,r);if(i.chroma<e){let r=i.chroma;for(;i.chroma<e;){o+=n?-1:1;const a=Qt.from(t,e,o);if(r>a.chroma)break;if(Math.abs(a.chroma-e)<.4)break;Math.abs(a.chroma-e)<Math.abs(i.chroma-e)&&(i=a),r=Math.max(r,a.chroma)}}return o}(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark);return r=le(t.secondaryPalette.getHct(r),t),r},isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.secondaryContainer,he.secondary,15,"nearer",!1)}),he.onSecondaryContainer=ne.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>se(t)?ne.foregroundTone(he.secondaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>he.secondaryContainer,contrastCurve:new ie(4.5,7,11,21)}),he.tertiary=ne.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(3,4.5,7,11),toneDeltaPair:t=>new ae(he.tertiaryContainer,he.tertiary,15,"nearer",!1)}),he.onTertiary=ne.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?t.isDark?10:90:t.isDark?20:100,background:t=>he.tertiary,contrastCurve:new ie(4.5,7,11,21)}),he.tertiaryContainer=ne.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(ce(t))return t.isDark?60:49;if(!se(t))return t.isDark?30:90;const e=le(t.tertiaryPalette.getHct(t.sourceColorHct.tone),t),r=t.tertiaryPalette.getHct(e);return re.fixIfDisliked(r).tone},isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.tertiaryContainer,he.tertiary,15,"nearer",!1)}),he.onTertiaryContainer=ne.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?t.isDark?0:100:se(t)?ne.foregroundTone(he.tertiaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>he.tertiaryContainer,contrastCurve:new ie(4.5,7,11,21)}),he.error=ne.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(3,4.5,7,11),toneDeltaPair:t=>new ae(he.errorContainer,he.error,15,"nearer",!1)}),he.onError=ne.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>he.error,contrastCurve:new ie(4.5,7,11,21)}),he.errorContainer=ne.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.errorContainer,he.error,15,"nearer",!1)}),he.onErrorContainer=ne.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?90:10,background:t=>he.errorContainer,contrastCurve:new ie(4.5,7,11,21)}),he.primaryFixed=ne.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>ce(t)?40:90,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.primaryFixed,he.primaryFixedDim,10,"lighter",!0)}),he.primaryFixedDim=ne.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>ce(t)?30:80,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.primaryFixed,he.primaryFixedDim,10,"lighter",!0)}),he.onPrimaryFixed=ne.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>ce(t)?100:10,background:t=>he.primaryFixedDim,secondBackground:t=>he.primaryFixed,contrastCurve:new ie(4.5,7,11,21)}),he.onPrimaryFixedVariant=ne.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>ce(t)?90:30,background:t=>he.primaryFixedDim,secondBackground:t=>he.primaryFixed,contrastCurve:new ie(3,4.5,7,11)}),he.secondaryFixed=ne.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>ce(t)?80:90,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.secondaryFixed,he.secondaryFixedDim,10,"lighter",!0)}),he.secondaryFixedDim=ne.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>ce(t)?70:80,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.secondaryFixed,he.secondaryFixedDim,10,"lighter",!0)}),he.onSecondaryFixed=ne.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>he.secondaryFixedDim,secondBackground:t=>he.secondaryFixed,contrastCurve:new ie(4.5,7,11,21)}),he.onSecondaryFixedVariant=ne.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>ce(t)?25:30,background:t=>he.secondaryFixedDim,secondBackground:t=>he.secondaryFixed,contrastCurve:new ie(3,4.5,7,11)}),he.tertiaryFixed=ne.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?40:90,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.tertiaryFixed,he.tertiaryFixedDim,10,"lighter",!0)}),he.tertiaryFixedDim=ne.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?30:80,isBackground:!0,background:t=>he.highestSurface(t),contrastCurve:new ie(1,1,3,7),toneDeltaPair:t=>new ae(he.tertiaryFixed,he.tertiaryFixedDim,10,"lighter",!0)}),he.onTertiaryFixed=ne.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?100:10,background:t=>he.tertiaryFixedDim,secondBackground:t=>he.tertiaryFixed,contrastCurve:new ie(4.5,7,11,21)}),he.onTertiaryFixedVariant=ne.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>ce(t)?90:30,background:t=>he.tertiaryFixedDim,secondBackground:t=>he.tertiaryFixed,contrastCurve:new ie(3,4.5,7,11)});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{static fromInt(t){const e=Qt.fromInt(t);return ue.fromHct(e)}static fromHct(t){return new ue(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){return new ue(t,e,ue.createKeyColor(t,e))}constructor(t,e,r){this.hue=t,this.chroma=e,this.keyColor=r,this.cache=new Map}static createKeyColor(t,e){let r=Qt.from(t,e,50),n=Math.abs(r.chroma-e);for(let o=1;o<50;o+=1){if(Math.round(e)===Math.round(r.chroma))return r;const i=Qt.from(t,e,50+o),a=Math.abs(i.chroma-e);a<n&&(n=a,r=i);const s=Qt.from(t,e,50-o),c=Math.abs(s.chroma-e);c<n&&(n=c,r=s)}return r}tone(t){let e=this.cache.get(t);return void 0===e&&(e=Qt.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return Qt.fromInt(this.tone(t))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static of(t){return new de(t,!1)}static contentOf(t){return new de(t,!0)}static fromColors(t){return de.createPaletteFromColors(!1,t)}static contentFromColors(t){return de.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,e){const r=new de(e.primary,t);if(e.secondary){const n=new de(e.secondary,t);r.a2=n.a1}if(e.tertiary){const n=new de(e.tertiary,t);r.a3=n.a1}if(e.error){const n=new de(e.error,t);r.error=n.a1}if(e.neutral){const n=new de(e.neutral,t);r.n1=n.n1}if(e.neutralVariant){const n=new de(e.neutralVariant,t);r.n2=n.n2}return r}constructor(t,e){const r=Qt.fromInt(t),n=r.hue,o=r.chroma;e?(this.a1=ue.fromHueAndChroma(n,o),this.a2=ue.fromHueAndChroma(n,o/3),this.a3=ue.fromHueAndChroma(n+60,o/2),this.n1=ue.fromHueAndChroma(n,Math.min(o/12,4)),this.n2=ue.fromHueAndChroma(n,Math.min(o/6,8))):(this.a1=ue.fromHueAndChroma(n,Math.max(48,o)),this.a2=ue.fromHueAndChroma(n,16),this.a3=ue.fromHueAndChroma(n+60,24),this.n1=ue.fromHueAndChroma(n,4),this.n2=ue.fromHueAndChroma(n,8)),this.error=ue.fromHueAndChroma(25,84)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{fromInt(t){return function(t){const e=Gt(Lt(t)),r=Gt(Nt(t)),n=Gt(Ut(t)),o=Dt,i=o[0][0]*e+o[0][1]*r+o[0][2]*n,a=o[1][0]*e+o[1][1]*r+o[1][2]*n,s=o[2][0]*e+o[2][1]*r+o[2][2]*n,c=a/Ft[1],l=s/Ft[2],h=Yt(i/Ft[0]),u=Yt(c);return[116*u-16,500*(h-u),200*(u-Yt(l))]}(t)}toInt(t){return function(t,e,r){const n=Ft,o=(t+16)/116,i=o-r/200,a=Kt(e/500+o),s=Kt(o),c=Kt(i);return Vt(a*n[0],s*n[1],c*n[2])}(t[0],t[1],t[2])}distance(t,e){const r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.distance=-1,this.index=-1}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe="red",ge="green",ye="blue";class ve{constructor(t=[],e=[],r=[],n=[],o=[],i=[]){this.weights=t,this.momentsR=e,this.momentsG=r,this.momentsB=n,this.moments=o,this.cubes=i}quantize(t,e){this.constructHistogram(t),this.computeMoments();const r=this.createBoxes(e);return this.createResult(r.resultCount)}constructHistogram(t){this.weights=Array.from({length:35937}).fill(0),this.momentsR=Array.from({length:35937}).fill(0),this.momentsG=Array.from({length:35937}).fill(0),this.momentsB=Array.from({length:35937}).fill(0),this.moments=Array.from({length:35937}).fill(0);const e=class{static quantize(t){const e=new Map;for(let r=0;r<t.length;r++){const n=t[r];(n>>24&255)<255||e.set(n,(e.get(n)??0)+1)}return e}}.quantize(t);for(const[t,r]of e.entries()){const e=Lt(t),n=Nt(t),o=Ut(t),i=3,a=1+(e>>i),s=1+(n>>i),c=1+(o>>i),l=this.getIndex(a,s,c);this.weights[l]=(this.weights[l]??0)+r,this.momentsR[l]+=r*e,this.momentsG[l]+=r*n,this.momentsB[l]+=r*o,this.moments[l]+=r*(e*e+n*n+o*o)}}computeMoments(){for(let t=1;t<33;t++){const e=Array.from({length:33}).fill(0),r=Array.from({length:33}).fill(0),n=Array.from({length:33}).fill(0),o=Array.from({length:33}).fill(0),i=Array.from({length:33}).fill(0);for(let a=1;a<33;a++){let s=0,c=0,l=0,h=0,u=0;for(let d=1;d<33;d++){const m=this.getIndex(t,a,d);s+=this.weights[m],c+=this.momentsR[m],l+=this.momentsG[m],h+=this.momentsB[m],u+=this.moments[m],e[d]+=s,r[d]+=c,n[d]+=l,o[d]+=h,i[d]+=u;const f=this.getIndex(t-1,a,d);this.weights[m]=this.weights[f]+e[d],this.momentsR[m]=this.momentsR[f]+r[d],this.momentsG[m]=this.momentsG[f]+n[d],this.momentsB[m]=this.momentsB[f]+o[d],this.moments[m]=this.moments[f]+i[d]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map((()=>new be));const e=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=32,this.cubes[0].g1=32,this.cubes[0].b1=32;let r=t,n=0;for(let o=1;o<t;o++){this.cut(this.cubes[n],this.cubes[o])?(e[n]=this.cubes[n].vol>1?this.variance(this.cubes[n]):0,e[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0):(e[n]=0,o--),n=0;let t=e[0];for(let r=1;r<=o;r++)e[r]>t&&(t=e[r],n=r);if(t<=0){r=o+1;break}}return new _e(t,r)}createResult(t){const e=[];for(let r=0;r<t;++r){const t=this.cubes[r],n=this.volume(t,this.weights);if(n>0){const r=255<<24|(255&Math.round(this.volume(t,this.momentsR)/n))<<16|(255&Math.round(this.volume(t,this.momentsG)/n))<<8|255&Math.round(this.volume(t,this.momentsB)/n);e.push(r)}}return e}variance(t){const e=this.volume(t,this.momentsR),r=this.volume(t,this.momentsG),n=this.volume(t,this.momentsB);return this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)]-(e*e+r*r+n*n)/this.volume(t,this.weights)}cut(t,e){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),i=this.volume(t,this.weights),a=this.maximize(t,pe,t.r0+1,t.r1,r,n,o,i),s=this.maximize(t,ge,t.g0+1,t.g1,r,n,o,i),c=this.maximize(t,ye,t.b0+1,t.b1,r,n,o,i);let l;const h=a.maximum,u=s.maximum,d=c.maximum;if(h>=u&&h>=d){if(a.cutLocation<0)return!1;l=pe}else l=u>=h&&u>=d?ge:ye;switch(e.r1=t.r1,e.g1=t.g1,e.b1=t.b1,l){case pe:t.r1=a.cutLocation,e.r0=t.r1,e.g0=t.g0,e.b0=t.b0;break;case ge:t.g1=s.cutLocation,e.r0=t.r0,e.g0=t.g1,e.b0=t.b0;break;case ye:t.b1=c.cutLocation,e.r0=t.r0,e.g0=t.g0,e.b0=t.b1;break;default:throw new Error("unexpected direction "+l)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),e.vol=(e.r1-e.r0)*(e.g1-e.g0)*(e.b1-e.b0),!0}maximize(t,e,r,n,o,i,a,s){const c=this.bottom(t,e,this.momentsR),l=this.bottom(t,e,this.momentsG),h=this.bottom(t,e,this.momentsB),u=this.bottom(t,e,this.weights);let d=0,m=-1,f=0,p=0,g=0,y=0;for(let v=r;v<n;v++){if(f=c+this.top(t,e,v,this.momentsR),p=l+this.top(t,e,v,this.momentsG),g=h+this.top(t,e,v,this.momentsB),y=u+this.top(t,e,v,this.weights),0===y)continue;let r=1*(f*f+p*p+g*g),n=1*y,b=r/n;f=o-f,p=i-p,g=a-g,y=s-y,0!==y&&(r=1*(f*f+p*p+g*g),n=1*y,b+=r/n,b>d&&(d=b,m=v))}return new we(m,d)}volume(t,e){return e[this.getIndex(t.r1,t.g1,t.b1)]-e[this.getIndex(t.r1,t.g1,t.b0)]-e[this.getIndex(t.r1,t.g0,t.b1)]+e[this.getIndex(t.r1,t.g0,t.b0)]-e[this.getIndex(t.r0,t.g1,t.b1)]+e[this.getIndex(t.r0,t.g1,t.b0)]+e[this.getIndex(t.r0,t.g0,t.b1)]-e[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,e,r){switch(e){case pe:return-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)];case ge:return-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)];case ye:return-r[this.getIndex(t.r1,t.g1,t.b0)]+r[this.getIndex(t.r1,t.g0,t.b0)]+r[this.getIndex(t.r0,t.g1,t.b0)]-r[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,e,r,n){switch(e){case pe:return n[this.getIndex(r,t.g1,t.b1)]-n[this.getIndex(r,t.g1,t.b0)]-n[this.getIndex(r,t.g0,t.b1)]+n[this.getIndex(r,t.g0,t.b0)];case ge:return n[this.getIndex(t.r1,r,t.b1)]-n[this.getIndex(t.r1,r,t.b0)]-n[this.getIndex(t.r0,r,t.b1)]+n[this.getIndex(t.r0,r,t.b0)];case ye:return n[this.getIndex(t.r1,t.g1,r)]-n[this.getIndex(t.r1,t.g0,r)]-n[this.getIndex(t.r0,t.g1,r)]+n[this.getIndex(t.r0,t.g0,r)];default:throw new Error("unexpected direction $direction")}}getIndex(t,e,r){return(t<<10)+(t<<6)+t+(e<<5)+e+r}}class be{constructor(t=0,e=0,r=0,n=0,o=0,i=0,a=0){this.r0=t,this.r1=e,this.g0=r,this.g1=n,this.b0=o,this.b1=i,this.vol=a}}class _e{constructor(t,e){this.requestedCount=t,this.resultCount=e}}class we{constructor(t,e){this.cutLocation=t,this.maximum=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return Ce.lightFromCorePalette(de.of(t))}static dark(t){return Ce.darkFromCorePalette(de.of(t))}static lightContent(t){return Ce.lightFromCorePalette(de.contentOf(t))}static darkContent(t){return Ce.darkFromCorePalette(de.contentOf(t))}static lightFromCorePalette(t){return new Ce({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new Ce({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={desired:4,fallbackColorARGB:4282549748,filter:!0};function Pe(t,e){return t.score>e.score?-1:t.score<e.score?1:0}class Ae{constructor(){}static score(t,e){const{desired:r,fallbackColorARGB:n,filter:o}={...ke,...e},i=[],a=new Array(360).fill(0);let s=0;for(const[e,r]of t.entries()){const t=Qt.fromInt(e);i.push(t);a[Math.floor(t.hue)]+=r,s+=r}const c=new Array(360).fill(0);for(let t=0;t<360;t++){const e=a[t]/s;for(let r=t-14;r<t+16;r++){c[It(r)]+=e}}const l=new Array;for(const t of i){const e=c[It(Math.round(t.hue))];if(o&&(t.chroma<Ae.CUTOFF_CHROMA||e<=Ae.CUTOFF_EXCITED_PROPORTION))continue;const r=100*e*Ae.WEIGHT_PROPORTION,n=t.chroma<Ae.TARGET_CHROMA?Ae.WEIGHT_CHROMA_BELOW:Ae.WEIGHT_CHROMA_ABOVE,i=r+(t.chroma-Ae.TARGET_CHROMA)*n;l.push({hct:t,score:i})}l.sort(Pe);const h=[];for(let t=90;t>=15;t--){h.length=0;for(const{hct:e}of l){if(h.find((r=>Tt(e.hue,r.hue)<t))||h.push(e),h.length>=r)break}if(h.length>=r)break}const u=[];0===h.length&&u.push(n);for(const t of h)u.push(t.toInt());return u}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(t){const e=Lt(t),r=Nt(t),n=Ut(t),o=[e.toString(16),r.toString(16),n.toString(16)];for(const[t,e]of o.entries())1===e.length&&(o[t]="0"+e);return"#"+o.join("")}function $e(t){return parseInt(t,16)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t){const e=await new Promise(((e,r)=>{const n=document.createElement("canvas"),o=n.getContext("2d");if(!o)return void r(new Error("Could not get canvas context"));const i=()=>{n.width=t.width,n.height=t.height,o.drawImage(t,0,0);let r=[0,0,t.width,t.height];const i=t.dataset.area;i&&/^\d+(\s*,\s*\d+){3}$/.test(i)&&(r=i.split(/\s*,\s*/).map((t=>parseInt(t,10))));const[a,s,c,l]=r;e(o.getImageData(a,s,c,l).data)};t.complete?i():t.onload=i})),r=[];for(let t=0;t<e.length;t+=4){const n=e[t],o=e[t+1],i=e[t+2];if(e[t+3]<255)continue;const a=Bt(n,o,i);r.push(a)}const n=class{static quantize(t,e){const r=(new ve).quantize(t,e);return class{static quantize(t,e,r){const n=new Map,o=new Array,i=new Array,a=new me;let s=0;for(let e=0;e<t.length;e++){const r=t[e],c=n.get(r);void 0===c?(s++,o.push(a.fromInt(r)),i.push(r),n.set(r,1)):n.set(r,c+1)}const c=new Array;for(let t=0;t<s;t++){const e=i[t],r=n.get(e);void 0!==r&&(c[t]=r)}let l=Math.min(r,s);e.length>0&&(l=Math.min(l,e.length));const h=new Array;for(let t=0;t<e.length;t++)h.push(a.fromInt(e[t]));const u=l-h.length;if(0===e.length&&u>0)for(let t=0;t<u;t++){const t=100*Math.random(),e=201*Math.random()-100,r=201*Math.random()-100;h.push(new Array(t,e,r))}const d=new Array;for(let t=0;t<s;t++)d.push(Math.floor(Math.random()*l));const m=new Array;for(let t=0;t<l;t++){m.push(new Array);for(let e=0;e<l;e++)m[t].push(0)}const f=new Array;for(let t=0;t<l;t++){f.push(new Array);for(let e=0;e<l;e++)f[t].push(new fe)}const p=new Array;for(let t=0;t<l;t++)p.push(0);for(let t=0;t<10;t++){for(let t=0;t<l;t++){for(let e=t+1;e<l;e++){const r=a.distance(h[t],h[e]);f[e][t].distance=r,f[e][t].index=t,f[t][e].distance=r,f[t][e].index=e}f[t].sort();for(let e=0;e<l;e++)m[t][e]=f[t][e].index}let e=0;for(let t=0;t<s;t++){const r=o[t],n=d[t],i=h[n],s=a.distance(r,i);let c=s,u=-1;for(let t=0;t<l;t++){if(f[n][t].distance>=4*s)continue;const e=a.distance(r,h[t]);e<c&&(c=e,u=t)}-1!==u&&Math.abs(Math.sqrt(c)-Math.sqrt(s))>3&&(e++,d[t]=u)}if(0===e&&0!==t)break;const r=new Array(l).fill(0),n=new Array(l).fill(0),i=new Array(l).fill(0);for(let t=0;t<l;t++)p[t]=0;for(let t=0;t<s;t++){const e=d[t],a=o[t],s=c[t];p[e]+=s,r[e]+=a[0]*s,n[e]+=a[1]*s,i[e]+=a[2]*s}for(let t=0;t<l;t++){const e=p[t];if(0===e){h[t]=[0,0,0];continue}const o=r[t]/e,a=n[t]/e,s=i[t]/e;h[t]=[o,a,s]}}const g=new Map;for(let t=0;t<l;t++){const e=p[t];if(0===e)continue;const r=a.toInt(h[t]);g.has(r)||g.set(r,e)}return g}}.quantize(t,r,e)}}.quantize(r,128);return Ae.score(n)[0]}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,e=[]){const r=de.of(t);return{source:t,schemes:{light:Ce.light(t),dark:Ce.dark(t)},palettes:{primary:r.a1,secondary:r.a2,tertiary:r.a3,neutral:r.n1,neutralVariant:r.n2,error:r.error},customColors:e.map((e=>function(t,e){let r=e.value;const n=r,o=t;e.blend&&(r=te.harmonize(n,o));const i=de.of(r).a1;return{color:e,value:r,light:{color:i.tone(40),onColor:i.tone(100),colorContainer:i.tone(90),onColorContainer:i.tone(10)},dark:{color:i.tone(80),onColor:i.tone(20),colorContainer:i.tone(30),onColorContainer:i.tone(90)}}}(t,e)))}}function Ie(t,e,r=""){for(const[n,o]of Object.entries(e.toJSON())){const e=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=Me(o);t.style.setProperty(`--md-sys-color-${e}${r}`,i)}}Ae.TARGET_CHROMA=48,Ae.WEIGHT_PROPORTION=.7,Ae.WEIGHT_CHROMA_ABOVE=.3,Ae.WEIGHT_CHROMA_BELOW=.1,Ae.CUTOFF_CHROMA=5,Ae.CUTOFF_EXCITED_PROPORTION=.01;class Se extends ct{static properties={sourceImage:{type:String,reflect:!0},sourceHex:{type:String,reflect:!0},sourceRgb:{type:String,reflect:!0},dark:{type:Boolean,reflect:!0},light:{type:Boolean,reflect:!0},global:{type:Boolean,reflect:!0}};_checkColorScheme(){this.dark&&this.light?this.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches:this.light?this.darkMode=!1:this.dark?this.darkMode=!0:this.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches}_applyTheme(t){!function(t,e){const r=e?.target||document.body;if(Ie(r,e?.dark?t.schemes.dark:t.schemes.light),e?.brightnessSuffix&&(Ie(r,t.schemes.dark,"-dark"),Ie(r,t.schemes.light,"-light")),e?.paletteTones){const n=e?.paletteTones??[];for(const[e,o]of Object.entries(t.palettes)){const t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();for(const e of n){const n=`--md-ref-palette-${t}-${t}${e}`,i=Me(o.tone(e));r.style.setProperty(n,i)}}}}(t,{dark:this.darkMode,target:this.global?document.body:this})}async _setColorsFromImage(){let t=null;this.sourceImage?(t=document.createElement("img"),t.src=this.sourceImage):t=this.querySelector("img"),t.crossOrigin="Anonymous";const e=await async function(t,e=[]){return Ee(await xe(t),e)}(t);this._applyTheme(e)}async _setColorsFromHex(){const t=Ee(function(t){const e=3===(t=t.replace("#","")).length,r=6===t.length,n=8===t.length;if(!e&&!r&&!n)throw new Error("unexpected hex "+t);let o=0,i=0,a=0;return e?(o=$e(t.slice(0,1).repeat(2)),i=$e(t.slice(1,2).repeat(2)),a=$e(t.slice(2,3).repeat(2))):r?(o=$e(t.slice(0,2)),i=$e(t.slice(2,4)),a=$e(t.slice(4,6))):n&&(o=$e(t.slice(2,4)),i=$e(t.slice(4,6)),a=$e(t.slice(6,8))),(255<<24|(255&o)<<16|(255&i)<<8|255&a)>>>0}(this.sourceHex));this._applyTheme(t)}async _setColorsFromRgb(){const t=function(t){let e=["red","green","blue","alpha"],r=t.replace(/[^\d,]/g,"").split(","),n=new Object;return r.forEach(((t,r)=>{n[e[r]]=parseInt(t)})),n}(this.sourceRgb),e=Ee(Bt(t.red,t.green,t.blue));this._applyTheme(e)}_setColors(){this._checkColorScheme();try{this.sourceImage?this._setColorsFromImage():this.sourceHex?this._setColorsFromHex():this.sourceRgb?this._setColorsFromRgb():this._setColorsFromImage()}catch(t){console.error("Something went wrong generating your dynamic color scheme",t)}}updated(){this._setColors()}refresh(){this._setColors()}constructor(){super()}connectedCallback(){super.connectedCallback(),this._setColors()}render(){return V`
            <slot></slot>
        `}}customElements.define("dynamic-color",Se);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oe=t=>(...e)=>({_$litDirective$:t,values:e});class De{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Re="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Fe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Re?"100px":"50px",height:Re?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const r=t=>{let e,r;this.held=!1,t.touches?(e=t.touches[0].pageX,r=t.touches[0].pageY):(e=t.pageX,r=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,r),this.held=!0}),this.holdTime)},n=r=>{r.preventDefault(),["touchend","touchcancel"].includes(r.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?wt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===r.type&&r.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,wt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,wt(t,"action",{action:"double_tap"})):wt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",r,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",(t=>{13===t.keyCode&&n(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-hero-card",Fe);const Be=(t,e)=>{const r=(()=>{const t=document.body;if(t.querySelector("action-handler-hero-card"))return t.querySelector("action-handler-hero-card");const e=document.createElement("action-handler-hero-card");return t.appendChild(e),e})();r&&r.bind(t,e)},He=Oe(class extends De{update(t,[e]){return Be(t.element,e),z}render(t){}});var Le={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ne={common:Le},Ue={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ve={common:Ue};const ze={en:Object.freeze({__proto__:null,common:Le,default:Ne}),nb:Object.freeze({__proto__:null,common:Ue,default:Ve})};function je(t,e="",r=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce(((t,e)=>t[e]),ze[n])}catch(e){o=t.split(".").reduce(((t,e)=>t[e]),ze.en)}return void 0===o&&(o=t.split(".").reduce(((t,e)=>t[e]),ze.en)),""!==e&&""!==r&&(o=o.replace(e,r)),o}console.info(`%c  HERO-CARD \n%c  ${je("common.version")} 0.1.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"hero-card",name:"Hero Card",description:"A template custom card for you to create something awesome"}),function(t="ha-template"){customElements.get(t)||customElements.define(t,Mt)}(),void 0===customElements.get("dynamic-color")&&customElements.define("dynamic-color",Se);let qe=class extends ct{static async getConfigElement(){return await import("./editor-7f2918f1.js"),document.createElement("hero-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(je("common.invalid_configuration"));if(t.entity_image&&!t.entity)throw new Error(je("common.invalid_configuration"));if(!t.entity_image&&!t.image_url)throw new Error(je("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Hero Card"},t)}shouldUpdate(t){return!!this.config&&function(t,e,r){if(e.has("config")||r)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_getImageSource(){return this.config.entity_image?this.entity.attributes.entity_picture||"":this.config.image_url||""}get entity(){const t=this.config.entity||"";return this.hass.states[t]}firstUpdated(t){super.firstUpdated(t);const e=this.renderRoot.querySelector("dynamic-color"),r=this.renderRoot.querySelector("img");if(null===r||null===e)return;new MutationObserver((t=>{for(const r of t)"childList"===r.type||"attributes"===r.type&&"src"===r.attributeName&&(null==e||e.refresh())})).observe(r,{attributes:!0})}render(){return this.config.show_warning?this._showWarning(je("common.show_warning")):this.config.show_error?this._showError(je("common.show_error")):V`
      <dynamic-color>
        <div
          @action=${this._handleAction}
          .actionHandler=${He({hasHold:Pt(this.config.hold_action),hasDoubleClick:Pt(this.config.double_tap_action)})}
          tabindex="0"
          style='--bg-image: url("${this._getImageSource()}")'
        >
          <figure>
            <img class='background' src='${this._getImageSource()}' loading='lazy' />
            <picture>
              <img src='${this._getImageSource()}' loading='lazy' />
              <img src='${this._getImageSource()}' loading='lazy' />
              ${this.config.foreground_image?V`
                <img class='main' src='${this._getImageSource()}' loading='lazy' />
              `:null}
            </picture>
          </figure>
          ${this.config.heading?V`
            <h1>
              <ha-template
                hass=${this.hass}
                template=${this.config.heading}
                value=${""}
              ></ha-template>  
            </h1>
          `:""}
          ${this.config.subheading?V`
            <p>
              <ha-template
                hass=${this.hass}
                template=${this.config.subheading}
                value=${""}
              ></ha-template>  
            </p>
          `:""}
        </div>
      </dynamic-color>
    `}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,r,n){var o;"double_tap"===n&&r.double_tap_action?o=r.double_tap_action:"hold"===n&&r.hold_action?o=r.hold_action:"tap"===n&&r.tap_action&&(o=r.tap_action),kt(t,e,r,o)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return V` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),V` ${e} `}static get styles(){return h`
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
        display: flex;
        margin: 0;
      }
      picture {
        position:relative;
        display: block;
        padding: var(--column-gap);
      }
      img,svg {
        height: 100%;
        width: auto;
        position:relative;
        transition:  1.5s ease-in-out;
        transition-property: transform,opacity;
      }
      img.background {
        width: 100%;
        object-fit:cover;
        filter: blur(30px);
        transform: rotateY(180deg);
        animation: 7s ease-in-out infinite alternate-reverse backgroundFade;
      }
      picture img:not(.main) {
        position: absolute;
        inset: 0;
        filter: blur(10px);
      }
      picture img:first-child {
        transform: scale(1.24);
        filter: blur(10px) opacity(0.7);
      }
      img.main {
        border-radius: calc(1 * var(--column-gap));
        mask-image: radial-gradient(50% 171% at 19% 50%, #000000FF 0%, #00FFFF00 35%),radial-gradient(50% 121% at 35% 50%, #000000FF 18%, #00FFFF00 35%),radial-gradient(50% 141% at 49% 50%, #000000FF 18%, #00FFFF00 35%),radial-gradient(50% 141% at 69% 50%, #000000FF 18%, #00FFFF00 35%),radial-gradient(50% 141% at 79% 50%, #000000FF 18%, #00FFFF00 35%);

      }
      h1,p {
        position:relative;
        margin: 0;
        mix-blend-mode: color-dodge;
      }
      h1 {
        margin-block: 1rem;
      }
      @keyframes backgroundFade {
        from {
          filter: blur(30px) saturate(1.2);
          transform: scale(1) rotate(0deg) skew(3deg);
        }
        to {
          filter: blur(50px) saturate(0.5);
          transform: scale(1.3) rotate(3deg);
        }
      }
      @media (hover: hover) {
        div:hover picture img {
          transform: scale(1.2);
        }
        div:hover img:not(.main) {
          opacity: 0.1;
        }
        div:hover picture img:not(.main) {
          opacity: 0.35;
        }
      }
    `}};n([dt({attribute:!1})],qe.prototype,"hass",void 0),n([mt()],qe.prototype,"config",void 0),qe=n([ht("hero-card")],qe);export{j as A,qe as H,u as S,z as T,e as _,r as a,n as b,h as c,mt as d,Oe as e,o as f,wt as g,ht as h,De as i,yt as l,dt as n,ft as o,ct as s,Te as t,V as x};
