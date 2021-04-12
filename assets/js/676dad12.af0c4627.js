(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(167)),o={slug:"getting-started/",id:"getting-started",title:"Getting Started with Self-hosting",sidebar_label:"Getting Started",description:"How to get started with self-hosting a Standard Notes syncing server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"self-hosting/getting-started",id:"self-hosting/getting-started",isDocsHomePage:!1,title:"Getting Started with Self-hosting",description:"How to get started with self-hosting a Standard Notes syncing server.",source:"@site/docs/self-hosting/getting-started.md",slug:"/self-hosting/getting-started/",permalink:"/self-hosting/getting-started/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/getting-started.md",version:"current",lastUpdatedAt:1618264295,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"Getting Started",sidebar:"technicalSidebar",next:{title:"Self-Hosting with Heroku",permalink:"/self-hosting/heroku/"}},c=[{value:"Syncing Server",id:"syncing-server",children:[{value:"Issues",id:"issues",children:[]}]},{value:"Web application",id:"web-application",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"syncing-server"},"Syncing Server"),Object(i.b)("p",null,"We offer free and fast sync for unlimited devices to both free and paid users. If you are interested in hosting your own syncing server, you are welcome to do so. We offer the following options:"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The docs below are not up-to-date. Please read the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server#readme"},"README.md of the syncing-server repository")," for the most up-to-date instructions. Please ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server/issues"},"open an issue")," if you have any issues."),Object(i.b)("p",{parentName:"div"},"The syncing-server is being rewritten in TypeScript. The new syncing-server is not ready for self-hosting, but you can follow its progress ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server-js"},"on GitHub"),". When the new server is available for self-hosting, the docs below will be updated."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/self-hosting/heroku/"},"Heroku")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/self-hosting/ec2-nginx/"},"AWS EC2 and Nginx")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/self-hosting/rapberry-pi/"},"Raspberry Pi"))),Object(i.b)("h3",{id:"issues"},"Issues"),Object(i.b)("p",null,"If you have any issues with setting up your syncing server, please ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server/issues"},"open an issue on GitHub"),"."),Object(i.b)("h2",{id:"web-application"},"Web application"),Object(i.b)("p",null,"If you would like to self-host the actual Standard Notes web application, visit the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/web"},"repository for the web app on GitHub"),"."))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(g,s(s({ref:t},l),{},{components:n})):a.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);