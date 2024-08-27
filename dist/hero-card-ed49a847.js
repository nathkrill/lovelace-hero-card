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
var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};function o(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],o=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=window,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class c{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}const h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new c(i,t,a)},d=(t,e)=>{r?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=s.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))},u=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var p;const m=window,v=m.trustedTypes,f=v?v.emptyScript:"",g=m.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},b="finalized";class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;A[b]=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:A}),(null!==(p=m.reactiveElementVersions)&&void 0!==p?p:m.reactiveElementVersions=[]).push("1.6.3");const E=window,S=E.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,x="?"+k,P=`<${x}>`,T=document,O=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,F=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,z=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,W=T.createTreeWalker(T,129,null,!1);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===N?"!--"===l[1]?r=j:void 0!==l[1]?r=M:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=null!=n?n:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?F:'"'===l[3]?I:L):r===I||r===L?r=F:r===j||r===M?r=N:(r=F,n=void 0);const d=r===F&&t[e+1].startsWith("/>")?" ":"";s+=r===N?i+P:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+k+d):i+k+(-2===c?(o.push(void 0),e):d)}return[K(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=J.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=W.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?it:"@"===e[1]?ot:Q})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(z.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),W.nextNode(),a.push({type:2,index:++n});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){var n,s,r,a;if(e===B)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=X(t,l._$AS(t,e.values),l,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);W.currentNode=n;let s=W.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new G(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new nt(s,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=W.nextNode(),r++)}return W.currentNode=T,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var n;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),H(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=J.createElement(K(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Z(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new G(this.k(O()),this.k(O()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Q{constructor(t,e,i,o,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=X(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=X(this,o[i+r],e,r),a===B&&(a=this._$AH[r]),s||(s=!H(a)||a!==this._$AH[r]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const et=S?S.emptyScript:"";class it extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class ot extends Q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=X(this,t,e,0))&&void 0!==i?i:V)===B)return;const o=this._$AH,n=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==V&&(o===V||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const st=E.litHtmlPolyfillSupport;null==st||st(J,G),(null!==(w=E.litHtmlVersions)&&void 0!==w?w:E.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var rt,at;class lt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new G(e.insertBefore(O(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}lt.finalized=!0,lt._$litElement$=!0,null===(rt=globalThis.litElementHydrateSupport)||void 0===rt||rt.call(globalThis,{LitElement:lt});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:lt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ut(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):dt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return ut({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var vt;const ft=null!=(null===(vt=window.HTMLSlotElement)||void 0===vt?void 0:vt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function gt(t){const{slot:e,selector:i}=null!=t?t:{};return mt({descriptor:o=>({get(){var o;const n="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(n),r=null!=s?ft(s,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}var _t,yt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(yt||(yt={}));var $t=["closed","locked","off"],bt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},At=function(t){bt(window,"haptic",t)},wt=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(At("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&bt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),bt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,$t.includes(t.states[e].state))}(e,i.entity),At("success"));break;case"call-service":if(!o.service)return void At("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data,o.target),At("success");break;case"fire-dom-event":bt(t,"ll-custom",o)}};function Et(t){return void 0!==t&&"none"!==t.action}function St(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}class Ct extends lt{constructor(){super(...arguments),this.template="",this.variables={},this.value=null,this.unsubscribePromise=null}connectedCallback(){super.connectedCallback(),this.hass?this.unsubscribePromise||this.template&&(this.unsubscribePromise=this.hass.connection.subscribeMessage((t=>{this.value=t.result}),{type:"render_template",template:this.template,variables:this.variables})):console.warn("hass object is not provided")}async disconnectedCallback(){if(super.disconnectedCallback(),this.unsubscribePromise)try{const t=await this.unsubscribePromise;return this.unsubscribePromise=null,t()}catch(t){if("not_found"!==t.code)throw t}}render(){var t;return null!==(t=this.value)&&void 0!==t?t:V}}St([ut()],Ct.prototype,"hass",void 0),St([ut()],Ct.prototype,"template",void 0),St([ut()],Ct.prototype,"variables",void 0),St([ut()],Ct.prototype,"value",void 0),St([pt()],Ct.prototype,"unsubscribePromise",void 0);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xt=t=>(...e)=>({_$litDirective$:t,values:e});class Pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Tt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Ot extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Tt?"100px":"50px",height:Tt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?bt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,bt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,bt(t,"action",{action:"double_tap"})):bt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-hero-card",Ot);const Ht=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-hero-card"))return t.querySelector("action-handler-hero-card");const e=document.createElement("action-handler-hero-card");return t.appendChild(e),e})();i&&i.bind(t,e)},Ut=xt(class extends Pt{update(t,[e]){return Ht(t.element,e),B}render(t){}});var Rt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Nt={common:Rt},jt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Mt={common:jt};const Ft={en:Object.freeze({__proto__:null,common:Rt,default:Nt}),nb:Object.freeze({__proto__:null,common:jt,default:Mt})};function Lt(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Ft[o])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Ft.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Ft.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}console.info(`%c  HERO-CARD \n%c  ${Lt("common.version")} 0.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"hero-card",name:"Hero Card",description:"A template custom card for you to create something awesome"}),function(t="ha-template"){customElements.get(t)||customElements.define(t,Ct)}(),console.log(customElements.get("dynamic-color")),customElements.get("dynamic-color");let It=class extends lt{static async getConfigElement(){return await import("./editor-bf0d43bb.js"),document.createElement("hero-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Lt("common.invalid_configuration"));if(t.entity_image&&!t.entity)throw new Error(Lt("common.invalid_configuration"));if(!t.entity_image&&!t.image_url)throw new Error(Lt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Hero Card"},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_getImageSource(){return this.config.entity_image?this.entity.attributes.entity_picture||"":this.config.image_url||""}get entity(){const t=this.config.entity||"";return this.hass.states[t]}render(){return this.config.show_warning?this._showWarning(Lt("common.show_warning")):this.config.show_error?this._showError(Lt("common.show_error")):D`
      <dynamic-color>
        <div
          @action=${this._handleAction}
          .actionHandler=${Ut({hasHold:Et(this.config.hold_action),hasDoubleClick:Et(this.config.double_tap_action)})}
          tabindex="0"
          style='--bg-image: url("${this._getImageSource()}")'
        >
          <figure>
            <img class='background' src='${this._getImageSource()}' loading='lazy' />
            <picture>
              <img src='${this._getImageSource()}' loading='lazy' />
              <img src='${this._getImageSource()}' loading='lazy' />
              ${this.config.foreground_image?D`
                <img class='main' src='${this._getImageSource()}' loading='lazy' />
              `:null}
            </picture>
          </figure>
          ${this.config.heading?D`
            <h1>
              <ha-template
                hass=${this.hass}
                template=${this.config.heading}
                value=${""}
              ></ha-template>  
            </h1>
          `:""}
          ${this.config.subheading?D`
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
    `}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),wt(t,e,i,n)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return D` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),D` ${e} `}static get styles(){return h`
      :host,* {
        box-sizing: border-box;
        cursor: pointer;
      }
      :host {
      }
      div {
        background-color: var(--md-sys-color-on-surface-variant);
        position:relative;
        padding: calc(2 * var(--column-gap)) calc(2.5 * var(--column-gap));
        border-radius: calc(2 * var(--column-gap));
        overflow: clip;
        min-height: 12em;
        display: flex;
        flex-flow: column;
        justify-content:flex-end;
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
        mix-blend-mode: exclusion;
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
    `}};o([ut({attribute:!1})],It.prototype,"hass",void 0),o([pt()],It.prototype,"config",void 0),It=o([ht("hero-card")],It);export{V as A,It as H,d as S,B as T,e as _,i as a,o as b,h as c,pt as d,xt as e,n as f,bt as g,ht as h,Pt as i,gt as l,ut as n,mt as o,lt as s,kt as t,D as x};
