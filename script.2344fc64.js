parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bgM8":[function(require,module,exports) {
var e=function(e){for(var t=JSON.parse(e),n=document.querySelector(".grid"),r=0;r<15;++r){var a=document.createElement("div");a.className="photo",a.setAttribute("style","background: url("+t[r].download_url+"); background-size: cover;"),n.insertAdjacentElement("beforeend",a)}},t=function(){var t=new XMLHttpRequest;t.open("GET","https://picsum.photos/v2/list?page=4&limit = 50"),t.addEventListener("readystatechange",function(){4==t.readyState&&200==t.status&&e(t.responseText)}),t.send()};t();
},{}]},{},["bgM8"], null)
//# sourceMappingURL=/script.2344fc64.js.map