"use strict";(self.webpackChunkinfo=self.webpackChunkinfo||[]).push([[225],{332:(i,e,t)=>{t.d(e,{A:()=>r});var a=t(5043),n=t(7550),s=t(579);const r=i=>{let{text:e}=i;const[t,r]=(0,a.useState)(!0);(0,a.useEffect)((()=>{const i=setTimeout((()=>{r(!1)}),1e3);return()=>clearTimeout(i)}),[]);return(0,s.jsx)(n.P.h2,{className:"motion-title my-4",variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8}}},initial:"hidden",animate:t?"hidden":"visible",children:t?"Loading...":e})}},5225:(i,e,t)=>{t.r(e),t.d(e,{default:()=>l});t(5043);var a=t(5040),n=t(658),s=t(332),r=t(7550),c=t(579);const l=()=>{const{projectsData:i}=n.A,e={initial:{opacity:0,scale:.8,y:50},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:-50}};return(0,c.jsxs)("section",{id:"projects my-4",children:[(0,c.jsx)(s.A,{text:"Projects"}),(0,c.jsx)(r.P.div,{className:"row",variants:{animate:{transition:{staggerChildren:.2}}},initial:"initial",animate:"animate",children:i.map(((i,t)=>(0,c.jsx)(r.P.div,{className:"col-md-6",variants:e,children:(0,c.jsx)(a.A,{title:i.title,description:i.description,gitLink:i.gitLink,livePreview:i.livePreview,previewImage:i.previewImage})},t)))})]})}}}]);
//# sourceMappingURL=225.171e292e.chunk.js.map