(function(){var f=true,j=null,l=false,m,n=this;function o(){if(q!==void 0)return q;try{var a=n.localStorage;if(a.removeItem)return q=a}catch(b){}return q=j}var q;function r(){var a="",b,c;for(c=0;c<16;c++)b=Math.floor(Math.random()*36).toString(36),a+=b;return a}function w(a,b){return function(){a.apply(b,arguments)}}function x(a,b,c){a.addEventListener?a.addEventListener(b,c,l):a.attachEvent&&a.attachEvent("on"+b,c)}function y(a){return typeof a=="number"}
function z(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function A(){return(new Date).getTime()}function B(a,b){if((!!a&&a.constructor===Object)===f)for(var c in a){if(a.hasOwnProperty(c)&&b(c,a[c])===l)break}else{c=a.length;for(var d=0;d<c;d++)if(b(d,a[d])===l)break}}
function C(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var g=0,h=a.length;g<=h;g++)c[0][g]=g;for(var k,p,s,d=1;d<=e;d++)for(g=1;g<=h;g++)k=d-1,p=g-1,s=c[k][p],b.charAt(k)==a.charAt(p)?c[d][g]=s:(p=c[d][p]+1,k=c[k][g]+1,s+=2,c[d][g]=Math.min(p,k,s));return c[b.length][a.length]};function E(a){var b={};if(a){a.charAt(0)=="?"&&(a=a.substring(1));for(var a=a.replace("+"," "),a=a.split(/[&;]/g),c=0;c<a.length;c++){var d=a[c].split("=");b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}return b}function F(a,b,c){var d="",e=n.location.href.split("?");e.length&&(e=E(e[1]),b=c||b,e[b]&&(d="&"+a+"="+e[b]));return d};function G(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return j}function H(a,b,c){var d=n._sf_async_config;if(!d||!d.noCookies)d=new Date,d.setTime(A()+c*864E5),document.cookie=a+"="+b+("; expires="+d.toGMTString())+"; path=/"};function I(a){this.a=n._sf_async_config||{};this.J=w(this.P,this);this.e=[];this.r=a;this.b();x(n,"unload",w(this.O,this));for(var a=w(this.R,this),b=n._cbq||[];b.length;)a(b.shift());n._cbq={push:a}}m=I.prototype;m.b=function(){this.o=this.c=0;this.F=A();this.D=r();this.p=f;this.z=72E5;this.f=this.d=0;this.r.b();var a=+this.a.sessionLength;if(!isNaN(a))this.z=a*6E4};m.R=function(a){this.a[a[0]]=a[1];this.c=0};function J(a,b){var c;c=new Image(1,1);c.onerror=a.J;c.src=b}
m.q=function(){var a=n._sf_startpt,b=n._sf_endpt;if(y(a))this.C=y(b)?b-a:A()-a;this.n=setInterval(w(this.A,this),15E3);this.A()};m.P=function(){this.e.push(1);for(var a=0,b=0;b<this.e.length;++b)a+=this.e[b];a<3?(this.p=f,K(this)):(clearInterval(this.n),H("_SUPERFLY_nosample","1",0.007))};function L(a){if(!G("_SUPERFLY_nosample"))a.L?a.q():(a.L=f,!n._sf_async_config&&!n._cbq?x(n,"load",w(a.q,a)):a.q())}
m.O=function(){var a=this.D,b=o();if(b)b._cb_cp+=(b._cb_cp?",":"")+a;else if(!n.name)n.name="_cb_cp"+a};function K(a){var b=a.c,b=b?Math.min(b*2,16):1;a.c=b}m.T=function(a,b){this.s=n.location.protocol+"//"+this.a.domain+this.a.path;this.a.path=a;b&&(this.a.title=b);clearInterval(this.n);this.b();L(this)};
m.A=function(){var a=this.r,b=a.d;a.d=0;M(a);this.f=b;this.d+=this.f;a=this.a.reading&&+this.a.reading||this.f>0;if(this.o<this.c&&!a)this.o++;else{a?this.c=0:K(this);this.o=0;this.e.push(0);this.e.length>18&&this.e.shift();var a=this.a,c=N(),d=Math.round((A()-this.F)/600)/100,e=b=0,g=0;O(this.r,"onkeydown")?e=1:this.a.reading&&+this.a.reading||this.f>0||d<0.09?b=1:g=1;var h="",k="",p="",s="",i=P(this);if(this.p){this.p=l;var h=(i?"&v=":"&r=")+encodeURIComponent(this.s||document.referrer||""),k=this.a.title.slice(0,
100),k="&i="+encodeURIComponent(k),D=this.a.hudTrackable;D!==void 0&&(p="&L="+(D?"1":"0"));if(i&&(i=Q(this)))h="&v="+encodeURIComponent(i.path),s="&K="+i.left+"::"+i.top,i.B>1&&(s+="&l1="+i.B)}var i=this.C?"&b="+this.C:"",D=this.l?"&A="+this.l:"",Z=this.u?"&f="+this.u:"",u,t=o();if(t)u=t._cb_cp,t._cb_cp="";else if(/_cb_cp[a-z0-9]{16}/.test(n.name))u=n.name.substr(6),n.name="";u=u?"&D="+u:"";var t=[],v;for(v in a)v.charAt(0)=="_"&&t.push(v+"="+a[v]);v=(n.location.protocol||"http:")+"//"+a.pingServer+
"/ping?h="+encodeURIComponent(a.domain)+"&p="+encodeURIComponent(a.path)+"&u="+this.i+"&d="+encodeURIComponent(this.m)+"&g="+a.uid+(a.sections?"&g0="+encodeURIComponent(a.sections):"")+(a.authors?"&g1="+encodeURIComponent(a.authors):"")+(a.noCookies?"":"&n="+this.M)+Z+"&c="+d+"&x="+c+"&y="+R("Height")+"&o="+R("Width")+"&w=";c=document;J(this,v+(c[c.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0)+"&j="+Math.round((this.c+2)*15E3/1E3)+"&R="+b+"&W="+e+"&I="+g+"&E="+this.d+"&e="+
this.f+h+s+i+D+F("C","utm_campaign",a.campaignTag)+F("M","utm_medium",a.mediumTag)+"&t="+this.D+"&V=17"+u+k+p+(t.length?"&"+t.join("&"):"")+"&_");A()-this.F>=this.z&&clearInterval(this.n)}};function P(a){if(a.s)return f;a=(document.referrer||"").indexOf("://"+n.location.host+"/");return a!=-1&&a<9};function R(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0};function N(){var a=document.body,b=document.documentElement;if(y(n.pageYOffset))return n.pageYOffset;else if(a&&a.scrollTop)return a.scrollTop;else if(b&&b.scrollTop)return b.scrollTop;return 0}function S(){var a=window,b=document.body,c=document.documentElement;if(y(a.pageXOffset))return a.pageXOffset;else if(b&&b.scrollLeft)return b.scrollLeft;else if(c&&c.scrollLeft)return c.scrollLeft;return 0}
function T(a,b){for(var c=0,d=l;a;){c+=a["offset"+b];var e=a,g=void 0;n.getComputedStyle?(e=n.getComputedStyle(e,j),g=e.position||e.getPropertyValue("position")):g=e.currentStyle?e.currentStyle.position:e.style&&e.style.position;(g||"")==="fixed"&&(d=f);a=a.offsetParent}d&&(c+=b==="Left"?S():N());return c};function U(a){I.call(this,a);x(document.body,"click",w(this.N,this))}(function(){var a=I;function b(){}b.prototype=a.prototype;U.S=a.prototype;U.prototype=new b;U.prototype.constructor=U})();
U.prototype.b=function(){U.S.b.call(this);this.l=j;for(var a=this.a,b=document.getElementsByTagName("script"),c=0;c<b.length;++c)if(b[c].src.match(/chartbeat.js/)){b=E(b[c].src.split("?")[1]);a.uid=a.uid||b.uid;a.domain=a.domain||b.domain;break}a=n.location;b=this.a;b.pingServer=b.pingServer||"ping.chartbeat.net";b=this.a;b.title=b.title||document.title;b=this.a;b.domain=b.domain||a.host;b=this.a;a:{c=j;if(this.a.useCanonical){for(var c=j,d=document.getElementsByTagName("link"),e=0;e<d.length;++e)if(d[e].rel==
"canonical")c=d[e].href,c=c.substring(c.indexOf("/",9));if(c)break a}e=n.location;c=e.pathname+(e.search||"");c=c.replace(/PHPSESSID=[^&]+/,"");d=/&utm_[^=]+=[^&]+/ig;(e=d.exec(e.search))&&(c=c.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(e=d.exec(c))&&(c=c.replace(d,e[1]!=""?"?"+e[1]:""))}b.path=b.path||c;this.m=a.host.replace(/^www\./,"");this.a.domain=this.a.domain.replace(/^www\./,"");var a=(G("_chartbeat2")||"").split("."),b=A(),c=b-+(a[1]||0),e="1",g=a&&+a[2],d=a&&a[3];if(a&&g&&d)if(e=Math.abs((z(b)-
z(g))/864E5)){e=Math.min(e,16)-1;for(g="";e--;)g+=0;e=(d+g+"1").slice(-16)}else e=d;this.M=a[0]&&c>18E5?0:1;a[0]||(a[0]=r(),a[1]=b);a[2]=b;a[3]=e;this.i=a[0];this.Q=a.join(".");H("_chartbeat2",this.Q,30);this.a.utoken=this.i;var h;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)h=(Math.min((Math.abs((z(c)-z(b))/864E5)||0)+1,16,a.length)-1).toString(16),h+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.u=h;n.postMessage&&x(n,"message",w(this.K,this));h=G("_chartbeat_uuniq")==="1";H("_chartbeat_uuniq","1",30);
h||J(this,"//ping.chartbeat.net/uuniq?u="+this.i)};U.prototype.H=function(a){this.l=a};
U.prototype.K=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.m)){var c=a.data;if(typeof c=="string"&&c.indexOf("cbqpush::")===0){if(a=c.split("::"),a.length==3)a[1].indexOf("_")===0&&(b[a[1]]=a[2]),this.c=0}else c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title=",c=this.a.title.slice(0,100),a.source.postMessage(b+encodeURIComponent(c)+"&referrer="+encodeURIComponent(this.s||document.referrer||"")+"&internal="+(P(this)?"1":"0")+
"&subdomain="+encodeURIComponent(this.m)+"&utoken="+this.i,"*"))}};
U.prototype.N=function(a){if(a=a||window.event){var b=a.target||a.srcElement;if(b.tagName!=="A")if(b.parentNode)if(b.parentNode.tagName==="A")b=b.parentNode;else{if(b.parentNode.parentNode&&b.parentNode.parentNode.tagName==="A")b=b.parentNode.parentNode}else return;a=b.href;var c=a,d="";if(c){var d=document.createElement("a"),e=n.location;c.indexOf("http")!==0&&(c=e.protocol+c);d.href=c;d=d.hostname;if(d==="")d=e.hostname}d===n.location.hostname&&(c=T(b,"Left"),b=T(b,"Top"),a=[c,b,encodeURIComponent(this.a.path),
encodeURIComponent(a)].join(","),b=(b=G("_chartbeat5"))?b.split("::"):[],c=b.length-5+1,b.splice(0,c>0?c:0),b.push(a),H("_chartbeat5",b.join("::"),6.944444444444445E-4))}};
function Q(a){var b=G("_chartbeat5");if(!b)return j;var b=b.split("::"),c=b.length,d,e;if(c===1)d=b[0].split(","),e=0;else{var g,h=a.a.path;B(b,function(a,b){var c=b.split(","),i=C(h,decodeURIComponent(c[3]));if(i===0)return d=c,e=a,l;if(g===void 0||i<g)g=i,d=c,e=a})}b.splice(e,1);H("_chartbeat5",b.join("::"),6.944444444444445E-4);return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),B:c}};function V(){this.j=[];this.I=l;this.t=this.g=j;this.k=[];W(this,n,"onscroll");W(this,document.body,"onkeydown");W(this,document.body,"onmousemove");this.b()}V.prototype.b=function(){this.h={};this.d=0;M(this);this.h.onmousemove=A()};function M(a){a.w&&clearInterval(a.w);a.G();a.w=setInterval(w(a.G,a),1E3)}
function W(a,b,c){var d=b[c]||function(){};a.k.push(c);b[c]=function(b){d.apply(this,arguments);if(b&&c=="onkeydown"){var g=b.keyCode?b.keyCode:b.which;if(g==32||g>36&&g<41){a.h.onscroll=A();return}}a.h[c]=A();if(a.I)a.g===j&&a.v(),n.clearTimeout(a.t),a.t=n.setTimeout(w(a.v,a),500)}}V.prototype.v=function(){var a=this;this.g=n.setTimeout(function(){n.clearTimeout(a.g);a.g=j},500);for(var b=0,c=this.j.length;b<c;b++)if(typeof this.j[b]==="function")this.j[b]()};
function O(a,b,c){a=a.h[b];if(a===void 0)return l;a=A()-a;return a<=(c||15E3)&&a>=0}V.prototype.G=function(){var a;a:{for(a=0;a<this.k.length;a++)if(O(this,this.k[a],5E3)){a=f;break a}a=l}a&&this.d++};var aa=(document.location.protocol=="https:"?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://static.chartbeat.com/")+"js/inpage.js";function X(){var a=document.createElement("script");a.async=f;a.src=aa;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function ba(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=o(),c=String(a.data);if(b&&c.indexOf("_cb_ip")==0)b._cb_ip=1,a.source.postMessage(1,a.origin),X()}};if(!n.pSUPERFLY){var ca=new V,Y=new U(ca);n.pSUPERFLY=Y;U.prototype.virtualPage=U.prototype.T;U.prototype.activity=U.prototype.H;L(Y);var $=o();$&&(x(n,"message",ba),$._cb_ip&&X())};})();