"use strict";(self.webpackChunkinfo=self.webpackChunkinfo||[]).push([[147],{6147:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var n=a(5043),t=a(722),r=a(3519),l=a(5483),o=a(3814),c=a(1072),i=a(8602),m=a(4282),d=a(241),u=a(344),h=a(579);const j=()=>{const[e,s]=(0,n.useState)({name:"",email:"",subject:"",message:""}),[a,j]=(0,n.useState)(""),[x,A]=(0,n.useState)(null),[p,b]=(0,n.useState)(!1),g=a=>{const{name:n,value:t}=a.target;s({...e,[n]:t})};return(0,h.jsxs)(r.A,{className:"my-4",children:[(0,h.jsx)("h2",{className:"text-center",children:"Contact Us"}),a&&(0,h.jsx)(l.A,{variant:"info",children:a}),(0,h.jsxs)(o.A,{onSubmit:async a=>{if(a.preventDefault(),x)try{200===(await u.Ay.send("service_85to4es","template_8nsbhdm",{from_name:e.name,from_email:e.email,subject:e.subject,message:e.message},"NZQFyq83U0oJ3qnQR")).status?(j("Email sent successfully!"),await(async(e,s)=>{const a={recipientName:s,recipientEmail:e};try{await u.Ay.send("service_85to4es","template_8nsbhdm",a,"NZQFyq83U0oJ3qnQR")}catch(n){console.error("Error sending auto-reply: ",n)}})(e.email,e.name),s({name:"",email:"",subject:"",message:""})):j("Oops! Something went wrong.")}catch(n){console.error("Error sending email: ",n),j("Oops! Something went wrong.")}else j("Please complete the reCAPTCHA.")},children:[(0,h.jsxs)(c.A,{className:"mb-3",children:[(0,h.jsx)(i.A,{children:(0,h.jsxs)(o.A.Group,{controlId:"name",children:[(0,h.jsx)(o.A.Label,{children:"Name:"}),(0,h.jsx)(o.A.Control,{type:"text",name:"name",value:e.name,onChange:g,required:!0})]})}),(0,h.jsx)(i.A,{children:(0,h.jsxs)(o.A.Group,{controlId:"email",children:[(0,h.jsx)(o.A.Label,{children:"Email:"}),(0,h.jsx)(o.A.Control,{type:"email",name:"email",value:e.email,onChange:g,required:!0})]})})]}),(0,h.jsxs)(o.A.Group,{controlId:"subject",className:"mb-3",children:[(0,h.jsx)(o.A.Label,{children:"Subject:"}),(0,h.jsx)(o.A.Control,{type:"text",name:"subject",value:e.subject,onChange:g,required:!0})]}),(0,h.jsxs)(o.A.Group,{controlId:"message",className:"mb-3",children:[(0,h.jsx)(o.A.Label,{children:"Message:"}),(0,h.jsx)(o.A.Control,{as:"textarea",rows:5,name:"message",value:e.message,onChange:g,required:!0})]}),(0,h.jsxs)(o.A.Group,{controlId:"recaptcha",className:"mb-3",children:[(0,h.jsx)(t.A,{sitekey:"6LeeeKMnAAAAAOy2r-gBpMJNUVdL6Kw5IRL2Iz_W ",onChange:e=>{A(e)}}),!x&&(0,h.jsx)("div",{className:"text-danger",children:"Please complete the reCAPTCHA."})]}),(0,h.jsx)(m.A,{type:"submit",variant:"primary",children:"Send Email"})]}),(0,h.jsxs)(d.A,{show:p,onHide:()=>b(!1),centered:!0,children:[(0,h.jsx)(d.A.Header,{closeButton:!0,children:(0,h.jsx)(d.A.Title,{children:"Thank You!"})}),(0,h.jsx)(d.A.Body,{children:(0,h.jsxs)("p",{children:["Hi ",(0,h.jsx)("strong",{children:e.name}),",",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"We've received your message and will get back to you as soon as possible. We appreciate your interest and look forward to assisting you with your inquiry.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"If you have any urgent matters, please feel free to contact us at",(0,h.jsx)("a",{href:"mailto:contact@vallarasuk.com",children:"contact@vallarasuk.com"}),"."]})})]})]})}}}]);
//# sourceMappingURL=147.7d5bb8b4.chunk.js.map