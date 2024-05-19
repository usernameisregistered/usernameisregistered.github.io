import{_ as t,c as a,o as d,a2 as e}from"./chunks/framework.Bc4oNHcE.js";const u=JSON.parse('{"title":"01_地球椭球体与大地控制","description":"","frontmatter":{"layout":"doc","title":"01_地球椭球体与大地控制"},"headers":[],"relativePath":"gis/地理信息系统原理/01_地球椭球体与大地控制.md","filePath":"gis/地理信息系统原理/01_地球椭球体与大地控制.md"}'),r={name:"gis/地理信息系统原理/01_地球椭球体与大地控制.md"},o=e('<h2 id="地球椭球体" tabindex="-1">地球椭球体 <a class="header-anchor" href="#地球椭球体" aria-label="Permalink to &quot;地球椭球体&quot;">​</a></h2><p>地球表面是一个高低不平、极其复杂的表面，在地球表面上分布着山地、盆地以及海洋。其中海洋的面积约占71％，陆地约占29％。从高达8844.43m的世界最高点――珠穆朗玛峰，到深达11022m的太平洋西部马里亚纳海沟，两者相差近两万米</p><p>假定海水处于“完全”静止状态，把海水面延伸到大陆上去，形成包围整个地球的连续表面，我们通常称它为大地水准面，它包围的球体称为大地体。大地测量中用水准量测方法得到地面上各点的高程就是依据这个水准面来确定的，大地水准面上任何一点的铅垂线都与大地水准面成正交，而铅垂线的方向又受地球内部质量分布不均匀和地面高低起伏的影响，致使大地水准面产生微小起伏，所以大地水准面仍是一个不规则的、不能用简单数学公式表达的曲面</p><p>为了便于测量成果的计算和制图工作的需要，我们选用一个大小和形状同 大地体极为近似的、可以用数学方法表 达的旋转椭球来代替。旋转椭球是以椭 圆的短轴（地轴）为轴旋转而成的</p><p>地球椭球的形状和大小常用长半径 a（赤道半径）、短半径b（极轴半径）、扁率α、 第一偏心率e、第二偏心率e′表示，这 些数据又称为椭球元素</p><p>表 常见地球椭球体数据</p><table><thead><tr><th>名称</th><th>年代</th><th>长半径a(m)</th><th>短半径b(m)</th><th>扁率α</th></tr></thead><tbody><tr><td>白赛尔</td><td>1841</td><td>6377397</td><td>6356079</td><td>1:299.15</td></tr><tr><td>克拉克</td><td>1866</td><td>6378206</td><td>6356534</td><td>1:295.0</td></tr><tr><td>克拉克</td><td>1880</td><td>6378249</td><td>6356515</td><td>1:293.47</td></tr><tr><td>海伏特</td><td>1910</td><td>6378388</td><td>6356912</td><td>1:297.0</td></tr><tr><td>克拉索夫斯基</td><td>1940</td><td>6378245</td><td>6356863</td><td>1:298.3</td></tr><tr><td>国际椭球</td><td>1975</td><td>6378140</td><td>6356755</td><td>1:298.257</td></tr><tr><td>国际椭球</td><td>1979</td><td>6378137</td><td></td><td>1:298.257</td></tr></tbody></table><h2 id="大地控制" tabindex="-1">大地控制 <a class="header-anchor" href="#大地控制" aria-label="Permalink to &quot;大地控制&quot;">​</a></h2><p>大地控制的主要任务是确定地面点在地球椭球体上的位置，包括点在地球椭球面上的平面位置和点到大地水准面的高度，即经纬度和高程。</p><h3 id="地理坐标系" tabindex="-1">地理坐标系 <a class="header-anchor" href="#地理坐标系" aria-label="Permalink to &quot;地理坐标系&quot;">​</a></h3><p>经线和纬线是地球表面上两组正交（相交为900）的曲线，这两组正交线构成的坐标称为地理坐标系</p><h3 id="中国大地坐标系" tabindex="-1">中国大地坐标系 <a class="header-anchor" href="#中国大地坐标系" aria-label="Permalink to &quot;中国大地坐标系&quot;">​</a></h3><ul><li><p>1954年北京坐标系 从苏联1942年坐标系联测并经过平差计算而引伸到我国，建立了1954年北京坐标系；该坐标系的原点在苏联西部的普尔科夫，采用克拉索夫斯基椭球元素。</p></li><li><p>1980年国家大地坐标系 选用了1975年国际大地测量协会推荐的参考椭球，其具体参数为a=6378140m，image0 =1/298.257；1980年国家大地原点设在我国中部西安市附近的泾阳县境内。由于大地原点在我国居中位置</p></li></ul><h3 id="高程系" tabindex="-1">高程系 <a class="header-anchor" href="#高程系" aria-label="Permalink to &quot;高程系&quot;">​</a></h3><p>绝对高程是指由高程基准面起算的地面点的垂直高度 地面点之间的高程差，称为相对高程（简称高差） 在不同地点的验潮站所得的平均海水面之间存在着差异，选用不同的基准面就有不同的高程系统。</p><ol><li><p>1956年黄海高程系 以青岛验潮站1950年~1956年测定的黄海平均海水面，作为我国统一高程基准面，凡由该基准面起算的高程，统称为“1956年黄海高程系”。其水准原点设在青岛市的观家山上，对黄海平均海水面的高程值为72.298m</p></li><li><p>1985年国家高程基准 采用青岛验潮站1952～1979年潮汐观测计算的平均海水面，国家水准原点的高程值为72.260m，使高程控制点的高程产生了微小变化</p></li></ol><h3 id="大地控制网" tabindex="-1">大地控制网 <a class="header-anchor" href="#大地控制网" aria-label="Permalink to &quot;大地控制网&quot;">​</a></h3><p>在广阔的区域上进行测量和制图，不可能独家一次完成，必须要由许多单位分期分批完成，为了保证测量成果的精度符合国家的统一要求，首先必须在全国范围内选取若干具有控制意义的点，然后精确测定其平面位置和高程，构成统一的大地控制网。大地控制网由平面控制网和高程控制网组成</p><h4 id="平面控制网-水平控制网" tabindex="-1">平面控制网[水平控制网] <a class="header-anchor" href="#平面控制网-水平控制网" aria-label="Permalink to &quot;平面控制网[水平控制网]&quot;">​</a></h4><p>主要目的是确定控制点的平面位置，主要的方法为三角测量和导线测量。 三角测量:是在地面上选择一系列控制点，并建立起相互连接的三角形，组成三角锁和三角网，测量一段精确的距离作为起始边，在这个边的两端点，采用天文观测的方法确定起点位，精确测定各三角形的内角。 导线测量:是把各个控制点连接成连续的折线，然后测定这些折线的边长和转角，最后根据起算点的坐标和方位角推算其他各点坐标。</p><h4 id="高程控制网" tabindex="-1">高程控制网 <a class="header-anchor" href="#高程控制网" aria-label="Permalink to &quot;高程控制网&quot;">​</a></h4><p>是在全国范围内按照统一规范，由精确测定高程的地面点所组成的控制网，是测定其他地面点高程的控制基础。</p>',22),h=[o];function i(l,_,n,p,s,c){return d(),a("div",null,h)}const b=t(r,[["render",i]]);export{u as __pageData,b as default};
