(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(h,s(s({ref:t},l),{},{components:r})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},104:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(106);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},106:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(103)),i=(r(104),{id:"log_saver",title:"Log Saver Formatter"}),s={unversionedId:"formatters/log_saver",id:"formatters/log_saver",isDocsHomePage:!1,title:"Log Saver Formatter",description:"The log saver formatter writes test logs to a given path on disk. Note that Sandwich already writes logs to disk by default, as configured by the optionsSavedLogLevel option, so this is primarily useful when you want to save logs to another location, or with a different log level, or with a different formatter from the global one.",source:"@site/docs/formatters/log_saver.md",slug:"/formatters/log_saver",permalink:"/sandwich/docs/formatters/log_saver",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/formatters/log_saver.md",version:"current",sidebar:"docs",previous:{title:"Failure Report Formatter",permalink:"/sandwich/docs/formatters/failure_report"},next:{title:"Silent Formatter",permalink:"/sandwich/docs/formatters/silent"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The log saver formatter writes test logs to a given path on disk. Note that Sandwich already writes logs to disk by default, as configured by the ",Object(a.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Options.html#v:optionsSavedLogLevel"},"optionsSavedLogLevel")," option, so this is primarily useful when you want to save logs to another location, or with a different log level, or with a different formatter from the global one."),Object(a.b)("p",null,'It is a "secondary" formatter in the sense that it doesn\'t write to ',Object(a.b)("inlineCode",{parentName:"p"},"stdout")," or ",Object(a.b)("inlineCode",{parentName:"p"},"stderr"),", so it can run in the background while another formatter (such as the terminal UI or print formatters) monopolize the output streams."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"This formatter must be included manually in the ",Object(a.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Options.html#v:optionsFormatters"},"optionsFormatters")," of your sandwich options."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-haskell"},"import Test.Sandwich.Formatters.LogSaver\n\nmain :: IO ()\nmain = runSandwich options myTests\n  where\n    options = defaultOptions {\n      optionsFormatters = [SomeFormatter defaultLogSaverFormatter]\n      }\n")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The main option to set is the ",Object(a.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-LogSaver.html#v:logSaverPath"},"logSaverPath"),", which controls where the logs are written. This can be set to either an absolute path, or a path relative to the test run root."),Object(a.b)("p",null,"You can see the other configuration options in the ",Object(a.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-LogSaver.html"},"documentation"),"."))}u.isMDXComponent=!0}}]);