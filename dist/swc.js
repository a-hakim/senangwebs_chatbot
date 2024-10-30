!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SWC=t():e.SWC=t()}(this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};return(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}var r=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.knowledgeBase=t,this.currentNode=null},(o=[{key:"init",value:function(){return this.currentNode=this.knowledgeBase.find((function(e){return"welcome"===e.id}))||this.knowledgeBase[0],{reply:this.currentNode.reply,options:this.currentNode.options}}},{key:"handleInput",value:function(e){var n=this,o=e.toLowerCase().split(/\s+/),r={};this.knowledgeBase.forEach((function(e){r[e.id]=0,e.keyword.forEach((function(t){var n=t.toLowerCase();o.forEach((function(t){(t.includes(n)||n.includes(t))&&r[e.id]++}))}))}));var i=null,a=0;return Object.entries(r).forEach((function(e){var o=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),r=o[0],l=o[1];l>a&&(a=l,i=n.knowledgeBase.find((function(e){return e.id===r})))})),i?(this.currentNode=i,{reply:i.reply,options:i.options}):{reply:"I'm sorry, I didn't understand that. Can you please rephrase?",options:null}}},{key:"handleOptionSelection",value:function(e){var t=this.knowledgeBase.find((function(t){return t.id===e}));return t?(this.currentNode=t,{reply:t.reply,options:t.options}):{reply:"I'm sorry, I couldn't find the appropriate response. How else can I assist you?",options:null}}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o}(),i=[{id:"welcome",keyword:["hello","hi","hey"],reply:'Welcome! How can I assist you <b>today?</b> <a href="https://senangwebs.com">senangwebs.com</a>',options:[{label:"Get Help",reply_id:"help"},{label:"End Chat",reply_id:"goodbye"}]},{id:"help",keyword:["help","support","assist"],reply:"Sure, I can help! What do you need assistance with?",options:[{label:"Product Information",reply_id:"product"},{label:"Billing",reply_id:"billing"},{label:"Technical Support",reply_id:"tech_support"}]},{id:"product",keyword:["product","information"],reply:"Our product is designed to make your life easier. Would you like to know more about its features or pricing?",options:[{label:"Features",reply_id:"features"},{label:"Pricing",reply_id:"pricing"}]},{id:"billing",keyword:["billing","payment","invoice"],reply:"For billing inquiries, please visit our billing portal or contact our finance department at billing@example.com.",options:[{label:"Back to Help",reply_id:"help"},{label:"End Chat",reply_id:"goodbye"}]},{id:"tech_support",keyword:["technical","support","issue"],reply:"For technical support, please describe your issue in detail and well do our best to assist you."},{id:"features",keyword:["features","functionality"],reply:"Our product offers cutting-edge features including AI-powered analytics, real-time collaboration, and seamless integration with popular tools.",options:[{label:"Back to Product Info",reply_id:"product"},{label:"End Chat",reply_id:"goodbye"}]},{id:"pricing",keyword:["pricing","cost","plans"],reply:"We offer flexible pricing plans starting at $9.99/month. For detailed pricing information, please visit our website or contact our sales team.",options:[{label:"Back to Product Info",reply_id:"product"},{label:"End Chat",reply_id:"goodbye"}]},{id:"goodbye",keyword:["bye","goodbye","end"],reply:"Thank you for chatting with us. Have a great day!",options:[{label:"Restart Chat",reply_id:"welcome"}]}];"undefined"!=typeof window&&(window.initializeChatbot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;document.querySelectorAll("[data-swc]").forEach((function(t){var n=t.getAttribute("data-swc-theme-color")||"#007bff",o=t.getAttribute("data-swc-bot-name")||"Bot",a=t.getAttribute("data-swc-chat-display")||"classic",l=parseInt(t.getAttribute("data-swc-reply-duration"))||0,s=new r(e||i),c=function(e,t,n,o){var r=document.createElement("div");r.className="swc-chat-display ".concat("modern"===o?"swc-modern":"swc-classic");var i=document.createElement("div");i.className="swc-input-container";var a=document.createElement("input");a.type="text",a.className="swc-user-input",a.placeholder="Type your message...";var l=document.createElement("button");l.className="swc-send-button",l.textContent="Send";var s=document.createElement("div");s.className="swc-options-container",i.appendChild(a),i.appendChild(l);var c=document.createElement("div");return c.className="swc-typing-indicator",c.innerHTML="<span></span><span></span><span></span>",e.appendChild(r),e.appendChild(s),e.appendChild(i),e.style.setProperty("--swc-theme-color",t),e.style.setProperty("--swc-bot-name",'"'.concat(n,'"')),{chatDisplay:r,userInput:a,sendButton:l,optionsContainer:s,typingIndicator:c}}(t,n,o,a),u=c.chatDisplay,d=c.userInput,p=c.sendButton,y=c.optionsContainer,f=c.typingIndicator;function m(e,t){g();var n=document.createElement("div");n.className="swc-message swc-bot-message",n.innerHTML="".concat(e),u.appendChild(n),k(u),y.innerHTML="",t&&t.length>0?(y.style.display="flex",t.forEach((function(e){var t=document.createElement("button");t.textContent=e.label,t.onclick=function(){return t=e.reply_id,h(),v(),void setTimeout((function(){var e=s.handleOptionSelection(t);m(e.reply,e.options),w()}),l);var t},y.appendChild(t)}))):y.style.display="none"}function b(){var e=d.value.trim();if(e){var t=document.createElement("div");t.className="swc-message swc-user-message",t.innerHTML="".concat(e),u.appendChild(t),k(u),d.value="",h(),v(),setTimeout((function(){var t=s.handleInput(e);m(t.reply,t.options),w()}),l)}}function h(){d.disabled=!0,p.disabled=!0}function w(){d.disabled=!1,p.disabled=!1}function v(){g(),u.appendChild(f),k(u)}function g(){f.parentNode===u&&u.removeChild(f)}function k(e){var t=e.scrollHeight-e.clientHeight,n=e.scrollTop,o=t-n,r=null;window.requestAnimationFrame((function t(i){r||(r=i);var a,l,s,c=i-r;e.scrollTop=(a=c,l=n,s=o,(a/=150)<1?s/2*a*a*a+l:s/2*((a-=2)*a*a+2)+l),c<300&&window.requestAnimationFrame(t)}))}p.addEventListener("click",b),d.addEventListener("keypress",(function(e){"Enter"===e.key&&b()}));var C=s.init();m(C.reply,C.options)}))})})(),e.r(t),t})()));