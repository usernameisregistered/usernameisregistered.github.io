import{_ as l,c as e,l as a,a as t,a2 as T,o}from"./chunks/framework.Bc4oNHcE.js";const H=JSON.parse('{"title":"第二章 三维物体的表示和建模","description":"","frontmatter":{"layout":"doc","title":"第二章 三维物体的表示和建模"},"headers":[],"relativePath":"graph/3D计算机图形学/第二章 三维物体的表示和建模.md","filePath":"graph/3D计算机图形学/第二章 三维物体的表示和建模.md"}'),r={name:"graph/3D计算机图形学/第二章 三维物体的表示和建模.md"},s=a("p",null,"三维计算机图形学中的主要目的就是从物体的描述或模型产生物体或场景的二维图像。物体可以是一个实际的物体也可以只是一种计算机描述。",-1),n=a("h2",{id:"_1、三维物体的多边形表示",tabindex:"-1"},[t("1、三维物体的多边形表示 "),a("a",{class:"header-anchor",href:"#_1、三维物体的多边形表示","aria-label":'Permalink to "1、三维物体的多边形表示"'},"​")],-1),i=a("p",null,"这是一种三维计算机图形学中的经典表示形式。在这种表示法中。物体用多边形小平面组成的网格来表示。在一般情况下。物体具有曲面。而这些小平面是对这样的表面的近似。多边形也可以包含一个顶点计数。该计数来自创建模型所采用的技术",-1),h=a("p",null,"多边形表示方法在计算机图形学中是普遍存在的。有2个原因造成这种情况。创建多边形物体是容易的。尽管对于复杂的物体这个过程是费时且昂贵的。而且很明显存在对用这种方法所表示的物体进行明暗处理的有效方法。",-1),Q=a("p",null,"采用多边形网格表示法有一些实际的困难。到目前为止。最大的困难是精确度。模型的精确度，即小平面表示与物体的曲面之间的差别通常是任意的。对于我们所考虑的最终图像质量而言，即小平面表示与于物体的曲面之间的差别通常是任意的。对于我们所考虑的最终图像质量而言。各个多边形的尺寸理想情况下应该依局部的空间曲率决定。在那些曲率变化迅速的地方。对每单位曲面需要较多的多边形，其换算系数倾向于与创建多边形所用的方法有关。",-1),d=a("p",null,"三维图形学最突出的进步出现在20世纪70年代。即出现了明暗处理算法。这种算法有效的处理多边形物体。同时通过一种插值技术消除了在表示中出现的小平面与小平面之间的连线可见的情况。这一因素在加上固有的程序化绘制硬件中的新的发展确保了多边形网格结构的地位",-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.227ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3194.3 1000","aria-hidden":"true"},m=T("",1),p=[m],u=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",null,","),a("mi",null,"y"),a("mo",null,","),a("mi",null,"z"),a("mo",{stretchy:"false"},")")])],-1),x=T("",10);function f(g,b,k,w,q,P){return o(),e("div",null,[s,n,i,h,Q,d,a("p",null,[t("在最简单的情况下。多边形网格是一种由相链接的坐标"),a("mjx-container",_,[(o(),e("svg",c,p)),u]),t("的列表来表示的多边形组成的结构，这些相链接的坐标值是多边形的顶点，因此存储物体的信息最终是一个点的列表或者这顶点的列表。作为物体描述的部分，还要存储其他用于接下来的处理的几何信息，这些信息通常是多变形法向量和顶点法向。这些信息只计算一次，吧这信息放在物体的数据结构中，并且对他们进行任何应用于物体的线型变换是很方便的。")]),x])}const L=l(r,[["render",f]]);export{H as __pageData,L as default};
