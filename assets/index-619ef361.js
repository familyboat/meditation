import{c as M,d as B,s as y,_ as l,e as w,r as b,f as I,h as P,j as i,i as k,k as p,l as D,m as ie,n as ae,o as T,N as O,u as K,a as re,p as ne,q as le,v as se,w as de,B as U}from"./index-4b102172.js";import{r as R,i as j}from"./createSvgIcon-4ab98ae6.js";import{N as ce}from"./note-c5be1576.js";import{P as ue}from"./Paper-bd70dd74.js";import{Q as C,k as pe}from"./ReactToastify-336e1b93.js";import{f as ve,s as fe,a as ge}from"./playlist-15c175e3.js";import{B as he}from"./ButtonGroupContext-851ca1f9.js";import{I as z}from"./IconButton-8b26ba91.js";import{F as be}from"./message-00abee6d.js";function xe(e){return B("MuiButtonGroup",e)}const me=M("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),h=me,$e=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Ce=(e,o)=>{const{ownerState:t}=e;return[{[`& .${h.grouped}`]:o.grouped},{[`& .${h.grouped}`]:o[`grouped${p(t.orientation)}`]},{[`& .${h.grouped}`]:o[`grouped${p(t.variant)}`]},{[`& .${h.grouped}`]:o[`grouped${p(t.variant)}${p(t.orientation)}`]},{[`& .${h.grouped}`]:o[`grouped${p(t.variant)}${p(t.color)}`]},o.root,o[t.variant],t.disableElevation===!0&&o.disableElevation,t.fullWidth&&o.fullWidth,t.orientation==="vertical"&&o.vertical]},_e=e=>{const{classes:o,color:t,disabled:r,disableElevation:d,fullWidth:s,orientation:n,variant:a}=e,c={root:["root",a,n==="vertical"&&"vertical",s&&"fullWidth",d&&"disableElevation"],grouped:["grouped",`grouped${p(n)}`,`grouped${p(a)}`,`grouped${p(a)}${p(n)}`,`grouped${p(a)}${p(t)}`,r&&"disabled"]};return D(c,xe,o)},Re=y("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Ce})(({theme:e,ownerState:o})=>l({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${h.grouped}`]:l({minWidth:40,"&:not(:first-of-type)":l({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":l({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${h.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${h.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:w(e.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${h.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${h.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(e.vars||e).palette[o.color].dark},{"&:hover":l({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":l({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"})})),je=b.forwardRef(function(o,t){const r=I({props:o,name:"MuiButtonGroup"}),{children:d,className:s,color:n="primary",component:a="div",disabled:c=!1,disableElevation:v=!1,disableFocusRipple:x=!1,disableRipple:f=!1,fullWidth:m=!1,orientation:_="horizontal",size:g="medium",variant:u="outlined"}=r,$=P(r,$e),G=l({},r,{color:n,component:a,disabled:c,disableElevation:v,disableFocusRipple:x,disableRipple:f,fullWidth:m,orientation:_,size:g,variant:u}),N=_e(G),te=b.useMemo(()=>({className:N.grouped,color:n,disabled:c,disableElevation:v,disableFocusRipple:x,disableRipple:f,fullWidth:m,size:g,variant:u}),[n,c,v,x,f,m,g,u,N.grouped]);return i.jsx(Re,l({as:a,role:"group",className:k(N.root,s),ref:t,ownerState:G},$,{children:i.jsx(he.Provider,{value:te,children:d})}))}),ze=je;function ye(e){return B("MuiDivider",e)}M("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const ke=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Ne=e=>{const{absolute:o,children:t,classes:r,flexItem:d,light:s,orientation:n,textAlign:a,variant:c}=e;return D({root:["root",o&&"absolute",c,s&&"light",n==="vertical"&&"vertical",d&&"flexItem",t&&"withChildren",t&&n==="vertical"&&"withChildrenVertical",a==="right"&&n!=="vertical"&&"textAlignRight",a==="left"&&n!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n==="vertical"&&"wrapperVertical"]},ye,r)},Me=y("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.absolute&&o.absolute,o[t.variant],t.light&&o.light,t.orientation==="vertical"&&o.vertical,t.flexItem&&o.flexItem,t.children&&o.withChildren,t.children&&t.orientation==="vertical"&&o.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&o.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&o.textAlignLeft]}})(({theme:e,ownerState:o})=>l({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:w(e.palette.divider,.08)},o.variant==="inset"&&{marginLeft:72},o.variant==="middle"&&o.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},o.variant==="middle"&&o.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},o.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>l({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:o})=>l({},o.children&&o.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:o})=>l({},o.children&&o.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>l({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Be=y("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.wrapper,t.orientation==="vertical"&&o.wrapperVertical]}})(({theme:e,ownerState:o})=>l({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},o.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),S=b.forwardRef(function(o,t){const r=I({props:o,name:"MuiDivider"}),{absolute:d=!1,children:s,className:n,component:a=s?"div":"hr",flexItem:c=!1,light:v=!1,orientation:x="horizontal",role:f=a!=="hr"?"separator":void 0,textAlign:m="center",variant:_="fullWidth"}=r,g=P(r,ke),u=l({},r,{absolute:d,component:a,flexItem:c,light:v,orientation:x,role:f,textAlign:m,variant:_}),$=Ne(u);return i.jsx(Me,l({as:a,className:k($.root,n),role:f,ref:t,ownerState:u},g,{children:s?i.jsx(Be,{className:$.wrapper,ownerState:u,children:s}):null}))});S.muiSkipListHighlight=!0;const Ie=S;function Pe(e){return B("MuiFab",e)}const De=M("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),q=De,Te=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],Oe=e=>{const{color:o,variant:t,classes:r,size:d}=e,s={root:["root",t,`size${p(d)}`,o==="inherit"?"colorInherit":o]},n=D(s,Pe,r);return l({},r,n)},Ve=y(ie,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>ae(e)||e==="classes",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`size${p(t.size)}`],t.color==="inherit"&&o.colorInherit,o[p(t.size)],o[t.color]]}})(({theme:e,ownerState:o})=>{var t,r;return l({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(t=(r=e.palette).getContrastText)==null?void 0:t.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${q.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:o})=>l({},o.color!=="inherit"&&o.color!=="default"&&(e.vars||e).palette[o.color]!=null&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}}),({theme:e})=>({[`&.${q.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),Ae=b.forwardRef(function(o,t){const r=I({props:o,name:"MuiFab"}),{children:d,className:s,color:n="default",component:a="button",disabled:c=!1,disableFocusRipple:v=!1,focusVisibleClassName:x,size:f="large",variant:m="circular"}=r,_=P(r,Te),g=l({},r,{color:n,component:a,disabled:c,disableFocusRipple:v,size:f,variant:m}),u=Oe(g);return i.jsx(Ve,l({className:k(u.root,s),component:a,disabled:c,focusRipple:!v,focusVisibleClassName:k(u.focusVisible,x),ownerState:g,ref:t},_,{classes:u,children:d}))}),Fe=Ae;var V={},Le=j;Object.defineProperty(V,"__esModule",{value:!0});var J=V.default=void 0,We=Le(R()),He=i,Ee=(0,We.default)((0,He.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");J=V.default=Ee;function Ge(){const e=T(),o=()=>{e(`${O}/create`)};return i.jsx(i.Fragment,{children:i.jsx(Fe,{size:"small",color:"primary","aria-label":"add",sx:{position:"fixed",right:"1rem",bottom:"4rem"},onClick:o,children:i.jsx(J,{})})})}const Ue=y("div")(()=>({"&:hover":{cursor:"pointer"}})),qe=b.memo(function({note:o,actions:t}){const r=T();function d(){r(`${O}/${o.id}`)}return i.jsx(i.Fragment,{children:i.jsxs(ue,{sx:{padding:"0.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[i.jsx(Ue,{onClick:d,sx:{maxHeight:"4rem",overflow:"hidden"},children:i.jsx(ce,{note:o})}),i.jsx(Ie,{}),t]})})}),we=qe;var A={},Ke=j;Object.defineProperty(A,"__esModule",{value:!0});var Q=A.default=void 0,Se=Ke(R()),Je=i,Qe=(0,Se.default)((0,Je.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");Q=A.default=Qe;var F={},Xe=j;Object.defineProperty(F,"__esModule",{value:!0});var X=F.default=void 0,Ye=Xe(R()),Ze=i,eo=(0,Ye.default)((0,Ze.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");X=F.default=eo;var L={},oo=j;Object.defineProperty(L,"__esModule",{value:!0});var Y=L.default=void 0,to=oo(R()),io=i,ao=(0,to.default)((0,io.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");Y=L.default=ao;var W={},ro=j;Object.defineProperty(W,"__esModule",{value:!0});var Z=W.default=void 0,no=ro(R()),lo=i,so=(0,no.default)((0,lo.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");Z=W.default=so;var H={},co=j;Object.defineProperty(H,"__esModule",{value:!0});var ee=H.default=void 0,uo=co(R()),po=i,vo=(0,uo.default)((0,po.jsx)("path",{d:"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}),"KeyboardVoice");ee=H.default=vo;var E={},fo=j;Object.defineProperty(E,"__esModule",{value:!0});var oe=E.default=void 0,go=fo(R()),ho=i,bo=(0,go.default)((0,ho.jsx)("path",{d:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"}),"PlaylistAdd");oe=E.default=bo;function xo({note:e,onDeleteNote:o}){const t=T(),{title:r,content:d,id:s}=e,n=K(),[a,c]=b.useState(!1),v={title:r,text:d};function x(){t(`${O}/${s}/history`)}async function f(){try{await navigator.share(v)}catch(u){alert(u)}}function m(){const u=ve(e),$=new SpeechSynthesisUtterance(u);speechSynthesis.speaking&&(speechSynthesis.cancel(),fe()),C.success(n.formatMessage({defaultMessage:"Speaking immediately",id:"speaking_tip_part_two"}),{position:C.POSITION.TOP_CENTER,autoClose:500}),speechSynthesis.speak($),$.onstart=()=>{c(!0)},$.onend=()=>{c(!1)},$.onerror=()=>{c(!1)}}function _(){ge(e),C.info(n.formatMessage({defaultMessage:"Add to playlist",id:"speaking_tip_part_one"}),{position:C.POSITION.TOP_CENTER,autoClose:500})}async function g(){(await fetch("https://meditation-backend.deno.dev/notes",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}})).ok?C.info("Post successed",{autoClose:500}):C.error("Post failed",{autoClose:500})}return i.jsx(i.Fragment,{children:i.jsxs(ze,{sx:{display:"flex",flexWrap:"wrap"},children:[i.jsx(z,{onClick:x,children:i.jsx(Y,{fontSize:"small"})}),i.jsx(z,{onClick:()=>o(e),children:i.jsx(Q,{fontSize:"small"})}),i.jsx(z,{onClick:f,children:i.jsx(Z,{fontSize:"small"})}),i.jsx(z,{onClick:m,disabled:a,sx:a?{animation:"speak .5s ease-in .2s infinite alternate","@keyframes speak":{from:{color:"inherit",scale:"1"},to:{color:"primary.main",scale:"1.2"}}}:{},children:i.jsx(ee,{fontSize:"small"})}),i.jsx(z,{onClick:_,children:i.jsx(oe,{fontSize:"small"})}),i.jsx(z,{onClick:g,children:i.jsx(X,{fontSize:"small"})})]})})}function No(){const[e,o]=b.useState([]),r=re().palette.mode,d=K(),s=b.useCallback(async()=>{const a=(await ne()).reverse();o(a)},[]),n=b.useCallback(async a=>{await le(a.id),await s()},[s]);return b.useEffect(()=>{se()==="0"&&(C.info(d.formatMessage({defaultMessage:"Oops! No notes yet. Click the Add button to create your first note.",id:"first_note_tip"}),{position:C.POSITION.TOP_CENTER}),de()),s()},[s,d]),i.jsxs(i.Fragment,{children:[i.jsx(U,{sx:{fontSize:"1.5rem"},children:i.jsx(be,{defaultMessage:"All notes",id:"all_notes"})}),i.jsx(U,{sx:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:e.map(a=>i.jsx(we,{actions:i.jsx(xo,{note:a,onDeleteNote:n}),note:a},a.created_at.getTime()))}),i.jsx(Ge,{}),i.jsx(pe,{theme:r})]})}export{No as default};
