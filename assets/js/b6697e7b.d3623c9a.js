(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,h=p["".concat(a,".").concat(u)]||p[u]||b[u]||o;return t?i.a.createElement(h,s(s({ref:n},l),{},{components:t})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(7),o=(t(0),t(103)),a={id:"sandwich-webdriver",title:"Selenium integration"},s={unversionedId:"extensions/sandwich-webdriver",id:"extensions/sandwich-webdriver",isDocsHomePage:!1,title:"Selenium integration",description:"Setting up Selenium tests normally requires manual work to obtain the Selenium server JAR file and a driver program for your browser, launch the server, and connect to the server with your client library. It can be error-prone to make sure the versions are compatible and everything runs smoothly.",source:"@site/docs/extensions/sandwich-webdriver.md",slug:"/extensions/sandwich-webdriver",permalink:"/sandwich/docs/extensions/sandwich-webdriver",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extensions/sandwich-webdriver.md",version:"current",sidebar:"docs",previous:{title:"Slack Formatter",permalink:"/sandwich/docs/formatters/slack"},next:{title:"QuickCheck integration",permalink:"/sandwich/docs/extensions/sandwich-quickcheck"}},c=[{value:"Launching browsers in the background",id:"launching-browsers-in-the-background",children:[{value:"Headless",id:"headless",children:[]},{value:"Xvfb",id:"xvfb",children:[]}]},{value:"Multiple browser sessions",id:"multiple-browser-sessions",children:[]},{value:"Window positioning",id:"window-positioning",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Custom Selenium and driver binaries",id:"custom-selenium-and-driver-binaries",children:[]},{value:"Running tests in parallel with a webdriver pool",id:"running-tests-in-parallel-with-a-webdriver-pool",children:[]}],l={toc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Setting up Selenium tests normally requires manual work to obtain the Selenium server JAR file and a driver program for your browser, launch the server, and connect to the server with your client library. It can be error-prone to make sure the versions are compatible and everything runs smoothly."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sandwich-webdriver")," extension streamlines this by automatically downloading the latest compatible binary files and introducing the contexts you need to use the ",Object(o.b)("a",{parentName:"p",href:"https://hackage.haskell.org/package/webdriver"},"webdriver")," package within Sandwich. Here's how easy it is to get started:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'import Test.Sandwich\nimport Test.Sandwich.WebDriver\nimport Test.WebDriver\n\nspec :: TopSpec\nspec = introduceWebDriver (defaultWdOptions "/tmp/tools") $ do\n  it "opens Google and searches" $ withBrowser1 $ do\n    openPage "http://www.google.com"\n    search <- findElem (ByCSS "input[title=\'Search\']")\n    click search\n    sendKeys "asdf\\n" search\n\nmain :: IO ()\nmain = runSandwich defaultOptions spec\n')),Object(o.b)("p",null,"Check out the ",Object(o.b)("a",{parentName:"p",href:"#"},"WdOptions")," and ",Object(o.b)("a",{parentName:"p",href:"#"},"RunMode")," options for more on what this package can do, or look at the sections below."),Object(o.b)("h2",{id:"launching-browsers-in-the-background"},"Launching browsers in the background"),Object(o.b)("p",null,"This package makes it easy to run Selenium tests in the background, using either ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Xvfb"},"Xvfb")," or the headless mode of your browser."),Object(o.b)("h3",{id:"headless"},"Headless"),Object(o.b)("p",null,"Many browsers now have the ability to natively run in headless mode. For example, passing these modified ",Object(o.b)("inlineCode",{parentName:"p"},"WdOptions")," to ",Object(o.b)("inlineCode",{parentName:"p"},"introduceWebDriver")," will run using headless Firefox."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'wdOptions = (defaultWdOptions "/tmp/tools") {\n  capabilities = firefoxCapabilities\n  , runMode = RunHeadless defaultHeadlessConfig\n  }\n')),Object(o.b)("h3",{id:"xvfb"},"Xvfb"),Object(o.b)("p",null,'Xvfb can be used to run your browser on a separate, "virtual" X11 display, different from the one connected to your monitor. This was more useful before headless browser modes existed, but it\'s still important because it gives you the ability to record ',Object(o.b)("strong",{parentName:"p"},"video"),"."),Object(o.b)("p",null,"When a Selenium test is running on an Xvfb display, you can use ",Object(o.b)("a",{parentName:"p",href:"https://ffmpeg.org/"},"ffmpeg")," to record videos of the test runs for later examination."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"TODO: example\n")),Object(o.b)("h2",{id:"multiple-browser-sessions"},"Multiple browser sessions"),Object(o.b)("p",null,"You can open multiple Selenium sessions using the ",Object(o.b)("inlineCode",{parentName:"p"},"withBrowser")," function. It accepts a string key representing the name of the session. Each time a new session name is seen, it will be created if it doesn't already exist."),Object(o.b)("p",null,"The library provides ",Object(o.b)("inlineCode",{parentName:"p"},"withBrowser1"),"/",Object(o.b)("inlineCode",{parentName:"p"},"withBrowser2")," as convenience functions for ",Object(o.b)("inlineCode",{parentName:"p"},'withBrowser "browser1"'),"/",Object(o.b)("inlineCode",{parentName:"p"},'withBrowser "browser2"'),", but you can use your own keys if you need."),Object(o.b)("p",null,"For example, the code below open two windows, positions them on the left and right side of the screen respectively, and opens a different site in each."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'spec :: TopSpec\nspec = introduceWebDriver (defaultWdOptions "/tmp/tools") $ do\n  describe "two windows side by side" $ do\n    it "opens Google" $ withBrowser1 $ openPage "http://www.google.com"\n    it "opens Yahoo" $ withBrowser2 $ openPage "http://www.yahoo.com"\n')),Object(o.b)("h2",{id:"window-positioning"},"Window positioning"),Object(o.b)("p",null,"You can use the functions in ",Object(o.b)("a",{parentName:"p",href:"#"},"Test.Sandwich.WebDriver.Windows")," to arrange browser windows on the screen. This is useful when you want to watch two browsers simultaneously accessing a collaborative app."),Object(o.b)("p",null,"The code below extends the previous example with window positioning."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'spec :: TopSpec\nspec = introduceWebDriver (defaultWdOptions "/tmp/tools") $ do\n  describe "two windows side by side" $ do\n    it "opens Google" $ withBrowser "browser1" $ do\n      setWindowLeftSide\n      openPage "http://www.google.com"\n\n    it "opens Google" $ withBrowser "browser2" $ do\n      setWindowRightSide\n      openPage "http://www.yahoo.com"\n')),Object(o.b)("h2",{id:"screenshots"},"Screenshots"),Object(o.b)("p",null,"Because every Sandwich test tree has an associated directory in the filesystem, it's easy to capture screenshots during a test."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"TODO\n")),Object(o.b)("h2",{id:"custom-selenium-and-driver-binaries"},"Custom Selenium and driver binaries"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"running-tests-in-parallel-with-a-webdriver-pool"},"Running tests in parallel with a webdriver pool"),Object(o.b)("p",null,"TODO"))}d.isMDXComponent=!0}}]);