(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(177)),c={title:"Batch Manager",sidebar_label:"Batch Manager",description:"How to use the Standard Notes Batch Manager.",keywords:["standard notes","docs","notes app","end-to-end encryption","batch manager"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},i={unversionedId:"usage/batch-manager",id:"usage/batch-manager",isDocsHomePage:!1,title:"Batch Manager",description:"How to use the Standard Notes Batch Manager.",source:"@site/docs/usage/batch-manager.md",slug:"/usage/batch-manager",permalink:"/usage/batch-manager",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/batch-manager.md",version:"current",lastUpdatedAt:1594535914,formattedLastUpdatedAt:"7/11/2020",sidebar_label:"Batch Manager"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Development",id:"development",children:[]},{value:"License",id:"license",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The Batch Manager can be used to organize batches of actions, notes, server extensions (backup options), components, themes, user preferences, and tags."),Object(o.b)("p",null,"For example, you can use the Batch Manager to find and delete duplicate notes or multiple themes and editors."),Object(o.b)("p",null,"The main way to reset your account is with the ",Object(o.b)("a",{parentName:"p",href:"https://standardnotes.org/reset"},"reset tool"),". The Batch Manager is an alternative method."),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,"The Batch Manager is written in JavaScript and is compiled with Webpack."),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"The Standard Notes Batch Manager is licensed under the GNU ",Object(o.b)("a",{parentName:"p",href:"https://github.com/sn-extensions/batch-manager/blob/master/LICENSE"},"AGPL-3.0-or-later"),"."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/sn-extensions/batch-manager"},"GitHub"))))}l.isMDXComponent=!0}}]);