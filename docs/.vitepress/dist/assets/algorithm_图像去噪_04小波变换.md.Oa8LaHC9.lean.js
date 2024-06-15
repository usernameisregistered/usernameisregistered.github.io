import{_ as s,c as Q,l as t,a as T,a2 as e,o as a}from"./chunks/framework.Bc4oNHcE.js";const r1=JSON.parse('{"title":"04小波变换","description":"","frontmatter":{"layout":"doc","title":"04小波变换"},"headers":[],"relativePath":"algorithm/图像去噪/04小波变换.md","filePath":"algorithm/图像去噪/04小波变换.md"}'),l={name:"algorithm/图像去噪/04小波变换.md"},o=e("",7),n={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.723ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2529.7 1000","aria-hidden":"true"},r=e("",1),m=[r],i=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")")])],-1),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.836ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2579.7 1000","aria-hidden":"true"},c=e("",1),g=[c],w=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")")])],-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.617ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2482.7 1000","aria-hidden":"true"},u=e("",1),H=[u],f=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")")])],-1),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.959ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 10148 1000","aria-hidden":"true"},k=e("",1),M=[k],Z=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")")])],-1),V=t("p",null,[T("假定离散小波变换的变换矩阵是"),t("strong",null,"w"),T(", 则")],-1),b={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.846ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 14960 1000","aria-hidden":"true"},D=e("",1),j=[D],C=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"W"),t("mo",{stretchy:"false"},"["),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},"]"),t("mo",null,"="),t("mi",null,"W"),t("mo",{stretchy:"false"},"["),t("mi",null,"f"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},"]"),t("mo",null,"+"),t("mi",null,"W"),t("mo",{stretchy:"false"},"["),t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"i"),t("mo",null,","),t("mi",null,"j"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},"]")])],-1),S=t("p",null,"由于高斯白噪声经小波变换后仍是高斯分布的，即均匀分布在频率尺度空间的所有部分，信号经小波变换系数后只集中在频率尺度空间上的有限部分，从信号能量的观点来看，噪声能量分布在所有小波系数上，而信号能量只分布在少数小波系数上，因此小波系数分为两类：一类是由噪声变换得到的，其幅值小，数目多；另一类是由信号变换得到的，其幅值大，数目少，其中包含部分噪声的变换结果。根据两类系数幅值的不同，设定一个阈值，将其分开后去除噪声部分，就可以在去除噪声的同时，较好地保留图像的细节信息。",-1),A=t("p",null,"基于信号和噪声的小波系数在不同尺度上具有不同性质这一特性，首先将混噪图像信号利用小波分解分解到各尺度中，然后在每一尺度中去除噪声的小波系数，保留并增强信号的小波系数，最后将处理后的小波系数利用小波逆变换重构出去噪后的图像",-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.463ex",height:"1.668ex",role:"img",focusable:"false",viewBox:"0 -443 1530.9 737.2","aria-hidden":"true"},R=e("",1),I=[R],N=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"w"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mo",null,","),t("mi",null,"j")])])])],-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},J=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1),z=[J],G=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.463ex",height:"2.501ex",role:"img",focusable:"false",viewBox:"0 -811 1530.9 1105.2","aria-hidden":"true"},$=e("",1),W=[$],F=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"w"),t("mo",{stretchy:"false"},"^")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mo",null,","),t("mi",null,"j")])])])],-1),K={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.463ex",height:"2.501ex",role:"img",focusable:"false",viewBox:"0 -811 1530.9 1105.2","aria-hidden":"true"},Y=e("",1),t1=[Y],T1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"w"),t("mo",{stretchy:"false"},"^")])]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mo",null,","),t("mi",null,"j")])])])],-1);function Q1(a1,e1,s1,l1,o1,n1){return a(),Q("div",null,[o,t("p",null,[T("设"),t("mjx-container",n,[(a(),Q("svg",d,m)),i]),T("是原图像， "),t("mjx-container",h,[(a(),Q("svg",p,g)),w]),T("为高斯白噪声，"),t("mjx-container",x,[(a(),Q("svg",_,H)),f]),T("是受噪声污染后的图像，则")]),t("mjx-container",y,[(a(),Q("svg",L,M)),Z]),V,t("mjx-container",b,[(a(),Q("svg",v,j)),C]),S,A,t("ol",null,[t("li",null,[T("对混噪图像进行多层小波变换，得到各层小波系数"),t("mjx-container",P,[(a(),Q("svg",B,I)),N]),T("；")]),t("li",null,[T("选择合适的阈值"),t("mjx-container",E,[(a(),Q("svg",O,z)),G]),T("，对小波系数进行阈值量化处理，得到估计小波系数"),t("mjx-container",q,[(a(),Q("svg",X,W)),F])]),t("li",null,[T("对"),t("mjx-container",K,[(a(),Q("svg",U,t1)),T1]),T("进行逆小波变换，重构图像")])])])}const m1=s(l,[["render",Q1]]);export{r1 as __pageData,m1 as default};
