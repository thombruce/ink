(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2],{4583:function(e,t,n){var content=n(4594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("462a91d4",content,!0,{sourceMap:!1})},4592:function(e,t,n){(function(){"use strict";var t={title_page:/^((?:title|credit|author[s]?|source|notes|(?:draft )?date|contact(?: info)?|copyright|revision)\:)/gim,scene_heading:/^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,scene_number:/( *#(.+)# *)/,transition:/^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,dialogue:/^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,parenthetical:/^(\(.+\))$/,action:/^(.+)/g,centered:/^(?:> *)(.+)(?: *<)(\n.+)*/g,section:/^(#+)(?: *)(.*)/,synopsis:/^(?:\=(?!\=+) *)(.*)/,note:/^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,note_inline:/(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,boneyard:/(^\/\*|^\*\/)$/g,page_break:/^\={3,}$/,line_break:/^ {2}$/,emphasis:/(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,bold_italic_underline:/(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,bold_underline:/(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,italic_underline:/(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,bold_italic:/(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,bold:/(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,italic:/(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,underline:/(_{1}(?=.+_{1}))(.+?)(_{1})/g,splitter:/\n{2,}/g,cleaner:/^\n+|\n+$/,standardizer:/\r\n|\r/g,whitespacer:/^\t+|^ {3,}/gm},n=function(script){for(var line,e,n,text,meta,r,c,l,o=function(script){return script.replace(t.boneyard,"\n$1\n").replace(t.standardizer,"\n").replace(t.cleaner,"").replace(t.whitespacer,"")}(script).split(t.splitter),i=o.length,d=[];i--;)if(line=o[i],t.title_page.test(line))for(r=0,c=(e=line.replace(t.title_page,"\n$1").split(t.splitter).reverse()).length;r<c;r++)n=e[r].replace(t.cleaner,"").split(/\:\n*/),d.push({type:n[0].trim().toLowerCase().replace(" ","_"),text:n[1].trim()});else if(e=line.match(t.scene_heading))(text=e[1]||e[2]).indexOf("  ")!==text.length-2&&((meta=text.match(t.scene_number))&&(meta=meta[2],text=text.replace(t.scene_number,"")),d.push({type:"scene_heading",text:text,scene_number:meta||void 0}));else if(e=line.match(t.centered))d.push({type:"centered",text:e[0].replace(/>|</g,"")});else if(e=line.match(t.transition))d.push({type:"transition",text:e[1]||e[2]});else if((e=line.match(t.dialogue))&&e[1].indexOf("  ")!==e[1].length-2){for(e[2]&&d.push({type:"dual_dialogue_end"}),d.push({type:"dialogue_end"}),r=0,c=(n=e[3].split(/(\(.+\))(?:\n+)/).reverse()).length;r<c;r++)(text=n[r]).length>0&&d.push({type:t.parenthetical.test(text)?"parenthetical":"dialogue",text:text});d.push({type:"character",text:e[1].trim()}),d.push({type:"dialogue_begin",dual:e[2]?"right":l?"left":void 0}),l&&d.push({type:"dual_dialogue_begin"}),l=!!e[2]}else(e=line.match(t.section))?d.push({type:"section",text:e[2],depth:e[1].length}):(e=line.match(t.synopsis))?d.push({type:"synopsis",text:e[1]}):(e=line.match(t.note))?d.push({type:"note",text:e[1]}):(e=line.match(t.boneyard))?d.push({type:"/"===e[0][0]?"boneyard_begin":"boneyard_end"}):t.page_break.test(line)?d.push({type:"page_break"}):t.line_break.test(line)?d.push({type:"line_break"}):d.push({type:"action",text:line});return d},r={note:"\x3c!-- $1 --\x3e",line_break:"<br />",bold_italic_underline:'<span class="bold italic underline">$2</span>',bold_underline:'<span class="bold underline">$2</span>',italic_underline:'<span class="italic underline">$2</span>',bold_italic:'<span class="bold italic">$2</span>',bold:'<span class="bold">$2</span>',italic:'<span class="italic">$2</span>',underline:'<span class="underline">$2</span>',lexer:function(s){if(s){var style,e,n=["underline","italic","bold","bold_italic","italic_underline","bold_underline","bold_italic_underline"],i=n.length;for(s=s.replace(t.note_inline,r.note).replace(/\\\*/g,"[star]").replace(/\\_/g,"[underline]").replace(/\n/g,r.line_break);i--;)(e=t[style=n[i]]).test(s)&&(s=s.replace(e,r[style]));return s.replace(/\[star\]/g,"*").replace(/\[underline\]/g,"_").trim()}}},c=function(script,e){return c.parse(script,e)};c.parse=function(script,e,t){return function(script,e,t){void 0===t&&"function"==typeof e&&(t=e,e=void 0);for(var c,title,l,o,source,d,h,m,y,_,output,f=n(script),i=f.length,x=[],html=[];i--;)switch((c=f[i]).text=r.lexer(c.text),c.type){case"title":x.push("<h1>"+c.text+"</h1>"),title=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"credit":x.push('<p class="credit">'+c.text+"</p>"),l=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"author":case"authors":x.push('<p class="authors">'+c.text+"</p>"),o=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"source":x.push('<p class="source">'+c.text+"</p>"),source=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"notes":x.push('<p class="notes">'+c.text+"</p>"),d=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"draft_date":case"date":x.push('<p class="draft-date">'+c.text+"</p>"),h=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"contact":case"contact_info":x.push('<p class="contact">'+c.text+"</p>"),m=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"copyright":x.push('<p class="copyright">'+c.text+"</p>"),y=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"revision":x.push('<p class="revision">'+c.text+"</p>"),_=c.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"scene_heading":html.push("<h3"+(c.scene_number?' id="'+c.scene_number+'">':">")+c.text+"</h3>");break;case"transition":html.push("<h2>"+c.text+"</h2>");break;case"dual_dialogue_begin":html.push('<div class="dual-dialogue">');break;case"dialogue_begin":html.push('<div class="dialogue'+(c.dual?" "+c.dual:"")+'">');break;case"character":html.push("<h4>"+c.text+"</h4>");break;case"parenthetical":html.push('<p class="parenthetical">'+c.text+"</p>");break;case"dialogue":html.push("<p>"+c.text+"</p>");break;case"dialogue_end":case"dual_dialogue_end":html.push("</div> ");break;case"section":html.push('<p class="section" data-depth="'+c.depth+'">'+c.text+"</p>");break;case"synopsis":html.push('<p class="synopsis">'+c.text+"</p>");break;case"note":html.push("\x3c!-- "+c.text+"--\x3e");break;case"boneyard_begin":html.push("\x3c!-- ");break;case"boneyard_end":html.push(" --\x3e");break;case"action":html.push("<p>"+c.text+"</p>");break;case"centered":html.push('<p class="centered">'+c.text+"</p>");break;case"page_break":html.push("<hr />");break;case"line_break":html.push("<br />")}return output={title:title,credit:l,author:o,authors:o,source:source,notes:d,draft_date:h,date:h,contact:m,contact_info:m,copyright:y,revision:_,html:{title_page:x.join(""),script:html.join("")},tokens:e?f.reverse():void 0},"function"==typeof t?t(output):output}(script,e,t)},e.exports=c}).call(this)},4593:function(e,t,n){"use strict";n(4583)},4594:function(e,t,n){var r=n(36)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.screenplay{\n  font-family:"Courier Prime","Courier New",Courier,monospace;\n  font-size:12pt;\n  line-height:1;\n  max-width:6in;\n  margin:1em auto;\n  -webkit-text-size-adjust:none\n}\n.screenplay h1,.screenplay h2,.screenplay h3,.screenplay h4,.screenplay h5,.screenplay h6{\n  font-weight:700;\n  font-size:inherit\n}\n.screenplay a{\n  color:inherit;\n  text-decoration:none\n}\n.screenplay .underline{\n  text-decoration:underline\n}\n.screenplay .title-page{\n  text-align:center;\n  margin:5em auto\n}\n.screenplay .title-page h1{\n  text-transform:uppercase;\n  text-decoration:underline;\n  margin-bottom:2.5em\n}\n.screenplay .title-page .credit{\n  margin-bottom:1.5em\n}\n.screenplay .title-page .authors{\n  margin-bottom:4em\n}\n.screenplay .title-page .draft-date{\n  text-align:right;\n  margin-bottom:.5em\n}\n.screenplay .title-page .revision{\n  text-align:right;\n  margin-bottom:0\n}\n.screenplay .section-heading{\n  text-align:center\n}\n.screenplay .section-heading:hover{\n  background-color:#ffffe0\n}\n.screenplay .scene{\n  margin-top:2em\n}\n.screenplay .scene-heading{\n  margin-bottom:0\n}\n.screenplay .scene-heading:hover{\n  background-color:#ffffe0\n}\n.screenplay .action{\n  margin:1em 0\n}\n.screenplay .dialogue{\n  width:75%;\n  max-width:4in;\n  margin-top:1em;\n  margin-bottom:1em;\n  margin-left:17%\n}\n.screenplay .dialogue h4{\n  margin-top:0;\n  margin-bottom:0;\n  margin-left:25%\n}\n.screenplay .dialogue .lines{\n  max-width:3.5in;\n  margin-top:0;\n  margin-bottom:0\n}\n.screenplay .dialogue .parenthetical{\n  max-width:2in;\n  margin-top:0;\n  margin-bottom:0;\n  margin-left:15%;\n  text-indent:-.6em;\n  page-break-inside:avoid;\n  page-break-after:avoid\n}\n.screenplay .dual-dialogue{\n  width:100%;\n  margin:1em 0\n}\n.screenplay .dual-dialogue .dialogue{\n  max-width:50%;\n  margin-top:0;\n  margin-left:0;\n  margin-right:0;\n  float:left;\n  clear:none\n}\n.screenplay .dual-dialogue .dialogue .lines{\n  width:95%\n}\n.screenplay .trans{\n  max-width:2in;\n  margin-left:63%;\n  clear:both;\n  page-break-before:avoid\n}\n.screenplay .note{\n  display:block;\n  font-size:11pt;\n  font-family:"Comic Sans MS","Marker Felt","sans-serif";\n  line-height:1.5;\n  background-color:#fafad2;\n  padding:1em\n}\n.screenplay .synopsis{\n  margin-top:0;\n  color:grey;\n  font-style:italic\n}\n.screenplay .center{\n  text-align:center;\n  white-space:pre-wrap\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},4596:function(e,t,n){"use strict";n.r(t);var r=n(98),c=n(13),l=(n(44),n(63),n(75),n(32),n(41),n(4592)),o=n.n(l).a,d=function e(t){return t.map((function(t){return t.children?e(t.children):t.text})).join("\n").replace(/^\s+|\s+$/g,"")},h={props:{screenplay:[Object,String],title:{type:Boolean,default:!1}},computed:{document:function(){return this.$slots.default?o.parse(d(this.$slots.default)):"string"==typeof this.screenplay?o.parse(this.screenplay):!("object"!==Object(c.a)(this.screenplay)||!this.screenplay.html||!this.screenplay.html.script)&&this.screenplay}},render:function(e){if(this.document){var t=e("header",{attrs:{class:"title-page"},domProps:{innerHTML:this.document.html.title_page}}),script=e("div",{attrs:{class:"script"},domProps:{innerHTML:this.document.html.script}});return e("article",{attrs:{class:"screenplay"}},[].concat(Object(r.a)(this.title?[t]:[]),[script]))}return e("article",{attrs:{class:"screenplay"}})}},m=(n(4593),n(2)),component=Object(m.a)(h,undefined,undefined,!1,null,null,null);t.default=component.exports},4615:function(e,t,n){"use strict";n.r(t);var r=n(3),c=(n(41),n(15),n(43),n(31),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,o,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.redirect,c=e.query,l=e.params,o=l.episode,t.next=4,n("screenplays",l.series,o).where({draft:{$ne:!0}}).fetch();case 4:if(!(article=t.sent).redirect){t.next=9;break}r({path:article.redirect,query:c}),t.next=10;break;case 9:return t.abrupt("return",{slug:o,article:article});case 10:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.article.title,meta:[{hid:"og:title",property:"og:title",content:"".concat(this.article.title," | ").concat("Ink")},{hid:"og:description",property:"og:description",content:"".concat(this.article.description?this.article.description:"My writing.")},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"".concat("https://ink.thombruce.com").concat(this.$route.fullPath,"/")},{hid:"og:image",property:"og:image",content:"".concat("https://ink.thombruce.com").concat(this.article.image?this.$img(this.article.image,{width:"1200px",height:"627px"}):"/uploads/blog/typewriter.jpg")}]}}}),l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.article?n("div",[n("FountainScreenplay",{attrs:{screenplay:e.article,title:""}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FountainScreenplay:n(4596).default})}}]);