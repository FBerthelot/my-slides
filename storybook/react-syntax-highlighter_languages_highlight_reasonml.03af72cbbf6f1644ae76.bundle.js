(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{2146:function(e,n){e.exports=function(e){var n="~?[a-z$_][0-9a-zA-Z$_]*",a="`?[A-Z$_][0-9a-zA-Z$_]*",s="("+(["||","&&","++","**","+.","*","/","*.","/.","...","|>"].map((function(e){return e.split("").map((function(e){return"\\"+e})).join("")})).join("|")+"|==|===)"),i="\\s+"+s+"\\s+",r={keyword:"and as asr assert begin class constraint do done downto else end exception externalfor fun function functor if in include inherit initializerland lazy let lor lsl lsr lxor match method mod module mutable new nonrecobject of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},l="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",t={className:"number",relevance:0,variants:[{begin:l},{begin:"\\(\\-"+l+"\\)"}]},c={className:"operator",relevance:0,begin:s},o=[{className:"identifier",relevance:0,begin:n},c,t],b=[e.QUOTE_STRING_MODE,c,{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",contains:[{className:"identifier",begin:a,relevance:0}]}],g=[{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:a,relevance:0}]}],d={className:"function",relevance:0,keywords:r,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:"~?[a-z$_][0-9a-zA-Z$_]*(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?"},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:n,end:"(,|\\n|\\))",relevance:0,contains:[c,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:g}]}]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};b.push(d);var m={className:"constructor",begin:a+"\\(",end:"\\)",illegal:"\\n",keywords:r,contains:[e.QUOTE_STRING_MODE,c,{className:"params",begin:"\\b"+n}]},u={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:r,end:"=>",relevance:0,contains:[m,c,{relevance:0,className:"constructor",begin:a}]},_={className:"module-access",keywords:r,returnBegin:!0,variants:[{begin:"\\b("+a+"\\.)+"+n},{begin:"\\b("+a+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[d,{begin:"\\(",end:"\\)",skip:!0}].concat(b)},{begin:"\\b("+a+"\\.)+{",end:"}"}],contains:b};return g.push(_),{aliases:["re"],keywords:r,illegal:"(:\\-|:=|\\${|\\+=)",contains:[e.COMMENT("/\\*","\\*/",{illegal:"^(\\#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},e.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:o},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:o},m,{className:"operator",begin:i,illegal:"\\-\\->",relevance:0},t,e.C_LINE_COMMENT_MODE,u,d,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+a+"\\s+=\\s+{",end:"}",returnBegin:!0,keywords:r,relevance:0,contains:[{className:"module",relevance:0,begin:a},{begin:"{",end:"}",skip:!0}].concat(b)},_]}}}}]);