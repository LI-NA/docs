(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(167)),i={id:"sync",title:"Sync",sidebar_label:"Sync",description:"Specification for the Standard Notes Sync protocol.",keywords:["standard notes","docs","notes app","end-to-end encryption","sync"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},b={unversionedId:"specification/sync",id:"specification/sync",isDocsHomePage:!1,title:"Sync",description:"Specification for the Standard Notes Sync protocol.",source:"@site/docs/specification/sync.md",slug:"/specification/sync",permalink:"/specification/sync",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/specification/sync.md",version:"current",lastUpdatedAt:1611280793,formattedLastUpdatedAt:"1/21/2021",sidebar_label:"Sync",sidebar:"technicalSidebar",previous:{title:"Encryption Protocol Specification v003",permalink:"/specification/encryption/003/"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Models",id:"models",children:[]},{value:"User",id:"user",children:[]},{value:"Items",id:"items",children:[]},{value:"Client Structures",id:"client-structures",children:[]},{value:"REST API",id:"rest-api",children:[]},{value:"API-Auth",id:"api-auth",children:[{value:"POST auth",id:"post-auth",children:[]},{value:"POST auth/change_pw",id:"post-authchange_pw",children:[]},{value:"POST auth/sign_in",id:"post-authsign_in",children:[]},{value:"GET auth/params",id:"get-authparams",children:[]},{value:"Items",id:"items-1",children:[]}]},{value:"Sync Discussion",id:"sync-discussion",children:[{value:"Deletion:",id:"deletion",children:[]},{value:"Sync completion:",id:"sync-completion",children:[]}]},{value:"Import/Export",id:"importexport",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"This document outlines the specifications for the client-server communications of the Standard Notes client/server system."),Object(l.b)("h2",{id:"models"},"Models"),Object(l.b)("p",null,"The protocol consists of models on the server side and what are known as structures on the client side."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Server Models")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"User"),Object(l.b)("li",{parentName:"ul"},"Item")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Client Structures")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Arbitrary"))),Object(l.b)("p",null,"An ",Object(l.b)("inlineCode",{parentName:"p"},"Item")," model has a ",Object(l.b)("inlineCode",{parentName:"p"},"content")," field. The ",Object(l.b)("inlineCode",{parentName:"p"},"content")," field stores a JSON encoded object that can be any thing the client needs to operate. In this client-server model, servers are to be treated as dumb and uninformed."),Object(l.b)("p",null,"Relationships are handled by the client and not the server, which clients today have no problem handling. This allows for improvements to be made to the data model on the client level, and not on the difficult-to-change server level. It also allows for relationships to be encrypted."),Object(l.b)("h2",{id:"user"},"User"),Object(l.b)("p",null,"A user model has the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The email of the user.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"password"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The password for this user. ",Object(l.b)("em",{parentName:"td"},"Note that passwords must be manipulated before being sent to the server."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pw_cost"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The number of iterations to use for the KDF. See Encryption for more.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pw_nonce"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Generated by the client during registration. See Encryption for more.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"version"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The version of the SF specification used when creating this user's account. (Latest is 003) (This value is also updated when a user changes their password or updates their security version.)")))),Object(l.b)("h2",{id:"items"},"Items"),Object(l.b)("p",null,"Item models have the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uuid"),Object(l.b)("td",{parentName:"tr",align:null},"String (or uuid for some databases)"),Object(l.b)("td",{parentName:"tr",align:null},"The unique identifier for this model.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"content"),Object(l.b)("td",{parentName:"tr",align:null},"Text"),Object(l.b)("td",{parentName:"tr",align:null},"The JSON encoded structure of the item, encrypted.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"content_type"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"The type of the structure contained in the ",Object(l.b)("inlineCode",{parentName:"td"},"content")," field. (i.e Note, Tag, Extension, etc.)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enc_item_key"),Object(l.b)("td",{parentName:"tr",align:null},"Text"),Object(l.b)("td",{parentName:"tr",align:null},"The locally encrypted encryption key for this item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"deleted"),Object(l.b)("td",{parentName:"tr",align:null},"Bool"),Object(l.b)("td",{parentName:"tr",align:null},"Whether the model has been deleted.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"created_at"),Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"The date this item was created.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"updated_at"),Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"The date this item was modified.")))),Object(l.b)("h2",{id:"client-structures"},"Client Structures"),Object(l.b)("p",null,"Client structures are stored in the ",Object(l.b)("inlineCode",{parentName:"p"},"content")," field of the ",Object(l.b)("inlineCode",{parentName:"p"},"Item")," model. A client structure can have any property the client chooses, as well as the following:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appData"),Object(l.b)("td",{parentName:"tr",align:null},"Dictionary"),Object(l.b)("td",{parentName:"tr",align:null},"A domain based dictionary whose content must be preserved between platforms. ",Object(l.b)("inlineCode",{parentName:"td"},"appData[domain]")," contains data the client stores in the item.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"references"),Object(l.b)("td",{parentName:"tr",align:null},"Array"),Object(l.b)("td",{parentName:"tr",align:null},"A metadata array of other ",Object(l.b)("inlineCode",{parentName:"td"},"Item")," uuids this model is related to and their respective ",Object(l.b)("inlineCode",{parentName:"td"},"content_type"),". See sample below.")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"references")," array sample:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[\n  {uuid: xxxx, content_type: "Tag"},\n  {uuid: xxxxx, content_type: "Tag"},\n]\n')),Object(l.b)("h2",{id:"rest-api"},"REST API"),Object(l.b)("p",null,"General:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"All requests after the initial authentication should be authenticated with a JWT with the ",Object(l.b)("inlineCode",{parentName:"p"},"Authorization")," header:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"Authorization: Bearer _insert_JWT_here_\n\n")))),Object(l.b)("h2",{id:"api-auth"},"API-Auth"),Object(l.b)("p",null,"Standard Notes uses JSON Web Tokens (JWT) for authentication."),Object(l.b)("h3",{id:"post-auth"},"POST auth"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Registers a user and returns a JWT")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Params: email, password, pw_cost, pw_nonce, version")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note"),": ",Object(l.b)("inlineCode",{parentName:"p"},"password")," needs to be processed locally before being sent to the server. See Encryption for more. Never send the user's inputted password to the server."),Object(l.b)("p",null,"Responses:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"200")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"token" : "..."}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"5xx")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"errors" : []}\n')),Object(l.b)("h3",{id:"post-authchange_pw"},"POST auth/change_pw"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Updates a user's password.")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Params: email, password, current_password")),Object(l.b)("p",null,"Responses:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"204")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"No Content\n")),Object(l.b)("p",null,"5xx"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"errors" : []}\n')),Object(l.b)("h3",{id:"post-authsign_in"},"POST auth/sign_in"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Authenticates a user and returns a JWT.")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note"),": Passwords needs to be processed locally before being sent to the server. See Encryption for more. Never send the user's inputted password to the server."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Params: email, password")),Object(l.b)("p",null,"Responses:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"200")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"token" : "..."}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"5xx")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"errors" : []}\n')),Object(l.b)("h3",{id:"get-authparams"},"GET auth/params"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns the parameters used for password generation.")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Params: email")),Object(l.b)("p",null,"Responses:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"200")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"pw_cost" : "...", "pw_nonce" : "...", "version" : "..."}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"5xx")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"errors" : []}\n')),Object(l.b)("h3",{id:"items-1"},"Items"),Object(l.b)("h4",{id:"post-itemssync"},"POST items/sync"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Saves local changes as well as retrieves remote changes.")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Params:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"items"),": An array of items"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sync_token"),": the sync token returned from the previous sync call. Leave empty if first sync."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"limit"),": (optional) the number of results to return. ",Object(l.b)("inlineCode",{parentName:"li"},"cursor_token")," is returned if more results are available.")),Object(l.b)("p",null,"Responses"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"200")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"retrieved_items" : [], "saved_items" : [], "unsaved" : [], "sync_token" : ""}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"5xx")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"errors" : []}\n')),Object(l.b)("h2",{id:"sync-discussion"},"Sync Discussion"),Object(l.b)("h3",{id:"deletion"},"Deletion:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Clients: set ",Object(l.b)("inlineCode",{parentName:"li"},"deleted")," equal to ",Object(l.b)("inlineCode",{parentName:"li"},"true")," and sync. When receiving an item that is ",Object(l.b)("inlineCode",{parentName:"li"},"deleted"),", remove it from the local database immediately."),Object(l.b)("li",{parentName:"ul"},"Servers: if syncing an item that is ",Object(l.b)("inlineCode",{parentName:"li"},"deleted"),", clear out its ",Object(l.b)("inlineCode",{parentName:"li"},"content")," and ",Object(l.b)("inlineCode",{parentName:"li"},"enc_item_key")," fields, set ",Object(l.b)("inlineCode",{parentName:"li"},"deleted")," to true, and save.")),Object(l.b)("h3",{id:"sync-completion"},"Sync completion:"),Object(l.b)("p",null,"Upon sync completion, the client should handle each response item as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"retrieved_items"),": these items are new or have been modified since last sync and should be merged or created locally."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"saved_items"),": saved items are dirty items that were sent to the sync request. These items should not be merged in their entirety upon completion. Instead, only their metadata should be merged. For example, if at Point A the client syncs a Note item that a user is still typing, and at Point B the sync completes, the user could have typed more content in between A and B. Thus, if you merge all content, the user's progress in between A and B will be lost. However, if you merge just the metadata (usually just updated_at date), then this issue is avoided."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"unsaved"),": returned if an error occurred saving those items. This can happen in the case of a sync conflict, where an item attempting to be saved already has a pending change. This item will not be saved, and will instead be returned in this array. The client is then responsible for duplicating this item and assigning it a new UUID. Another scenario for unsaved is the improbable case of a UUID conflict."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sync_token"),": this token should be saved when it is received and sent to subsequent sync requests. This token should also be persisted locally between app sessions. For first time sync, no token should be provided."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cursor_token"),": returned if original request had a ",Object(l.b)("inlineCode",{parentName:"li"},"limit"),". Send this token back to the server to retrieve next page of results.")),Object(l.b)("h2",{id:"importexport"},"Import/Export"),Object(l.b)("p",null,"The export file is a JSON file of all the user's items, unencrypted."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n  "items": [\n    {\n      "uuid": "3162fe3a-1b5b-4cf5-b88a-afcb9996b23a",\n      "content_type": "Note",\n      "content": {\n        "references": [\n          {\n            "uuid": "901751a0-0b85-4636-93a3-682c4779b634",\n            "content_type": "Tag"\n          }\n        ],\n        "title": "...",\n        "text": "..."\n      },\n      "created_at": "2016-12-16T17:37:50.000Z"\n    },\n\n    {\n      "uuid": "023112fe-9066-481e-8a63-f15f27d3f904",\n      "content_type": "Tag",\n      "content": {\n        "references": [\n          {\n            "uuid": "94cba6b7-6b55-41d6-89a5-e3db8be9fbbf",\n            "content_type": "Note"\n          }\n        ],\n        "title": "essays"\n      },\n      "created_at": "2016-12-16T17:13:20.000Z"\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"next-steps"},"Next Steps"),Object(l.b)("p",null,"Join the ",Object(l.b)("a",{parentName:"p",href:"https://standardnotes.org/slack"},"Slack group")," to discuss implementation details and ask any questions you may have."),Object(l.b)("p",null,"You can also email ",Object(l.b)("a",{parentName:"p",href:"mailto:help@standardnotes.org"},"help@standardnotes.org"),"."),Object(l.b)("p",null,"Follow ",Object(l.b)("a",{parentName:"p",href:"https://twitter.com/standardnotes"},"@standardnotes on Twitter")," for updates and announcements."))}s.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);