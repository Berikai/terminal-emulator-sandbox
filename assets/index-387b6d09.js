const lt="modulepreload",ut=function(e){return"/"+e},ge={},_t=function(t,o,n){if(!o||o.length===0||typeof window>"u")return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(s=>{if(s=ut(s),s in ge)return;ge[s]=!0;const u=s.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(!!n)for(let h=r.length-1;h>=0;h--){const c=r[h];if(c.href===s&&(!u||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":lt,u||(_.as="script",_.crossOrigin=""),_.href=s,document.head.appendChild(_),u)return new Promise((h,c)=>{_.addEventListener("load",h),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s})};var N,m,Ue,D,xe,We,se,Be,F={},Fe=[],at=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ae=Array.isArray;function T(e,t){for(var o in t)e[o]=t[o];return e}function Re(e){var t=e.parentNode;t&&t.removeChild(e)}function Ne(e,t,o){var n,r,s,u={};for(s in t)s=="key"?n=t[s]:s=="ref"?r=t[s]:u[s]=t[s];if(arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)u[s]===void 0&&(u[s]=e.defaultProps[s]);return B(e,u,n,r,null)}function B(e,t,o,n,r){var s={type:e,props:t,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Ue,__i:-1,__u:0};return r==null&&m.vnode!=null&&m.vnode(s),s}function U(e){return e.children}function Y(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?L(e):null}function je(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return je(e)}}function re(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!X.__r++||xe!==m.debounceRendering)&&((xe=m.debounceRendering)||We)(X)}function X(){var e,t,o,n,r,s,u,l,a;for(D.sort(se);e=D.shift();)e.__d&&(t=D.length,n=void 0,s=(r=(o=e).__v).__e,l=[],a=[],(u=o.__P)&&((n=T({},r)).__v=r.__v+1,m.vnode&&m.vnode(n),de(u,n,r,o.__n,u.ownerSVGElement!==void 0,32&r.__u?[s]:null,l,s??L(r),!!(32&r.__u),a),n.__v=r.__v,n.__.__k[n.__i]=n,Ke(l,n,a),n.__e!=s&&je(n)),D.length>t&&D.sort(se));X.__r=0}function qe(e,t,o,n,r,s,u,l,a,_,h){var c,p,d,y,$,x=n&&n.__k||Fe,w=t.length;for(o.__d=a,dt(o,t,x),a=o.__d,c=0;c<w;c++)(d=o.__k[c])!=null&&typeof d!="boolean"&&typeof d!="function"&&(p=d.__i===-1?F:x[d.__i]||F,d.__i=c,de(e,d,p,r,s,u,l,a,_,h),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&fe(p.ref,null,d),h.push(d.ref,d.__c||y,d)),$==null&&y!=null&&($=y),65536&d.__u||p.__k===d.__k?(y||p.__e!=a||(a=L(p)),a=ze(d,a,e)):typeof d.type=="function"&&d.__d!==void 0?a=d.__d:y&&(a=y.nextSibling),d.__d=void 0,d.__u&=-196609);o.__d=a,o.__e=$}function dt(e,t,o){var n,r,s,u,l,a=t.length,_=o.length,h=_,c=0;for(e.__k=[],n=0;n<a;n++)u=n+c,(r=e.__k[n]=(r=t[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?B(null,r,null,null,null):ae(r)?B(U,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?B(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,l=ft(r,o,u,h),r.__i=l,s=null,l!==-1&&(h--,(s=o[l])&&(s.__u|=131072)),s==null||s.__v===null?(l==-1&&c--,typeof r.type!="function"&&(r.__u|=65536)):l!==u&&(l===u+1?c++:l>u?h>a-u?c+=l-u:c--:l<u?l==u-1&&(c=l-u):c=0,l!==n+c&&(r.__u|=65536))):(s=o[u])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=L(s)),ie(s,s,!1),o[u]=null,h--);if(h)for(n=0;n<_;n++)(s=o[n])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=L(s)),ie(s,s))}function ze(e,t,o){var n,r;if(typeof e.type=="function"){for(n=e.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=e,t=ze(n[r],t,o));return t}e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ft(e,t,o,n){var r=e.key,s=e.type,u=o-1,l=o+1,a=t[o];if(a===null||a&&r==a.key&&s===a.type&&!(131072&a.__u))return o;if(n>(a!=null&&!(131072&a.__u)?1:0))for(;u>=0||l<t.length;){if(u>=0){if((a=t[u])&&!(131072&a.__u)&&r==a.key&&s===a.type)return u;u--}if(l<t.length){if((a=t[l])&&!(131072&a.__u)&&r==a.key&&s===a.type)return l;l++}}return-1}function be(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||at.test(t)?o:o+"px"}function K(e,t,o,n,r){var s;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)o&&t in o||be(e.style,t,"");if(o)for(t in o)n&&o[t]===n[t]||be(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=o,o?n?o.u=n.u:(o.u=Date.now(),e.addEventListener(t,s?Ce:ke,s)):e.removeEventListener(t,s?Ce:ke,s);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,o))}}function ke(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(m.event?m.event(e):e)}}function Ce(e){if(this.l)return this.l[e.type+!0](m.event?m.event(e):e)}function de(e,t,o,n,r,s,u,l,a,_){var h,c,p,d,y,$,x,w,b,E,j,W,ve,q,te,S=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(a=!!(32&o.__u),s=[l=t.__e=o.__e]),(h=m.__b)&&h(t);e:if(typeof S=="function")try{if(w=t.props,b=(h=S.contextType)&&n[h.__c],E=h?b?b.props.value:h.__:n,o.__c?x=(c=t.__c=o.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(w,E):(t.__c=c=new Y(w,E),c.constructor=S,c.render=pt),b&&b.sub(c),c.props=w,c.state||(c.state={}),c.context=E,c.__n=n,p=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=T({},c.__s)),T(c.__s,S.getDerivedStateFromProps(w,c.__s))),d=c.props,y=c.state,c.__v=t,p)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&w!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(w,E),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(w,c.__s,E)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(c.props=w,c.state=c.__s,c.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(z){z&&(z.__=t)}),j=0;j<c._sb.length;j++)c.__h.push(c._sb[j]);c._sb=[],c.__h.length&&u.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(w,c.__s,E),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,y,$)})}if(c.context=E,c.props=w,c.__P=e,c.__e=!1,W=m.__r,ve=0,"prototype"in S&&S.prototype.render){for(c.state=c.__s,c.__d=!1,W&&W(t),h=c.render(c.props,c.state,c.context),q=0;q<c._sb.length;q++)c.__h.push(c._sb[q]);c._sb=[]}else do c.__d=!1,W&&W(t),h=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++ve<25);c.state=c.__s,c.getChildContext!=null&&(n=T(T({},n),c.getChildContext())),p||c.getSnapshotBeforeUpdate==null||($=c.getSnapshotBeforeUpdate(d,y)),qe(e,ae(te=h!=null&&h.type===U&&h.key==null?h.props.children:h)?te:[te],t,o,n,r,s,u,l,a,_),c.base=t.__e,t.__u&=-161,c.__h.length&&u.push(c),x&&(c.__E=c.__=null)}catch(z){t.__v=null,a||s!=null?(t.__e=l,t.__u|=a?160:32,s[s.indexOf(l)]=null):(t.__e=o.__e,t.__k=o.__k),m.__e(z,t,o)}else s==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=ht(o.__e,t,o,n,r,s,u,a,_);(h=m.diffed)&&h(t)}function Ke(e,t,o){t.__d=void 0;for(var n=0;n<o.length;n++)fe(o[n],o[++n],o[++n]);m.__c&&m.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){m.__e(s,r.__v)}})}function ht(e,t,o,n,r,s,u,l,a){var _,h,c,p,d,y,$,x=o.props,w=t.props,b=t.type;if(b==="svg"&&(r=!0),s!=null){for(_=0;_<s.length;_++)if((d=s[_])&&"setAttribute"in d==!!b&&(b?d.localName===b:d.nodeType===3)){e=d,s[_]=null;break}}if(e==null){if(b===null)return document.createTextNode(w);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,w.is&&w),s=null,l=!1}if(b===null)x===w||l&&e.data===w||(e.data=w);else{if(s=s&&N.call(e.childNodes),x=o.props||F,!l&&s!=null)for(x={},_=0;_<e.attributes.length;_++)x[(d=e.attributes[_]).name]=d.value;for(_ in x)d=x[_],_=="children"||(_=="dangerouslySetInnerHTML"?c=d:_==="key"||_ in w||K(e,_,null,d,r));for(_ in w)d=w[_],_=="children"?p=d:_=="dangerouslySetInnerHTML"?h=d:_=="value"?y=d:_=="checked"?$=d:_==="key"||l&&typeof d!="function"||x[_]===d||K(e,_,d,x[_],r);if(h)l||c&&(h.__html===c.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(c&&(e.innerHTML=""),qe(e,ae(p)?p:[p],t,o,n,r&&b!=="foreignObject",s,u,s?s[0]:o.__k&&L(o,0),l,a),s!=null)for(_=s.length;_--;)s[_]!=null&&Re(s[_]);l||(_="value",y!==void 0&&(y!==e[_]||b==="progress"&&!y||b==="option"&&y!==x[_])&&K(e,_,y,x[_],!1),_="checked",$!==void 0&&$!==e[_]&&K(e,_,$,x[_],!1))}return e}function fe(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(n){m.__e(n,o)}}function ie(e,t,o){var n,r;if(m.unmount&&m.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||fe(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){m.__e(s,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&ie(n[r],t,o||typeof e.type!="function");o||e.__e==null||Re(e.__e),e.__=e.__e=e.__d=void 0}function pt(e,t,o){return this.constructor(e,o)}function Ge(e,t,o){var n,r,s,u;m.__&&m.__(e,t),r=(n=typeof o=="function")?null:o&&o.__k||t.__k,s=[],u=[],de(t,e=(!n&&o||t).__k=Ne(U,null,[e]),r||F,F,t.ownerSVGElement!==void 0,!n&&o?[o]:r?null:t.firstChild?N.call(t.childNodes):null,s,!n&&o?o:r?r.__e:t.firstChild,n,u),Ke(s,e,u)}function Ve(e,t){Ge(e,t,Ve)}function oo(e,t,o){var n,r,s,u,l=T({},e.props);for(s in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)s=="key"?n=t[s]:s=="ref"?r=t[s]:l[s]=t[s]===void 0&&u!==void 0?u[s]:t[s];return arguments.length>2&&(l.children=arguments.length>3?N.call(arguments,2):o),B(e.type,l,n||e.key,r||e.ref,null)}function Ye(e,t){var o={__c:t="__cC"+Be++,__:e,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&r.some(function(l){l.__e=!0,re(l)})},this.sub=function(u){r.push(u);var l=u.componentWillUnmount;u.componentWillUnmount=function(){r.splice(r.indexOf(u),1),l&&l.call(u)}}),n.children}};return o.Provider.__=o.Consumer.contextType=o}N=Fe.slice,m={__e:function(e,t,o,n){for(var r,s,u;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),u=r.__d),u)return r.__E=r}catch(l){e=l}throw e}},Ue=0,Y.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},o),this.props)),e&&T(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),re(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},Y.prototype.render=U,D=[],We=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,se=function(e,t){return e.__v.__b-t.__v.__b},X.__r=0,Be=0;var M,v,oe,$e,R=0,Je=[],J=[],g=m,Ee=g.__b,Se=g.__r,Pe=g.diffed,Te=g.__c,Ae=g.unmount,He=g.__;function Z(e,t){g.__h&&g.__h(v,e,R||t),R=0;var o=v.__H||(v.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:J}),o.__[e]}function C(e){return R=1,Qe(Ze,e)}function Qe(e,t,o){var n=Z(M++,2);if(n.t=e,!n.__c&&(n.__=[o?o(t):Ze(void 0,t),function(l){var a=n.__N?n.__N[0]:n.__[0],_=n.t(a,l);a!==_&&(n.__N=[_,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var r=function(l,a,_){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(p){return!!p.__c});if(h.every(function(p){return!p.__N}))return!s||s.call(this,l,a,_);var c=!1;return h.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(c=!0)}}),!(!c&&n.__c.props===l)&&(!s||s.call(this,l,a,_))};v.u=!0;var s=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(l,a,_){if(this.__e){var h=s;s=void 0,r(l,a,_),s=h}u&&u.call(this,l,a,_)},v.shouldComponentUpdate=r}return n.__N||n.__}function he(e,t){var o=Z(M++,3);!g.__s&&me(o.__H,t)&&(o.__=e,o.i=t,v.__H.__h.push(o))}function mt(e,t){var o=Z(M++,4);!g.__s&&me(o.__H,t)&&(o.__=e,o.i=t,v.__h.push(o))}function Xe(e){return R=5,pe(function(){return{current:e}},[])}function pe(e,t){var o=Z(M++,7);return me(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function wt(e,t){return R=8,pe(function(){return e},t)}function yt(){for(var e;e=Je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){v=null,Ee&&Ee(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),He&&He(e,t)},g.__r=function(e){Se&&Se(e),M=0;var t=(v=e.__c).__H;t&&(oe===v?(t.__h=[],v.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=J,o.__N=o.i=void 0})):(t.__h.forEach(Q),t.__h.forEach(ce),t.__h=[],M=0)),oe=v},g.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Je.push(t)!==1&&$e===g.requestAnimationFrame||(($e=g.requestAnimationFrame)||vt)(yt)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==J&&(o.__=o.__V),o.i=void 0,o.__V=J})),oe=v=null},g.__c=function(e,t){t.some(function(o){try{o.__h.forEach(Q),o.__h=o.__h.filter(function(n){return!n.__||ce(n)})}catch(n){t.some(function(r){r.__h&&(r.__h=[])}),t=[],g.__e(n,o.__v)}}),Te&&Te(e,t)},g.unmount=function(e){Ae&&Ae(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{Q(n)}catch(r){t=r}}),o.__H=void 0,t&&g.__e(t,o.__v))};var De=typeof requestAnimationFrame=="function";function vt(e){var t,o=function(){clearTimeout(n),De&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);De&&(t=requestAnimationFrame(o))}function Q(e){var t=v,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),v=t}function ce(e){var t=v;e.__c=e.__(),v=t}function me(e,t){return!e||e.length!==t.length||t.some(function(o,n){return o!==e[n]})}function Ze(e,t){return typeof t=="function"?t(e):t}let H;const gt=(e,t)=>{if(H=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const o=t.target.closest("a[href]");if(!o||o.origin!=location.origin||/^#/.test(o.getAttribute("href"))||!/^(_?self)?$/i.test(o.target))return e;H=!0,t.preventDefault(),t=o.href.replace(location.origin,"")}else typeof t=="string"?H=!0:t&&t.url?(H=!t.replace,t=t.url):t=location.pathname+location.search;return H===!0?history.pushState(null,"",t):H===!1&&history.replaceState(null,"",t),t};function et(e){const[t,o]=Qe(gt,e.url||location.pathname+location.search),n=H===!0,r=pe(()=>{const s=new URL(t,location.origin),u=s.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:u,query:Object.fromEntries(s.searchParams),route:(l,a)=>o({url:l,replace:a}),wasPush:n}},[t]);return mt(()=>(addEventListener("click",o),addEventListener("popstate",o),()=>{removeEventListener("click",o),removeEventListener("popstate",o)}),[]),Ne(et.ctx.Provider,{value:r},e.children)}Promise.resolve();et.ctx=Ye({});Ye({});const Le=m.__e;m.__e=(e,t,o)=>{if(e&&e.then){let n=t;for(;n=n.__;)if(n.__c&&n.__c.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),t.__k||(t.__k=[]),n.__c.__c(e,t)}Le&&Le(e,t,o)};let Ie;function xt(e,t){if(typeof window>"u")return;let o=document.querySelector("script[type=isodata]");t=t||o&&o.parentNode||document.body,!Ie&&o?Ve(e,t):Ge(e,t),Ie=!0}function bt(e,t){return _t(()=>import("./prerender-aaba107d.js"),[]).then(o=>o.default(e,t))}var kt=0;function i(e,t,o,n,r,s){var u,l,a={};for(l in t)l=="ref"?u=t[l]:a[l]=t[l];var _={type:e,props:a,key:o,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--kt,__i:-1,__u:0,__source:r,__self:s};if(typeof e=="function"&&(u=e.defaultProps))for(l in u)a[l]===void 0&&(a[l]=u[l]);return m.vnode&&m.vnode(_),_}function Me({title:e,description:t}){return i("div",{class:"flex flex-col items-center",children:[i("h1",{class:"mb-2 mt-4 text-4xl font-bold text-gray-800",children:e}),i("p",{class:"text-lg text-gray-600",children:t})]})}const tt="root@berikai.dev",f=({text:e})=>i("p",{class:"text-gray-300 text-sm",children:e}),Ct=({input:e})=>i(f,{text:i(U,{children:[i("strong",{class:"text-green-500",children:tt}),":",i("span",{class:"text-blue-500",children:"~"}),i("span",{class:"pr-1",children:"$"}),e]})}),$t=({input:e})=>i(f,{text:i("span",{class:"flex flex-row",children:[i("strong",{class:"text-green-500",children:tt}),":",i("span",{class:"text-blue-500",children:"~"}),i("span",{class:"pr-1",children:"$"}),e]})});let le=0;function we({onClose:e=()=>{},onClick:t=()=>{},children:o=null,weight:n=96,height:r=64,full:s=!1}){const l=(()=>{const E=Xe();return he(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[]),E})(),[a,_]=C(s),[h,c]=C(null),p=()=>{a?(_(!1),l.current&&l.current.setAttribute("style",h),document.body.style.overflow="",window.scrollTo(0,le)):(le=window.scrollY,l.current&&c(l.current.getAttribute("style")),l.current&&l.current.removeAttribute("style"),window.scrollTo(0,0),document.body.style.overflow="hidden",_(!0))},[d,y]=C(!1),[$,x]=C(!1),[w,b]=C(!1);return i("div",{ref:l,class:`flex flex-col ${a?"absolute z-[1000] top-0 left-0 h-full w-full":"resize m-10 max-w-fit md:max-w-full"} h-${r} w-${n} rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96`,children:[i("div",{class:"flex items-center justify-between px-4 py-2 bg-gray-800",children:[i("div",{class:"flex items-center space-x-2",children:[i("div",{class:`w-3 h-3 rounded-full ${d?"bg-red-600":"bg-red-500"}`,onClick:e,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)}),i("div",{class:`w-3 h-3 rounded-full ${a?"bg-gray-600":$?"bg-yellow-500":"bg-yellow-400"}`,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1)}),i("div",{class:`w-3 h-3 rounded-full ${w?"bg-green-600":"bg-green-500"}`,onClick:p,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1)})]}),i("span",{class:"font-bold text-sm text-gray-200 opacity-10",children:["build ",24032024]})]}),i("div",{class:"flex-1 overflow-y-auto",onClick:t,children:o})]})}const ne=({text:e,delay:t,init_delay:o=0,cursor:n=""})=>{const[r,s]=C(""),[u,l]=C(0),[a,_]=C(!0),[h,c]=C(!1);return setTimeout(()=>{c(!0)},o),he(()=>{if(h)if(u<e.length){const p=setTimeout(()=>{s(d=>d+e[u]),l(d=>d+1)},r[u-1]==","?t*15:t);return()=>clearTimeout(p)}else{const p=setTimeout(()=>{_(d=>!d)},500);return()=>clearTimeout(p)}},[u,a,h]),i(U,{children:[r,a?n:""]})};let ue=null;const Et=e=>{ue=e},St=e=>({description:"About me",hidden:!1,execute:()=>{e.continue=!0,ue(e.continue);const t=["Hello! I'm Berikai, also known as Verdant.","I'm a software enthusiast and a bass music producer.","Type 'socials' to reach me out!"];e.console.push(i(f,{text:i(ne,{text:t[0],delay:25})})),e.console.push(i(f,{text:i(ne,{text:t[1],delay:25,init_delay:t[0].length*25+1e3})})),e.console.push(i(f,{text:i(ne,{text:t[2],delay:25,init_delay:t[0].length*25+1e3+(t[1].length*25+1e3)})})),setTimeout(()=>{e.continue=!1,ue(e.continue)},t[0].length*25+1e3+(t[1].length*25+1e3)+(t[2].length*25+1e3))}});function ot({terminal:e,weight:t=null,height:o=null,full:n=!1}){t==null&&(t=96),o==null&&(o=64);const[r,s]=C(e.console),[u,l]=C(e.continue);Et(l);const a=p=>{if(p.key==="Enter"){const d=p.target,y=d.value;d.value="",e.log(i(Ct,{input:y})),e.execute(y),s([...e.console]),setTimeout(()=>{_&&_.current&&_.current.focus()},0)}if(p.key==="ArrowUp"){const d=p.target;e.history.cursor=Math.max(0,e.history.cursor-1),d.value=e.history[e.history.cursor]}if(p.key==="ArrowDown"){const d=p.target;e.history.cursor=Math.min(e.history.length-1,e.history.cursor+1),d.value=e.history[e.history.cursor]}},_=Xe(null),h=()=>i("input",{ref:_,autoFocus:!0,type:"text",class:"text-gray-300 bg-transparent outline-none border-none w-full",onKeyDown:a});return i(we,{full:n,weight:t,height:o,onClose:()=>e.id==0?alert("Cannot exit main terminal window."):O(e.id),onClick:()=>_.current.focus(),children:i("div",{class:"p-3",children:[r,u?"":i(()=>i($t,{input:i(h,{})}),{})]})})}function Pt({id:e,weight:t=null,height:o=null,full:n=!1}){return t==null&&(t=96),o==null&&(o=64),i(we,{full:n,weight:t,height:o,onClose:()=>O(e),children:i("div",{class:"flex flex-col items-center justify-content",children:[i("div",{class:"flex flex-row bg-slate-800 p-1 m-1 items-center space-x-2",children:[i("div",{class:"w-3 h-3 bg-orange-400"}),i("div",{class:"flex flex-row space-x-1",children:[i("div",{class:"w-0 h-0 \r border-t-[6.6px] border-t-transparent\r border-l-[10px] border-l-gray-400\r border-b-[6.6px] border-b-transparent"}),i("div",{class:"w-3 h-3 bg-gray-400"}),i("div",{class:"w-3 h-3 rounded-full bg-gray-400"})]}),i("div",{class:"flex flex-row space-x-1",children:[i("div",{class:"w-3 h-3 bg-orange-400"}),i("div",{class:"w-3 h-3 bg-orange-400"})]})]}),i("div",{class:"flex flex-row bg-slate-800 p-1 m-1 items-center space-x-36",children:"In progress..."})]})})}const I=()=>Math.random().toString(36).substring(7),Tt=e=>({description:"Open Ableton Live",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening Ableton Live..."}));const t=I(),o=i(Pt,{id:t},t);e.newProcess(t,o)}});let Oe=null;function nt(){const t=Math.floor(Math.random()*5);return Oe==t?nt():(Oe=t,t)}function At(){switch(nt()){case 0:return"bg-violet-500";case 1:return"bg-cyan-500";case 2:return"bg-green-400";case 3:return"bg-orange-400";case 4:return"bg-gray-200"}}let A=null;const Ht=e=>{A=e},Dt=e=>{e=="blue"?A("bg-cyan-500"):e=="green"?A("bg-green-400"):e=="orange"?A("bg-orange-400"):e=="violet"?A("bg-violet-500"):e=="default"?A("bg-gray-200"):e=="random"?A(At()):A(e)},Lt=e=>({description:"Change background color",hidden:!0,execute:t=>{t.length===0?e.console.push(i(f,{text:"Available arguments: default, random, blue, green, orange, violet"})):Dt(t[0])}});function ee({id:e,children:t,weight:o=null,height:n=null,full:r=!1}){return o==null&&(o=96),n==null&&(n=64),i(we,{full:r,weight:o,height:n,onClose:()=>O(e),children:t})}const It=e=>({description:"View my card",hidden:!1,execute:()=>{e.console.push(i(f,{text:"Opening berikai.github.io..."}));const t=I();i("div",{class:"h-[52rem] w-[28rem]"});const o=i(ee,{height:"[52rem]",weight:"[28rem]",id:t,children:i("iframe",{src:"https://berikai.github.io",width:"100%",height:"100%"})},t);e.newProcess(t,o)}}),Mt=e=>({description:"Clear the console",hidden:!1,execute:()=>{e.clear()}}),Ot=e=>({description:"Open this project in VS Code",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening VS Code..."}));const t=I();i("div",{class:"h-[36rem] w-[48rem]"});const o=i(ee,{full:!0,height:"[36rem]",weight:"[48rem]",id:t,children:i("iframe",{src:"https://github1s.com/Berikai/terminal-emulator-sandbox",width:"100%",height:"100%"})},t);window.scrollTo(0,0),document.body.style.overflow="hidden",e.newProcess(t,o)}}),Ut=e=>({description:"Echo the given text",hidden:!0,execute:(...t)=>{e.console.push(i(f,{text:t.join("").replaceAll(","," ")==""?"\v":t.join("").replaceAll(","," ")}))}}),Wt=e=>({description:"Exit the terminal window",hidden:!0,execute:()=>{e.exit()}}),Bt=e=>({description:"List available commands",hidden:!1,execute:t=>{if(t[0]=="--all"||t[0]=="-A")for(const o in e.commands)e.console.push(i(f,{text:`- ${o}: ${e.commands[o].description}`}));else{for(const o in e.commands)e.commands[o].hidden||e.console.push(i(f,{text:`- ${o}: ${e.commands[o].description}`}));e.console.push(i(f,{text:"Type 'help --all' for all available commands."}))}}}),G=[];function st(){const t=Math.floor(Math.random()*8);return G.length===8&&(G.length=0),G.includes(t)?st():(G.push(t),t)}function Ft(){switch(st()){case 0:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1775443374&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 1:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1696386714&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 2:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1781142783&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 3:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1582366063&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 4:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1516105180&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 5:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1354894228&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 6:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1338231268&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});case 7:return i("iframe",{width:"100%",height:"100%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1534539682&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"})}}const Rt=e=>({description:"Listen to my music",hidden:!1,execute:()=>{e.console.push(i(f,{text:"Opening Soundcloud..."}));const t=I(),o=i(ee,{id:t,children:i(Ft,{})},t);e.newProcess(t,o)}});function Nt(){if(typeof window<"u"){const e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t=typeof InstallTrigger<"u",o=/constructor/i.test(window.HTMLElement)||function(a){return a.toString()==="[object SafariRemoteNotification]"}(!window.safari||typeof safari<"u"&&window.safari.pushNotification),n=!!document.documentMode,r=!n&&!!window.StyleMedia,s=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime),u=s&&navigator.userAgent.indexOf("Edg")!=-1,l=(s||e)&&!!window.CSS;return e?"Opera":t?"Firefox":o?"Safari":n?"Internet Explorer":r?"Edge":u?"Edge Chromium":s?"Chrome":l?"Blink":"Unknown"}}const jt=new Date().valueOf(),qt=e=>({description:"Show system information",hidden:!0,execute:()=>{const t=new Date().valueOf(),o=Math.floor((t-jt)/(60*1e3));e.console.push(i(f,{text:`OS: ${Nt()}`})),e.console.push(i(f,{text:`Host: ${window.location.hostname}`})),e.console.push(i(f,{text:`Uptime: ${o} minutes`})),e.console.push(i(f,{text:`Packages: ${Object.keys(rt(null)).length}`}))}}),zt=e=>({description:"Open the same site in a new window",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Opening berikai.dev..."}));const t=I(),o=i(ee,{id:t,children:i("iframe",{src:"https://berikai.dev",width:"100%",height:"100%"})},t);e.newProcess(t,o)}}),Kt=e=>({description:"Shutdown the system",hidden:!0,execute:()=>{window.open("about:blank","_self"),window.close()}}),V=e=>({pick:{description:"Pick a process window to be the first in the stack",hidden:!0,execute:t=>{k.forEach((o,n)=>{if(o[0]==t[0]){if(n==0){e.console.push(i(f,{text:"Process already at the top of the stack."}));return}k.splice(n,1),k.unshift(o),ye([...k]),e.console.push(i(f,{text:"Process moved to the top of the stack."}))}})}},list:{description:"List all open processes by ID",hidden:!0,execute:()=>{k.forEach(([t,o],n)=>{e.console.push(i(f,{text:n+1+". "+t}))})}},"show-id":{description:"Shows the process ID of the current terminal window",hidden:!0,execute:()=>{e.console.push(i(f,{text:e.id}))}},"change-id":{description:"Change the process ID of the current terminal window (0 = main terminal)",hidden:!0,execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a new ID."}));return}k.forEach(([o,n])=>{if(o===t[0]){e.console.push(i(f,{text:"ID already exists."}));return}}),k.forEach(([o,n],r)=>{o===e.id&&(k[r][0]=t[0])}),e.id=t[0],e.console.push(i(f,{text:"ID changed."}))}},kill:{description:"Kill the process with the given ID",execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a process ID."}));return}if(t[0]==0){e.console.push(i(f,{text:"Cannot kill main terminal window."}));return}O(t[0])}},killall:{description:"Kill all processes",hidden:!0,execute:()=>{e.console.push(i(f,{text:"Killing all processes..."}));const t=k.slice(0);for(const[o,n]of t)o!=0?O(o):e.console.push(i(f,{text:"Cannot kill main terminal window."}))}}}),Gt=e=>({description:"Manage all open processes",hidden:!0,execute:t=>{if(t.length==0||t[0]=="help"){e.console.push(i(f,{text:"Usage: process [command] [args]"})),e.console.push(i(f,{text:"Commands:"}));for(const o in V(e))e.console.push(i(f,{text:`- ${o}: ${V(e)[o].description}`}))}else{const o=t.shift();V(e)[o]?V(e)[o].execute(t):e.console.push(i(f,{text:`Command not found: ${o}. Type 'process help' to list available commands.`}))}}}),Vt=e=>({description:"Reboot the system",hidden:!0,execute:()=>{window.location.reload()}}),Yt=e=>({description:"Remove files or directories",hidden:!0,execute:t=>{if(t[0]===""||t[0]===void 0){e.console.push(i(f,{text:"Please provide a file or directory."}));return}if(t[0]==="-rf"&&t[1]==="/"){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="."){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="/*"){e.console.push(i(f,{text:"Permission denied."}));return}if(t[0]==="-rf"&&t[1]==="*"){e.console.push(i(f,{text:"Permission denied."}));return}}}),Jt=e=>({description:"Social media links",hidden:!0,execute:()=>{e.console.push(i(f,{text:i("a",{href:"https://www.github.com/Berikai",children:["[",i("span",{class:"text-gray-300",children:" Github "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://soundcloud.com/verdantbass",children:["[",i("span",{class:"text-orange-300",children:" Soundcloud "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://discord.com/users/verdantbass",children:["[",i("span",{class:"text-blue-300",children:" Discord "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://www.instagram.com/verdantbass",children:["[",i("span",{class:"text-pink-300",children:" Instagram "}),"]"]})})),e.console.push(i(f,{text:i("a",{href:"https://www.twitter.com/verdantbass",children:["[",i("span",{class:"text-cyan-300",children:" Twitter "}),"]"]})}))}}),Qt=e=>({description:"Run commands as superuser",hidden:!0,execute:t=>{e.commands[t[0]].execute(t.slice(1))}}),Xt=e=>({description:"Open a new terminal window",hidden:!0,execute:()=>{e.new()}}),rt=e=>({help:Bt(e),about:St(e),card:It(e),music:Rt(e),socials:Jt(e),code:Ot(e),paradox:zt(e),ableton:Tt(e),clear:Mt(e),exit:Wt(e),terminal:Xt(e),process:Gt(e),background:Lt(e),neofetch:qt(e),sudo:Qt(e),echo:Ut(e),rm:Yt(e),reboot:Vt(),poweroff:Kt()});function P(e,t=!1){this.console=t?[i(f,{text:"Type 'help' to get started."})]:[],this.history=[""],this.history.cursor=0,this.commands=rt(this),this.id=e,this.continue=!1}P.prototype.newProcess=function(e,t){to(e,t)};P.prototype.new=function(){this.console.push(i(f,{text:"Opening new terminal window..."}));const e=I();this.newProcess(e,i(ot,{terminal:new P(e)},e))};P.prototype.exit=function(){if(this.id==0){this.console.push(i(f,{text:"Cannot exit main terminal window."}));return}this.console.push(i(f,{text:"Exiting terminal..."})),this.console.push(this.id),O(this.id)};P.prototype.getConsole=function(){return this.console};P.prototype.log=function(e){this.console.push(e)};P.prototype.clear=function(){this.console=[]};P.prototype.execute=function(e){if(e=="")return;this.history.push(e),this.history.cursor=this.history.length;const[t,...o]=e.split(" ");this.commands[t]?this.commands[t].execute(o):this.console.push(i(f,{text:`Command not found: ${t}`}))};const _e=I(),Zt=new P(_e,!0);let k=[[_e,i(ot,{terminal:Zt},_e)]],it=null;function eo(e){it=e}function ye(e){it(e)}function to(e,t){k.push([e,t]),ye([...k])}function O(e){k.forEach(([t,o],n)=>{t==e&&k.splice(n,1)}),document.body.style.overflow!=""&&(document.body.style.overflow="",window.scrollTo(0,le)),ye([...k])}console.log("%cHey, wussup!","color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");function ct(){const[e,t]=C(1),[o,n]=C(k),[r,s]=C("bg-gray-200");eo(n),Ht(s);const u=new P(0),l=wt(a=>{a.key==="+"&&u.new(),a.key==="Escape"&&o[0]&&o.length>(o[0][0]==0?1:0)&&(o[o.length-1][0]!=0?k.pop():k.splice(o.length-2,1),n([...k])),a.key&&e&&t(0),a.type==="mouseup"&&a.target.className.includes("w-3 h-3 rounded-full bg-green-")&&t(0),o.length===1&&a.type==="mouseup"&&a.target.className.includes("w-3 h-3 rounded-full bg-red-")&&(t(2),o[0][0]==0&&t(0)),o.length===0&&t(2)},[]);return he(()=>(document.addEventListener("keydown",l,!1),document.addEventListener("mouseup",l,!1),()=>{document.removeEventListener("keydown",l,!1),document.removeEventListener("mouseup",l,!1)}),[l,o]),i("div",{class:r+" min-h-screen",children:i("div",{class:"flex flex-col items-center justify-center min-h-screen",children:[e&&e!=2?i(Me,{title:"Hi, I'm Berikai",description:"Welcome to my terminal emulator sandbox"}):null,e==2?i(Me,{title:"",description:"Press + key to open a new terminal."}):null,i("div",{class:"flex flex-col lg:flex-row flex-wrap items-center justify-center",children:o.map(([a,_])=>_)})]})})}typeof window<"u"&&xt(i(ct,{}),document.getElementById("app"));async function no(e){await bt(i(ct,{...e}))}export{oo as E,U as g,m as l,no as prerender,Ne as y};
//# sourceMappingURL=index-387b6d09.js.map
