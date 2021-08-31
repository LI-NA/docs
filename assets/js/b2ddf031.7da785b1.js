(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(139)),o={slug:"encryption/003",id:"encryption-003",title:"Encryption Protocol Specification v003",sidebar_label:"Encryption v003",description:"Specification for the Standard Notes end-to-end encryption.",keywords:["standard notes","docs","notes app","end-to-end encryption","encryption specification"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"specification/encryption-003",id:"specification/encryption-003",isDocsHomePage:!1,title:"Encryption Protocol Specification v003",description:"Specification for the Standard Notes end-to-end encryption.",source:"@site/docs/specification/encryption-003.md",sourceDirName:"specification",slug:"/specification/encryption/003",permalink:"/specification/encryption/003",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/specification/encryption-003.md",version:"current",lastUpdatedAt:1630423070,formattedLastUpdatedAt:"8/31/2021",sidebar_label:"Encryption v003",frontMatter:{slug:"encryption/003",id:"encryption-003",title:"Encryption Protocol Specification v003",sidebar_label:"Encryption v003",description:"Specification for the Standard Notes end-to-end encryption.",keywords:["standard notes","docs","notes app","end-to-end encryption","encryption specification"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1}},l=[{value:"Version 0.0.3",id:"version-003",children:[]},{value:"Key Generation",id:"key-generation",children:[{value:"Client Instructions",id:"client-instructions",children:[]}]},{value:"Item Encryption",id:"item-encryption",children:[]},{value:"Client-side",id:"client-side",children:[{value:"Encryption:",id:"encryption",children:[]},{value:"Decryption:",id:"decryption",children:[]},{value:"Encrypting a string using the 003 scheme:",id:"encrypting-a-string-using-the-003-scheme",children:[]},{value:"Decrypting a string using the 003 scheme:",id:"decrypting-a-string-using-the-003-scheme",children:[]}]},{value:"Server-side",id:"server-side",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"version-003"},"Version 0.0.3"),Object(r.b)("p",null,"It is important that there exist a separation of concerns between the server and the client. That is, the client should not trust the server, and vice versa."),Object(r.b)("p",null,"Encryption keys are generated by stretching the user's input password using a ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_derivation_function"},"key derivation function.")),Object(r.b)("p",null,"The resulting key is split in three \u2014 the first third is sent to the server as the user's password, the second third is saved locally as the user's master encryption key, and the last third is used as an authentication key. In this setup, the server is never able to compute the encryption key or the user's original password given just a fraction of the resulting key."),Object(r.b)("p",null,"Note: client-server connections must be made securely through SSL/TLS."),Object(r.b)("h4",{id:"elaboration-on-user-model-encryption-related-fields"},"Elaboration on User model encryption related fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"name"),Object(r.b)("th",{parentName:"tr",align:null},"details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"pw_cost"),Object(r.b)("td",{parentName:"tr",align:null},"The number of iterations to be used by the KDF. The minimum for version 003 is 100,000. However note that non-native clients (web clients not using WebCrypto) will not be able to handle any more than 3,000 iterations.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"pw_nonce"),Object(r.b)("td",{parentName:"tr",align:null},"A nonce for password derivation. This value is initially created by the client during registration.")))),Object(r.b)("h2",{id:"key-generation"},"Key Generation"),Object(r.b)("h3",{id:"client-instructions"},"Client Instructions"),Object(r.b)("p",null,"Given a user inputted password ",Object(r.b)("inlineCode",{parentName:"p"},"uip"),", the client's job is to generate a password ",Object(r.b)("inlineCode",{parentName:"p"},"pw")," to send to the server, a master key ",Object(r.b)("inlineCode",{parentName:"p"},"mk")," that the user stores locally to encrypt/decrypt data, and an auth key ",Object(r.b)("inlineCode",{parentName:"p"},"ak")," for authenticating encrypted data."),Object(r.b)("h4",{id:"login-steps"},"Login Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client makes GET request with user's email to ",Object(r.b)("inlineCode",{parentName:"p"},"auth/params")," to retrieve password nonce, cost, and version.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client verifies cost >= minimum cost (100,000 for 003.)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client computes ",Object(r.b)("inlineCode",{parentName:"p"},"pw"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mk"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"ak")," using PBKDF2 with SHA512 as the hashing function and output length of 768 bits:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},'salt = SHA256:Hexdigest([email, "SF", version, pw_cost, pw_nonce].join(":"))\nkey = pbkdf2(uip, salt, sha512, 768, pw_cost) // hex encoded\npw = key.substring(0, key.length/3)\nmk = key.substring(key.length/3, key.length/3)\nak = key.substring(key.length/3 * 2, key.length/3)\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client sends ",Object(r.b)("inlineCode",{parentName:"p"},"pw"),' to the server as the user\'s "regular" password and stores ',Object(r.b)("inlineCode",{parentName:"p"},"mk")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ak")," locally. (",Object(r.b)("inlineCode",{parentName:"p"},"mk")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ak")," are never sent to the server)."))),Object(r.b)("h4",{id:"registration-steps"},"Registration Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client chooses default for ",Object(r.b)("inlineCode",{parentName:"p"},"pw_cost")," (minimum 100,000).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client generates ",Object(r.b)("inlineCode",{parentName:"p"},"pw_nonce"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"pw_nonce = random_string(256)\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client computes ",Object(r.b)("inlineCode",{parentName:"p"},"pw"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mk"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"ak")," using step (3) from Login Steps.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Client registers with ",Object(r.b)("inlineCode",{parentName:"p"},"email"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pw"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pw_cost"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pw_nonce"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"version"),"."))),Object(r.b)("h2",{id:"item-encryption"},"Item Encryption"),Object(r.b)("p",null,"In general, when encrypting a string, one should use an IV so that two subsequent encryptions of the same content yield different results, and one should authenticate the data as to ascertain its authenticity and lack of tampering."),Object(r.b)("p",null,"In Standard Notes, two strings are encrypted for every item:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The item's ",Object(r.b)("inlineCode",{parentName:"li"},"content"),"."),Object(r.b)("li",{parentName:"ul"},"The item's ",Object(r.b)("inlineCode",{parentName:"li"},"enc_item_key"),".")),Object(r.b)("h2",{id:"client-side"},"Client-side"),Object(r.b)("p",null,"An item is encrypted using a random key generated for each item."),Object(r.b)("h3",{id:"encryption"},"Encryption:"),Object(r.b)("p",null,"Note that when encrypting/decrypting data, keys should be converted to the proper format your platform function supports. It's best to convert keys to binary data before running through any encryption/hashing algorithm."),Object(r.b)("p",null,"For every item:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Generate a random 512 bit key ",Object(r.b)("inlineCode",{parentName:"li"},"item_key")," (in hex format)."),Object(r.b)("li",{parentName:"ol"},"Split ",Object(r.b)("inlineCode",{parentName:"li"},"item_key")," in half; set item encryption key ",Object(r.b)("inlineCode",{parentName:"li"},"item_ek = first_half")," and item authentication key ",Object(r.b)("inlineCode",{parentName:"li"},"item_ak = second_half"),"."),Object(r.b)("li",{parentName:"ol"},"Encrypt ",Object(r.b)("inlineCode",{parentName:"li"},"content")," using ",Object(r.b)("inlineCode",{parentName:"li"},"item_ek")," and ",Object(r.b)("inlineCode",{parentName:"li"},"item_ak"),' following the instructions "Encrypting a string using the 003 scheme" below and send to server as ',Object(r.b)("inlineCode",{parentName:"li"},"content"),"."),Object(r.b)("li",{parentName:"ol"},"Encrypt ",Object(r.b)("inlineCode",{parentName:"li"},"item_key")," using the global ",Object(r.b)("inlineCode",{parentName:"li"},"mk")," and global ",Object(r.b)("inlineCode",{parentName:"li"},"ak"),' following the instructions "Encrypting a string using the 003 scheme" below and send to server as ',Object(r.b)("inlineCode",{parentName:"li"},"enc_item_key"),".")),Object(r.b)("h3",{id:"decryption"},"Decryption:"),Object(r.b)("p",null,"Check the first 3 characters of the ",Object(r.b)("inlineCode",{parentName:"p"},"content")," string. This will be the encryption version."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'If it is equal to "001", which is a legacy scheme, decrypt according to the 001 instructions found ',Object(r.b)("a",{parentName:"p",href:"https://github.com/standardfile/standardfile.github.io/blob/master/doc/spec-001.md"},"here"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'If it is equal to "002" or "003", decrypt as follows:'),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Decrypt ",Object(r.b)("inlineCode",{parentName:"li"},"enc_item_key")," using the global ",Object(r.b)("inlineCode",{parentName:"li"},"mk")," and global ",Object(r.b)("inlineCode",{parentName:"li"},"ak"),' according to the "Decrypting a string using the 003 scheme" instructions below to get ',Object(r.b)("inlineCode",{parentName:"li"},"item_key"),"."),Object(r.b)("li",{parentName:"ol"},"Split ",Object(r.b)("inlineCode",{parentName:"li"},"item_key")," in half; set encryption key ",Object(r.b)("inlineCode",{parentName:"li"},"item_ek = first_half")," and authentication key ",Object(r.b)("inlineCode",{parentName:"li"},"item_ak = second_half"),"."),Object(r.b)("li",{parentName:"ol"},"Decrypt ",Object(r.b)("inlineCode",{parentName:"li"},"content")," using ",Object(r.b)("inlineCode",{parentName:"li"},"item_ek")," and ",Object(r.b)("inlineCode",{parentName:"li"},"item_ak"),' according to the "Decrypting a string using the 003 scheme" instructions below.')))),Object(r.b)("h3",{id:"encrypting-a-string-using-the-003-scheme"},"Encrypting a string using the 003 scheme:"),Object(r.b)("p",null,"Given a ",Object(r.b)("inlineCode",{parentName:"p"},"string_to_encrypt"),", an ",Object(r.b)("inlineCode",{parentName:"p"},"encryption_key"),", and an ",Object(r.b)("inlineCode",{parentName:"p"},"auth_key"),":"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Generate a random 128 bit string called IV."),Object(r.b)("li",{parentName:"ol"},"Encrypt ",Object(r.b)("inlineCode",{parentName:"li"},"string_to_encrypt")," using ",Object(r.b)("inlineCode",{parentName:"li"},"AES-CBC-256:Base64"),", ",Object(r.b)("inlineCode",{parentName:"li"},"encryption_key"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"IV"),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ciphertext = AES-Encrypt(string_to_encrypt, encryption_key, IV)\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Generate ",Object(r.b)("inlineCode",{parentName:"li"},"string_to_auth"),' by combining the encryption version (003), the item\'s UUID, the IV, and the ciphertext using the colon ":" character:')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'string_to_auth = ["003", uuid, IV, ciphertext].join(":")\n')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Compute ",Object(r.b)("inlineCode",{parentName:"li"},"auth_hash = HMAC-SHA256:Hex(string_to_auth, auth_key)"),"."),Object(r.b)("li",{parentName:"ol"},"Generate the final result by combining the five components into a ",Object(r.b)("inlineCode",{parentName:"li"},":")," separated string:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'result = ["003", auth_hash, uuid, IV, ciphertext].join(":")\n')),Object(r.b)("h3",{id:"decrypting-a-string-using-the-003-scheme"},"Decrypting a string using the 003 scheme:"),Object(r.b)("p",null,"Given a ",Object(r.b)("inlineCode",{parentName:"p"},"string_to_decrypt"),", an ",Object(r.b)("inlineCode",{parentName:"p"},"encryption_key"),", and an ",Object(r.b)("inlineCode",{parentName:"p"},"auth_key"),":"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Split the string into its constituent parts: ",Object(r.b)("inlineCode",{parentName:"li"},'components = string_to_decrypt.split(":")'),"."),Object(r.b)("li",{parentName:"ol"},"Assign local variables:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"version = components[0]\nauth_hash = components[1]\nuuid = components[2]\nIV = components[3]\nciphertext = components[4]\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Ensure that ",Object(r.b)("inlineCode",{parentName:"li"},"uuid == item.uuid"),". If not, abort decryption."),Object(r.b)("li",{parentName:"ol"},"Generate ",Object(r.b)("inlineCode",{parentName:"li"},'string_to_auth = [version, uuid, IV, ciphertext].join(":")'),"."),Object(r.b)("li",{parentName:"ol"},"Compute ",Object(r.b)("inlineCode",{parentName:"li"},"local_auth_hash = HMAC-SHA256(string_to_auth, auth_key)"),". Compare ",Object(r.b)("inlineCode",{parentName:"li"},"local_auth_hash")," to ",Object(r.b)("inlineCode",{parentName:"li"},"auth_hash"),". If they are not the same, skip decrypting this item, as this indicates that the string has been tampered with."),Object(r.b)("li",{parentName:"ol"},"Decrypt ",Object(r.b)("inlineCode",{parentName:"li"},"ciphertext")," to get final result: ",Object(r.b)("inlineCode",{parentName:"li"},"result = AES-Decrypt(ciphertext, encryption_key, IV)"),".")),Object(r.b)("h2",{id:"server-side"},"Server-side"),Object(r.b)("p",null,"For every received item:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"(Optional but recommended) Encrypt ",Object(r.b)("inlineCode",{parentName:"li"},"content")," using server known key and store. Decrypt before sending back to client.")),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Join the ",Object(r.b)("a",{parentName:"p",href:"https://standardnotes.com/slack"},"Slack group")," to discuss implementation details and ask any questions you may have."),Object(r.b)("p",null,"You can also email ",Object(r.b)("a",{parentName:"p",href:"mailto:help@standardnotes.org"},"help@standardnotes.org"),"."),Object(r.b)("p",null,"Follow ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/standardnotes"},"@standardnotes on Twitter")," for updates and announcements."))}b.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=i,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);