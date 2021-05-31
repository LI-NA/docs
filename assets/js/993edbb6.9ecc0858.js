(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(176)),l={id:"sync",title:"Sync API",sidebar_label:"Sync",description:"Specification for the Standard Notes Sync API.",keywords:["standard notes","docs","notes app","end-to-end encryption","sync"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"specification/sync",id:"specification/sync",isDocsHomePage:!1,title:"Sync API",description:"Specification for the Standard Notes Sync API.",source:"@site/docs/specification/sync.md",sourceDirName:"specification",slug:"/specification/sync",permalink:"/specification/sync",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/specification/sync.md",version:"current",lastUpdatedAt:1622501129,formattedLastUpdatedAt:"5/31/2021",sidebar_label:"Sync",frontMatter:{id:"sync",title:"Sync API",sidebar_label:"Sync",description:"Specification for the Standard Notes Sync API.",keywords:["standard notes","docs","notes app","end-to-end encryption","sync"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Client Encryption API",permalink:"/specification/encryption/"},next:{title:"Auth API",permalink:"/specification/auth"}},b=[{value:"Item",id:"item",children:[]},{value:"Content",id:"content",children:[]},{value:"REST API",id:"rest-api",children:[{value:"POST items/sync",id:"post-itemssync",children:[]}]}],o={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document outlines the client-server communication of the Standard Notes ecosystem."),Object(i.b)("h2",{id:"item"},"Item"),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"Item")," is largely the only model that both clients and server are concerned wtih. The ",Object(i.b)("inlineCode",{parentName:"p"},"content")," field stores an encrypted object that can be anything the client needs to operate."),Object(i.b)("p",null,"Relationships between items are handled by the client, and not the server, and are stored encrypted in the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," field as ",Object(i.b)("inlineCode",{parentName:"p"},"references"),"."),Object(i.b)("p",null,"Items have the following properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"uuid"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")," (or uuid for some databases)"),Object(i.b)("td",{parentName:"tr",align:null},"The unique identifier for this item.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"content"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"text")),Object(i.b)("td",{parentName:"tr",align:null},"An encrypted string generated by the client.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"content_type"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"The type of data contained in the ",Object(i.b)("inlineCode",{parentName:"td"},"content")," field. (i.e Note, Tag, SN")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enc_item_key"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"text")),Object(i.b)("td",{parentName:"tr",align:null},"The key used to encrypt ",Object(i.b)("inlineCode",{parentName:"td"},"content"),", itself also encrypted.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"deleted"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:null},"Whether the model has been deleted.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"created_at_timestamp"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",{parentName:"tr",align:null},"Timestamp representing when the item was created, with microsecond precision.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"updated_at_timestamp"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",{parentName:"tr",align:null},"Timestamp representing when the item was updated ",Object(i.b)("em",{parentName:"td"},"by the server"),", with microsecond precision.")))),Object(i.b)("h2",{id:"content"},"Content"),Object(i.b)("p",null,"Data generated by the client is stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"content")," field of the ",Object(i.b)("inlineCode",{parentName:"p"},"Item"),". An item's ",Object(i.b)("inlineCode",{parentName:"p"},"content"),' is "sticky" and can have any property the client chooses, as well as the following:'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"appData"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dictionary")),Object(i.b)("td",{parentName:"tr",align:null},"A domain based dictionary whose content must be preserved between platforms. ",Object(i.b)("inlineCode",{parentName:"td"},"appData[domain]")," contains data the client stores in the item.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"references"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"array")),Object(i.b)("td",{parentName:"tr",align:null},"A metadata array of other ",Object(i.b)("inlineCode",{parentName:"td"},"Item")," uuids this item is related to and their respective ",Object(i.b)("inlineCode",{parentName:"td"},"content_type"),". See sample below.")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"references")," array structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'[\n  {uuid: xxxx, content_type: "Tag"},\n  {uuid: xxxxx, content_type: "Tag"},\n]\n')),Object(i.b)("h2",{id:"rest-api"},"REST API"),Object(i.b)("p",null,"General:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"All requests after initial authentication should be authenticated with a session token in the ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," header:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"Authorization: Bearer <access token>\n\n")))),Object(i.b)("h3",{id:"post-itemssync"},"POST items/sync"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"api"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},'The API version to use. Must not be null, otherwise oldest API version used. Latest value is "20200115".')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"compute_integrity"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:null},"Should be false in most cases. Pass true if you plan to read the ",Object(i.b)("inlineCode",{parentName:"td"},"integrity_hash")," result (integrity can be optionally checked once on app launch).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"items"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"array")),Object(i.b)("td",{parentName:"tr",align:null},"An array of Items.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"limit"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",{parentName:"tr",align:null},"The maximum number of items to return per request. Official clients use 150.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sync_token"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"An opaque token returned by the server from a previous sync request. This lets the server know to pull in only new changes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"cursor_token"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"An opaque pagination token returned by the server from a previous multi-page sync request. Send this value back only if the server returned this value from a previous request.")))),Object(i.b)("h4",{id:"response"},"Response"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "retrieved_items": Array<Item>,\n    "saved_items": Array<Item>,\n    "conflicts": Array<Conflict>,\n    "sync_token": string,\n    "cursor_token": string?,\n    "integrity_hash": string?,\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"retrieved_items"),Object(i.b)("td",{parentName:"tr",align:null},"Items that are new to the client or have been modified since last sync and should be merged with local values or created locally.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"saved_items"),Object(i.b)("td",{parentName:"tr",align:null},"Items which have been successfully saved. Clients should merge ",Object(i.b)("em",{parentName:"td"},"only")," the resulting ",Object(i.b)("inlineCode",{parentName:"td"},"updated_at_timestamp")," with local values. Do not update local value of ",Object(i.b)("inlineCode",{parentName:"td"},"content")," from remote ",Object(i.b)("inlineCode",{parentName:"td"},"saved_items")," value.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"conflicts"),Object(i.b)("td",{parentName:"tr",align:null},"Items which have not been saved by the server and returned to client.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sync_token"),Object(i.b)("td",{parentName:"tr",align:null},"An opaque token which should be sent back to server in subsequent sync request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"cursor_token"),Object(i.b)("td",{parentName:"tr",align:null},"An opaque token which should be sent back to server in subsequent sync request (if present).")))),Object(i.b)("h4",{id:"conflicts"},"Conflicts"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"type Conflict = {\n  server_item?: Item\n  unsaved_item?: Item\n  type: 'sync_conflict' | 'uuid_conflict'\n}\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"sync_conflict")," occurs when the item the client is attempting to save has a newer change on the server. The server is able to determine this by reading the ",Object(i.b)("inlineCode",{parentName:"p"},"updated_at_timestamp")," value from both the incoming payload and the server payload. If the incoming payload's ",Object(i.b)("inlineCode",{parentName:"p"},"updated_at_timestamp")," != to the server's ",Object(i.b)("inlineCode",{parentName:"p"},"updated_at_timestamp")," for that item, the save is rejected and returned to client as a ",Object(i.b)("inlineCode",{parentName:"p"},"sync_conflict"),". These types of conflicts are not uncommon."),Object(i.b)("p",null,"To resolve a ",Object(i.b)("inlineCode",{parentName:"p"},"sync_conflict"),", the client must choose a winner between server_item and unsaved_item then re-sync. The winning item should have its updated_at_timestamp value set to the server's value."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"uuid_conflict")," occurs when the UUID the client has choosen for an item for X user already belongs to an item for Y user. This should mostly only occur when a user registers a new account and imports a data backup from another account."),Object(i.b)("p",null,"To resolve a ",Object(i.b)("inlineCode",{parentName:"p"},"uuid_conflict"),", change the UUID of the item attempting to be saved to a new UUID, then re-sync."),Object(i.b)("h4",{id:"deletion"},"Deletion"),Object(i.b)("p",null,"To delete an item permanently, set ",Object(i.b)("inlineCode",{parentName:"p"},"deleted")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"Item")," and sync. When receiving an item that is ",Object(i.b)("inlineCode",{parentName:"p"},"deleted"),", remove it from the local database immediately."))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},o),{},{components:n})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);