(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(177));const i={slug:"managing-options/",id:"managing-options",title:"Managing options",sidebar_label:"Managing options",description:"Manage options for your Standard Notes Sync server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","managing options"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},o={unversionedId:"self-hosting/managing-options",id:"self-hosting/managing-options",isDocsHomePage:!1,title:"Managing options",description:"Manage options for your Standard Notes Sync server.",source:"@site/docs/self-hosting/managing-options.md",slug:"/self-hosting/managing-options/",permalink:"/self-hosting/managing-options/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/managing-options.md",version:"current",lastUpdatedAt:1618264295,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"Managing options",sidebar:"technicalSidebar",previous:{title:"Self-Hosting on a Raspberry Pi",permalink:"/self-hosting/rapberry-pi/"},next:{title:"Securing HTTP traffic of your Sync server",permalink:"/self-hosting/https-support/"}},s=[{value:"Disable new user registrations",id:"disable-new-user-registrations",children:[]},{value:"Admin API",id:"admin-api",children:[{value:"Authenticating requests",id:"authenticating-requests",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Available actions",id:"available-actions",children:[]}]}],l={toc:s};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The docs below are not up-to-date. Please read the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server#readme"},"README.md of the syncing-server repository")," for the most up-to-date instructions. Please ",Object(r.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server/issues"},"open an issue")," if you have any issues."),Object(r.b)("p",{parentName:"div"},"The syncing-server is being rewritten in TypeScript. The new syncing-server is not ready for self-hosting, but you can follow its progress ",Object(r.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server-js"},"on GitHub"),". When the new server is available for self-hosting, the docs below will be updated."))),Object(r.b)("h2",{id:"disable-new-user-registrations"},"Disable new user registrations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set the ",Object(r.b)("inlineCode",{parentName:"li"},"DISABLE_USER_REGISTRATION")," environment variable to ",Object(r.b)("inlineCode",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ol"},"Restart the ",Object(r.b)("inlineCode",{parentName:"li"},"syncing-server"))),Object(r.b)("h2",{id:"admin-api"},"Admin API"),Object(r.b)("h3",{id:"authenticating-requests"},"Authenticating requests"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set the ",Object(r.b)("inlineCode",{parentName:"li"},"ADMIN_IPS")," environment variable with a list of IPs of the authorized machines that can access the Admin API."),Object(r.b)("li",{parentName:"ol"},"Set the ",Object(r.b)("inlineCode",{parentName:"li"},"ADMIN_KEY")," environment variable. This should be a secret key only known by you.")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"To use the API, just make a request from an authorized IP address defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"ADMIN_IPS")," list. You also need to pass the ",Object(r.b)("inlineCode",{parentName:"p"},"ADMIN_KEY")," value in every request into the ",Object(r.b)("inlineCode",{parentName:"p"},"admin_key")," parameter."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"POST /admin/delete_account?admin_key=theadminkey&email=the-email@domain.com\nHost: your-self-hosted-syncing-server.com\n")),Object(r.b)("h3",{id:"available-actions"},"Available actions"),Object(r.b)("p",null,"Below is a list of endpoints that are available withing the Admin API:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Method"),Object(r.b)("th",{parentName:"tr",align:null},"URL"),Object(r.b)("th",{parentName:"tr",align:null},"Params"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Successful response code"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"POST")),Object(r.b)("td",{parentName:"tr",align:null},"/admin/delete_account"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"email")),Object(r.b)("td",{parentName:"tr",align:null},"Deletes an account with the specified ",Object(r.b)("inlineCode",{parentName:"td"},"email")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"200"))))))}c.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);