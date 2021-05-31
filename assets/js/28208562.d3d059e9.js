(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(176)),i={slug:"intro/",id:"intro",title:"Intro to Extensions",sidebar_label:"Intro to Extensions",description:"Documentation for the Standard Notes Extensions.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"extensions/intro",id:"extensions/intro",isDocsHomePage:!1,title:"Intro to Extensions",description:"Documentation for the Standard Notes Extensions.",source:"@site/docs/extensions/intro.md",sourceDirName:"extensions",slug:"/extensions/intro/",permalink:"/extensions/intro/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/extensions/intro.md",version:"current",lastUpdatedAt:1618265984,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"Intro to Extensions",frontMatter:{slug:"intro/",id:"intro",title:"Intro to Extensions",sidebar_label:"Intro to Extensions",description:"Documentation for the Standard Notes Extensions.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Auth API",permalink:"/specification/auth"},next:{title:"Building Editors for Standard Notes",permalink:"/extensions/editors/"}},p=[{value:"Philosophy",id:"philosophy",children:[]},{value:"Sustainability",id:"sustainability",children:[]},{value:"Types",id:"types",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"philosophy"},"Philosophy"),Object(a.b)("p",null,"Standard Notes is built on the core principle of simplicity, in hopes of optimizing for longevity. This requires a different sort of architecture and long-term thinking. In today's environment, adding new features can be as easy as installing an external library and hooking it up with just a few lines of code. It's all too common that developers, in hopes of attracting more and more users, add more and more features to their app, until inevitably, the app bloats to oblivion and becomes impossible to maintain."),Object(a.b)("p",null,"Rather than tightly couple every feature we dream of building for Standard Notes into the core application code, we chose to design Standard Notes to be thoroughly extensible. This allows us to experiment with new features without polluting the core application and threatening its stability and survivability."),Object(a.b)("h2",{id:"sustainability"},"Sustainability"),Object(a.b)("p",null,"The Extensions model is also our main fundraising method, and allows us to to offer our core privacy experience at no cost, while sustaining future development by offering advanced features through our ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extended"},"Extended")," program."),Object(a.b)("p",null,"Most of our extensions are ",Object(a.b)("a",{parentName:"p",href:"https://github.com/sn-extensions"},"open-source")," and available for self-hosting. You can also learn to develop your own extensions by following the guides on this site. However, we encourage you to support the sustainability and future development of this project by ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions"},"purchasing a subscription"),"."),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("p",null,"There are 3 main types of extensions:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Components"),": Components are user interface elements that completely swap out areas of Standard Notes with custom behavior. Components include editors (such as the ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/markdown-pro"},"Markdown Pro Editor")," and ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/plus-editor"},"Plus Editor"),"), editor stack components (like the ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/action-bar"},"Action Bar")," and ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/filesafe"},"FileSafe"),"), and other components (like ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/folders"},"Folders")," and ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/quick-tags"},"Quick Tags"),")."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/extensions/building-an-extension"},"Develop a component \u2192")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Themes"),": Themes change the visual appearance of Standard Notes, and are compatible on all platforms, including desktop, web, and mobile. Some of our own themes include ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/midnight"},"Midnight")," and ",Object(a.b)("a",{parentName:"p",href:"https://standardnotes.org/extensions/solarized-dark"},"Solarized Dark"),"."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/extensions/themes"},"Develop a theme \u2192")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Actions"),": Actions are an API-based extension interface that are accessible via the Actions menu in the note pane. Actions are triggered manually by the user by selecting an action from the list, and have the ability to interface with the current note and send or retrieve content from a remote server. We use actions for places such as ",Object(a.b)("a",{parentName:"p",href:"https://listed.to"},"Listed"),", which is our blogging platform for Standard Notes users."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/extensions/actions"},"Develop an action \u2192"))))))}l.isMDXComponent=!0}}]);