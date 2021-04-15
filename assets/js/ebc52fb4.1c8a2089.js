(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(177)),i=a(178),c={slug:"on-device-encryption/",id:"on-device-encryption",title:"How does Standard Notes encrypt data on my device?",sidebar_label:"On-Device Encryption",description:"How does Standard Notes encrypt data on my device?",keywords:["standard notes","docs","notes app","end-to-end encryption","How does Standard Notes encrypt data on my device?"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"privacy/on-device-encryption",id:"privacy/on-device-encryption",isDocsHomePage:!1,title:"How does Standard Notes encrypt data on my device?",description:"How does Standard Notes encrypt data on my device?",source:"@site/docs/privacy/on-device-encryption.md",slug:"/privacy/on-device-encryption/",permalink:"/privacy/on-device-encryption/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/privacy/on-device-encryption.md",version:"current",lastUpdatedAt:1618273010,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"On-Device Encryption",sidebar:"mainSidebar",previous:{title:"How does Standard Notes secure my notes?",permalink:"/privacy/secure-notes/"},next:{title:"Can I store passwords in Standard Notes?",permalink:"/privacy/store-passwords/"}},l=[{value:"Application Passcode",id:"application-passcode",children:[]},{value:"Mobile (iOS and Android) Specifics",id:"mobile-ios-and-android-specifics",children:[]},{value:"Web Browser Specifics",id:"web-browser-specifics",children:[]},{value:"Linux Specifics",id:"linux-specifics",children:[]},{value:"<em>Stay signed in</em>",id:"stay-signed-in",children:[]}],d={toc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{canonicalUrl:"https://standardnotes.org/help/79/how-does-standard-notes-encrypt-data-on-my-device",mdxType:"CanonicalUrl"}),Object(r.b)("p",null,"Our approach to security is ",Object(r.b)("em",{parentName:"p"},"on by default"),", so there are no settings you must proactively configure to attain the most secure experience possible. This page shares an overview of how Standard Notes' encryption scheme works in the context of your device storage, and different scenarios that may yield different configurations."),Object(r.b)("p",null,"The following table summarizes the four main encryption configurations available, and their respective approach to key and database storage."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Configuration"),Object(r.b)("th",{parentName:"tr",align:null},"Account Keys"),Object(r.b)("th",{parentName:"tr",align:null},"Passcode Keys"),Object(r.b)("th",{parentName:"tr",align:null},"Synced Data"),Object(r.b)("th",{parentName:"tr",align:null},"Device Database"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"With account and with passcode")),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with passcode and stored in local database"),Object(r.b)("td",{parentName:"tr",align:null},"Ephemeral, never stored to disk"),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with account keys"),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with account keys")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"With account but no passcode")),Object(r.b)("td",{parentName:"tr",align:null},"Stored plainly in secure device keychain"),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with account keys"),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with account keys")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"No account but with passcode")),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Ephemeral, never stored to disk"),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Encrypted with passcode keys")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"No account and no passcode")),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Not applicable"),Object(r.b)("td",{parentName:"tr",align:null},"Not encrypted")))),Object(r.b)("h2",{id:"application-passcode"},"Application Passcode"),Object(r.b)("p",null,"A passcode is a device-specific secret you can configure that increases the level of protection on your local device. When you add a passcode, a set of keys are generated using the same procedures used to generate your account keys from your account password. Your passcode keys are ",Object(r.b)("strong",{parentName:"p"},"never saved")," to disk, either in encrypted or unencrypted form, and are generated each time you start the application, and reside in memory until you lock or quit the application."),Object(r.b)("p",null,"When you lock or quit the application, all working memory is deleted. When the application is re-opened, it will need to generate your passcode keys in order to decrypt and display your data. To generate your passcode keys, the application will prompt you for your passcode. Without your passcode entered on launch, it is not possible for the application to generate your passcode keys, and thus not possible for it to decrypt your account keys (if applicable) or notes data."),Object(r.b)("h2",{id:"mobile-ios-and-android-specifics"},"Mobile (iOS and Android) Specifics"),Object(r.b)("p",null,"The mobile application provides the ability to customize two additional options not found on desktop and web."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Biometrics.")," Biometrics allow you to configure face or finger scanning to access your locked application. Note that biometrics are a non-cryptographically backed form of protection. This means that adding or removing biometrics does not affect the cryptographic state of your data on disk. Therefore, adding biometrics to the ",Object(r.b)("em",{parentName:"p"},"With account and with passcode")," configuration yields no additional cryptographic benefits, and adding biometrics to the ",Object(r.b)("em",{parentName:"p"},"No account and no passcode")," similarly does not change or add onto its encryption configuration. Instead, biometrics serve as a local-access deterrent to your application. That is, biometrics can protect against nosy co-workers or family members, but not against state-level actors that have your device in their possession. For protection against the latter, only cryptographically-backed mechanisms, such as a passcode or account, can secure access to your data."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Device Storage Encryption.")," For some older mobile devices, decryption performance on application launch can be short of instant, especially if your notes database is particularly large (thousands of notes). For these contexts, the mobile application provides the option to disable Device Storage Encryption (DSE), if it suits the user's threat model. DSE is of course always enabled by default, so most users will not need to worry about this. If however you decide that local device access is not something you\u2019re concerned about, and the application launch decryption performance is not acceptable, you may decide to disable this feature. Disabling this feature will store data in your device database in an unencrypted state. Data sent to the server however still (always) remains encrypted."),Object(r.b)("h2",{id:"web-browser-specifics"},"Web Browser Specifics"),Object(r.b)("p",null,"Unlike the desktop application, web browsers such as Chrome, Safari, and Firefox do not provide a safe keychain storage mechanism. Therefore, when using the web application with configuration ",Object(r.b)("em",{parentName:"p"},"With account but no passcode"),", your account keys are stored in your application database in unencrypted form. We recommend adding a passcode to web-application usage to encrypt storage of your account keys. This would make the web application behave identically to the desktop application, in terms of secure storage."),Object(r.b)("h2",{id:"linux-specifics"},"Linux Specifics"),Object(r.b)("p",null,"On certain Linux installations, a keychain storage facility may be available but not accessible to the desktop application by default. In this case, you will be asked to grant the application access to this storage facility. If you do not grant access, or no operable keychain storage facility is detectable, your account keys under the ",Object(r.b)("em",{parentName:"p"},"With account but no passcode")," configuration are stored in a similar manner to that of the web application."),Object(r.b)("h2",{id:"stay-signed-in"},Object(r.b)("em",{parentName:"h2"},"Stay signed in")),Object(r.b)("p",null,"Prior to sign in or registration, you may choose to uncheck the option ",Object(r.b)("em",{parentName:"p"},"Stay signed in"),". When this option is unchecked, data is not saved to disk or keychain at all, and instead only lives in temporary memory. This means that when the application is quit or browser window is closed, all local application data is automatically wiped. This option is recommended when using Standard Notes on a public device."))}p.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return y}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,y=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?o.a.createElement(y,c(c({ref:t},l),{},{components:a})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},178:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(23);t.a=function(e){var t=e.canonicalUrl;return o.a.createElement(r.a,null,o.a.createElement("link",{rel:"canonical",href:t}))}}}]);