import{m as f,c as b,r as y,j as n}from"./app-Bw_e-JR5.js";import{S as x,H as k,A as j,C as _,a as C,B,b as w,c as E}from"./Hero-DWnuDcmu.js";import"./InputError-U8fw-_A8.js";const p=[{key:"title",getter:t=>t.getTitle()},{key:"html",getter:t=>t.getHtmlContainer()},{key:"confirmButtonText",getter:t=>t.getConfirmButton()},{key:"denyButtonText",getter:t=>t.getDenyButton()},{key:"cancelButtonText",getter:t=>t.getCancelButton()},{key:"footer",getter:t=>t.getFooter()},{key:"closeButtonHtml",getter:t=>t.getCloseButton()},{key:"iconHtml",getter:t=>t.getIconContent()},{key:"loaderHtml",getter:t=>t.getLoader()}],g=()=>{};function O(t){function m(e){const s={},o={},r=p.map(c=>c.key);return Object.entries(e).forEach(c=>{let[l,i]=c;r.includes(l)&&f.isValidElement(i)?(s[l]=i,o[l]=" "):o[l]=i}),[s,o]}function u(e,s){Object.entries(s).forEach(o=>{let[r,c]=o;const i=p.find(h=>h.key===r).getter(t),a=b(i);a.render(c),e.__roots.push(a)})}function d(e){e.__roots.forEach(s=>{s.unmount()}),e.__roots=[]}return class extends t{static argsToParams(e){if(f.isValidElement(e[0])||f.isValidElement(e[1])){const s={};return["title","html","icon"].forEach((o,r)=>{e[r]!==void 0&&(s[o]=e[r])}),s}else return t.argsToParams(e)}_main(e,s){this.__roots=[],this.__params=Object.assign({},s,e);const[o,r]=m(this.__params),c=r.willOpen||g,l=r.didOpen||g,i=r.didDestroy||g;return super._main(Object.assign({},r,{willOpen:a=>{u(this,o),c(a)},didOpen:a=>{setTimeout(()=>{l(a)})},didDestroy:a=>{i(a),d(this)}}))}update(e){Object.assign(this.__params,e),d(this);const[s,o]=m(this.__params);super.update(o),u(this,s)}}}function S({message:t,siteKey:m}){const u=O(E),[d,e]=y.useState(!1),s=m;return console.log("Message:",t),y.useEffect(()=>{t&&t==="Sua mensagem foi enviada com sucesso!"&&!d&&(u.fire({title:"Success!",text:t,icon:"success",confirmButtonColor:"#3085d6"}),e(!0))},[t,d,u]),n.jsx(n.Fragment,{children:n.jsxs(x,{children:[n.jsx(k,{heroClass:"flex justify-center bg-defaultW w-full sm:flex-col sm:items-center md:flex-row md:space-around dark:bg-defaultB"}),n.jsx(j,{aboutClass:"w-full grid-cols-2 justify-evenly bg-secondary dark:bg-secondary"}),n.jsx(_,{coursesClass:"w-full bg-defaultW dark:bg-defaultB"}),n.jsx(C,{ctaClass:"w-full bg-primary dark:bg-secondary"}),n.jsx(B,{blogClass:"w-full bg-defaultW dark:bg-defaultB"}),n.jsx(w,{contactClass:"w-full grid-cols-2 justify-evenly bg-secondary dark:bg-secondary",message:t,siteKey:s})]})})}export{S as default};
