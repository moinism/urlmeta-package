/*! 
 urlmeta v0.0.4 built on 2016-01-03 - (c) 2016 Moin Uddin <me@moin.im> (https://moin.im/) 
 Available under MIT license. - https://github.com/moinism/urlmeta-package 
*/
module.exports=function(a,b){if("string"==typeof a)a={url:a};else{if("object"!=typeof a)return b("Please provide a URL as string or an Object.");if(!a.url)return b("Please provide a URL to fetch meta for.")}var c=require("https"),d=require("url"),e=d.parse(a.url);if(null===e.host||0===e.host.length)return b("No host found in the URL");(null===e.protocol||"https"!==e.protocol||"http"!==e.protocol)&&(e.protocol="http",a.url=d.format(e));var f=c.request({method:"GET",hostname:"api.urlmeta.org",path:"/?url="+encodeURIComponent(a.url)+(a.onlyHead===!0?"&onlyHead=true":"")},function(a){var c=[];a.on("data",function(a){c.push(a)}),a.on("end",function(){var a,d=JSON.parse(Buffer.concat(c));"ERROR"===d.result.status&&(a=d.result,d=void 0),b(a,d)})});f.end()};