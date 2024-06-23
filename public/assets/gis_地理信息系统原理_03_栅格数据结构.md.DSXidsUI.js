import{_ as a,c as e,o as t,a2 as r}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/45ef3476-2e3d-4c58-93d3-c71d668a58c1.Cy_AO8sC.png",q=JSON.parse('{"title":"03_栅格数据结构","description":"","frontmatter":{"layout":"doc","title":"03_栅格数据结构"},"headers":[],"relativePath":"gis/地理信息系统原理/03_栅格数据结构.md","filePath":"gis/地理信息系统原理/03_栅格数据结构.md"}'),i={name:"gis/地理信息系统原理/03_栅格数据结构.md"},h=r('<h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p>将工作区域的平面表象按一定分解力作行和列的规划划分，形成许多格网，每个网格单元称为像素；栅格数据实际上就是像元阵列；即像元按矩阵形式的集合，栅格中的每个像素元是栅格数据中最基本的信息存储单元，其坐标位置可以用行和列确定。</p><p>用栅格数据表示的地表示不连续的，是量化和近似离散的数据，这意味着地表一定面积内（像素地面分辨率范围内）地理数据的近似性；栅格数据的比例尺就是栅格大小与地表相应单元大小之比。像元大小相对于所表示的面积较大时，对长度、面积等的度量有较大影响。这种影响除对像元的取舍外，还与计算长度面积的方法有关</p><h2 id="栅格数据层的概念" tabindex="-1">栅格数据层的概念 <a class="header-anchor" href="#栅格数据层的概念" aria-label="Permalink to &quot;栅格数据层的概念&quot;">​</a></h2><p>咋栅格数据结构中，物体的空间位置就用其在笛卡尔平面网格张工的行号和列号坐标表示，物体的属性用像元的取值表示，每个像元在一个网格中只能取值一次，同一像元要表示多属性的事物就要用多个笛卡尔平面网格。每个笛卡尔平面网格表示一种属性或同一属性的不同特征，这种平面称为层。 地理数据在栅格数据结构中必须分层组织存储，每一层构成单一的属性数据层或专题信息层</p><h2 id="栅格数据结构的表示" tabindex="-1">栅格数据结构的表示 <a class="header-anchor" href="#栅格数据结构的表示" aria-label="Permalink to &quot;栅格数据结构的表示&quot;">​</a></h2><h3 id="一维数组" tabindex="-1">一维数组 <a class="header-anchor" href="#一维数组" aria-label="Permalink to &quot;一维数组&quot;">​</a></h3><p>如果给栅格数据内的全体像素赋予按照某一顺序的一维的连续号码，则能够把栅格数据存储到一维数组中</p><h3 id="二维数组" tabindex="-1">二维数组 <a class="header-anchor" href="#二维数组" aria-label="Permalink to &quot;二维数组&quot;">​</a></h3><p>把栅格数据中各像素的值对应于二维数组相应的各元素加以存储的方式适合于灰度级大的浓淡图像的存储以及在通用计算机中的处理，所以是最常采用的一种方式，在采用二维数组的方式中，还有组合方式和比特面方式。 组合方式是在计算机的一个字长中存储多个像素的方式。从节约存储量的观点来考虑，经常在保存数据时采用；例如：16比特/字的计算机中，按每个像素8比特的数据对待的时候 比特面方式，就是把数据存储到能按比特进行存取的二维数组（可以理解为1比特/1字）即比特面中的方式。对于n个比特的浓淡图像，存储的是以二维形式排列着的各个像素值的第k比特（0或者1）的数据。另一方面，也有对于n比特/字的二维数组，把它作为n个比特面考虑，从而把二维图像存储到各比特面中的用法。以比特面作为单位进行处理时，其优点是能够在各面间进行高效率的逻辑运算，存储设备利用率高等，但也存在对浓淡图像的处理上耗费时间的问题。</p><h2 id="栅格数据的组织方法" tabindex="-1">栅格数据的组织方法 <a class="header-anchor" href="#栅格数据的组织方法" aria-label="Permalink to &quot;栅格数据的组织方法&quot;">​</a></h2><ol><li><p>以像元为记录的序列。不同层上同一像元位置上的各属性值表示为一个列数组</p></li><li><p>以层为基础。每一层又以像元为序记录它的坐标和属性值，一层记录完后再记录第二层</p></li><li><p>以层为基础，但每一层内则以多边形（也称制图单元）为序记录多边形的属性值和充满多边形的各像元的坐标</p></li></ol><p><img src="'+o+'" alt="栅格数据组织方式"></p><h2 id="栅格数据取值方式" tabindex="-1">栅格数据取值方式 <a class="header-anchor" href="#栅格数据取值方式" aria-label="Permalink to &quot;栅格数据取值方式&quot;">​</a></h2><p>单的方法是在专题地图上均匀地划分网格，或者将一张透明方格网叠置于地图上，每一网格覆盖部分的属性数据，即为该网格栅格数据的取值</p><p>中心归属法：每个栅格单元的值以网格中心点对应的面域属性值来确定</p><p>长度占优法：每个栅格单元的值以网格中线（水平或垂直）的大部分长度所对应的面域的属性值来确定</p><p>面积占优法：每个栅格单元的值以在该网格单元中占据最大面积的属性值来确定</p><p>重要性法：根据栅格内不同地物的重要性程度，选取特别重要的空间实体决定对应的栅格单元值</p><h2 id="栅格数据存储的压缩编码" tabindex="-1">栅格数据存储的压缩编码 <a class="header-anchor" href="#栅格数据存储的压缩编码" aria-label="Permalink to &quot;栅格数据存储的压缩编码&quot;">​</a></h2><p>直接编码就是将栅格数据看作一个数据矩阵，逐行（或逐列）逐个记录代码，可以每行都从左到右逐像元记录，也可奇数据行从左到右，而偶数行由右向左记录，为了特定目的还可采用其它特殊的顺序。栅格结构不论采用何种压缩方法，其逻辑原型都是直接编码的网格文件</p><h3 id="链式编码" tabindex="-1">链式编码 <a class="header-anchor" href="#链式编码" aria-label="Permalink to &quot;链式编码&quot;">​</a></h3><p>链式编码又称为弗里曼链码或边界链码；由某一原点开始并按某些基本方向确定的单位矢量链。基本方向可定义为：东＝0，南＝3，西＝2，北＝1等。</p><h3 id="行程编码" tabindex="-1">行程编码 <a class="header-anchor" href="#行程编码" aria-label="Permalink to &quot;行程编码&quot;">​</a></h3><p>只在各行（或列）数据的代码发生变化时依次记录该代码以及相同代码重复的个数，即按（属性值，重复个数）编码 逐个记录各行（或列）代码发生变化的位置和相应的代码，即按（位置，属性值）编码 按行（或列）记录相同代码的始末像元的列号（或行号）和相应的代码，即按（起位，止位，属性值）编码</p><h3 id="块式编码" tabindex="-1">块式编码 <a class="header-anchor" href="#块式编码" aria-label="Permalink to &quot;块式编码&quot;">​</a></h3><p>块式编码是将行程编码扩大到二维的情况，把多边形范围划分成由像元组成的正方形，然后对各个正方形进行编码。块式编码数据结构中包括3个数字：块的原点坐标（可以是块的中心或块的左下角像元的行、列号）和块的大小（块包括的像元数），再加上记录单元的代码组成</p><h3 id="四叉树编码" tabindex="-1">四叉树编码 <a class="header-anchor" href="#四叉树编码" aria-label="Permalink to &quot;四叉树编码&quot;">​</a></h3><p>将图像区域按四个大小相同的象限四等分，每个象限又可根据一定规则判断是否继续等分为次一层的四个象限，无论分割到哪一层象限，只要子象限上仅含一种属性代码或符合既定要求的少数几种属性时，则停止继续分割。否则就一直分割到单个像元为止。</p><h4 id="指针四叉树" tabindex="-1">指针四叉树 <a class="header-anchor" href="#指针四叉树" aria-label="Permalink to &quot;指针四叉树&quot;">​</a></h4><p>指针四叉树编码是通过在子结点与父结点之间设立指针的方式建立起整个结构。按这种方式，四叉树的每个结点通常存储6个量，即四个子结点指针、一个父结点指针和该结点的属性代码。这种方法除了要记录叶结点外，还要记录中间结点，一般要占用较大存储空间。</p><h4 id="线性四叉树" tabindex="-1">线性四叉树 <a class="header-anchor" href="#线性四叉树" aria-label="Permalink to &quot;线性四叉树&quot;">​</a></h4><p>不需记录中间结点和使用指针，仅记录叶结点，并用地址码（如Morton码等）表示叶结点的位置。因此，其编码包括叶结点的地址码和本结点的属性或灰度值，并且地址码隐含了叶结点的位置和深度信息</p>',33),l=[h];function n(d,s,p,c,_,u){return t(),e("div",null,l)}const m=a(i,[["render",n]]);export{q as __pageData,m as default};
