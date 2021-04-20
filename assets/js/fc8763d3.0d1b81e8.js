(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(180)),o={slug:"rapberry-pi/",id:"raspberry-pi",title:"Self-Hosting on a Raspberry Pi",sidebar_label:"Raspberry Pi",description:"How to self-host a Standard Notes Syncing server on a Raspberry Pi.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","Raspberry Pi"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"self-hosting/raspberry-pi",id:"self-hosting/raspberry-pi",isDocsHomePage:!1,title:"Self-Hosting on a Raspberry Pi",description:"How to self-host a Standard Notes Syncing server on a Raspberry Pi.",source:"@site/docs/self-hosting/raspberry-pi.md",sourceDirName:"self-hosting",slug:"/self-hosting/rapberry-pi/",permalink:"/self-hosting/rapberry-pi/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/raspberry-pi.md",version:"current",lastUpdatedAt:1618352694,formattedLastUpdatedAt:"4/13/2021",sidebar_label:"Raspberry Pi",frontMatter:{slug:"rapberry-pi/",id:"raspberry-pi",title:"Self-Hosting on a Raspberry Pi",sidebar_label:"Raspberry Pi",description:"How to self-host a Standard Notes Syncing server on a Raspberry Pi.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","Raspberry Pi"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"technicalSidebar",previous:{title:"Self-Hosting with EC2 and Nginx",permalink:"/self-hosting/ec2-nginx/"},next:{title:"Managing options",permalink:"/self-hosting/managing-options/"}},p=[{value:"Introduction",id:"introduction",children:[{value:"Requirements",id:"requirements",children:[]}]},{value:"Getting started",id:"getting-started",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The docs below are not up-to-date. Please read the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server#readme"},"README.md of the syncing-server repository")," for the most up-to-date instructions. Please ",Object(i.b)("a",{parentName:"p",href:"https://github.com/standardnotes/syncing-server/issues"},"open an issue")," if you have any issues."))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"You can run your own Standard Notes syncing server on a Raspberry Pi using ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose"),"."),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A Raspberry Pi running Raspbian OS"),Object(i.b)("li",{parentName:"ul"},"Docker (you can install it using the ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script"},"convenience script"),")")),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("inlineCode",{parentName:"p"},"libffi")," and ",Object(i.b)("inlineCode",{parentName:"p"},"libssl")," dependencies:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"sudo apt install -y libffi-dev libssl-dev\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("inlineCode",{parentName:"p"},"python3")," and ",Object(i.b)("inlineCode",{parentName:"p"},"python3-pip"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"sudo apt install -y python3 python3-pip\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"sudo pip3 install docker-compose\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Setup your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file and run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"docker-compose -f docker-compose.yml -f docker-compose.raspberry-pi.yml up -d\n")))),Object(i.b)("p",null,"*","Tested on a ",Object(i.b)("strong",{parentName:"p"},"Raspberry Pi 4 Model B"),"*"))}l.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);