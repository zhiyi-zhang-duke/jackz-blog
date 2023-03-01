"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{7441:function(e,t,n){function r(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}n.d(t,{TU:function(){return U}});let i=r(),s=/[&<>"']/,l=RegExp(s.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o=RegExp(a.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>c[e];function p(e,t){if(t){if(s.test(e))return e.replace(l,h)}else if(a.test(e))return e.replace(o,h);return e}let u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function g(e){return e.replace(u,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}let k=/(^|[^\[])\^/g;function f(e,t){e="string"==typeof e?e:e.source,t=t||"";let n={replace:(t,r)=>(r=(r=r.source||r).replace(k,"$1"),e=e.replace(t,r),n),getRegex:()=>RegExp(e,t)};return n}let d=/[^\w:]/g,x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(e,t,n){if(e){let e;try{e=decodeURIComponent(g(n)).replace(d,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!x.test(n)&&(n=function(e,t){b[" "+e]||(w.test(e)?b[" "+e]=e+"/":b[" "+e]=R(e,"/",!0)),e=b[" "+e];let n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(_,"$1")+t:"/"!==t.charAt(0)?e+t:n?t:e.replace(y,"$1")+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}let b={},w=/^[^:]+:\/*[^/]*$/,_=/^([^:]+:)[\s\S]*$/,y=/^([^:]+:\/*[^/]*)[\s\S]*$/,$={exec:function(){}};function z(e){let t=1,n,r;for(;t<arguments.length;t++)for(r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}function S(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"}),r=n.split(/ \|/),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function R(e,t,n){let r=e.length;if(0===r)return"";let i=0;for(;i<r;){let s=e.charAt(r-i-1);if(s!==t||n){if(s!==t&&n)i++;else break}else i++}return e.slice(0,r-i)}function T(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function A(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function I(e,t,n,r){let i=t.href,s=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;let e={type:"link",raw:n,href:i,title:s,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:s,text:p(l)}}class E{constructor(e){this.options=e||i}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:R(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=function(e,t){let n=e.match(/^(\s+)(?:```)/);if(null===n)return t;let r=n[1];return t.split("\n").map(e=>{let t=e.match(/^\s+/);if(null===t)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=R(e,"#");this.options.pedantic?e=t.trim():(!t||/ $/.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:"blockquote",raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,s,l,a,o,c,h,p,u,g;let k=t[1].trim(),f=k.length>1,d={type:"list",raw:"",ordered:f,start:f?+k.slice(0,-1):"",loose:!1,items:[]};k=f?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=f?k:"[*+-]");let x=RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=x.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),h=e.split("\n",1)[0],this.options.pedantic?(s=2,u=c.trimLeft()):(s=(s=t[2].search(/[^ ]/))>4?1:s,u=c.slice(s),s+=t[1].length),a=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),g=!0),!g){let t=RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),r=RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),l=RegExp(`^ {0,${Math.min(3,s-1)}}#`);for(;e&&(h=p=e.split("\n",1)[0],this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(i.test(h)||l.test(h)||t.test(h)||r.test(e)));){if(h.search(/[^ ]/)>=s||!h.trim())u+="\n"+h.slice(s);else{if(a||c.search(/[^ ]/)>=4||i.test(c)||l.test(c)||r.test(c))break;u+="\n"+h}a||h.trim()||(a=!0),n+=p+"\n",e=e.substring(p.length+1),c=h.slice(s)}}!d.loose&&(o?d.loose=!0:/\n *\n *$/.test(n)&&(o=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(u))&&(i="[ ] "!==r[0],u=u.replace(/^\[[ xX]\] +/,"")),d.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:u}),d.raw+=n}d.items[d.items.length-1].raw=n.trimRight(),d.items[d.items.length-1].text=u.trimRight(),d.raw=d.raw.trimRight();let m=d.items.length;for(l=0;l<m;l++)if(this.lexer.state.top=!1,d.items[l].tokens=this.lexer.blockTokens(d.items[l].text,[]),!d.loose){let e=d.items[l].tokens.filter(e=>"space"===e.type),t=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw));d.loose=t}if(d.loose)for(l=0;l<m;l++)d.items[l].loose=!0;return d}}html(e){let t=this.rules.block.html.exec(e);if(t){let e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){let n=this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]);e.type="paragraph",e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(t){let e={type:"table",header:S(t[1]).map(e=>({text:e})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){let n,r,i,s;e.raw=t[0];let l=e.align.length;for(n=0;n<l;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(n=0,l=e.rows.length;n<l;n++)e.rows[n]=S(e.rows[n],e.header.length).map(e=>({text:e}));for(r=0,l=e.header.length;r<l;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(r=0,l=e.rows.length;r<l;r++)for(i=0,s=e.rows[r];i<s.length;i++)s[i].tokens=this.lexer.inline(s[i].text);return e}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]):t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=R(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(t[1]))return -1;let n=e.length,r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return -1}(t[2],"()");if(e>-1){let n=0===t[0].indexOf("!")?5:4,r=n+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),I(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(!(e=t[e.toLowerCase()])){let e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return I(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;let i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){let n=r[0].length-1,i,s,l=n,a=0,o="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=o.exec(t));){if(!(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(s=i.length,r[3]||r[4]){l+=s;continue}if((r[5]||r[6])&&n%3&&!((n+s)%3)){a+=s;continue}if((l-=s)>0)continue;s=Math.min(s,s+l+a);let t=e.slice(0,n+r.index+(r[0].length-i.length)+s);if(Math.min(n,s)%2){let e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}let o=t.slice(2,-2);return{type:"strong",raw:t,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," "),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let n=this.rules.inline.autolink.exec(e);if(n){let e,r;return r="@"===n[2]?"mailto:"+(e=p(this.options.mangle?t(n[1]):n[1])):e=p(n[1]),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])r="mailto:"+(e=p(this.options.mangle?t(n[0]):n[0]));else{let t;do t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(t!==n[0]);e=p(n[0]),r="www."===n[1]?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){let n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):p(n[0]):n[0]:p(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}let Z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:$,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Z._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Z._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,Z.def=f(Z.def).replace("label",Z._label).replace("title",Z._title).getRegex(),Z.bullet=/(?:[*+-]|\d{1,9}[.)])/,Z.listItemStart=f(/^( *)(bull) */).replace("bull",Z.bullet).getRegex(),Z.list=f(Z.list).replace(/bull/g,Z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Z.def.source+")").getRegex(),Z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Z.html=f(Z.html,"i").replace("comment",Z._comment).replace("tag",Z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Z.paragraph=f(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex(),Z.blockquote=f(Z.blockquote).replace("paragraph",Z.paragraph).getRegex(),Z.normal=z({},Z),Z.gfm=z({},Z.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Z.gfm.table=f(Z.gfm.table).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex(),Z.gfm.paragraph=f(Z._paragraph).replace("hr",Z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z._tag).getRegex(),Z.pedantic=z({},Z.normal,{html:f("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(Z.normal._paragraph).replace("hr",Z.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});let q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function C(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function L(e){let t="",n,r,i=e.length;for(n=0;n<i;n++)r=e.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),t+="&#"+r+";";return t}q._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",q.punctuation=f(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex(),q.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,q.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,q._comment=f(Z._comment).replace("(?:-->|$)","-->").getRegex(),q.emStrong.lDelim=f(q.emStrong.lDelim).replace(/punct/g,q._punctuation).getRegex(),q.emStrong.rDelimAst=f(q.emStrong.rDelimAst,"g").replace(/punct/g,q._punctuation).getRegex(),q.emStrong.rDelimUnd=f(q.emStrong.rDelimUnd,"g").replace(/punct/g,q._punctuation).getRegex(),q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,q.autolink=f(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex(),q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,q.tag=f(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex(),q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,q.link=f(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex(),q.reflink=f(q.reflink).replace("label",q._label).replace("ref",Z._label).getRegex(),q.nolink=f(q.nolink).replace("ref",Z._label).getRegex(),q.reflinkSearch=f(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex(),q.normal=z({},q),q.pedantic=z({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()}),q.gfm=z({},q.normal,{escape:f(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),q.gfm.url=f(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex(),q.breaks=z({},q.gfm,{br:f(q.br).replace("{2,}","*").getRegex(),text:f(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class O{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||i,this.options.tokenizer=this.options.tokenizer||new E,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:Z.normal,inline:q.normal};this.options.pedantic?(t.block=Z.pedantic,t.inline=q.pedantic):this.options.gfm&&(t.block=Z.gfm,this.options.breaks?t.inline=q.breaks:t.inline=q.gfm),this.tokenizer.rules=t}static get rules(){return{block:Z,inline:q}}static lex(e,t){let n=new O(t);return n.lex(e)}static lexInline(e,t){let n=new O(t);return n.inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,s;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if((n=this.tokenizer.fences(e))||(n=this.tokenizer.heading(e))||(n=this.tokenizer.hr(e))||(n=this.tokenizer.blockquote(e))||(n=this.tokenizer.list(e))||(n=this.tokenizer.html(e))){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if((n=this.tokenizer.table(e))||(n=this.tokenizer.lheading(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t,n=1/0,r=e.slice(1);this.options.extensions.startBlock.forEach(function(e){"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(i=e.substring(0,n+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=t[t.length-1],s&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,s,l,a;let o=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+A("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,s.index)+"["+A("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(o));)o=o.slice(0,s.index+s[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(l||(a=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if((n=this.tokenizer.emStrong(e,o,a))||(n=this.tokenizer.codespan(e))||(n=this.tokenizer.br(e))||(n=this.tokenizer.del(e))||(n=this.tokenizer.autolink(e,L))||!this.state.inLink&&(n=this.tokenizer.url(e,L))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let t,n=1/0,r=e.slice(1);this.options.extensions.startInline.forEach(function(e){"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(i=e.substring(0,n+1))}if(n=this.tokenizer.inlineText(i,C)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),l=!0,(r=t[t.length-1])&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}}class v{constructor(e){this.options=e||i}code(e,t,n){let r=(t||"").match(/\S*/)[0];if(this.options.highlight){let t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return(e=e.replace(/\n$/,"")+"\n",r)?'<pre><code class="'+this.options.langPrefix+p(r)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,r){if(this.options.headerIds){let i=this.options.headerPrefix+r.slug(n);return`<h${t} id="${i}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){let r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td",r=t.align?`<${n} align="${t.align}">`:`<${n}>`;return r+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(null===(e=m(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"}image(e,t,n){if(null===(e=m(this.options.sanitize,this.options.baseUrl,e)))return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">"}text(e){return e}}class D{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class B{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do n=e+"-"+ ++r;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){let n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class Q{constructor(e){this.options=e||i,this.options.renderer=this.options.renderer||new v,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new D,this.slugger=new B}static parse(e,t){let n=new Q(t);return n.parse(e)}static parseInline(e,t){let n=new Q(t);return n.parseInline(e)}parse(e,t=!0){let n="",r,i,s,l,a,o,c,h,p,u,k,f,d,x,m,b,w,_,y,$=e.length;for(r=0;r<$;r++){if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(!1!==(y=this.options.extensions.renderers[u.type].call({parser:this},u))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type))){n+=y||"";continue}switch(u.type){case"space":continue;case"hr":n+=this.renderer.hr();continue;case"heading":n+=this.renderer.heading(this.parseInline(u.tokens),u.depth,g(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":n+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(i=0,h="",c="",l=u.header.length;i<l;i++)c+=this.renderer.tablecell(this.parseInline(u.header[i].tokens),{header:!0,align:u.align[i]});for(h+=this.renderer.tablerow(c),p="",l=u.rows.length,i=0;i<l;i++){for(s=0,o=u.rows[i],c="",a=o.length;s<a;s++)c+=this.renderer.tablecell(this.parseInline(o[s].tokens),{header:!1,align:u.align[s]});p+=this.renderer.tablerow(c)}n+=this.renderer.table(h,p);continue;case"blockquote":p=this.parse(u.tokens),n+=this.renderer.blockquote(p);continue;case"list":for(i=0,k=u.ordered,f=u.start,d=u.loose,l=u.items.length,p="";i<l;i++)b=(m=u.items[i]).checked,w=m.task,x="",m.task&&(_=this.renderer.checkbox(b),d?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=_+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=_+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:_}):x+=_),x+=this.parse(m.tokens,d),p+=this.renderer.listitem(x,w,b);n+=this.renderer.list(p,k,f);continue;case"html":n+=this.renderer.html(u.text);continue;case"paragraph":n+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<$&&"text"===e[r+1].type;)p+="\n"+((u=e[++r]).tokens?this.parseInline(u.tokens):u.text);n+=t?this.renderer.paragraph(p):p;continue;default:{let e='Token with "'+u.type+'" type was not found.';if(this.options.silent){console.error(e);return}throw Error(e)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",r,i,s,l=e.length;for(r=0;r<l;r++){if(i=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(!1!==(s=this.options.extensions.renderers[i.type].call({parser:this},i))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){n+=s||"";continue}switch(i.type){case"escape":case"text":n+=t.text(i.text);break;case"html":n+=t.html(i.text);break;case"link":n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":n+=t.image(i.href,i.title,i.text);break;case"strong":n+=t.strong(this.parseInline(i.tokens,t));break;case"em":n+=t.em(this.parseInline(i.tokens,t));break;case"codespan":n+=t.codespan(i.text);break;case"br":n+=t.br();break;case"del":n+=t.del(this.parseInline(i.tokens,t));break;default:{let e='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(e);return}throw Error(e)}}}return n}}function U(e,t,n){if(null==e)throw Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),T(t=z({},U.defaults,t||{})),n){let r;let i=t.highlight;try{r=O.lex(e,t)}catch(e){return n(e)}let s=function(e){let s;if(!e)try{t.walkTokens&&U.walkTokens(r,t.walkTokens),s=Q.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3||(delete t.highlight,!r.length))return s();let l=0;return U.walkTokens(r,function(e){"code"===e.type&&(l++,setTimeout(()=>{i(e.text,e.lang,function(t,n){if(t)return s(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0==--l&&s()})},0))}),void(0===l&&s())}function r(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}try{let n=O.lex(e,t);if(t.walkTokens){if(t.async)return Promise.all(U.walkTokens(n,t.walkTokens)).then(()=>Q.parse(n,t)).catch(r);U.walkTokens(n,t.walkTokens)}return Q.parse(n,t)}catch(e){r(e)}}U.options=U.setOptions=function(e){return z(U.defaults,e),i=U.defaults,U},U.getDefaults=r,U.defaults=i,U.use=function(...e){let t=U.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{let n=z({},e);if(n.async=U.defaults.async||n.async,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if(e.renderer){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=U.defaults.renderer||new v;for(let n in e.renderer){let r=t[n];t[n]=(...i)=>{let s=e.renderer[n].apply(t,i);return!1===s&&(s=r.apply(t,i)),s}}n.renderer=t}if(e.tokenizer){let t=U.defaults.tokenizer||new E;for(let n in e.tokenizer){let r=t[n];t[n]=(...i)=>{let s=e.tokenizer[n].apply(t,i);return!1===s&&(s=r.apply(t,i)),s}}n.tokenizer=t}if(e.walkTokens){let t=U.defaults.walkTokens;n.walkTokens=function(n){let r=[];return r.push(e.walkTokens.call(this,n)),t&&(r=r.concat(t.call(this,n))),r}}U.setOptions(n)})},U.walkTokens=function(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(U,r)),r.type){case"table":for(let e of r.header)n=n.concat(U.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)n=n.concat(U.walkTokens(r.tokens,t));break;case"list":n=n.concat(U.walkTokens(r.items,t));break;default:U.defaults.extensions&&U.defaults.extensions.childTokens&&U.defaults.extensions.childTokens[r.type]?U.defaults.extensions.childTokens[r.type].forEach(function(e){n=n.concat(U.walkTokens(r[e],t))}):r.tokens&&(n=n.concat(U.walkTokens(r.tokens,t)))}return n},U.parseInline=function(e,t){if(null==e)throw Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");T(t=z({},U.defaults,t||{}));try{let n=O.lexInline(e,t);return t.walkTokens&&U.walkTokens(n,t.walkTokens),Q.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}},U.Parser=Q,U.parser=Q.parse,U.Renderer=v,U.TextRenderer=D,U.Lexer=O,U.lexer=O.lex,U.Tokenizer=E,U.Slugger=B,U.parse=U,U.options,U.setOptions,U.use,U.walkTokens,U.parseInline,Q.parse,O.lex}}]);