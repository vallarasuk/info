"use strict";(self.webpackChunkinfo=self.webpackChunkinfo||[]).push([[76],{3076:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(9439),i=r(2791),a=r(1413),c=r(5987),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=i.createContext({}),l=!0;function d(e){for(var t,r,d,u=e.count,m=void 0===u?1:u,p=e.wrapper,h=e.className,f=e.containerClassName,v=e.containerTestId,b=e.circle,g=void 0!==b&&b,j=e.style,x=(0,c.Z)(e,s),y=i.useContext(o),N=(0,a.Z)({},x),w=0,k=Object.entries(x);w<k.length;w++){var Z=(0,n.Z)(k[w],2),C=Z[0];"undefined"===typeof Z[1]&&delete N[C]}var E=(0,a.Z)((0,a.Z)((0,a.Z)({},y),N),{},{circle:g}),P=(0,a.Z)((0,a.Z)({},j),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,i=e.height,a=e.borderRadius,c=e.circle,s=e.direction,o=e.duration,d=e.enableAnimation,u=void 0===d?l:d,m={};return"rtl"===s&&(m["--animation-direction"]="reverse"),"number"===typeof o&&(m["--animation-duration"]="".concat(o,"s")),u||(m["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(m.width=n),"string"!==typeof i&&"number"!==typeof i||(m.height=i),"string"!==typeof a&&"number"!==typeof a||(m.borderRadius=a),c&&(m.borderRadius="50%"),"undefined"!==typeof t&&(m["--base-color"]=t),"undefined"!==typeof r&&(m["--highlight-color"]=r),m}(E)),I="react-loading-skeleton";h&&(I+=" ".concat(h));for(var L=null!==(t=E.inline)&&void 0!==t&&t,R=[],T=Math.ceil(m),A=0;A<T;A++){var _=P;if(T>m&&A===T-1){var D=null!==(r=_.width)&&void 0!==r?r:"100%",F=m%1,G="number"===typeof D?D*F:"calc(".concat(D," * ").concat(F,")");_=(0,a.Z)((0,a.Z)({},_),{},{width:G})}var H=i.createElement("span",{className:I,style:_,key:A},"\u200c");L?R.push(H):R.push(i.createElement(i.Fragment,{key:A},H,i.createElement("br",null)))}return i.createElement("span",{className:f,"data-testid":v,"aria-live":"polite","aria-busy":null!==(d=E.enableAnimation)&&void 0!==d?d:l},p?R.map((function(e,t){return i.createElement(p,{key:t},e)})):R)}var u=r(1087),m=r(184),p=function(e){var t=e.title,r=e.description,n=e.gitLink,i=e.livePreview,a=e.previewImage;return console.log("img----------------------------\x3e",a),(0,m.jsxs)("div",{className:"card project-card",children:[a&&(0,m.jsx)("img",{src:a,alt:t||"Project",className:"card-img-top"}),(0,m.jsxs)("div",{className:"card-body",children:[t?(0,m.jsx)("h5",{className:"card-title",children:t}):(0,m.jsx)(d,{width:150,duration:1.5}),r?(0,m.jsx)("p",{className:"card-text",children:r}):(0,m.jsx)(d,{count:3,duration:1.5}),n&&(0,m.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mr-2",children:"GitHub"}),i&&(0,m.jsx)(u.rU,{to:i,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:"Live Preview"})]})]})},h=r(8185),f=function(){var e=(0,i.useState)(!0),t=(0,n.Z)(e,2),r=t[0],a=t[1],c=h.Z.projectsData;return(0,i.useEffect)((function(){setTimeout((function(){a(!1)}),2e3)}),[]),(0,m.jsxs)("section",{children:[(0,m.jsx)("h2",{children:"Projects"}),(0,m.jsx)("div",{className:"row",children:r?c.map((function(e,t){return(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsx)("div",{className:"card project-card",children:(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)(d,{height:40,count:1}),(0,m.jsx)(d,{count:3})]})})},t)})):c.map((function(e,t){return(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsx)(p,{title:e.title,description:e.description,gitLink:e.gitLink,livePreview:e.livePreview,previewImage:e.previewImage})},t)}))})]})}}}]);
//# sourceMappingURL=76.3ac8304e.chunk.js.map