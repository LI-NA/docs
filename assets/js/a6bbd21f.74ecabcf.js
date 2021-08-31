(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(139)),i={slug:"https-support",id:"https-support",title:"Securing HTTP traffic of your Sync server",sidebar_label:"Securing HTTP traffic of your Sync server",description:"How to secure HTTP traffic of your Standard Notes Sync server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","secure http traffic"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"self-hosting/https-support",id:"self-hosting/https-support",isDocsHomePage:!1,title:"Securing HTTP traffic of your Sync server",description:"How to secure HTTP traffic of your Standard Notes Sync server.",source:"@site/docs/self-hosting/https-support.md",sourceDirName:"self-hosting",slug:"/self-hosting/https-support",permalink:"/self-hosting/https-support",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/https-support.md",version:"current",lastUpdatedAt:1630423070,formattedLastUpdatedAt:"8/31/2021",sidebar_label:"Securing HTTP traffic of your Sync server",frontMatter:{slug:"https-support",id:"https-support",title:"Securing HTTP traffic of your Sync server",sidebar_label:"Securing HTTP traffic of your Sync server",description:"How to secure HTTP traffic of your Standard Notes Sync server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","secure http traffic"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Migrating From Legacy",permalink:"/self-hosting/legacy-migration"},next:{title:"Updating Standard Notes Standalone Infrastructure",permalink:"/self-hosting/updating"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Using your secured server",id:"using-your-secured-server",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"These instructions will enable you to secure HTTP traffic of your standalone infrastructure, using a reverse proxy with ",Object(o.b)("inlineCode",{parentName:"p"},"Nginx"),"."),Object(o.b)("h4",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your standalone infrastructure is running on our ",Object(o.b)("a",{parentName:"li",href:"/self-hosting/docker"},"docker")," setup"),Object(o.b)("li",{parentName:"ul"},"You've installed ",Object(o.b)("inlineCode",{parentName:"li"},"nginx")," in your server."),Object(o.b)("li",{parentName:"ul"},"You've configured a domain name (or subdomain) to point to your server's IP address.")),Object(o.b)("h3",{id:"getting-started"},"Getting started"),Object(o.b)("h4",{id:"setting-up-nginx"},"Setting up Nginx"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Disable the default virtual host:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"unlink /etc/nginx/sites-enabled/default\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new file named ",Object(o.b)("inlineCode",{parentName:"p"},"standardnotes.conf")," within ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"server {\n  listen 80;\n  listen [::]:80;\n  server_name yourdomain.com;\n\n  access_log /var/log/nginx/standardnotes-access.log;\n  error_log /var/log/nginx/standardnotes-error.log;\n\n  client_max_body_size 50M;\n\n  location / {\n    proxy_pass http://127.0.0.1:3000;\n  }\n}\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," Replace ",Object(o.b)("inlineCode",{parentName:"p"},"yourdomain.com")," with your actual domain and ",Object(o.b)("inlineCode",{parentName:"p"},"3000")," with the port you have specified as ",Object(o.b)("inlineCode",{parentName:"p"},"{EXPOSED_PORT}")," if you have changed it."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable your new site:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/standardnotes.conf /etc/nginx/sites-enabled/standardnotes.conf\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Restart Nginx to apply changes"),Object(o.b)("p",{parentName:"li"},"There may be different ways to restart Nginx. If you installed Nginx from Ubuntu's default repository just type:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo service nginx restart\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Test your ",Object(o.b)("inlineCode",{parentName:"p"},"Nginx")," configuration with:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nginx -t\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setting up Certbot for HTTPS configuration"),Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",{parentName:"p",href:"https://certbot.eff.org/instructions"},"certbot")," to get and install your HTTPS certificate."),Object(o.b)("p",{parentName:"li"},"Certbot should automatically update your Nginx configuration and create SSL certificates for you."),Object(o.b)("p",{parentName:"li"},"After completing the above instructions, your Sync server should be HTTPS enabled!"))),Object(o.b)("h2",{id:"using-your-secured-server"},"Using your secured server"),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Sync Server Domain"),"."),Object(o.b)("p",null,"Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!"))}l.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);