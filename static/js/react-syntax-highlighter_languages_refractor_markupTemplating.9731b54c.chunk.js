(this["webpackJsonpbubble-ui-example"]=this["webpackJsonpbubble-ui-example"]||[]).push([[81],{44:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=i.length;-1!==t.code.indexOf(o=n(a,u));)++u;return i[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(u){for(var c=0;c<u.length&&!(o>=r.length);c++){var p=u[c];if("string"===typeof p||p.content&&"string"===typeof p.content){var s=r[o],l=t.tokenStack[s],g="string"===typeof p?p:p.content,f=n(a,s),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),b=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),h=g.substring(k+f.length),d=[];m&&d.push.apply(d,i([m])),d.push(b),h&&d.push.apply(d,i([h])),"string"===typeof p?u.splice.apply(u,[c,1].concat(d)):p.content=d}}else p.content&&i(p.content)}return u}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.9731b54c.chunk.js.map