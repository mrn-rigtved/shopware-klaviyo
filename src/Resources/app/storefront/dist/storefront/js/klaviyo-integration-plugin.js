(window.webpackJsonp=window.webpackJsonp||[]).push([["klaviyo-integration-plugin"],{"+i2j":function(t,e,o){"use strict";o.r(e);var n=o("FGIj");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f,p,l,y=function(t){function e(){return i(this,e),c(this,a(e).apply(this,arguments))}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),o=e,(n=[{key:"init",value:function(){window._learnq=window._learnq||[],this.options.customerIdentityInfo&&window._learnq.push(["identify",{$email:this.options.customerIdentityInfo.email,$first_name:this.options.customerIdentityInfo.firstName,$last_name:this.options.customerIdentityInfo.lastName,$phone_number:this.options.customerIdentityInfo.phoneNumber,$city:this.options.customerIdentityInfo.city,$region:this.options.customerIdentityInfo.region,$country:this.options.customerIdentityInfo.country,$zip:this.options.customerIdentityInfo.zip,Birthday:this.options.customerIdentityInfo.birthday}])}}])&&u(o.prototype,n),r&&u(o,r),e}(n.a);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}l={customerIdentityInfo:null},(p="options")in(f=y)?Object.defineProperty(f,p,{value:l,enumerable:!0,configurable:!0,writable:!0}):f[p]=l;var g=function(t){function e(){return d(this,e),m(this,v(e).apply(this,arguments))}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),o=e,(n=[{key:"init",value:function(){window._learnq=window._learnq||[],this.options.productInfo||!console?(window._learnq.push(["track","Viewed Product",this.options.productInfo]),window._learnq.push(["trackViewedItem",{Title:this.options.productInfo.ProductName,ItemId:this.options.productInfo.ProductID,Categories:this.options.productInfo.Categories,ImageUrl:this.options.productInfo.ImageURL,Url:this.options.productInfo.URL,Metadata:{Brand:this.options.productInfo.Brand,Price:this.options.productInfo.Price,CompareAtPrice:this.options.productInfo.CompareAtPrice}}])):console.error("Product info configuration was not set")}}])&&h(o.prototype,n),r&&h(o,r),e}(n.a);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}!function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}(g,"options",{productInfo:null});var S=function(t){function e(){return I(this,e),O(this,j(e).apply(this,arguments))}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),o=e,(n=[{key:"init",value:function(){console.log("working"),window._learnq=window._learnq||[],this.options.startedCheckoutEventTrackingRequest||!console?window._learnq.push(["track","Started Checkout",this.options.startedCheckoutEventTrackingRequest]):console.error("Checkout Started Event Tracking DTO was not set")}}])&&k(o.prototype,n),r&&k(o,r),e}(n.a);!function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}(S,"options",{startedCheckoutEventTrackingRequest:null});var E=o("3rxU");function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var $=function(t){function e(){return T(this,e),K(this,R(e).apply(this,arguments))}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),o=e,(n=[{key:"init",value:function(){if(this.storage=E.a,this.options.afterInteraction)return null!==this.storage.getItem(this.options.klaviyoInitializedStorageKey)?this._initKlaviyo():this.registerEvents();this._initKlaviyo()}},{key:"registerEvents",value:function(){window.addEventListener("scroll",this._prepareForInitialization.bind(this),{once:!0})}},{key:"_prepareForInitialization",value:function(){this.storage.setItem(this.options.klaviyoInitializedStorageKey,""),this._initKlaviyo()}},{key:"_initKlaviyo",value:function(){var t=document.createElement("script");t.type="text/javascript",t.setAttribute("async",!0),t.src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id="+this.options.publicApiKey,document.body.appendChild(t)}}])&&q(o.prototype,n),r&&q(o,r),e}(n.a);!function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}($,"options",{klaviyoInitializedStorageKey:"klaviyoInitializedStorageKey"});var x=window.PluginManager;x.register("KlaviyoIdentityTrackingComponent",y,"[data-klaviyo-identity-tracking-component]"),x.register("KlaviyoProductViewedEventTrackingComponent",g,"[data-klaviyo-product-viewed-event-tracking-component]"),x.register("KlaviyoCheckoutStartedEventTrackingComponent",S,"[data-klaviyo-checkout-started-event-tracking-component]"),x.register("KlaviyoTracking",$,"[data-klaviyo-tracking]")}},[["+i2j","runtime","vendor-node","vendor-shared"]]]);