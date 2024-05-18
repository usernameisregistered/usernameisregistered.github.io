import{_ as e,c as a,l as Q,a as T,a2 as t,o as s}from"./chunks/framework.CJYjXVh_.js";const p2=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"graph/计算机图形学/02直线的扫描转换.md","filePath":"graph/计算机图形学/02直线的扫描转换.md"}'),l={name:"graph/计算机图形学/02直线的扫描转换.md"},n=Q("p",null,[Q("a",{href:"uploads/2f51af9da4f4c5f733ad0314c001bc53/3.2%E7%9B%B4%E7%BA%BF%E7%9A%84%E6%89%AB%E6%8F%8F%E8%BD%AC%E6%8D%A2.pdf"},"3.2直线的扫描转换.pdf")],-1),d=Q("blockquote",null,[Q("p",null,"对直线的扫描转换就是要在二维光栅格上计算接近或者位于理想的无限细的直线上的像素的坐 标")],-1),o=Q("p",null,"为了可视化几何属性，SRGP将一个像素表达成一个圆形的点，并且其中心就是像素在整数栅格上颚的点(x,y)坐标",-1),m=Q("h2",{id:"基本增量算法-dda",tabindex:"-1"},[T("基本增量算法 DDA "),Q("a",{class:"header-anchor",href:"#基本增量算法-dda","aria-label":'Permalink to "基本增量算法 DDA"'},"​")],-1),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.034ex",height:"1.357ex",role:"img",focusable:"false",viewBox:"0 -442 899 599.8","aria-hidden":"true"},h=t("",1),p=[h],g=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")])])],-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.622ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 5578.9 899","aria-hidden":"true"},k=t("",1),u=[k],w=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",null,"="),Q("mi",null,"m"),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("mo",null,"+"),Q("mi",null,"b")])],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.291ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 5874.6 1000","aria-hidden":"true"},L=t("",1),M=[L],f=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("mo",null,","),Q("mi",null,"R"),Q("mi",null,"o"),Q("mi",null,"u"),Q("mi",null,"n"),Q("mi",null,"d"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",{stretchy:"false"},")")])],-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.608ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1595 1000","aria-hidden":"true"},V=t("",1),b=[V],D=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",{stretchy:"false"},")")])],-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.848ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 817 647","aria-hidden":"true"},A=t("",1),C=[A],S=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")])])],-1),B={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},j={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"47.986ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 21209.6 1000","aria-hidden":"true"},F=t("",1),P=[F],I=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msub",null,[Q("mi",null,"y"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"+"),Q("mn",null,"1")])]),Q("mo",null,"="),Q("mi",null,"m"),Q("msub",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"+"),Q("mn",null,"1")])]),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",null,"="),Q("mi",null,"m"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("mo",null,"+"),Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"x"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",null,"+"),Q("mi",null,"m"),Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"x")])],-1),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.327ex",height:"1.805ex",role:"img",focusable:"false",viewBox:"0 -716 3238.6 798","aria-hidden":"true"},G=t("",1),J=[G],z=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"x"),Q("mo",null,"="),Q("mn",null,"1")])],-1),O={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.471ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.51ex",height:"1.79ex",role:"img",focusable:"false",viewBox:"0 -583 5971.6 791","aria-hidden":"true"},$=t("",1),q=[$],K=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"y"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"+"),Q("mn",null,"1")])]),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",null,"+"),Q("mi",null,"m")])],-1),U={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.312ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.043ex",height:"1.819ex",role:"img",focusable:"false",viewBox:"0 -666 5323.1 804","aria-hidden":"true"},Y=t("",1),Q1=[Y],T1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",null,"−"),Q("mn",null,"1"),Q("mo",null,"≤"),Q("mi",null,"m"),Q("mo",null,"≤"),Q("mn",null,"1")])],-1),t1=t("",3),a1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},s1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.144ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3157.8 1000","aria-hidden":"true"},e1=t("",1),l1=[e1],n1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",{stretchy:"false"},")")])],-1),d1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},o1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.144ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3157.8 1000","aria-hidden":"true"},m1=t("",1),r1=[m1],i1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"1")]),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"1")]),Q("mo",{stretchy:"false"},")")])],-1),h1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.154ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 3162 1037.2","aria-hidden":"true"},g1=t("",1),H1=[g1],c1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",{stretchy:"false"},")")])],-1),k1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},u1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.051ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 4884.5 1037.2","aria-hidden":"true"},w1=t("",1),y1=[w1],x1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",{stretchy:"false"},")")])],-1),L1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.948ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 6606.9 1037.2","aria-hidden":"true"},f1=t("",1),_1=[f1],Z1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",{stretchy:"false"},")")])],-1),V1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.184ex",height:"2.157ex",role:"img",focusable:"false",viewBox:"0 -666 2733.1 953.2","aria-hidden":"true"},D1=t("",1),E1=[D1],v1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1")])],-1),A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.708ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 7384.9 1037.2","aria-hidden":"true"},S1=t("",1),B1=[S1],j1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")")])],-1),F1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.962ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 9265.1 1000","aria-hidden":"true"},I1=t("",1),R1=[I1],N1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"x"),Q("mo",null,","),Q("mi",null,"y"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"a"),Q("mi",null,"x"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mi",null,"y"),Q("mo",null,"+"),Q("mi",null,"c")])],-1),G1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.604ex",height:"3.006ex",role:"img",focusable:"false",viewBox:"0 -975.7 4687.2 1328.5","aria-hidden":"true"},z1=t("",1),O1=[z1],X1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"y"),Q("mo",null,"="),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"x")])]),Q("mo",null,"+"),Q("mi",null,"b")])],-1),$1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"38.457ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 16998 1000","aria-hidden":"true"},K1=t("",1),U1=[K1],W1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"x"),Q("mo",null,","),Q("mi",null,"y"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"d"),Q("mi",null,"y"),Q("mo",null,"×"),Q("mi",null,"x"),Q("mo",null,"−"),Q("mi",null,"d"),Q("mi",null,"x"),Q("mo",null,"×"),Q("mi",null,"y"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",null,"×"),Q("mi",null,"d"),Q("mi",null,"x"),Q("mo",null,"="),Q("mn",null,"0")])],-1),Y1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.933ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 11904.4 899","aria-hidden":"true"},T3=t("",1),t3=[T3],a3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"a"),Q("mo",null,"="),Q("mi",null,"d"),Q("mi",null,"y"),Q("mo",null,","),Q("mi",null,"b"),Q("mo",null,"="),Q("mo",null,"−"),Q("mi",null,"d"),Q("mi",null,"x"),Q("mo",null,","),Q("mi",null,"c"),Q("mo",null,"="),Q("mi",null,"b"),Q("mo",null,"×"),Q("mi",null,"d"),Q("mi",null,"x")])],-1),s3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.402ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 8133.9 1037.2","aria-hidden":"true"},l3=t("",1),n3=[l3],d3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")")])],-1),o3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.708ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 7384.9 1037.2","aria-hidden":"true"},r3=t("",1),i3=[r3],h3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")")])],-1),p3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.402ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 8133.9 1037.2","aria-hidden":"true"},H3=t("",1),c3=[H3],k3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")")])],-1),u3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.051ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 4884.5 1037.2","aria-hidden":"true"},y3=t("",1),x3=[y3],L3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",{stretchy:"false"},")")])],-1),M3={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"120.834ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 53408.6 1037.2","aria-hidden":"true"},_3=t("",1),Z3=[_3],V3=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"n"),Q("mi",null,"e"),Q("mi",null,"w")])]),Q("mo",null,"="),Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"2"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"2"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"o"),Q("mi",null,"l"),Q("mi",null,"d")])]),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"n"),Q("mi",null,"e"),Q("mi",null,"w")])]),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"o"),Q("mi",null,"l"),Q("mi",null,"d")])]),Q("mo",null,"+"),Q("mi",null,"a"),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"o"),Q("mi",null,"l"),Q("mi",null,"d")])]),Q("mo",null,"+"),Q("mi",null,"d"),Q("mi",null,"y"),Q("mspace",{linebreak:"newline"}),Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"d"),Q("mo",null,"="),Q("mi",null,"a")])],-1),b3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.948ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 6606.9 1037.2","aria-hidden":"true"},E3=t("",1),v3=[E3],A3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",{stretchy:"false"},")")])],-1),C3={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},S3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"116.79ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 51621.1 1037.2","aria-hidden":"true"},B3=t("",1),j3=[B3],F3=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"n"),Q("mi",null,"e"),Q("mi",null,"w")])]),Q("mo",null,"="),Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"2"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"2"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"o"),Q("mi",null,"l"),Q("mi",null,"d")])]),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"p")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"n"),Q("mi",null,"e"),Q("mi",null,"w")])]),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"o"),Q("mi",null,"l"),Q("mi",null,"d")])]),Q("mo",null,"+"),Q("mi",null,"a"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mspace",{linebreak:"newline"}),Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"d"),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",null,"+"),Q("mi",null,"b")])],-1),P3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.144ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3157.8 1000","aria-hidden":"true"},R3=t("",1),N3=[R3],G3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",{stretchy:"false"},")")])],-1),J3={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},z3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"97.28ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 42997.8 1000","aria-hidden":"true"},O3=t("",1),X3=[O3],$3=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mspace",{linebreak:"newline"}),Q("mo",null,"="),Q("mi",null,"a"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mn",null,"1"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"b"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("mo",null,"="),Q("mi",null,"a"),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mi",null,"a"),Q("mo",null,"+"),Q("mi",null,"b"),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mi",null,"b"),Q("mo",null,"+"),Q("mi",null,"c"),Q("mspace",{linebreak:"newline"}),Q("mo",null,"="),Q("mi",null,"F"),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"x"),Q("mn",null,"0")]),Q("mo",null,","),Q("msub",null,[Q("mi",null,"y"),Q("mn",null,"0")]),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"a"),Q("mo",null,"+"),Q("mn",null,"0.5"),Q("mi",null,"b"),Q("mo",null,";")])],-1),q3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},K3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.919ex",height:"1.927ex",role:"img",focusable:"false",viewBox:"0 -694 6152.1 851.8","aria-hidden":"true"},U3=t("",1),W3=[U3],Y3=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msub",null,[Q("mi",null,"d"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"s"),Q("mi",null,"t"),Q("mi",null,"a"),Q("mi",null,"r"),Q("mi",null,"t")])]),Q("mo",null,"="),Q("mn",null,"2"),Q("mi",null,"a"),Q("mo",null,"+"),Q("mi",null,"b")])],-1),Q2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.27ex",height:"1.805ex",role:"img",focusable:"false",viewBox:"0 -716 4539.6 798","aria-hidden":"true"},t2=t("",1),a2=[t2],s2=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"d"),Q("mo",null,"="),Q("mn",null,"2"),Q("mi",{mathvariant:"normal"},"Δ"),Q("mi",null,"d")])],-1),e2=t("",1);function l2(n2,d2,o2,m2,r2,i2){return s(),a("div",null,[n,d,o,m,Q("p",null,[T("对线的扫描转换，最简单的策略就是将斜率m计算为△y/△x,然后从最左端的点开始，对x每次递增一个单位，而对每个"),Q("mjx-container",r,[(s(),a("svg",i,p)),g]),T("，计算其相对应的"),Q("mjx-container",H,[(s(),a("svg",c,u)),w]),T(",并显示坐标为("),Q("mjx-container",y,[(s(),a("svg",x,M)),f]),T(")的像素，其中Round"),Q("mjx-container",_,[(s(),a("svg",Z,b)),D]),T("=Floor(0.5 + "),Q("mjx-container",E,[(s(),a("svg",v,C)),S]),T(")")]),Q("mjx-container",B,[(s(),a("svg",j,P)),I]),Q("p",null,[T("当"),Q("mjx-container",R,[(s(),a("svg",N,J)),z]),T("时, "),Q("mjx-container",O,[(s(),a("svg",X,q)),K]),T(";表示x每增加一个单位，y就加上一个m,m为直线的斜率")]),Q("p",null,[Q("em",null,[T("以下代码仅仅适用于 "),Q("mjx-container",U,[(s(),a("svg",W,Q1)),T1]),T("的情况")])]),t1,Q("p",null,[Q("em",null,[T("一下所描述的情况适用于斜率为0和1之间，左下端点"),Q("mjx-container",a1,[(s(),a("svg",s1,l1)),n1]),T(",右上端点"),Q("mjx-container",d1,[(s(),a("svg",o1,r1)),i1]),T(",")])]),Q("p",null,[T("设定以绘制一个点"),Q("mjx-container",h1,[(s(),a("svg",p1,H1)),c1]),T(";则下一个点位的可选位置有2个即：E"),Q("mjx-container",k1,[(s(),a("svg",u1,y1)),x1]),T("或者NE "),Q("mjx-container",L1,[(s(),a("svg",M1,_1)),Z1]),T(", 假定直线与"),Q("mjx-container",V1,[(s(),a("svg",b1,E1)),v1]),T("的网格线相交于点Q,则根据NE和E到Q的垂直距离，选择距离Q最近的像素点。二作为被扫描转化线的最好逼近则是使用中点"),Q("mjx-container",A1,[(s(),a("svg",C1,B1)),j1])]),Q("p",null,[T("假设直线的隐函数为"),Q("mjx-container",F1,[(s(),a("svg",P1,R1)),N1]),T("; 斜截式的方程为"),Q("mjx-container",G1,[(s(),a("svg",J1,O1)),X1]),Q("mjx-container",$1,[(s(),a("svg",q1,U1)),W1]),T("; 则"),Q("mjx-container",Y1,[(s(),a("svg",Q3,t3)),a3])]),Q("p",null,[T("容易证明 对于线上面的点F(x, y) = 0; 对于在线下方的点F(x, y)为正数，在线上方的点F(x, y)为负数，则我们只需要计算"),Q("mjx-container",s3,[(s(),a("svg",e3,n3)),d3]),T("的符号即可。")]),Q("p",null,[T("由于是在点"),Q("mjx-container",o3,[(s(),a("svg",m3,i3)),h3]),T("的函数值上判定的，因此可以定义一个判定变量d = "),Q("mjx-container",p3,[(s(),a("svg",g3,c3)),k3]),T(";")]),Q("p",null,[T("当栅格线移动到下一条时, 选择的是点时E"),Q("mjx-container",u3,[(s(),a("svg",w3,x3)),L3]),T("，则有")]),Q("mjx-container",M3,[(s(),a("svg",f3,Z3)),V3]),Q("p",null,[T("当栅格线移动到下一条时，选择的是点时NE"),Q("mjx-container",b3,[(s(),a("svg",D3,v3)),A3]),T("， 则有")]),Q("mjx-container",C3,[(s(),a("svg",S3,j3)),F3]),Q("p",null,[T("第一个点位"),Q("mjx-container",P3,[(s(),a("svg",I3,N3)),G3]),T(", 则初始的d为")]),Q("mjx-container",J3,[(s(),a("svg",z3,X3)),$3]),Q("p",null,[T("为减少浮点数的计算并且扩大倍数符号不变 则将上式*2 "),Q("mjx-container",q3,[(s(),a("svg",K3,W3)),Y3]),Q("mjx-container",Q2,[(s(),a("svg",T2,a2)),s2])]),e2])}const g2=e(l,[["render",l2]]);export{p2 as __pageData,g2 as default};
