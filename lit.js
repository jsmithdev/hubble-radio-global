function t(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}function e(t,e,i,o){return new(i||(i=Promise))((function(r,s){function n(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,a)}c((o=o.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,r)},c=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,m=globalThis,f=m.trustedTypes,w=f?f.emptyScript:"",b=m.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);r.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??x)(this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,A=k.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,z="?"+C,M=`<${z}>`,H=document,P=()=>H.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,D="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,O=/>/g,R=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,j=/"/g,N=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,G=H.createTreeWalker(H,129);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===I?"!--"===c[1]?n=B:void 0!==c[1]?n=O:void 0!==c[2]?(N.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=R):void 0!==c[3]&&(n=R):n===R?">"===c[0]?(n=r??I,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?R:'"'===c[3]?j:T):n===j||n===T?n=R:n===B||n===O?n=I:(n=R,r=void 0);const h=n===R&&t[e+1].startsWith("/>")?" ":"";s+=n===I?i+M:l>=0?(o.push(a),i.slice(0,l)+E+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[Y(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=Z.createElement(c,i),G.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=G.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=l[s++],i=o.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(N.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),G.nextNode(),a.push({type:2,index:++r});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===z)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){if(e===F)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const s=L(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,o)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??H).importNode(e,!0);G.currentNode=o;let r=G.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(r=G.nextNode(),s++)}return G.currentNode=H,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),L(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new J(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new Q(this.k(P()),this.k(P()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=X(this,t,e,0),s=!L(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const o=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,o[i+n],e,n),a===F&&(a=this._$AH[n]),s||=!L(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!o&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class ot extends tt{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===F)return;const i=this._$AH,o=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const st=k.litHtmlPolyfillSupport;st?.(Z,Q),(k.litHtmlVersions??=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},dt=(t=lt,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return ht({...t,state:!0,attribute:!1})}const ut=a` /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.inset-0 {
  inset: 0px;
}

.mb-auto {
  margin-bottom: auto;
}

.mt-2 {
  margin-top: 0.5rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-14 {
  height: 3.5rem;
}

.h-4 {
  height: 1rem;
}

.h-screen {
  height: 100vh;
}

.w-4 {
  width: 1rem;
}

.w-full {
  width: 100%;
}

.flex-1 {
  flex: 1 1 0%;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-default {
  cursor: default;
}

.columns-3 {
  -moz-columns: 3;
       columns: 3;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-y-8 {
  row-gap: 2rem;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.overflow-hidden {
  overflow: hidden;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-gray-700 {
  --tw-gradient-from: #374151 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-green-200 {
  --tw-gradient-from: #bbf7d0 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(187 247 208 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-green-300 {
  --tw-gradient-from: #86efac var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(134 239 172 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-pink-300 {
  --tw-gradient-from: #f9a8d4 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(249 168 212 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-blue-500 {
  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.via-gray-900 {
  --tw-gradient-to: rgb(17 24 39 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #111827 var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.via-green-400 {
  --tw-gradient-to: rgb(74 222 128 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #4ade80 var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.via-purple-300 {
  --tw-gradient-to: rgb(216 180 254 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #d8b4fe var(--tw-gradient-via-position), var(--tw-gradient-to);
}

.to-black {
  --tw-gradient-to: #000 var(--tw-gradient-to-position);
}

.to-indigo-400 {
  --tw-gradient-to: #818cf8 var(--tw-gradient-to-position);
}

.to-purple-400 {
  --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
}

.to-purple-600 {
  --tw-gradient-to: #9333ea var(--tw-gradient-to-position);
}

.to-purple-700 {
  --tw-gradient-to: #7e22ce var(--tw-gradient-to-position);
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.p-3 {
  padding: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-medium {
  font-weight: 500;
}

.uppercase {
  text-transform: uppercase;
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.outline {
  outline-style: solid;
}

.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.aspect-h-7 {
  --tw-aspect-h: 7;
}

.aspect-w-10 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 10;
}

.aspect-w-10 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

:root {
  --color-primary: #0288d1;
  --color-secondary: #f608f0;
  --color-accent: #05fad0;
  --color-dark: #170232;
  --color-light: #eeeeee;
  --color-fourth: #F54D00;
  --color-fifth: #21004A;
  --color-pink: rgb(254, 82, 140);
  --color-pinker: rgb(246, 8, 240);
  --color-green: rgb(132, 250, 176);
  --color-teal: rgb(5, 250, 208);
  -webkit-tap-highlight-color: #f608f000;
}

.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-within\\:ring-indigo-500:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}

.focus-within\\:ring-offset-2:focus-within {
  --tw-ring-offset-width: 2px;
}

.focus-within\\:ring-offset-gray-100:focus-within {
  --tw-ring-offset-color: #f3f4f6;
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-green-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.group:hover .group-hover\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.group:hover .group-hover\\:opacity-75 {
  opacity: 0.75;
}

@media (min-width: 640px) {
  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:gap-x-6 {
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
  }

  .sm\\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .xl\\:gap-x-8 {
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }
} `,gt=[{name:"Ibiza Global Radio",url:"https://control.streaming-pro.com:8000/AutoDj.mp3",homepage:"https://www.ibizaglobalradio.com/",favicon:"",tags:"dance,trance",countrycode:"ES",country:"Spain",countrysubdivisioncode:"",countrysubdivision:"Ibiza",colors:"",image:"https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",languages:"spanish",geoinfo:"/"},{name:"Sunshine Live",url:"https://stream.sunshine-live.de/live/mp3-192/stream.sunshine-live.de/",homepage:"https://www.sunshine-live.de/",favicon:"",tags:"dance,trance",countrycode:"DE",country:"Germany",countrysubdivisioncode:"",countrysubdivision:"Baden-Württemberg",colors:"",image:"https://images.unsplash.com/photo-1523354177913-be035fcee55e?q=80&w=1974&auto=format&fit=crop",languages:"german",geoinfo:"/"},{name:"Groove Salad",url:"https://ice4.somafm.com/groovesalad-256-mp3",homepage:"https://somafm.com/groovesalad/",favicon:"https://somafm.com/favicon.ico",tags:"",countrycode:"US",country:"USA",countrysubdivisioncode:"",countrysubdivision:"California - San Francisco",colors:"",image:"https://images.unsplash.com/photo-1523354177913-be035fcee55e?q=80&w=1974&auto=format&fit=crop",languages:"",geoinfo:"33.738958242514 / -117.75586098432542"},{name:"Classic Hits Radio",url:"https://radiopanther.radiolebowski.com/play",homepage:"https://classichits.radio/",favicon:"https://classichits.radio/wp-content/webpc-passthru.php?src=https://classichits.radio/wp-content/uploads/2022/10/classichitsit-100x100.png&amp;nocache=1",tags:"1970s,1980s,70's,70s,70s disco,80,80's,80s,classic hits",countrycode:"US",country:"USA",countrysubdivisioncode:"",countrysubdivision:"",colors:"",image:"https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop",languages:"english",geoinfo:"/"},{name:"Club Dance Online",url:"https://stream.clubdance.online:8002/live.mp3",homepage:"https://clubdance.online/",favicon:"https://clubdance.online/ss_logo.png",tags:"club house trance dance",countrycode:"HU",country:"Hungary",countrysubdivisioncode:"",countrysubdivision:"",colors:"",image:"https://images.unsplash.com/photo-1523354177913-be035fcee55e?q=80&w=1974&auto=format&fit=crop",languages:"english uk,hungarian",geoinfo:"46.544694144765536 / 18.588867187500004"},{name:"FUNKY RADIO - Only Funk Music (60's 70's)",url:"https://funkyradio.streamingmedia.it/play.mp3",homepage:"https://funky.radio/",favicon:"",tags:"60s,70s,70s disco,80s,black,black music,disco,funk,funky,motown,music,oldies,p-funk,r&b,r'n'b,rare groove,rnb,soul,usa",countrycode:"US",country:"USA",countrysubdivisioncode:"",countrysubdivision:"New York NY",colors:"",image:"https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop",languages:"english,italian",geoinfo:"/"},{name:"BBC World Service",url:"https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",homepage:"https://www.bbc.co.uk/programmes/w172xzjgf6lxp7y",favicon:"https://cdn-profiles.tunein.com/s24948/images/logoq.jpg?t=1",tags:"news,talk",countrycode:"GB",country:"Britain And Ireland",countrysubdivisioncode:"",countrysubdivision:"",colors:"",image:"https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1738&auto=format&fit=crop",languages:"english",geoinfo:"/"}].map((t=>(t.colors=function(){const t=["bg-gradient-to-r from-green-300 via-blue-500 to-purple-600","bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400","bg-gradient-to-r from-gray-700 via-gray-900 to-black","bg-gradient-to-r from-green-200 via-green-400 to-purple-700","bg-gradient-to-r from-green-300 to-purple-400"];return t[Math.floor(Math.random()*t.length)]}(),t)));let mt=class extends nt{constructor(){super(),this.casts=[{name:""}],this._init=!1}connectedCallback(){super.connectedCallback()}render(){return this.getHtml()}_select(t){console.log(t)}getHtml(){return V`
		<ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

		${this.casts.map((t=>V`
			<li 
			@click=${()=>this._select(t.name)}
			class="relative">

				<div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
				<img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none object-cover group-hover:opacity-75">
				<button type="button" class="absolute inset-0 focus:outline-none">
					<span class="sr-only">View details for IMG_4985.HEIC</span>
				</button>
				</div>
				<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">IMG_4985.HEIC</p>
				<p class="pointer-events-none block text-sm font-medium text-gray-500">3.9 MB</p>
			</li>
		`))}
		</ul>
		`}};mt.styles=[ut],t([ht({type:Array})],mt.prototype,"casts",void 0),mt=t([ct("ourss-casts")],mt);let ft=class extends nt{constructor(){super(),this._init=!1,this.expanded=!1,this.paused=!0}render(){return this.getHtml()}_select(t){console.log(t)}expand(){this.expanded=!this.expanded,console.log("expanded: ",this.expanded)}back(){console.log("back")}forward(){console.log("forward")}togglePlay(){console.log("togglePlay")}getHtml(){return V`
		<section id="section" class="bg-primary section ${this.expanded?"expand":""}">
        <div class="columns-3">

            <div class="">
                <span class="volume">
                </span>
            </div>

            <div class="center">
                <div class="inline-player">

                    <div class="">
                        <svg 
							@click=${()=>this.back()}
							class="medium-icon max4 back" data-name="Layer 1" viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle class="cls-1" cx="60" cy="60" r="56.64" />
                            <path class="cls-2" d="M60,27.32A32.68,32.68,0,1,1,27.32,60"></path>
                            <polyline class="cls-2" points="65.19 33.69 58.74 27.24 65.03 20.95"></polyline>
                            <polyline class="cls-2" points="54.63 68.85 54.63 51.15 50.56 53.46"></polyline>
                            <path class="cls-2"
                                d="M60.84,67.28a4.92,4.92,0,0,0,3.62,1.57,5,5,0,1,0,0-10,4.92,4.92,0,0,0-3.63,1.59V51.15H68">
                            </path>
                        </svg>
						
                        <div id="playdiv" class="circle playdiv image" @click=${t=>this.togglePlay()}>

							${this.paused?V`
                                <svg id="play" class="max4 play" viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet">
                                    <path class="path play" fill-opacity="0.5" stroke="black" stroke-opacity="0.5"
                                        d="M8 5v14l11-7z"></path>
                                </svg>
							`:V`
                                <svg id="pause" class="max4 pause" viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet">
                                    <path class="path pause" fill-opacity="0.5" stroke="black" stroke-opacity="0.5"
                                        d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
                                </svg>
							`}

                        </div>

                        <svg 
							@click=${()=>this.forward()}
							class="medium-icon max4 back" data-name="Layer 1" viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle class="cls-1" cx="60" cy="60" r="56.64" />
                            <path class="cls-2" d="M60,27.32A32.68,32.68,0,1,0,92.68,60"></path>
                            <polyline class="cls-2" points="54.8 33.69 61.26 27.24 54.97 20.95"></polyline>
                            <path class="cls-2" d="M49.35,55.58A4.43,4.43,0,1,1,53.78,60"></path>
                            <path class="cls-2" d="M53.78,60a4.43,4.43,0,1,1-4.43,4.42"></path>
                            <rect class="cls-2" height="17.7" rx="4.42" width="8.85" x="61.8" y="51.15" />
                        </svg>

                    </div>

                </div>
            </div>

            <div class="">
                <div class="expand-container">
                    <svg 
					@click=${()=>this.expand()}
					id="expand" class="expandid ${this.expanded?"expand":""}" viewBox="0 0 24 24">
                        <path class="path" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div id="drawer" class="drawer">

            <!-- <div id="buffered" class="accent-color buffered">
                <span id="bufferedAmount" class="bufferedAmount"></span>
            </div> -->
            <div onclick={progress} id="progress" style="width: 100%" class="progress">
                <span class="progressAmount">
                    <span class="currentTime">{currentTime}</span>
                </span>
                <span class="duration">{duration}</span>
            </div>

            <div class="title">{title}</div>

            <div class="grid center">

                <div 
                    class="bottom-icon"
                    onclick={navigate}
                >
                    <svg 
                    data-view="casts"
                    class="large-icon"  
                    viewBox="0 0 24 24">

                        <path class="path" 
                            d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z">
                        </path>
                    </svg>
                </div>

                <div 
                    class="bottom-icon"
                    onclick={navigate}
                >
                    <svg  
                        data-view="playlist"
                        class="large-icon list" 
                        viewBox="0 0 24 24">

                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <rect fill="rgb(5, 250, 208)" height="2" width="11" x="3" y="10" />
                                <rect fill="rgb(5, 250, 208)" height="2" width="11" x="3" y="6" />
                                <rect fill="rgb(5, 250, 208)" height="2" width="7" x="3" y="14" />
                                <polygon fill="rgb(5, 250, 208)" points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34"></polygon>
                            </g>
                        </g>
                    </svg>
                </div>

                <div 
                    class="bottom-icon"
                    onclick={navigate}
                >
                    <svg 
                    class="large-icon" 
                    data-view="settings"
                    viewBox="0 0 24 24">
                        <path class="path"
                            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                        </path>
                    </svg>
                </div>
            </div>


        </div>

    </section>
		`}};ft.styles=[ut,a`

template {
    user-select: none;
}

path {
    fill : var(--color-accent);
}

.filtered {
    filter: drop-shadow(rgb(238 238 238) 0px 0px 1px);
}

section {
    z-index: 100;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 6.3rem;
}
@media (hover: none) and (pointer: coarse) {
    section {
        box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.2), 0px -4px 10px 0px rgba(0, 0, 0, 0.2);
    }
}

section.expand {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 14rem;
}

section.expand-full {
    height: 15rem;
}

.title {
    text-align: center;
    margin-top: 1rem;
    color: var(--color-light);
}

.titlePlaying {
    margin-top: 1rem;
    vertical-align: middle;
    cursor: default;
    overflow: hidden;
}

.expandid {
    transition: all .3s ease-out;
    user-select: none;
    margin-right: 0rem;
    max-width: 3.5rem;
}

.expandid.expand {
    -o-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
}

.expand-container {
    padding-top: .5rem;
    text-align: right;
    padding-right: 2rem;
}

.inline-player {
    width: 100%;
    margin: auto;
    text-align: center;
    padding: .4rem 0 .4rem 0;
}

.playcont {
    margin: auto;


    /* border: 1pt solid var(--color-accent);
    appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    z-index: 1;
    outline: none;
    flex: 1 1 auto;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;*/
    /* background-size: 200%; 
    box-shadow: rgb(238, 238, 238) 0px 0px 20px;
    background-position: right center; */
}

.playdiv {

    width: 4rem;
    height: 4rem;
    background-size: 4rem;
    background-repeat: no-repeat;
    white-space: nowrap;
    display: inline-flex;
    cursor: pointer;
    position: relative;

    /* color: white; */
    /* border-radius: 50%; */
}
path.play, path.pause {
    fill: transparent;
    stroke: #05fad0;
    stroke-width: 0.5pt;
    stroke-opacity: 1;
}



.progress {
    margin-top: -20px;
    height: 20px;
    width: 100%;


    white-space: nowrap;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    border: 1pt solid var(--color-accent);
    appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    z-index: 1;
    outline: none;
    flex: 1 1 auto;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;
    background-size: 200%;
    box-shadow: rgb(238, 238, 238) 0px 0px 20px;
    color: white;
    background-image: linear-gradient(to right, rgb(132, 250, 176) 0%, var(--color-accent) 51%, rgb(246, 8, 240) 100%);
    background-position: right center;
}
.progressAmount {
    white-space: nowrap;
    display: block;
    height: 100%;
    width: 0px;
    line-height: 1.5rem;
    border-right: 2pt solid #FFF;
}
.currentTime {
    padding-left: .5rem;
}
.duration {
    right: 0px;
    position: fixed;
    line-height: 1.5rem;
    padding-right: .5rem;
}

.settings {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    user-select: none;
}

.settings.rotated {
    -webkit-transform: rotate(66deg);
    -moz-transform: rotate(66deg);
    -ms-transform: rotate(66deg);
    -o-transform: rotate(66deg);
    transform: rotate(66deg);
}

.small-icon {
    user-select: none;
    width: 20%;
    height: auto;
    max-height: 2.3rem;
}

.medium-icon {
    user-select: none;
    width: 25%;
    height: auto;
}

.large-icon {
    width: 90%;
    max-width: 4rem;
    height: auto;
    padding: .5rem 0 .5rem 0;
}

.large-icon.list {
    max-width: 5.5rem;
    margin-left: 1rem;
    padding: 0px;
}

.bottom-icon {
    text-align: center;
    align-items: center;
    width: 100%;
}


.center {
    text-align: center;
}

.hide {
    display: none;
}

.spacer {
    user-select: none;
}

.circle {
    border-radius: 50%;
}

.left {
    float: left;
}

.right {
    float: right;
}

.max4 {
    max-width: 4rem;
}


.volume {
    vertical-align: middle;
    padding-top: 7%;
    display: flex;
}

input[type=range] {
    -webkit-appearance: none;
    max-width: 75%;
    background: #0288d1;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: auto;
    cursor: pointer;
    background: #555;
    border-radius: 0px;
    border: 0px solid #010101;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px #b3e5fc, 0px 0px 0px #b3e5fc;
    border: 0px solid #b3e5fc;
    height: 2rem;
    width: 1rem;
    border-radius: 0px;
    background: #b3e5fc;
    cursor: pointer;
    -webkit-appearance: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #555;
}



svg {
    cursor: pointer;
}

.grid {
    display: flex;
    grid-auto-columns: 33.3%;
    flex-wrap: nowrap;
    align-items: center;
}
.grid:after {
    content: "";
    display: table;
    clear: both;
}


[class*='col-'] {
    float: left;
}

.col-1-4,
.col-2-4,
.col-3-4,
.col-4-4 {
    width: 25%;
}

.col-1-3 {
    width: 20%;
}

.col-2-3 {
    width: 60%;
}

.col-3-3 {
    width: 20%;
}

.dark-primary-color {
    background: #0288D1;
}

.default-primary-color {
    background: #03A9F4;
}

.light-primary-color {
    background: #B3E5FC;
}

.text-primary-color {
    color: #FFFFFF;
}

.accent-color {
    background: #FF4081;
}

.primary-text-color {
    color: #212121;
}

.secondary-text-color {
    color: #757575;
}

.divider-color {
    border-color: #BDBDBD;
}


:host input {
    border: 0;
    font-size: 2rem;
    line-height: 35px;
    width: 100%;
    height: 50%;
    text-align: center;
    padding: 10px;
    background: transparent;
    color: rgb(0, 0, 0);
}

:host input:focus {
    background: #eee;
    border: none;
}

:host .container {
    width: 100%;
    height: 100%;
    bottom: 0px;
    margin-bottom: 0px;
    /* position: absolute; */
    text-align: center;
}

/* back forward icons */
.cls-1,.cls-2{fill:none;stroke:var(--color-accent);stroke-width:2px;}.cls-1{stroke-miterlimit:10;}
.cls-2{stroke-linecap:round;stroke-linejoin:round;}

`],ft=t([ct("ourss-player")],ft);const wt=(t,e)=>e.some((e=>t instanceof e));let bt,vt;const yt=new WeakMap,xt=new WeakMap,_t=new WeakMap;let $t={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return yt.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Et(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function kt(t){$t=t($t)}function At(t){return(vt||(vt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Ct(this),e),Et(this.request)}:function(...e){return Et(t.apply(Ct(this),e))}}function St(t){return"function"==typeof t?At(t):(t instanceof IDBTransaction&&function(t){if(yt.has(t))return;const e=new Promise(((e,i)=>{const o=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),o()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));yt.set(t,e)}(t),wt(t,bt||(bt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,$t):t)}function Et(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const o=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Et(t.result)),o()},s=()=>{i(t.error),o()};t.addEventListener("success",r),t.addEventListener("error",s)}));return _t.set(e,t),e}(t);if(xt.has(t))return xt.get(t);const e=St(t);return e!==t&&(xt.set(t,e),_t.set(e,t)),e}const Ct=t=>_t.get(t);const zt=["get","getKey","getAll","getAllKeys","count"],Mt=["put","add","delete","clear"],Ht=new Map;function Pt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Ht.get(e))return Ht.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,r=Mt.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!r&&!zt.includes(i))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let n=s.store;return o&&(n=n.index(e.shift())),(await Promise.all([n[i](...e),r&&s.done]))[0]};return Ht.set(e,s),s}kt((t=>({...t,get:(e,i,o)=>Pt(e,i)||t.get(e,i,o),has:(e,i)=>!!Pt(e,i)||t.has(e,i)})));const Lt=["continue","continuePrimaryKey","advance"],Ut={},Dt=new WeakMap,It=new WeakMap,Bt={get(t,e){if(!Lt.includes(e))return t[e];let i=Ut[e];return i||(i=Ut[e]=function(...t){Dt.set(this,It.get(this)[e](...t))}),i}};async function*Ot(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;const i=new Proxy(e,Bt);for(It.set(i,e),_t.set(i,Ct(e));e;)yield i,e=await(Dt.get(i)||e.continue()),Dt.delete(i)}function Rt(t,e){return e===Symbol.asyncIterator&&wt(t,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===e&&wt(t,[IDBIndex,IDBObjectStore])}kt((t=>({...t,get:(e,i,o)=>Rt(e,i)?Ot:t.get(e,i,o),has:(e,i)=>Rt(e,i)||t.has(e,i)})));const Tt=function(t,e,{blocked:i,upgrade:o,blocking:r,terminated:s}={}){const n=indexedDB.open(t,e),a=Et(n);return o&&n.addEventListener("upgradeneeded",(t=>{o(Et(n.result),t.oldVersion,t.newVersion,Et(n.transaction),t)})),i&&n.addEventListener("blocked",(t=>i(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("ourss",2,{upgrade(t){t.objectStoreNames.contains("casts")||t.createObjectStore("casts",{keyPath:"id",autoIncrement:!1}),t.objectStoreNames.contains("audio")||t.createObjectStore("audio",{keyPath:"id",autoIncrement:!1}),t.objectStoreNames.contains("images")||t.createObjectStore("images",{keyPath:"id",autoIncrement:!1})}});let jt=class extends nt{constructor(){super(),this.time="00:00",this.duration="00:00",this.progress="0%",this.paused=!0,this.selected=gt[0],this.stations=gt,this._init=!1,this.worker=new Worker(new URL("/resources/workers.js",import.meta.url),{type:"module"}),this.worker.addEventListener("message",(t=>this.processed(t)))}connectedCallback(){super.connectedCallback(),this._initializeAudio()}processed(t){return e(this,void 0,void 0,(function*(){const{data:e,store:i,whoami:o,actionId:r}=t.data;if(console.log("PROCESSED by: ",o),console.log(t),"worker-parser"===o&&(i&&e&&async function(t,e){(await Tt).put(t,e)}("casts",e),e&&this.updateSortCast(e),r)){Queue.get(r)(e),Queue.delete(r)}}))}_initializeAudio(){this.Audio&&this.Audio.pause(),this.Audio=new Audio(this.selected.url),this.Audio.addEventListener("ended",(t=>this._replay())),this.Audio.addEventListener("timeupdate",(t=>this._updateTime(t))),this.Audio.addEventListener("loadedmetadata",(t=>{this.Audio.duration&&this.Audio.duration!==1/0&&(console.log(this.Audio.duration),this.duration=new Date(1e3*this.Audio.duration).toISOString().substring(11,19))}))}render(){return this.getHtml()}_play(){this.Audio.play(),this.paused=!1}_pause(t){this.Audio.pause(),this.paused=!0}_forward(t){this.Audio.currentTime=this.Audio.currentTime+30}_back(t){this.Audio.currentTime=this.Audio.currentTime-30}_updateTime(t){if(!this.Audio.currentTime)return;const e=new Date(1e3*this.Audio.currentTime).toISOString().substring(11,19);this.time!==e&&(this.time=e,this.Audio.duration&&(this.progress=this.Audio.currentTime/this.Audio.duration*100+"%"))}_selectSound(t){this.selected=gt.find((e=>e.name===t)),this._initializeAudio(),this._play()}_replay(){this._initializeAudio(),this._play()}getHtml(){return V`
	<div class="flex flex-col h-screen justify-between ${this.selected.colors}">
		<div class="mb-auto">
			<ourss-casts></ourss-casts>
		</div>
		<div class="h-14">
			<ourss-player></ourss-player>
		</div>
	</div>
		`}};jt.styles=[ut],t([pt()],jt.prototype,"time",void 0),t([pt()],jt.prototype,"duration",void 0),t([pt()],jt.prototype,"progress",void 0),t([pt()],jt.prototype,"paused",void 0),t([pt()],jt.prototype,"selected",void 0),jt=t([ct("ourss-app")],jt);
