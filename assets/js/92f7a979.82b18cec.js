(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(180)),s=n(181),i={slug:"secure-notes/",id:"secure-notes",title:"How does Standard Notes secure my notes?",sidebar_label:"Secure Notes",description:"How does Standard Notes secure my notes?",keywords:["standard notes","docs","notes app","end-to-end encryption","How does Standard Notes secure my notes?"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"privacy/secure-notes",id:"privacy/secure-notes",isDocsHomePage:!1,title:"How does Standard Notes secure my notes?",description:"How does Standard Notes secure my notes?",source:"@site/docs/privacy/secure-notes.md",sourceDirName:"privacy",slug:"/privacy/secure-notes/",permalink:"/privacy/secure-notes/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/privacy/secure-notes.md",version:"current",lastUpdatedAt:1618273010,formattedLastUpdatedAt:"4/13/2021",sidebar_label:"Secure Notes",frontMatter:{slug:"secure-notes/",id:"secure-notes",title:"How does Standard Notes secure my notes?",sidebar_label:"Secure Notes",description:"How does Standard Notes secure my notes?",keywords:["standard notes","docs","notes app","end-to-end encryption","How does Standard Notes secure my notes?"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Who can read my private notes?",permalink:"/privacy/private-notes/"},next:{title:"How does Standard Notes encrypt data on my device?",permalink:"/privacy/on-device-encryption/"}},d=[],u={toc:d};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s.a,{canonicalUrl:"https://standardnotes.org/help/3/how-does-standard-notes-secure-my-notes",mdxType:"CanonicalUrl"}),Object(a.b)("p",null,"All your notes, tags, and other data generated using the Standard Notes applications are encrypted using XChaCha20-Poly1305, one of the strongest forms of encryption available (recommended by leading technology companies like Cloudflare and Google as a replacement to AES-256)."),Object(a.b)("p",null,"Your data is encrypted using keys generated from your password. When you choose your account password during registration, we use a password-stretching algorithm called Argon2 to strengthen your password and generate the necessary keys. When you use Argon2 with a strong password, your encryption keys become impossible to guess, even with a network of supercomputers."),Object(a.b)("p",null,'When you make a change to a note, the note is encrypted using your secret keys. Your encrypted data is also automatically "signed". Upon decryption, this signature is validated to ensure that no one, including us, has tampered with your data.'),Object(a.b)("p",null,"The entirety of the encryption and decryption process happens completely offline and in the safety of your own private device. Once it is encrypted, it is synced to your private notes account over a secure, encrypted connection."),Object(a.b)("p",null,'Data stored in your private notes account is completely encrypted and un-decipherable without your encryption key. Even if an attacker or prying eyes got a hold of your encrypted data, it would be gibberish to them without your encryption keys. It also not possible to "brute-force" this data, as attempting to guess the key behind the encryption would take many thousand (or even million) years, even with a network of supercomputers.'),Object(a.b)("p",null,"Finally, it's important to measure security claims beyond face value. Far too many applications and companies claim to protect your data but do not publish source code or security audit results, leaving you to take it on blind faith that your data is safe. Instead, one should look to published third-party security audits of applications who also maintain an open-source repository so that anyone can inspect the code. We're proud to be an ",Object(a.b)("a",{parentName:"p",href:"https://github.com/standardnotes/web"},"open-source notes application")," with several completed ",Object(a.b)("a",{parentName:"p",href:"/privacy/security-audit/"},"third-party security audits"),"."),Object(a.b)("p",null,"Learn more about our on-device encryption mechanisms: ",Object(a.b)("a",{parentName:"p",href:"/privacy/on-device-encryption/"},"How does Standard Notes encrypt data on my device?")),Object(a.b)("p",null,"You can also learn more about the other ways we secure your notes by reading our ",Object(a.b)("a",{parentName:"p",href:"privacy"},"Privacy Manifesto"),"."))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,m=p["".concat(s,".").concat(y)]||p[y]||l[y]||a;return n?o.a.createElement(m,i(i({ref:t},d),{},{components:n})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(23);t.a=function(e){var t=e.canonicalUrl;return o.a.createElement(a.a,null,o.a.createElement("link",{rel:"canonical",href:t}))}}}]);