import{r as o,R as E,G as N,I as m,j as O,J as D,M as A}from"./index-Cdxa5cZc.js";function H(r,n){const e=o.useRef(n);o.useEffect(function(){n!==e.current&&r.attributionControl!=null&&(e.current!=null&&r.attributionControl.removeAttribution(e.current),n!=null&&r.attributionControl.addAttribution(n)),e.current=n},[r,n])}const G=1;function V(r){return Object.freeze({__version:G,map:r})}function h(r,n){return Object.freeze({...r,...n})}const k=o.createContext(null),P=k.Provider;function C(){const r=o.useContext(k);if(r==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return r}function M(r){function n(e,t){const{instance:u,context:a}=r(e).current;return o.useImperativeHandle(t,()=>u),e.children==null?null:E.createElement(P,{value:a},e.children)}return o.forwardRef(n)}function Z(r){function n(e,t){const[u,a]=o.useState(!1),{instance:c}=r(e,a).current;o.useImperativeHandle(t,()=>c),o.useEffect(function(){u&&c.update()},[c,u,e.children]);const i=c._contentNode;return i?N.createPortal(e.children,i):null}return o.forwardRef(n)}function J(r){function n(e,t){const{instance:u}=r(e).current;return o.useImperativeHandle(t,()=>u),null}return o.forwardRef(n)}function U(r){return function(e){const t=C(),u=r(e,t),{instance:a}=u.current,c=o.useRef(e.position),{position:i}=e;return o.useEffect(function(){return a.addTo(t.map),function(){a.remove()}},[t.map,a]),o.useEffect(function(){i!=null&&i!==c.current&&(a.setPosition(i),c.current=i)},[a,i]),u}}function w(r,n){const e=o.useRef();o.useEffect(function(){return n!=null&&r.instance.on(n),e.current=n,function(){e.current!=null&&r.instance.off(e.current),e.current=null}},[r,n])}function R(r,n){const e=r.pane??n.pane;return e?{...r,pane:e}:r}function X(r,n){return function(t,u){const a=C(),c=r(R(t,a),a);return H(a.map,t.attribution),w(c.current,t.eventHandlers),n(c.current,a,t,u),c}}function L(r,n,e){return Object.freeze({instance:r,context:n,container:e})}function p(r,n){return n==null?function(t,u){const a=o.useRef();return a.current||(a.current=r(t,u)),a}:function(t,u){const a=o.useRef();a.current||(a.current=r(t,u));const c=o.useRef(t),{instance:i}=a.current;return o.useEffect(function(){c.current!==t&&(n(i,t,c.current),c.current=t)},[i,t,u]),a}}function j(r,n){o.useEffect(function(){return(n.layerContainer??n.map).addLayer(r.instance),function(){var a;(a=n.layerContainer)==null||a.removeLayer(r.instance),n.map.removeLayer(r.instance)}},[n,r])}function z(r){return function(e){const t=C(),u=r(R(e,t),t);return H(t.map,e.attribution),w(u.current,e.eventHandlers),j(u.current,t),u}}function q(r,n){const e=o.useRef();o.useEffect(function(){if(n.pathOptions!==e.current){const u=n.pathOptions??{};r.instance.setStyle(u),e.current=u}},[r,n])}function F(r){return function(e){const t=C(),u=r(R(e,t),t);return w(u.current,e.eventHandlers),j(u.current,t),q(u.current,e),u}}function K(r,n){const e=p(r,n),t=z(e);return M(t)}function Q(r,n){const e=p(r),t=X(e,n);return Z(t)}function W(r,n){const e=p(r,n),t=F(e);return M(t)}function Y(r,n){const e=p(r,n),t=z(e);return J(t)}function $(r,n,e){const{opacity:t,zIndex:u}=n;t!=null&&t!==e.opacity&&r.setOpacity(t),u!=null&&u!==e.zIndex&&r.setZIndex(u)}function ee(){return C().map}function ne(r){const n=ee();return o.useEffect(function(){return n.on(r),function(){n.off(r)}},[n,r]),n}const te=p(function({children:n,...e},t){const u=new m.Control.Layers(void 0,void 0,e);return L(u,h(t,{layersControl:u}))},function(n,e,t){e.collapsed!==t.collapsed&&(e.collapsed===!0?n.collapse():n.expand())}),re=U(te),b=M(re);function T(r){return function(e){const t=C(),u=o.useRef(e),[a,c]=o.useState(null),{layersControl:i,map:l}=t,f=o.useCallback(y=>{i!=null&&(u.current.checked&&l.addLayer(y),r(i,y,u.current.name),c(y))},[i,l]),d=o.useCallback(y=>{i==null||i.removeLayer(y),c(null)},[i]),g=o.useMemo(()=>h(t,{layerContainer:{addLayer:f,removeLayer:d}}),[t,f,d]);return o.useEffect(()=>{a!==null&&u.current!==e&&(e.checked===!0&&(u.current.checked==null||u.current.checked===!1)?l.addLayer(a):u.current.checked===!0&&(e.checked==null||e.checked===!1)&&l.removeLayer(a),u.current=e)}),e.children?E.createElement(P,{value:g},e.children):null}}b.BaseLayer=T(function(n,e,t){n.addBaseLayer(e,t)});b.Overlay=T(function(n,e,t){n.addOverlay(e,t)});function x(){return x=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},x.apply(this,arguments)}function ue({bounds:r,boundsOptions:n,center:e,children:t,className:u,id:a,placeholder:c,style:i,whenReady:l,zoom:f,...d},g){const[y]=o.useState({className:u,id:a,style:i}),[s,S]=o.useState(null);o.useImperativeHandle(g,()=>(s==null?void 0:s.map)??null,[s]);const _=o.useCallback(I=>{if(I!==null&&s===null){const v=new m.Map(I,d);e!=null&&f!=null?v.setView(e,f):r!=null&&v.fitBounds(r,n),l!=null&&v.whenReady(l),S(V(v))}},[]);o.useEffect(()=>()=>{s==null||s.map.remove()},[s]);const B=s?E.createElement(P,{value:s},t):c??null;return E.createElement("div",x({},y,{ref:_}),B)}const le=o.forwardRef(ue),fe=K(function({position:n,...e},t){const u=new m.Marker(n,e);return L(u,h(t,{overlayContainer:u}))},function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),e.icon!=null&&e.icon!==t.icon&&n.setIcon(e.icon),e.zIndexOffset!=null&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),e.opacity!=null&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),n.dragging!=null&&e.draggable!==t.draggable&&(e.draggable===!0?n.dragging.enable():n.dragging.disable())}),se=W(function({positions:n,...e},t){const u=new m.Polyline(n,e);return L(u,h(t,{overlayContainer:u}))},function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)}),de=Q(function(n,e){const t=new m.Popup(n,e.overlayContainer);return L(t,e)},function(n,e,{position:t},u){o.useEffect(function(){const{instance:c}=n;function i(f){f.popup===c&&(c.update(),u(!0))}function l(f){f.popup===c&&u(!1)}return e.map.on({popupopen:i,popupclose:l}),e.overlayContainer==null?(t!=null&&c.setLatLng(t),c.openOn(e.map)):e.overlayContainer.bindPopup(c),function(){var d;e.map.off({popupopen:i,popupclose:l}),(d=e.overlayContainer)==null||d.unbindPopup(),e.map.removeLayer(c)}},[n,e,u,t])}),oe=Y(function({url:n,...e},t){const u=new m.TileLayer(n,R(e,t));return L(u,t)},function(n,e,t){$(n,e,t);const{url:u}=e;u!=null&&u!==t.url&&n.setUrl(u)}),{BaseLayer:ae}=b;function ye(){return O.jsx(b,{position:"topright",children:D.map(r=>O.jsx(ce,{layer:r},r.name))})}function ce({layer:r}){const{layerSelected:n,selectLayer:e}=o.useContext(A);return ne({baselayerchange:()=>e(r)}),n?O.jsx(ae,{name:r.name,checked:(n==null?void 0:n.id)===r.id,children:O.jsx(oe,{url:r.url})}):null}export{le as M,de as P,ye as a,fe as b,se as c,ne as u};
