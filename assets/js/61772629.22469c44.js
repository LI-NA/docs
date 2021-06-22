(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(177)),i={slug:"docker/",id:"docker",title:"Self-hosting with Docker",sidebar_label:"Docker",description:"How to self-host a Standard Notes infrastructure with Docker.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"self-hosting/docker",id:"self-hosting/docker",isDocsHomePage:!1,title:"Self-hosting with Docker",description:"How to self-host a Standard Notes infrastructure with Docker.",source:"@site/docs/self-hosting/docker.md",sourceDirName:"self-hosting",slug:"/self-hosting/docker/",permalink:"/self-hosting/docker/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/docker.md",version:"current",lastUpdatedAt:1624358947,formattedLastUpdatedAt:"6/22/2021",sidebar_label:"Docker",frontMatter:{slug:"docker/",id:"docker",title:"Self-hosting with Docker",sidebar_label:"Docker",description:"How to self-host a Standard Notes infrastructure with Docker.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Infrastructure Overview",permalink:"/self-hosting/infrastructure-overview/"},next:{title:"Configuration options",permalink:"/self-hosting/configuration-options/"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Securing Your Server",id:"securing-your-server",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"These instructions make the following assumptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The machine you will be running the infrastructure on has at least 2GB of memory."),Object(o.b)("li",{parentName:"ul"},"You've just finished setting up a Linux server (say, Ubuntu 20.04 64-bit) and have installed ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," on it."),Object(o.b)("li",{parentName:"ul"},"Due to mounted volumes we recommend running the setup as a root user. If you wish to run it as non-root user please remember about the ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall#manage-docker-as-a-non-root-user"},"post-installation steps for Linux"),"."),Object(o.b)("li",{parentName:"ul"},"You've configured your security groups to allow for incoming SSH connections from your local IP."),Object(o.b)("li",{parentName:"ul"},"You've configured your security groups to allow for incoming TCP connections on port 80 and 443 from at least your local IP."),Object(o.b)("li",{parentName:"ul"},"You've configured a domain name (or subdomain) to point to your server's IP address.")),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," If you are a user with an already existing legacy database of the Syncing Server, we've prepared a ",Object(o.b)("a",{parentName:"p",href:"/self-hosting/legacy-migration/"},"Migrating from Legacy guide"),".")),Object(o.b)("p",null,"SSH into your server and follow the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you are in your home directory and clone the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/standardnotes/standalone"},"Standard Notes Standalone Infrastructure")," project:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ cd ~\n$ git clone --single-branch --branch main https://github.com/standardnotes/standalone.git\n$ cd standalone\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Initialize default configuration files by typing:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./server.sh setup\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Customize your configuration"),Object(o.b)("p",{parentName:"li"},"There are 4 environment variables that need to be filled in with generated secret keys:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AUTH_JWT_SECRET")," in the ",Object(o.b)("inlineCode",{parentName:"li"},".env")," file"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JWT_SECRET"),", ",Object(o.b)("inlineCode",{parentName:"li"},"LEGACY_JWT_SECRET")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ENCRYPTION_SERVER_KEY")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"docker/auth.env")," file")),Object(o.b)("p",{parentName:"li"},"You can generate values for them by using:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"}," $ openssl rand -hex 32\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," Environment variables cannot be changed with effect to take place while the docker containers are running. To change them, server needs to be restarted."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) Customize the port"),Object(o.b)("p",{parentName:"li"},"By default the syncing server will run on port 3000. If it is the case that you have a different service running on that port you can customize the port on which you want to run the infrastructure on. To do that, edit the ",Object(o.b)("inlineCode",{parentName:"p"},"EXPOSED_PORT")," variable in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Simply run:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./server.sh start\n")),Object(o.b)("p",{parentName:"li"}," This should load all the microservices that the infrastructure consists of."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," First run might take a while since there are Docker images to be pulled and built and migrations initializing the database to be run."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Wait for the infrastructure to bootstrap"),Object(o.b)("p",{parentName:"li"}," It takes a moment for the infrastructure to bootstrap and all the microservices to start. You can observe the process by typing:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./server.sh logs\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," You can safely escape from logs with CTRL+C")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),' Microservices depend on each other and because of that they are starting sequentially in our setup. In the logs you will most probably observe that one service is waiting for another to start with lines like: "XYZ is unavailable yet - waiting for it to start" where XYZ is the dependent service name. This is expected.')),Object(o.b)("p",{parentName:"li"}," Everything should be up and running once you observe that the ",Object(o.b)("inlineCode",{parentName:"p"},"API Gateway")," service has started by seeing the following line as one of the last ones in logs:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'api-gateway_1 | {"message":"Server started on port 3000","level":"info"}\n')),Object(o.b)("p",{parentName:"li"}," You can also check the state in which all the services are by typing:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./server.sh status\n")),Object(o.b)("p",{parentName:"li"}," All of the services should be in ",Object(o.b)("inlineCode",{parentName:"p"},"Up")," state at this stage.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Test your access to the server locally:"),Object(o.b)("p",{parentName:"li"},"You should be able now to check that the syncing server is running by checking ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/healthcheck"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ curl http://localhost:3000/healthcheck\nOK\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," If you changed the ",Object(o.b)("inlineCode",{parentName:"p"},"EXPOSED_PORT")," variable you will have to check ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:{EXPOSED_PORT}/healthcheck"),"."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h2",{id:"securing-your-server"},"Securing Your Server"),Object(o.b)("p",null,"In order to start using your new server with the Standard Notes app at ",Object(o.b)("a",{parentName:"p",href:"https://app.standardnotes.org"},"https://app.standardnotes.org")," you will have to configure an HTTPS reverse proxy."),Object(o.b)("p",null,"Unless you already have an HTTP/HTTPS server running that will serve as a reverse proxy to the standalone infrastructure, head over to ",Object(o.b)("a",{parentName:"p",href:"/self-hosting/https-support/"},"Securing HTTP traffic of your Sync server"),"."),Object(o.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Sync Server Domain"),"."),Object(o.b)("p",null,"Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!"))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);