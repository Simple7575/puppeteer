(window.webpackJsonp=window.webpackJsonp||[]).push([[1110],{1181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),p=(r(0),r(2839)),a=["components"],c={},i={unversionedId:"puppeteer.browserconnectoptions",id:"version-5.4.0/puppeteer.browserconnectoptions",isDocsHomePage:!1,title:"puppeteer.browserconnectoptions",description:"Home &gt; puppeteer &gt; BrowserConnectOptions",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.browserconnectoptions.md",slug:"/puppeteer.browserconnectoptions",permalink:"/puppeteer/docs/puppeteer.browserconnectoptions",version:"5.4.0"},b=[{value:"BrowserConnectOptions interface",id:"browserconnectoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:b};function u(e){var t=e.components,r=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browserconnectoptions"},"BrowserConnectOptions")),Object(p.b)("h2",{id:"browserconnectoptions-interface"},"BrowserConnectOptions interface"),Object(p.b)("p",null,"Generic browser options that can be passed when launching any browser or when connecting to an existing browser instance."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export interface BrowserConnectOptions \n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions.defaultviewport"},"defaultViewport?")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.viewport"},"Viewport")," ","|"," null"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Sets the viewport for each page.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions.ignorehttpserrors"},"ignoreHTTPSErrors?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Whether to ignore HTTPS errors during navigation.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions.slowmo"},"slowMo?")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Slows down Puppeteer operations by the specified amount of milliseconds to aid debugging.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions.targetfilter"},"targetFilter?")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.targetfiltercallback"},"TargetFilterCallback")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Callback to decide if Puppeteer should connect to a given target or not.")))))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,O=u["".concat(a,".").concat(d)]||u[d]||s[d]||p;return r?o.a.createElement(O,c(c({ref:t},b),{},{components:r})):o.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var b=2;b<p;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);