(function(o,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis<"u"?globalThis:o||self,n(o.SemanticComponents={},o.React))})(this,function(o,n){"use strict";const S=({condition:t,render:e})=>t?n.createElement(n.Fragment,null,e):null,h=({eachIn:t,render:e})=>n.createElement(n.Fragment,null,t.map((s,r)=>n.createElement(n.Fragment,{key:r},e(s)))),v=()=>{const[t,e]=n.useState(!1);return n.useEffect(()=>(e(!0),()=>e(!1)),[]),t},w=t=>{const[e,s]=n.useState(t);return[e,()=>s(u=>!u)]},I=(t,e)=>{const s=n.useRef(t);n.useEffect(()=>{s.current=t},[t]),n.useEffect(()=>{if(e!==null){const r=setInterval(s.current,e);return()=>clearInterval(r)}},[e])},y=t=>{const e=n.useRef();return n.useEffect(()=>{e.current=t},[t]),e.current},b=(t,e)=>{const[s,r]=n.useState(t);return n.useEffect(()=>{const u=setTimeout(()=>r(t),e);return()=>clearTimeout(u)},[t]),s},F=t=>{const[e,s]=n.useState(!1);return n.useEffect(()=>{const r=new IntersectionObserver(([u])=>s(u.isIntersecting));return t.current&&r.observe(t.current),()=>r.disconnect()},[t]),e},D=t=>{const e=n.useRef(null);return n.useEffect(()=>{const s=r=>{e.current&&!e.current.contains(r.target)&&t()};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[t]),e},T=({when:t,children:e=null})=>t?n.createElement(n.Fragment,null,e):null,V=({expression:t,children:e})=>{let s=null;return n.Children.forEach(e,r=>{!s&&n.isValidElement(r)&&(r.props.value===t||r.props.default)&&(s=r)}),s},C=({value:t,default:e,children:s})=>n.createElement(n.Fragment,null,s),O=({value:t,children:e})=>{const s=typeof e=="function";return n.createElement(n.Fragment,null,"return ",n.createElement(n.Fragment,null,s?e(t):e),";")};var f=(t=>(t.DESKTOP="Desktop",t.MOBILE="Mobile",t))(f||{});const m=t=>{const e=t||1024,[s,r]=n.useState(window.innerWidth>=e?"Desktop":"Mobile");return n.useEffect(()=>{const u=()=>{window.innerWidth>=e?r("Desktop"):r("Mobile")};return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),s},L=({baseWidth:t,children:e})=>m(t)===f.DESKTOP?n.createElement(n.Fragment,null,e):null,M=async(t,e=[])=>{n.useEffect(()=>{(async()=>{try{const r=await t();if(r)return r}catch(r){console.error(r)}})()},e)},z=()=>{const[t,e]=n.useState({width:0,height:0});return[n.useCallback(r=>{if(r!==null){const u=()=>{e({width:r.offsetWidth,height:r.offsetHeight})};u();const c=new ResizeObserver(u);return c.observe(r),()=>c.disconnect()}},[]),t]},K=t=>{const[e,s]=n.useState([]);n.useEffect(()=>{const r=({key:c})=>{e.includes(c)||s(i=>[...i,c])},u=({key:c})=>{s(i=>i.filter(l=>l!==c))};return document.addEventListener("keyup",u),document.addEventListener("keydown",r),()=>{document.removeEventListener("keyup",u),document.removeEventListener("keydown",r)}},[e]),n.useEffect(()=>{t.forEach(({keys:r,callback:u})=>{r.every(i=>e.includes(i))&&u()})},[e,t])},N=({delay:t,children:e})=>{const[s,r]=n.useState(!1);return n.useEffect(()=>{const u=setTimeout(()=>r(!0),t);return()=>clearTimeout(u)}),s?n.createElement(n.Fragment,null,e):null},g=["mousemove","keydown","click","scroll"],$=(t=3e4)=>{const[e,s]=n.useState(!1);return n.useEffect(()=>{console.log("idle state: ",e)},[e]),n.useEffect(()=>{let r;const u=()=>{s(!1),clearTimeout(r),r=setTimeout(()=>s(!0),t)},c=()=>{u()};for(const i of g)window.addEventListener(i,c);return u(),()=>{for(const i of g)window.removeEventListener(i,c);clearTimeout(r)}},[t]),e},A=n.memo(({deps:t,children:e})=>e,(t,e)=>!t.deps||!e.deps||t.deps.length!==e.deps.length?!1:t.deps.every((s,r)=>s===e.deps[r])),J=(t,e)=>{const s=()=>{try{const l=localStorage.getItem(t);return l?JSON.parse(l):e}catch(l){return console.error(`Error parsing localStorage item "${t}":`,l),e}},[r,u]=n.useState(s);return[r,l=>{try{u(l),localStorage.setItem(t,JSON.stringify(l))}catch(d){console.error(`Error setting localStorage item "${t}":`,d)}},()=>{try{u(e),localStorage.removeItem(t)}catch(l){console.error(`Error removing localStorage item "${t}":`,l)}}]},W=(t,e)=>{const s=()=>{try{const l=sessionStorage.getItem(t);return l?JSON.parse(l):e}catch(l){return console.error(`Error parsing sessionStorage item "${t}":`,l),e}},[r,u]=n.useState(s);return[r,l=>{try{u(l),sessionStorage.setItem(t,JSON.stringify(l))}catch(d){console.error(`Error setting sessionStorage item "${t}":`,d)}},()=>{try{u(e),sessionStorage.removeItem(t)}catch(l){console.error(`Error removing sessionStorage item "${t}":`,l)}}]},j=(t,e)=>{const[s,r]=n.useState(void 0),[u,c]=n.useState(!0),[i,l]=n.useState(void 0),[d,U]=n.useState(0),q=()=>U(E=>E+1);return n.useEffect(()=>{(async()=>{c(!0),l(void 0);try{const a=await fetch(t,{method:(e==null?void 0:e.method)||"GET",headers:{"Content-Type":"application/json",...e==null?void 0:e.headers},body:e!=null&&e.body?JSON.stringify(e.body):null});if(!a.ok)throw new Error(`Error: ${a.status}`);const G=await a.json();r(G)}catch(a){l(a.message||"An error occurred")}finally{c(!1)}})()},[t,d]),{data:s,error:i,loading:u,refetch:q}},P=({condition:t,renderIf:e,renderElse:s})=>t?n.createElement(n.Fragment,null,e):n.createElement(n.Fragment,null,s),k=({dev:t,hml:e,prod:s})=>{switch(process.env.NODE_ENV){case"dev":return n.createElement(n.Fragment,null,t);case"hml":return n.createElement(n.Fragment,null,e);case"prod":return n.createElement(n.Fragment,null,s);default:return null}},B=({eachIn:t,mapTo:e})=>n.createElement(n.Fragment,null,t.map(e)),H=({baseWidth:t,children:e})=>m(t)===f.MOBILE?n.createElement(n.Fragment,null,e):null;o.Case=C,o.Delayed=N,o.Desktop=L,o.ElseIf=P,o.EnvSwitch=k,o.For=h,o.If=S,o.Map=B,o.Memoized=A,o.Mobile=H,o.Show=T,o.Switch=V,o.With=O,o.useAsyncEffect=M,o.useClickOutside=D,o.useDebounce=b,o.useDevice=m,o.useElementSize=z,o.useFetch=j,o.useIdleDetection=$,o.useInterval=I,o.useIsIntersectingScreen=F,o.useKeyCombo=K,o.useLocalStorage=J,o.useMounted=v,o.usePrevious=y,o.useSessionStorage=W,o.useToggle=w,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
