import{j as e,L as _,c as a,a as b,b as P,R as H,d as N,T as c,C as l,u as j}from"./index-CZjtPKYw.js";/* empty css                                */var L="vocs_Button_button",y="vocs_Button_button_accent";function M({children:t,className:n,href:i,variant:f}){return e.jsx(_,{className:a(n,L,f==="accent"&&y),href:i,variant:"styleless",children:t})}var C="vocs_HomePage",B="vocs_HomePage_logo",k="vocs_HomePage_title",R="vocs_HomePage_tagline",T="vocs_HomePage_description",D="vocs_HomePage_buttons",$="vocs_HomePage_button",w="vocs_HomePage_tabs",E="vocs_HomePage_tabsList",m="vocs_HomePage_tabsContent",u="vocs_HomePage_packageManager";function d({children:t,className:n}){return e.jsx("div",{className:a(n,C),children:t})}function v({className:t}){const{logoUrl:n,title:i}=b();return n?e.jsx("div",{className:a(t,B),children:e.jsx(P,{})}):e.jsx("h1",{className:a(t,k),children:i})}function g({children:t,className:n}){return e.jsx("div",{className:a(n,R),children:t})}function r({children:t,className:n}){return e.jsx("div",{className:a(n,T),children:t})}function x({children:t,className:n}){return e.jsx("div",{className:a(n,D),children:t})}function o(t){return e.jsx(M,{...t,className:a($,t.className)})}function h({name:t,type:n="install"}){return e.jsxs(H,{className:w,defaultValue:"npm",children:[e.jsxs(N,{className:E,children:[e.jsx(c,{value:"npm",children:"npm"}),e.jsx(c,{value:"pnpm",children:"pnpm"}),e.jsx(c,{value:"yarn",children:"yarn"})]}),e.jsxs(l,{className:m,value:"npm",children:[e.jsx("span",{className:u,children:"npm"})," ",n==="init"?"init":"install"," ",t]}),e.jsxs(l,{className:m,value:"pnpm",children:[e.jsx("span",{className:u,children:"pnpm"})," ",n==="init"?"create":"add"," ",t]}),e.jsxs(l,{className:m,value:"yarn",children:[e.jsx("span",{className:u,children:"yarn"})," ",n==="init"?"create":"add"," ",t]})]})}const G=Object.freeze(Object.defineProperty({__proto__:null,Button:o,Buttons:x,Description:r,InstallPackage:h,Logo:v,Root:d,Tagline:g},Symbol.toStringTag,{value:"Module"})),I={layout:"landing"};function p(t){const n={a:"a",p:"p",...j(),...t.components};return G||s("HomePage",!1),o||s("HomePage.Button",!0),x||s("HomePage.Buttons",!0),r||s("HomePage.Description",!0),h||s("HomePage.InstallPackage",!0),v||s("HomePage.Logo",!0),d||s("HomePage.Root",!0),g||s("HomePage.Tagline",!0),e.jsxs(d,{children:[e.jsx(v,{}),e.jsx(g,{children:"Tevm Node"}),e.jsx(h,{name:"tevm",type:"install"}),e.jsx(r,{children:"An in browser ethereum node for JavaScript"}),e.jsxs(x,{children:[e.jsx(o,{href:"/getting-started",variant:"accent",children:"Get started"}),e.jsx(o,{href:"/examples/viem",children:"Viem Guide"}),e.jsx(o,{href:"https://github.com/evmts/tevm-monorepo",children:"GitHub"})]}),e.jsx(r,{children:e.jsxs(n.p,{children:["Here's our ",e.jsx(n.a,{href:"https://node.tevm.sh/llms.txt",children:"documentation as plain text"})," for providing context to LLMs"]})})]})}function O(t={}){const{wrapper:n}={...j(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}function s(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{O as default,I as frontmatter};
