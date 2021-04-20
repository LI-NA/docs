(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(180)),l=o(181),s={slug:"styles/",id:"styles",title:"How do I change the colors, fonts, and general layout of my Listed blog?",sidebar_label:"Customize Styles",description:"How to customize styles (colors, fonts, and general layout) of your Listed blog.",keywords:["standard notes","docs","notes app","end-to-end encryption","listed blogging platform","customize styles"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"listed/styles",id:"listed/styles",isDocsHomePage:!1,title:"How do I change the colors, fonts, and general layout of my Listed blog?",description:"How to customize styles (colors, fonts, and general layout) of your Listed blog.",source:"@site/docs/listed/styles.md",sourceDirName:"listed",slug:"/listed/styles/",permalink:"/listed/styles/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/listed/styles.md",version:"current",lastUpdatedAt:1618507954,formattedLastUpdatedAt:"4/15/2021",sidebar_label:"Customize Styles",frontMatter:{slug:"styles/",id:"styles",title:"How do I change the colors, fonts, and general layout of my Listed blog?",sidebar_label:"Customize Styles",description:"How to customize styles (colors, fonts, and general layout) of your Listed blog.",keywords:["standard notes","docs","notes app","end-to-end encryption","listed blogging platform","customize styles"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"What is my Listed guestbook?",permalink:"/listed/guestbook"},next:{title:"Per-Post Options",permalink:"/listed/options"}},i=[{value:"How to stylize your Listed blog with custom CSS",id:"how-to-stylize-your-listed-blog-with-custom-css",children:[]},{value:"Examples",id:"examples",children:[{value:"Custom Fonts",id:"custom-fonts",children:[]},{value:"Cover Style",id:"cover-style",children:[]},{value:"Layout Style",id:"layout-style",children:[]},{value:"Content Width",id:"content-width",children:[]}]}],d={toc:i};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.a,{canonicalUrl:"https://standardnotes.org/help/66/how-do-i-change-the-colors-fonts-and-general-layout-of-my-listed-blog",mdxType:"CanonicalUrl"}),Object(a.b)("p",null,"You can use custom CSS to stylize your Listed blog."),Object(a.b)("h2",{id:"how-to-stylize-your-listed-blog-with-custom-css"},"How to stylize your Listed blog with custom CSS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a new note in Standard Notes and call it ",Object(a.b)("inlineCode",{parentName:"li"},"theme.css")," (name can be anything)."),Object(a.b)("li",{parentName:"ol"},"Use the metadata structure below, overriding any of the variables with your desired color values."),Object(a.b)("li",{parentName:"ol"},"Publish the note to your blog (the note won't actually appear in your blog, but the style changes will apply immediately).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"---\nmetatype: css\n---\n\n:root {\n  --dimmed-text-color: rgba(24, 24, 24, 0.16);\n  --dimmed-border-color: #f8f9fc;\n  --background-color: #f8f9fc;\n  --body-text-color: #181818;\n  --post-title-color: var(--body-text-color);\n  --post-date-color: var(--body-text-color);\n  --post-text-color: var(--body-text-color);\n  --page-menu-link-color: var(--link-color);\n  --header-author-name: #00208f;\n  --header-listed-name: #00208f;\n  --more-from-border-color: var(--dimmed-border-color);\n  --bio-color: var(--body-text-color);\n  --wordcount-color: #00208f;\n  --website-color: var(--link-color);\n  --twitter-color: var(--link-color);\n  --link-color: #00208f;\n  --header-border-color: #00208f;\n  --post-code-background-color: #f7f7f9;\n  --post-code-border-color: #e1e1e8;\n  --card-post-background-color: #f8f9fc;\n  --card-post-border-color: rgba(24, 24, 24, 0.16);\n  --post-background-color: #fff;\n  --author-posts-background-color: #fff;\n  --more-posts-background-color: #f8f9fc;\n  --more-posts-post-background-color: #fff;\n  --footer-background-color: var(--background-color);\n  --footer-border-top-color: rgba(24, 24, 24, 0.16);\n  --callout-background-color: #fff;\n  --callout-success-border-color: #1aa772;\n  --callout-warning-border-color: #f28b52;\n  --callout-info-border-color: #1aa772;\n  --scroll-to-top-background-color: #f8f9fc;\n  --scroll-to-top-border-color: 1px solid rgba(24, 24, 24, 0.16);\n  --scroll-to-top-border-color-hover: #181818;\n  --scroll-to-top-icon-color: #181818;\n  --blockquote-border-left-color: rgba(24, 24, 24, 0.36);\n  --guestbook-border-left-color: rgba(24, 24, 24, 0.16);\n  --author-header-info-links-separator-color: rgba(24, 24, 24, 0.16);\n  --author-footer-background-color: #fff;\n}\n")),Object(a.b)("p",null,"A list of pre-defined CSS colors can be found on the ",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"},"MDN Web Docs"),".",Object(a.b)("br",{parentName:"p"}),"\n","You can create the perfect colors using ",Object(a.b)("a",{parentName:"p",href:"https://color.adobe.com/create/color-wheel"},"Adobe's Color Wheel"),"."),Object(a.b)("p",null,"You can also specify custom CSS here as well. Here are some examples."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"custom-fonts"},"Custom Fonts"),Object(a.b)("p",null,"The default font for headers is Merriweather and the default font for paragraphs is Roboto. You can import and declare custom fonts (e.g., Open Sans) like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* Import the font */\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\n\n/* Declare the font family */\n.h1,\n.h2,\n.h3,\n.h4,\n.h5 {\n  font-family: Merriweather, serif;\n}\nbody {\n  font-family: 'Open Sans', Roboto, sans-serif;\n}\n")),Object(a.b)("h3",{id:"cover-style"},"Cover Style"),Object(a.b)("p",null,"There are two built-in cover styles: Default and Condensed."),Object(a.b)("p",null,"If you use the Default cover style, then the author image is on the left and the author text is on the right. If you want to get a full width image on top and have the author text appear underneath the image, then you can use something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* For Default Cover Style */\n@media (min-width: 992px) {\n  /* Makes the author image appear above the author text instead of on the left */\n  .header-author-info__items {\n    flex-direction: column;\n  }\n\n  /* Makes the author image full width */\n  .header-image-container {\n    width: 100%;\n    min-width: 100%;\n    margin-right: unset;\n    margin-bottom: inherit;\n    /* Adjust the Height as needed */\n    height: 368px;\n  }\n}\n")),Object(a.b)("h3",{id:"layout-style"},"Layout Style"),Object(a.b)("p",null,"There are two built-in layout styles: Default (list view) or Cards."),Object(a.b)("p",null,"If you want to make the font size of your cards smaller, use something like this:"),Object(a.b)("h4",{id:"card-post-title-font-size"},"Card Post Title Font Size"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/** To make the font size of the titles in the cards smaller */\n#author-posts .post-title {\n  font-size: 1em;\n  line-height: 1.5em;\n}\n")),Object(a.b)("h4",{id:"card-width"},"Card Width"),Object(a.b)("p",null,"By default, there are four cards per row on large screens. If you want three cards per row, use something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"@media (min-width: 992px) {\n  #author-posts .author-post {\n    width: calc(33% - 16px);\n    margin-right: 16px;\n  }\n}\n")),Object(a.b)("h3",{id:"content-width"},"Content Width"),Object(a.b)("p",null,"You can restrict the width of your post content like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* Restricts the max-width to 700px*/\n.post-content {\n  max-width: 700px;\n}\n")),Object(a.b)("p",null,"If you want to center your content, set the left and right margins to ",Object(a.b)("inlineCode",{parentName:"p"},"auto"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},".post-content {\n  /* Restricts the max-width to 700px*/\n  max-width: 700px;\n  /* Centers the contents */\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* For viewing a single post */\n.single-post-show .post-content {\n  /* Removes excess padding */\n  padding-left: 0px;\n  padding-right: 0px;\n}\n")))}u.isMDXComponent=!0},180:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=d(o),p=n,f=u["".concat(l,".").concat(p)]||u[p]||b[p]||a;return o?r.a.createElement(f,s(s({ref:t},i),{},{components:o})):r.a.createElement(f,s({ref:t},i))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=o[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},181:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(23);t.a=function(e){var t=e.canonicalUrl;return r.a.createElement(a.a,null,r.a.createElement("link",{rel:"canonical",href:t}))}}}]);