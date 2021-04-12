(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(167)),i={title:"Per-Post Options",sidebar:"Per-post Options",description:"Per-post options for the Listed blogging platform.",keywords:["standard notes","docs","notes app","end-to-end encryption","listed blogging platform","per-post options"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"listed/options",id:"listed/options",isDocsHomePage:!1,title:"Per-Post Options",description:"Per-post options for the Listed blogging platform.",source:"@site/docs/listed/options.md",slug:"/listed/options",permalink:"/listed/options",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/listed/options.md",version:"current",lastUpdatedAt:1608761785,formattedLastUpdatedAt:"12/23/2020",sidebar:"mainSidebar",previous:{title:"How do I change the colors, fonts, and general layout of my Listed blog?",permalink:"/listed/styles/"},next:{title:"How to contribute",permalink:"/contribute"}},s=[{value:"Custom Dates",id:"custom-dates",children:[]},{value:"Canonical URL",id:"canonical-url",children:[]},{value:"Hide Post",id:"hide-post",children:[]},{value:"Separate Pages",id:"separate-pages",children:[]},{value:"JSON",id:"json",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can add the following metadata structure to the beginning of your note to select options for each note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\noption: value\n---\n\nYour story...\n")),Object(r.b)("h2",{id:"custom-dates"},"Custom Dates"),Object(r.b)("p",null,"To change the date that appears on your post, add this metadata to the beginning of your note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\ncreated_at: 2020-06-30 17:08:05\n---\n\nYour story...\n")),Object(r.b)("h2",{id:"canonical-url"},"Canonical URL"),Object(r.b)("p",null,"If you are importing a post from another location (such as Medium or another blog), you may want to oset a ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Canonical_link_element"},"canonical URL"),". To do so, add this metadata to the beginning of your note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\ncanonical: https://mysite.com/blog/1/post-im-importing\n---\n\nYour story...\n")),Object(r.b)("h2",{id:"hide-post"},"Hide Post"),Object(r.b)("p",null,"To hide a post from your main blog, add this metadata to the beginning of your note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\nhidden: true\n---\n\nYour story...\n")),Object(r.b)("p",null,"You can also hide the body of all your stories from the main feed so that only titles show using CSS:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Follow the steps to ",Object(r.b)("a",{parentName:"p",href:"/listed/styles"},"create a CSS theme")," for your blog.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the following CSS:"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"---\nmetatype: css\n---\n\n.post-body {\n  display: none;\n}\n\n#single-post-show .post-body {\n  display: inline;\n}\n")),Object(r.b)("h2",{id:"separate-pages"},"Separate Pages"),Object(r.b)("p",null,"To add a separate page (e.g., for Contact information or a photo gallery), add this metadata to the beginning of your note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\npage: true\n---\n\nYour story...\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Publish the note to your blog.")),Object(r.b)("p",null,"The title of your note will be used as the page title and as the link text in the navigation menu of your blog."),Object(r.b)("h2",{id:"json"},"JSON"),Object(r.b)("p",null,"To server your note as a JavaScript Object Notation (JSON) file (e.g., to ",Object(r.b)("a",{parentName:"p",href:"/extensions/publishing"},"publish an extension"),"), add this metadata to the beginning of your note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-md"},"---\nmetatype: json\n---\n")),Object(r.b)("p",null,"JSON notes are always published as private links."))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);