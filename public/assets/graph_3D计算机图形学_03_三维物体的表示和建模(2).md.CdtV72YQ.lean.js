import{_ as l,c as t,l as T,a as e,a2 as Q,o as a}from"./chunks/framework.Bc4oNHcE.js";const m="/assets/fa183725-b591-43e8-b6f9-9cf621b7f0a0.eKf1BZQU.png",s="/assets/24243750-120c-4b7e-8efc-c7b919baa48d.Bdq7sXg4.png",d="/assets/443975bb-88a0-4d3d-bb15-76b23ce92b05.2OG2szp7.png",D1=JSON.parse('{"title":"03_三维物体的表示和建模(2)","description":"","frontmatter":{"layout":"doc","title":"03_三维物体的表示和建模(2)"},"headers":[],"relativePath":"graph/3D计算机图形学/03_三维物体的表示和建模(2).md","filePath":"graph/3D计算机图形学/03_三维物体的表示和建模(2).md"}'),n={name:"graph/3D计算机图形学/03_三维物体的表示和建模(2).md"},o=Q("",12),r={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-5.317ex"},xmlns:"http://www.w3.org/2000/svg",width:"54.193ex",height:"11.765ex",role:"img",focusable:"false",viewBox:"0 -2850 23953.1 5200","aria-hidden":"true"},i=Q("",1),g=[i],p=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("msub",null,[T("mi",null,"Q"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("mi",null,"U"),T("msub",null,[T("mi",null,"B"),T("mi",null,"s")]),T("mi",null,"P"),T("mo",null,"="),T("mo",{stretchy:"false"},"["),T("msup",null,[T("mi",null,"u"),T("mn",null,"3")]),T("msup",null,[T("mi",null,"u"),T("mn",null,"2")]),T("mi",null,"u"),T("mo",{stretchy:"false"},"]"),T("mfrac",null,[T("mn",null,"1"),T("mn",null,"6")]),T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("mo",null,"−"),T("mn",null,"1")]),T("mtd",null,[T("mn",null,"3")]),T("mtd",null,[T("mo",null,"−"),T("mn",null,"3")]),T("mtd",null,[T("mn",null,"1")])]),T("mtr",null,[T("mtd",null,[T("mn",null,"3")]),T("mtd",null,[T("mo",null,"−"),T("mn",null,"6")]),T("mtd",null,[T("mn",null,"3")]),T("mtd",null,[T("mn",null,"0")])]),T("mtr",null,[T("mtd",null,[T("mo",null,"−"),T("mn",null,"3")]),T("mtd",null,[T("mn",null,"0")]),T("mtd",null,[T("mn",null,"3")]),T("mtd",null,[T("mn",null,"0")])]),T("mtr",null,[T("mtd",null,[T("mo",null,"−"),T("mn",null,"1")]),T("mtd",null,[T("mn",null,"4")]),T("mtd",null,[T("mn",null,"1")]),T("mtd",null,[T("mn",null,"0")])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")]),T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"P"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"−"),T("mn",null,"3")])])])]),T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"P"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"−"),T("mn",null,"2")])])])]),T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"P"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"−"),T("mn",null,"1")])])])]),T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"P"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i")])])])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")])])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.529ex",height:"2.032ex",role:"img",focusable:"false",viewBox:"0 -704 1118 898","aria-hidden":"true"},u=Q("",1),w=[u],f=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("msub",null,[T("mi",null,"Q"),T("mi",null,"i")])])],-1),M=T("p",null,"需要注意：将bezier曲线和B样条曲线进行比较可能会引起误解，因为这种比较不是在相同性质的进行的，而是将一个bezier曲线的片段与以整段B样条器宇轩曲线或者一个合成的B样条曲线进行比较。一个bezier曲线是受全局控制的，因为移动一个控制点会影响整条曲线，而在一条合成的B样条曲线上，移动一个控制点只影响该曲线中的几个片段。 B样条曲线表现出位置连续性，一阶导数连续性和二阶导数连续性，能够获得这种性质是因为基函数本事二阶可导的多项分布式，",-1),L=T("h2",{id:"均匀b样条曲线",tabindex:"-1"},[e("均匀B样条曲线 "),T("a",{class:"header-anchor",href:"#均匀b样条曲线","aria-label":'Permalink to "均匀B样条曲线"'},"​")],-1),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.864ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.119ex",height:"6.756ex",role:"img",focusable:"false",viewBox:"0 -1720.2 11544.5 2985.9","aria-hidden":"true"},k=Q("",1),x=[k],_=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("msub",null,[T("mi",null,"Q"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("munderover",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"k"),T("mo",null,"="),T("mn",null,"0")]),T("mn",null,"3")]),T("msub",null,[T("mi",null,"p"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"−"),T("mn",null,"3"),T("mo",null,"+"),T("mi",null,"k")])]),T("msub",null,[T("mi",null,"B"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"−"),T("mn",null,"3"),T("mo",null,"+"),T("mi",null,"k")])]),T("mi",null,"u")])],-1),V=Q("",11),b={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.559ex",height:"5.475ex",role:"img",focusable:"false",viewBox:"0 -1460 9529.2 2420","aria-hidden":"true"},v=Q("",1),j=[v],B=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("mi",null,"R"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("mo",{fence:"false",stretchy:"false"},"{"),T("mfrac",null,[T("mrow",null,[T("mi",null,"x"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")]),T("mrow",null,[T("mi",null,"z"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")])]),T("mo",null,","),T("mfrac",null,[T("mrow",null,[T("mi",null,"y"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")]),T("mrow",null,[T("mi",null,"z"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")])]),T("mo",{fence:"false",stretchy:"false"},"}")])],-1),A=T("p",null,"在三维投影空间定义的曲线",-1),C={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.305ex",height:"6.711ex",role:"img",focusable:"false",viewBox:"0 -1720.2 15162.8 2966.1","aria-hidden":"true"},S=Q("",1),R=[S],O=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("mi",null,"Q"),T("mo",{stretchy:"false"},"("),T("mi",null,"U"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("munderover",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"="),T("mn",null,"0")]),T("mn",null,"3")]),T("msub",null,[T("mi",null,"P"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mspace",{linebreak:"newline"}),T("msub",null,[T("mi",null,"P"),T("mi",null,"i")]),T("mo",null,"="),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"z"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")")])],-1),z=T("p",null,[T("img",{src:s,alt:"三维bezier曲线投影到到z=1的平面"})],-1),N={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.943ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8814.6 1000","aria-hidden":"true"},E=Q("",1),q=[E],X=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("msub",null,[T("mi",null,"P"),T("mi",null,"i")]),T("mo",null,"="),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")")])],-1),G=T("p",null,"三维曲线可表示为",-1),J={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-3.733ex"},xmlns:"http://www.w3.org/2000/svg",width:"24.428ex",height:"8.597ex",role:"img",focusable:"false",viewBox:"0 -2150 10797.1 3800","aria-hidden":"true"},$=Q("",1),K=[$],F=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("mi",null,"Q"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("munderover",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"="),T("mn",null,"0")]),T("mn",null,"3")]),T("mrow",{"data-mjx-texclass":"INNER"},[T("mo",{"data-mjx-texclass":"OPEN"},"["),T("mtable",{columnspacing:"1em",rowspacing:"4pt"},[T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")])])]),T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")])])]),T("mtr",null,[T("mtd",null,[T("msub",null,[T("mi",null,"w"),T("mi",null,"i")])])])]),T("mo",{"data-mjx-texclass":"CLOSE"},"]")]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")])],-1),W=T("p",null,"投影二维平面后为",-1),Y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},T1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"61.456ex",height:"5.475ex",role:"img",focusable:"false",viewBox:"0 -1460 27163.5 2420","aria-hidden":"true"},Q1=Q("",1),t1=[Q1],a1=T("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[T("mi",null,"R"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("mo",{fence:"false",stretchy:"false"},"{"),T("mfrac",null,[T("mrow",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")]),T("mrow",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")])]),T("mo",null,","),T("mfrac",null,[T("mrow",null,[T("mi",null,"y"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")]),T("mrow",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")")])]),T("mo",{fence:"false",stretchy:"false"},"}"),T("mspace",{linebreak:"newline"}),T("msub",null,[T("mi",null,"P"),T("mi",null,"i")]),T("mo",null,"="),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"z"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")")])],-1),e1=T("h2",{id:"nurbs",tabindex:"-1"},[e("NURBS "),T("a",{class:"header-anchor",href:"#nurbs","aria-label":'Permalink to "NURBS"'},"​")],-1),l1=T("p",null,"NUBRS表示非均匀有理B样条(Non-Uniform Rational B-Spline)；这种表示在CAD中最通用。在设计应用程序中，可以有一下的可能性",-1),m1=T("ol",null,[T("li",null,"控制点的交互式放置和移动"),T("li",null,"结点的交互式放置和移动"),T("li",null,"控制点权重的交互式控制")],-1),s1=T("p",null,"把有理曲线的有点和非均匀B样条的性质相结合，可以吧NUMBRS曲线定义为内部结点间跨度不均匀的结点向量上的非均匀的结点向量上的非均匀B样条曲线。",-1),d1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},n1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.679ex"},xmlns:"http://www.w3.org/2000/svg",width:"26.066ex",height:"2.375ex",role:"img",focusable:"false",viewBox:"0 -750 11521 1050","aria-hidden":"true"},o1=Q("",1),r1=[o1],h1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("msubsup",null,[T("mi",null,"P"),T("mi",null,"i"),T("mi",null,"w")]),T("mo",null,"="),T("mo",{stretchy:"false"},"("),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"x"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"y"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("msub",null,[T("mi",null,"z"),T("mi",null,"i")]),T("mo",null,","),T("msub",null,[T("mi",null,"w"),T("mi",null,"i")]),T("mo",{stretchy:"false"},")")])],-1),i1=T("h1",{id:"从曲线到表面",tabindex:"-1"},[e("从曲线到表面 "),T("a",{class:"header-anchor",href:"#从曲线到表面","aria-label":'Permalink to "从曲线到表面"'},"​")],-1),g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.972ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.956ex",height:"3.115ex",role:"img",focusable:"false",viewBox:"0 -947.3 15450.8 1376.9","aria-hidden":"true"},c1=Q("",1),H1=[c1],u1=T("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("mi",null,"Q"),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",null,","),T("mi",null,"v"),T("mo",{stretchy:"false"},")"),T("mo",null,"="),T("munderover",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mo",null,"="),T("mn",null,"0")]),T("mn",null,"3")]),T("munderover",null,[T("mo",{"data-mjx-texclass":"OP"},"∑"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"j"),T("mo",null,"="),T("mn",null,"0")]),T("mn",null,"3")]),T("msub",null,[T("mi",null,"P"),T("mrow",{"data-mjx-texclass":"ORD"},[T("mi",null,"i"),T("mi",null,"j")])]),T("msub",null,[T("mi",null,"B"),T("mi",null,"i")]),T("mo",{stretchy:"false"},"("),T("mi",null,"u"),T("mo",{stretchy:"false"},")"),T("msub",null,[T("mi",null,"B"),T("mi",null,"j")]),T("mo",{stretchy:"false"},"("),T("mi",null,"v"),T("mo",{stretchy:"false"},")")])],-1),w1=T("p",null,"从数学上讲，三维表面被认为是由2条曲线的笛卡尔积而产生的。",-1),f1=T("p",null,[T("img",{src:d,alt:"多面体"})],-1),M1=T("p",null,"与bezier曲线中的控制点类似，曲面片有4个端点，8个切向量以及4个扭向量来定义",-1);function L1(y1,Z1,k1,x1,_1,V1){return a(),t("div",null,[o,T("mjx-container",r,[(a(),t("svg",h,g)),p]),T("p",null,[e("其中"),T("mjx-container",c,[(a(),t("svg",H,w)),f]),e("是第i个B样条曲线，P是按照控制点顺序排列的一个四个点的集合， 对于B样条曲线，每一个曲线段都是由4个控制点来定义的，而且每一个控制点会影响4个并且只4个曲线段这就是B样条曲线的局部特性。同时也是主要优点")]),M,L,T("mjx-container",y,[(a(),t("svg",Z,x)),_]),V,T("mjx-container",b,[(a(),t("svg",D,j)),B]),A,T("mjx-container",C,[(a(),t("svg",P,R)),O]),z,T("p",null,[e("使用一种特殊的表示方法来描述二维空间中一条有理曲线的三维控制点 "),T("mjx-container",N,[(a(),t("svg",I,q)),X])]),G,T("mjx-container",J,[(a(),t("svg",U,K)),F]),W,T("mjx-container",Y,[(a(),t("svg",T1,t1)),a1]),e1,l1,m1,s1,T("p",null,[e("控制点的集合定义"),T("mjx-container",d1,[(a(),t("svg",n1,r1)),h1])]),i1,T("p",null,[e("三次Bezier曲线片定义为"),T("mjx-container",g1,[(a(),t("svg",p1,H1)),u1])]),w1,f1,M1])}const v1=l(n,[["render",L1]]);export{D1 as __pageData,v1 as default};
