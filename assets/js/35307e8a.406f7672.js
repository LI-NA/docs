(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,r(r({ref:t},b),{},{components:n})):a.a.createElement(m,r({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),o=(n(0),n(176)),l={slug:"configuration-options/",id:"configuration-options",title:"Configuration options",sidebar_label:"Configuration options",description:"Manage options for your Standard Notes Standalone Infrastructure.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","configuration options"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},r={unversionedId:"self-hosting/configuration-options",id:"self-hosting/configuration-options",isDocsHomePage:!1,title:"Configuration options",description:"Manage options for your Standard Notes Standalone Infrastructure.",source:"@site/docs/self-hosting/configuration-options.md",sourceDirName:"self-hosting",slug:"/self-hosting/configuration-options/",permalink:"/self-hosting/configuration-options/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/configuration-options.md",version:"current",lastUpdatedAt:1622210307,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"Configuration options",frontMatter:{slug:"configuration-options/",id:"configuration-options",title:"Configuration options",sidebar_label:"Configuration options",description:"Manage options for your Standard Notes Standalone Infrastructure.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","configuration options"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Self-hosting with Docker",permalink:"/self-hosting/docker/"},next:{title:"Securing HTTP traffic of your Sync server",permalink:"/self-hosting/https-support/"}},c=[{value:"Note",id:"note",children:[]},{value:"Syncing Server JS &amp; Syncing Server Worker",id:"syncing-server-js--syncing-server-worker",children:[{value:"Basics",id:"basics",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Ports",id:"ports",children:[]},{value:"Database",id:"database",children:[]},{value:"Cache",id:"cache",children:[]},{value:"Authentication and Authorization",id:"authentication-and-authorization",children:[]},{value:"Redis Async Communication (Default)",id:"redis-async-communication-default",children:[]},{value:"AWS Async Communication (Optional)",id:"aws-async-communication-optional",children:[]},{value:"Auth Service",id:"auth-service",children:[]},{value:"Emails",id:"emails",children:[]},{value:"Revisions",id:"revisions",children:[]},{value:"New Relic (Optional)",id:"new-relic-optional",children:[]}]},{value:"Auth &amp; Auth Worker",id:"auth--auth-worker",children:[{value:"Basics",id:"basics-1",children:[]},{value:"Secrets",id:"secrets-1",children:[]},{value:"Redis Async Communication (Default)",id:"redis-async-communication-default-1",children:[]},{value:"Disabling new user registrations",id:"disabling-new-user-registrations",children:[]},{value:"New Relic (Optional)",id:"new-relic-optional-1",children:[]}]},{value:"API Gateway",id:"api-gateway",children:[{value:"Basics",id:"basics-2",children:[]},{value:"Routing",id:"routing",children:[]},{value:"Timeouts",id:"timeouts",children:[]},{value:"New Relic (Optional)",id:"new-relic-optional-2",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"note"},"Note"),Object(o.b)("p",null,"After changing any of the environment variables mentioned below you will have to restart the infrastructure in order for the changes to take effect. You can do so with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./server.sh stop && ./server.sh start\n")),Object(o.b)("h2",{id:"syncing-server-js--syncing-server-worker"},"Syncing Server JS & Syncing Server Worker"),Object(o.b)("p",null,"All configuration options mentioned below are controlled by environment variables located in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file."),Object(o.b)("h3",{id:"basics"},"Basics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOG_LEVEL"),": the level of logs outputted by the Syncing Server JS and Syncing Server JS Worker services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NODE_ENV"),": Node environment in which the service is running.")),Object(o.b)("h3",{id:"secrets"},"Secrets"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JWT_SECRET"),": secret used to sign the JWT tokens that are used for authorization & authentication purposes between client and server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LEGACY_JWT_SECRET"),": This parameter is a fallback for supporting old client applications that had a different authorization mechanism. You don't need to change this if you are just starting to self-host your setup and do not own a legacy client application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AUTH_JWT_SECRET"),": secret used to sign the JWT tokens that are used for authorization & authentication purposes between services.")),Object(o.b)("h3",{id:"ports"},"Ports"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EXPOSED_PORT"),": the port on which the API Gateway will run. It is your main entry point for the entire infrastructure.")),Object(o.b)("h3",{id:"database"},"Database"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_HOST"),": database host."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_REPLICA_HOST"),": database replica host. If no replica is supported it should point to the same host as the primary DB."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_PORT"),": database port."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_USERNAME"),": database username."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_PASSWORD"),": database password."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_DATABASE"),": database name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_DEBUG_LEVEL"),": the level of logs which are outputted in the database context. Related to TypeORM."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_MIGRATIONS_PATH"),": path to migrations folder that should be run against the database. Related to TypeORM.")),Object(o.b)("h3",{id:"cache"},"Cache"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REDIS_URL"),": url to Redis node.")),Object(o.b)("h3",{id:"authentication-and-authorization"},"Authentication and Authorization"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ACCESS_TOKEN_AGE"),": time to live (in seconds) of the access token used to communicate with the server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REFRESH_TOKEN_AGE"),": time to live (in seconds) of the refresh token used to obtain a new access token."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EPHEMERAL_SESSION_AGE"),': time to live (in seconds) of an ephemeral session. Used when you sign in without the "Stay signed in" option checked.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MAX_LOGIN_ATTEMPTS"),": number of login attempts before locking the account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FAILED_LOGIN_LOCKOUT"),": lockout period in seconds after maximum failed login attempts.")),Object(o.b)("h3",{id:"redis-async-communication-default"},"Redis Async Communication (Default)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REDIS_EVENTS_CHANNEL"),": name of the Redis Pub/Sub channel used for communication between the service and its worker.")),Object(o.b)("h3",{id:"aws-async-communication-optional"},"AWS Async Communication (Optional)"),Object(o.b)("p",null,"If you do not want to use Redis as the communication channel between services, you can configure your async communication to be done via Amazon Web Services."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," We do not support configuring AWS secret and access keys in the environment variables as this is generally bad practice. If you would like to utilize SNS, SQS and S3, please configure an appropriate IAM user and role for the server on which you self-host your application as ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#sharing-credentials"},"best practice"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SNS_TOPIC_ARN"),": ARN of the SNS topic that the service will publish events to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SNS_AWS_REGION"),": AWS region of the SNS topic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SQS_QUEUE_URL"),": URL of the SQS queue from which a worker will consume events."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SQS_AWS_REGION"),": AWS region of the SQS queue."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"S3_BACKUP_BUCKET_NAME"),": name of the S3 bucket on which a file backup will be performed to transfer large data between services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"S3_AWS_REGION"),": AWS region of the S3 bucket.")),Object(o.b)("h3",{id:"auth-service"},"Auth Service"),Object(o.b)("p",null,"We are in the process of moving some user/authentication related functionalities out of Syncing Server JS and into Auth service. In order to achieve this, we are gradually redirecting some requests internally to the Auth service from Syncing Server JS."),Object(o.b)("p",null,"-",Object(o.b)("inlineCode",{parentName:"p"},"AUTH_SERVER_URL"),": url to the Auth service. Default value should be kept."),Object(o.b)("h3",{id:"emails"},"Emails"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EMAIL_ATTACHMENT_MAX_BYTE_SIZE"),": Amount of bytes allowed for daily email backup attachments.")),Object(o.b)("h3",{id:"revisions"},"Revisions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REVISIONS_FREQUENCY"),": Amount of seconds that should pass between each save of a note for a new history revision to be created.")),Object(o.b)("h3",{id:"new-relic-optional"},"New Relic (Optional)"),Object(o.b)("p",null,"We are utilizing New Relic to monitor our infrastructure. If you wish to set up your own monitoring in New Relic you can utilize the following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_ENABLED"),": enable or disable New Relic agent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_APP_NAME"),": name of the application to show in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LICENSE_KEY"),": New Relic license key."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_NO_CONFIG_FILE"),": should be true as we do not use configuration files for New Relic and fallback to environment variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_DISTRIBUTED_TRACING_ENABLED"),": enable or disable distrubuted tracing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_ENABLED"),": enable or disable logs in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_LEVEL"),": level of logs in New Relic.")),Object(o.b)("h2",{id:"auth--auth-worker"},"Auth & Auth Worker"),Object(o.b)("p",null,"All configuration options mentioned below are controlled by environment variables located in the ",Object(o.b)("inlineCode",{parentName:"p"},"docker/auth.env")," file."),Object(o.b)("h3",{id:"basics-1"},"Basics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOG_LEVEL"),": the level of logs outputted by the Auth and Auth Worker services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NODE_ENV"),": Node environment in which the service is running.")),Object(o.b)("h3",{id:"secrets-1"},"Secrets"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AUTH_JWT_TTL"),": Time to live in seconds for the JWT token used for communication between services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PSEUDO_KEY_PARAMS_KEY"),": key used to generate password nonce in the process of creating user authentication parameters."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ENCRYPTION_SERVER_KEY"),": key used for ecrypting user server key. Must be a hex string exactly 32 bytes long e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"feffe9928665731c6d6a8f9467308308feffe9928665731c6d6a8f9467308308"),".")),Object(o.b)("h3",{id:"redis-async-communication-default-1"},"Redis Async Communication (Default)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REDIS_EVENTS_CHANNEL"),": name of the Redis Pub/Sub channel used for communication between the service and its worker.")),Object(o.b)("h3",{id:"disabling-new-user-registrations"},"Disabling new user registrations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DISABLE_USER_REGISTRATION"),": disable the option to register new users on the server.")),Object(o.b)("h3",{id:"new-relic-optional-1"},"New Relic (Optional)"),Object(o.b)("p",null,"We are utilizing New Relic to monitor our infrastructure. If you wish to set up your own monitoring in New Relic you can utilize the following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_ENABLED"),": enable or disable New Relic agent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_APP_NAME"),": name of the application to show in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LICENSE_KEY"),": New Relic license key."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_NO_CONFIG_FILE"),": should be true as we do not use configuration files for New Relic and fallback to environment variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_DISTRIBUTED_TRACING_ENABLED"),": enable or disable distrubuted tracing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_ENABLED"),": enable or disable logs in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_LEVEL"),": level of logs in New Relic.")),Object(o.b)("h2",{id:"api-gateway"},"API Gateway"),Object(o.b)("p",null,"All configuration options mentioned below are controlled by environment variables located in the ",Object(o.b)("inlineCode",{parentName:"p"},"docker/api-gateway.env")," file."),Object(o.b)("h3",{id:"basics-2"},"Basics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOG_LEVEL"),": the level of logs outputted by the API Gateway service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NODE_ENV"),": Node environment in which the service is running.")),Object(o.b)("h3",{id:"routing"},"Routing"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SYNCING_SERVER_JS_URL"),": url to the Syncing Server JS service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AUTH_SERVER_URL"),": url to the Auth service.")),Object(o.b)("h3",{id:"timeouts"},"Timeouts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HTTP_CALL_TIMEOUT"),": amount of milliseconds the API Gateway will wait for the underlying service to respond.")),Object(o.b)("h3",{id:"new-relic-optional-2"},"New Relic (Optional)"),Object(o.b)("p",null,"We are utilizing New Relic to monitor our infrastructure. If you wish to set up your own monitoring in New Relic you can utilize the following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_ENABLED"),": enable or disable New Relic agent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_APP_NAME"),": name of the application to show in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LICENSE_KEY"),": New Relic license key."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_NO_CONFIG_FILE"),": should be true as we do not use configuration files for New Relic and fallback to environment variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_DISTRIBUTED_TRACING_ENABLED"),": enable or disable distrubuted tracing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_ENABLED"),": enable or disable logs in New Relic."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NEW_RELIC_LOG_LEVEL"),": level of logs in New Relic.")))}s.isMDXComponent=!0}}]);