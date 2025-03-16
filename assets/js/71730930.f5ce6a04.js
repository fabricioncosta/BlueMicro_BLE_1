"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2142],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1424:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"customize_BSP",title:"Customizing Adafruit BSP",slug:"/customize_BSP"},c=void 0,s={unversionedId:"customize_BSP",id:"customize_BSP",title:"Customizing Adafruit BSP",description:"RECOMMENDED",source:"@site/docs/customizing_BSP.md",sourceDirName:".",slug:"/customize_BSP",permalink:"/docs/customize_BSP",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/customizing_BSP.md",tags:[],version:"current",frontMatter:{id:"customize_BSP",title:"Customizing Adafruit BSP",slug:"/customize_BSP"},sidebar:"someSidebar",previous:{title:"Adding a new Keyboard",permalink:"/docs/add"},next:{title:"Basic Keycodes",permalink:"/docs/keycodes_basic"}},l=[],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RECOMMENDED")),(0,a.kt)("p",null,"We have created a new Community BSP for you to be able to include your module variant so that your changes can benefit everyone. "),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/Community_nRF52_Arduino"},"Community nRF52 Add-on Boards")," project and add your module variant there.  You will then be able to use it directly when compiling your keyboard.  Everyone else will aslo be able to use your module as part of their project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ALTERNATE OPTION")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When Updating the BSP, you will loose all your changes. It is recommended to use the Community BSP and commit your board to that project so that any changes needed by your controller will be retained. "))),(0,a.kt)("p",null,"In the case where you are building a project with a nRF module that is not from adafruit and that you want to exclude the LF oscillator to reduce your BOM. Or perhaps you forgot to include one in your design and want to test the rest of your hardware. Modifying the Adafruit BSP to support this configuration is shown in the example below:"),(0,a.kt)("p",null,"In this example, an nRF52832 module is being used and a LF oscillator was not included in it's design. The nRF52832 can make use of an internal oscillator for this purpose. The paramater to make this change can be found in the following file:"),(0,a.kt)("p",null,". . .\\Arduino15\\packages\\adafruit\\hardware\\nrf52\\0.20.5\\variants\\feather_nrf52832\\variant.h"),(0,a.kt)("p",null,"//define USE_LFXO      // Board uses 32khz crystal for LF"),(0,a.kt)("p",null,"#define USE_LFRC    // Board uses RC for LF"),(0,a.kt)("p",null,"These lines can be commented/uncommented as needed. Note that this change will affect any other projects that utilize the BSP that you have edited."),(0,a.kt)("p",null,"The same edit can be done on the other boards, such as the PCA10056 to support nrf52840 variants without the LF oscillator (32.768kHz crystal)."))}p.isMDXComponent=!0}}]);