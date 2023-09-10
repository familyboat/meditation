import{r,ah as V,d as R,c as w,s as z,k as h,f as P,h as M,_ as m,j as y,i as N,l as k,e as x}from"./index-4b102172.js";function O(...e){return e.reduce((o,t)=>t==null?o:function(...n){o.apply(this,n),t.apply(this,n)},()=>{})}function Q(e,o=166){let t;function a(...n){const i=()=>{e.apply(this,n)};clearTimeout(t),t=setTimeout(i,o)}return a.clear=()=>{clearTimeout(t)},a}function X(e,o){return r.isValidElement(e)&&o.indexOf(e.type.muiName)!==-1}function j(e){return e&&e.ownerDocument||document}function Y(e){return j(e).defaultView||window}let I=0;function A(e){const[o,t]=r.useState(e),a=e||o;return r.useEffect(()=>{o==null&&(I+=1,t(`mui-${I}`))},[o]),a}const b=V["useId".toString()];function Z(e){if(b!==void 0){const o=b();return e??o}return A(e)}function ee({controlled:e,default:o,name:t,state:a="value"}){const{current:n}=r.useRef(e!==void 0),[i,u]=r.useState(o),l=n?e:i,d=r.useCallback(s=>{n||u(s)},[]);return[l,d]}const E=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},_=E;function q(e){return R("MuiSvgIcon",e)}w("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],D=e=>{const{color:o,fontSize:t,classes:a}=e,n={root:["root",o!=="inherit"&&`color${h(o)}`,`fontSize${h(t)}`]};return k(n,q,a)},F=z("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="inherit"&&o[`color${h(t.color)}`],o[`fontSize${h(t.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var t,a,n,i,u,l,d,s,v,c,f,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=e.transitions)==null||(a=t.create)==null?void 0:a.call(t,"fill",{duration:(n=e.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(u=i.pxToRem)==null?void 0:u.call(i,20))||"1.25rem",medium:((l=e.typography)==null||(d=l.pxToRem)==null?void 0:d.call(l,24))||"1.5rem",large:((s=e.typography)==null||(v=s.pxToRem)==null?void 0:v.call(s,35))||"2.1875rem"}[o.fontSize],color:(c=(f=(e.vars||e).palette)==null||(f=f[o.color])==null?void 0:f.main)!=null?c:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(p=(e.vars||e).palette)==null||(p=p.action)==null?void 0:p.disabled,inherit:void 0}[o.color]}}),T=r.forwardRef(function(o,t){const a=P({props:o,name:"MuiSvgIcon"}),{children:n,className:i,color:u="inherit",component:l="svg",fontSize:d="medium",htmlColor:s,inheritViewBox:v=!1,titleAccess:c,viewBox:f="0 0 24 24"}=a,g=M(a,B),p=r.isValidElement(n)&&n.type==="svg",S=m({},a,{color:u,component:l,fontSize:d,instanceFontSize:o.fontSize,inheritViewBox:v,viewBox:f,hasSvgAsChild:p}),$={};v||($.viewBox=f);const U=D(S);return y.jsxs(F,m({as:l,className:N(U.root,i),focusable:"false",color:s,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:t},$,g,p&&n.props,{ownerState:S,children:[p?n.props.children:n,c?y.jsx("title",{children:c}):null]}))});T.muiName="SvgIcon";const C=T;function oe(e,o){function t(a,n){return y.jsx(C,m({"data-testid":`${o}Icon`,ref:n},a,{children:e}))}return t.muiName=C.muiName,r.memo(r.forwardRef(t))}function L(e){return R("MuiPaper",e)}w("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const W=["className","component","elevation","square","variant"],G=e=>{const{square:o,elevation:t,variant:a,classes:n}=e,i={root:["root",a,!o&&"rounded",a==="elevation"&&`elevation${t}`]};return k(i,L,n)},H=z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return m({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&m({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${x("#fff",_(o.elevation))}, ${x("#fff",_(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),J=r.forwardRef(function(o,t){const a=P({props:o,name:"MuiPaper"}),{className:n,component:i="div",elevation:u=1,square:l=!1,variant:d="elevation"}=a,s=M(a,W),v=m({},a,{component:i,elevation:u,square:l,variant:d}),c=G(v);return y.jsx(H,m({as:i,ownerState:v,className:N(c.root,n),ref:t},s))}),te=J;export{te as P,ee as a,Y as b,oe as c,O as d,Q as e,X as i,j as o,Z as u};