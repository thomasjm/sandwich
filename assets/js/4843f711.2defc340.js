(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(i,".").concat(h)]||p[h]||f[h]||o;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},104:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(16),a=r(106);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},106:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(103)),i=r(104),s={id:"failure_report",title:"Failure Report Formatter"},c={unversionedId:"formatters/failure_report",id:"formatters/failure_report",isDocsHomePage:!1,title:"Failure Report Formatter",description:"The failure report formatter is similar to the print formatter, but it only prints failures. It's useful when you want less verbose output that only prints if something goes wrong. Like with the print formatter, it shows log messages, callstacks, and failure info in its messages.",source:"@site/docs/formatters/failure_report.md",slug:"/formatters/failure_report",permalink:"/sandwich/docs/formatters/failure_report",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/formatters/failure_report.md",version:"current",sidebar:"docs",previous:{title:"Print Formatter",permalink:"/sandwich/docs/formatters/print"},next:{title:"Log Saver Formatter",permalink:"/sandwich/docs/formatters/log_saver"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The failure report formatter is similar to the print formatter, but it only prints failures. It's useful when you want less verbose output that only prints if something goes wrong. Like with the print formatter, it shows log messages, callstacks, and failure info in its messages."),Object(o.b)("img",{alt:"Failure report formatter output",src:Object(i.a)("img/failure_report.png")}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"If you're using ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich.html#v:runSandwichWithCommandLineArgs"},"runSandwichWithCommandLineArgs"),", you can simply pass ",Object(o.b)("inlineCode",{parentName:"p"},"--print-failures")," and the failure report formatter will be selected."),Object(o.b)("p",null,"If you're using the lower-level ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich0.1.0.3/docs/Test-Sandwich.html#v:runSandwich"},"runSandwich"),", simply include the formatter in the ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Options.html#v:optionsFormatters"},"optionsFormatters")," of your sandwich options."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"import Test.Sandwich.Formatters.FailureReport\n\nmain :: IO ()\nmain = runSandwich options myTests\n  where\n    options = defaultOptions {\n      optionsFormatters = [SomeFormatter defaultFailureReportFormatter]\n      }\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Like other formatters, you can adjust the ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-FailureReport.html#v:failureReportLogLevel"},"visibility threshold"),". You can also change the ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-FailureReport.html#v:failureReportLogLevel"},"log level")," and set whether or not to include ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-FailureReport.html#v:failureReportFormatterIncludeCallStacks"},"callstacks"),"."),Object(o.b)("p",null,"You can see the configuration options in the ",Object(o.b)("a",{parentName:"p",href:"http://hackage.haskell.org/package/sandwich/docs/Test-Sandwich-Formatters-FailureReport.html"},"documentation"),"."))}p.isMDXComponent=!0}}]);