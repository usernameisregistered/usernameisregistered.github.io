import{_ as l,c as Q,l as t,a as e,a2 as T,o as a}from"./chunks/framework.Bc4oNHcE.js";const s="/assets/9a01f0bc-0996-46fb-89b6-df677914ee57.C9xhJeIt.png",o="/assets/d34477cf-f95c-42e3-98ff-4ec888334606.BqKz1vPr.png",n="/assets/71e3d67b-784a-4783-957d-9f740ffc772b.CCMgV4OC.png",u3=JSON.parse('{"title":"02_地图投影概述","description":"","frontmatter":{"layout":"doc","title":"02_地图投影概述"},"headers":[],"relativePath":"gis/地理信息系统原理/02_地图投影概述.md","filePath":"gis/地理信息系统原理/02_地图投影概述.md"}'),r={name:"gis/地理信息系统原理/02_地图投影概述.md"},d=t("h2",{id:"基本问题",tabindex:"-1"},[e("基本问题 "),t("a",{class:"header-anchor",href:"#基本问题","aria-label":'Permalink to "基本问题"'},"​")],-1),i=t("p",null,"是如何将地球表面(椭球面或圆球面)表示到地图平面上。由于地球椭球面或圆球面是不可展开的曲面，即不能展开成平面，而地图又必须是一个平面，所以将地球表面展开成地图平面必然会产生裂隙或褶皱；那么采用什么样的数学方法将曲面展开成平面，而使其误差最小，必须采用地图投影的方法，即用各种方法将地球表面的经纬网线投影到地图平面上。",-1),m=t("h3",{id:"地图投影",tabindex:"-1"},[e("地图投影 "),t("a",{class:"header-anchor",href:"#地图投影","aria-label":'Permalink to "地图投影"'},"​")],-1),h=t("p",null,"定义：建立地球椭球表面(或球体表面)与地图平面之间点与点或线与线之间的一一对应关系",-1),c={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.148ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.212ex",height:"5.428ex",role:"img",focusable:"false",viewBox:"0 -1449.5 6281.8 2399","aria-hidden":"true"},g=T("",1),x=[g],_=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mrow",{"data-mjx-texclass":"INNER"},[t("mo",{"data-mjx-texclass":"OPEN"},"{"),t("mtable",{columnalign:"left left",columnspacing:"1em",rowspacing:".2em"},[t("mtr",null,[t("mtd",null,[t("mi",null,"X"),t("mo",null,"="),t("msub",null,[t("mi",null,"f"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"1")])]),t("mo",{stretchy:"false"},"("),t("mi",null,"φ"),t("mo",null,","),t("mi",null,"γ"),t("mo",{stretchy:"false"},")")])]),t("mtr",null,[t("mtd",null,[t("mi",null,"Y"),t("mo",null,"="),t("msub",null,[t("mi",null,"f"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"2")])]),t("mo",{stretchy:"false"},"("),t("mi",null,"φ"),t("mo",null,","),t("mi",null,"γ"),t("mo",{stretchy:"false"},")")])])]),t("mo",{"data-mjx-texclass":"CLOSE",fence:"true",stretchy:"true",symmetric:"true"})])])],-1),u=t("h2",{id:"地图投影的变形",tabindex:"-1"},[e("地图投影的变形 "),t("a",{class:"header-anchor",href:"#地图投影的变形","aria-label":'Permalink to "地图投影的变形"'},"​")],-1),w=t("p",null,"地球表面是一个不规则的曲面，即使把它当作一个椭球体或正球体表面，在数学上讲，它也是一种不能展开的曲面，要把这样一个曲面表现到平面上，就会发生裂隙或褶皱。在投影面上，则以经纬线的“拉伸”或“压缩”(通过数学手段)来避免之，从而可形成一幅完整的地图，也就因此而产生了变形。地图投影的变形，通常可分为长度、面积和角度三种变形，",-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.797ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.399ex",height:"2.798ex",role:"img",focusable:"false",viewBox:"0 -884.7 3270.3 1236.8","aria-hidden":"true"},L=T("",1),k=[L],b=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"μ"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"d"),t("mi",null,"s"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},"′")])]),t("mrow",null,[t("mi",null,"d"),t("mi",null,"s")])])])],-1),M={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.489ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.382ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -683 5031 899","aria-hidden":"true"},v=T("",1),Z=[v],V=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mi",null,"μ"),t("mo",null,"="),t("mi",null,"μ"),t("mo",null,"−"),t("mn",null,"1")])],-1),D=t("p",null,"投影上的长度比不仅随该点的位置而变换，而且随着在该点上不同方向而变化，这样。在一定点上的长度比存在最大值和最小值，被称为极值长度比，并通常用符号a和b表示极大与极小长度比。极值长度比的方向称为主方向。沿经线和纬线方向的长度比分别用符号m，n表示。在经纬线正交投影中，沿经纬线方向的长度比即为极值长度比，此时m=a或 b，n=b或a。",-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.797ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.182ex",height:"2.798ex",role:"img",focusable:"false",viewBox:"0 -884.7 3616.3 1236.8","aria-hidden":"true"},S=T("",1),P=[S],A=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"P"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mi",null,"d"),t("mi",null,"F"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},"′")])]),t("mrow",null,[t("mi",null,"d"),t("mi",null,"F")])])])],-1),I={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.491ex",height:"1.984ex",role:"img",focusable:"false",viewBox:"0 -683 5079 877","aria-hidden":"true"},N=T("",1),O=[N],B=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mi",null,"p"),t("mo",null,"="),t("mi",null,"P"),t("mo",null,"−"),t("mn",null,"1")])],-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.903ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -705 841 899","aria-hidden":"true"},q=T("",1),F=[q],J=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"β"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},"′")])])],-1),z={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.281ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -705 566 899","aria-hidden":"true"},$=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D6FD",d:"M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z",style:{"stroke-width":"3"}})])])],-1),K=[$],U=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"β")])],-1),Y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.949ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -705 2629.4 899","aria-hidden":"true"},t3=T("",1),e3=[t3],Q3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"β"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},"′")]),t("mo",null,"−"),t("mi",null,"β")])],-1),a3=t("p",null,"变形椭圆——地球面上无穷小圆在投影中通常不可能保持原来的形状和大小，而是投影成为不同大小的圆或各种形状大小的椭圆，统称为变形椭圆",-1),T3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},l3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.008ex",height:"1.912ex",role:"img",focusable:"false",viewBox:"0 -833.9 887.6 844.9","aria-hidden":"true"},s3=T("",1),o3=[s3],n3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"r"),t("mn",null,"2")])])],-1),r3=t("img",{src:s,alt:"变形椭圆"},null,-1),d3=T("",17);function i3(m3,h3,c3,p3,g3,x3){return a(),Q("div",null,[d,i,m,h,t("mjx-container",c,[(a(),Q("svg",p,x)),_]),u,w,t("p",null,[e("长度比——地面上微分线段投影后的长度ds′与其相应的实地长度ds之比 "),t("mjx-container",H,[(a(),Q("svg",f,k)),b])]),t("p",null,[e("长度变形——长度比与1之差值。如用符号Vμ表示长度变形 "),t("mjx-container",M,[(a(),Q("svg",y,Z)),V])]),D,t("p",null,[e("面积比——地面上微分面积投影后的大小dF′与其相应的实地面积dF的比称为面积比，通常用符号P表示"),t("mjx-container",j,[(a(),Q("svg",C,P)),A])]),t("p",null,[e("面积变形——面积比与1之差值。用符号Vp表示"),t("mjx-container",I,[(a(),Q("svg",R,O)),B])]),t("p",null,[e("角度变形——地面上某一角度投影后的角值"),t("mjx-container",E,[(a(),Q("svg",G,F)),J]),e("与其实际的角值"),t("mjx-container",z,[(a(),Q("svg",X,K)),U]),e("之差。即"),t("mjx-container",Y,[(a(),Q("svg",W,e3)),Q3]),e("。在一定点上，方位角的变形随不同的方向而变化，所以一点上不同方向的角度变形是不同的。投影中，一定点上的角度变形的大小是用其最大值来衡量的，即称最大角度变形，通常用符号ω表示")]),a3,t("p",null,[e("变形椭圆类型 a=b：该投影为等角投影 a·b="),t("mjx-container",T3,[(a(),Q("svg",l3,o3)),n3]),e("：该投影为等面积投影 任意投影：投影后为面积不等形状各不相同的椭圆 b=r: 为等距离投影 "),r3]),d3])}const w3=l(r,[["render",i3]]);export{u3 as __pageData,w3 as default};
