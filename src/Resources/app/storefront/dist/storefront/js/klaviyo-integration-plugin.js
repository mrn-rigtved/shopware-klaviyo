(window.webpackJsonp=window.webpackJsonp||[]).push([["klaviyo-integration-plugin"],{"+i2j":function(t,o,e){"use strict";e.r(o);var n=e("FGIj");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function u(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,o){return!o||"object"!==r(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,o){return(f=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var s,p,l,y=function(t){function o(){return i(this,o),c(this,a(o).apply(this,arguments))}var e,n,r;return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&f(t,o)}(o,t),e=o,(n=[{key:"init",value:function(){window._learnq=window._learnq||[],this.options.customerIdentityInfo&&window._learnq.push(["identify",{$email:this.options.customerIdentityInfo.email,$first_name:this.options.customerIdentityInfo.firstName,$last_name:this.options.customerIdentityInfo.lastName,$phone_number:this.options.customerIdentityInfo.phoneNumber,$city:this.options.customerIdentityInfo.city,$region:this.options.customerIdentityInfo.region,$country:this.options.customerIdentityInfo.country,$zip:this.options.customerIdentityInfo.zip,Birthday:this.options.customerIdentityInfo.birthday}])}}])&&u(e.prototype,n),r&&u(e,r),o}(n.a);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function h(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,o){return!o||"object"!==b(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,o){return(v=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}l={customerIdentityInfo:null},(p="options")in(s=y)?Object.defineProperty(s,p,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[p]=l;var g=function(t){function o(){return d(this,o),m(this,w(o).apply(this,arguments))}var e,n,r;return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&v(t,o)}(o,t),e=o,(n=[{key:"init",value:function(){window._learnq=window._learnq||[],this.options.productInfo||!console?(window._learnq.push(["track","Viewed Product",this.options.productInfo]),window._learnq.push(["trackViewedItem",{Title:this.options.productInfo.ProductName,ItemId:this.options.productInfo.ProductID,Categories:this.options.productInfo.Categories,ImageUrl:this.options.productInfo.ImageURL,Url:this.options.productInfo.URL,Metadata:{Brand:this.options.productInfo.Brand,Price:this.options.productInfo.Price,CompareAtPrice:this.options.productInfo.CompareAtPrice}}])):console.error("Product info configuration was not set")}}])&&h(e.prototype,n),r&&h(e,r),o}(n.a);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function O(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,o){return!o||"object"!==I(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,o){return(j=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}!function(t,o,e){o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e}(g,"options",{productInfo:null});var S=function(t){function o(){return _(this,o),k(this,P(o).apply(this,arguments))}var e,n,r;return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&j(t,o)}(o,t),e=o,(n=[{key:"init",value:function(){console.log("working"),window._learnq=window._learnq||[],this.options.startedCheckoutEventTrackingRequest||!console?window._learnq.push(["track","Started Checkout",this.options.startedCheckoutEventTrackingRequest]):console.error("Checkout Started Event Tracking DTO was not set")}}])&&O(e.prototype,n),r&&O(e,r),o}(n.a);!function(t,o,e){o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e}(S,"options",{startedCheckoutEventTrackingRequest:null});var C=window.PluginManager;C.register("KlaviyoIdentityTrackingComponent",y,"[data-klaviyo-identity-tracking-component]"),C.register("KlaviyoProductViewedEventTrackingComponent",g,"[data-klaviyo-product-viewed-event-tracking-component]"),C.register("KlaviyoCheckoutStartedEventTrackingComponent",S,"[data-klaviyo-checkout-started-event-tracking-component]")}},[["+i2j","runtime","vendor-node","vendor-shared"]]]);