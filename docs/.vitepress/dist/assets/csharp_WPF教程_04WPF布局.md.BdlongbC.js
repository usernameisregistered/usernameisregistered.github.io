import{_ as i,c as s,o as a,a2 as t}from"./chunks/framework.Bc4oNHcE.js";const c=JSON.parse('{"title":"04WPF布局","description":"","frontmatter":{"layout":"doc","title":"04WPF布局"},"headers":[],"relativePath":"csharp/WPF教程/04WPF布局.md","filePath":"csharp/WPF教程/04WPF布局.md"}'),n={name:"csharp/WPF教程/04WPF布局.md"},h=t(`<h1 id="wpf布局" tabindex="-1">WPF布局 <a class="header-anchor" href="#wpf布局" aria-label="Permalink to &quot;WPF布局&quot;">​</a></h1><h2 id="stackpanel" tabindex="-1">StackPanel <a class="header-anchor" href="#stackpanel" aria-label="Permalink to &quot;StackPanel&quot;">​</a></h2><blockquote><p>StackPanel是以堆叠的方式显示其中的控件</p></blockquote><h3 id="orientation属性-更改堆叠的顺序" tabindex="-1">Orientation属性 更改堆叠的顺序 <a class="header-anchor" href="#orientation属性-更改堆叠的顺序" aria-label="Permalink to &quot;Orientation属性 更改堆叠的顺序&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--默认，由上到下显示各控件。控件在未定义的前提下，宽度为StackPanel的宽度，高度自动适应控件中内容的高度--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StackPanel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Orientation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Vertical&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button B&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button C&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button D&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button E&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button F&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StackPanel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--由左到右显示各控件。控件在未定义的前提下，高度为StackPanel的高度，宽度自动适应控件中内容的宽度--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StackPanel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Orientation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Horizontal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button B&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button C&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button D&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button E&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button F&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StackPanel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="margin属性-定义控件的外边缘" tabindex="-1">Margin属性 定义控件的外边缘 <a class="header-anchor" href="#margin属性-定义控件的外边缘" aria-label="Permalink to &quot;Margin属性 定义控件的外边缘&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button.Margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Thickness</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button.Margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="width、height属性-设定控件的宽度和高度-取消自动的宽度和高度" tabindex="-1">Width、Height属性,设定控件的宽度和高度，取消自动的宽度和高度 <a class="header-anchor" href="#width、height属性-设定控件的宽度和高度-取消自动的宽度和高度" aria-label="Permalink to &quot;Width、Height属性,设定控件的宽度和高度，取消自动的宽度和高度&quot;">​</a></h3><h3 id="horizontalalignment、verticalalignment属性-设定控件的水平或竖直对齐方式" tabindex="-1">HorizontalAlignment、VerticalAlignment属性,设定控件的水平或竖直对齐方式 <a class="header-anchor" href="#horizontalalignment、verticalalignment属性-设定控件的水平或竖直对齐方式" aria-label="Permalink to &quot;HorizontalAlignment、VerticalAlignment属性,设定控件的水平或竖直对齐方式&quot;">​</a></h3><h3 id="minwidth、minheight、maxwidth、maxheight属性-在调整窗体大小-同时更改控件大小时-控件宽度、高度可变化的最大值和最小值" tabindex="-1">MinWidth、MinHeight、MaxWidth、MaxHeight属性,在调整窗体大小，同时更改控件大小时，控件宽度、高度可变化的最大值和最小值 <a class="header-anchor" href="#minwidth、minheight、maxwidth、maxheight属性-在调整窗体大小-同时更改控件大小时-控件宽度、高度可变化的最大值和最小值" aria-label="Permalink to &quot;MinWidth、MinHeight、MaxWidth、MaxHeight属性,在调整窗体大小，同时更改控件大小时，控件宽度、高度可变化的最大值和最小值&quot;">​</a></h3><h2 id="wrappanel" tabindex="-1">WrapPanel <a class="header-anchor" href="#wrappanel" aria-label="Permalink to &quot;WrapPanel&quot;">​</a></h2><blockquote><p>以流的形式由左到右，由上到下显示控件，其功能类似于Java AWT布局中的FlowLayout</p></blockquote><h2 id="dockpanel" tabindex="-1">DockPanel <a class="header-anchor" href="#dockpanel" aria-label="Permalink to &quot;DockPanel&quot;">​</a></h2><blockquote><p>以上、下、左、右、中为基本结构的布局方式，类似于Java AWT布局中的BorderLayout,但与BorderLayout不同的是，每一个区域可以同时放置多个控件，在同一区域放置的多个控件采用的布局方式为StackPanel方式</p></blockquote><h2 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;Grid&quot;">​</a></h2><blockquote><p>Grid是以表格形式组织控件的一种布局方式，与Java AWT中的GridLayout类似，但区别在于WPF中的Grid的每一个单元格中可以放置多个控件，但控件可能会层叠在一起,WPF中的Grid支持单元格的合并，类似于HTML中的table td中的rowspan和colspan, Grid中的行和列可以自定义高度（Height）和宽度（Width）</p></blockquote><p>在设置高度和宽度时可以采用两种写法：</p><ol><li>Height=”60”：不加“星号”表示固定的高度</li><li>Height=”60*”：加“星号”表示“加权”的高度，在调整窗体大小时，此高度或宽度会按窗体大小改变的比例进行缩放</li></ol><h2 id="uniformgrid" tabindex="-1">UniformGrid <a class="header-anchor" href="#uniformgrid" aria-label="Permalink to &quot;UniformGrid&quot;">​</a></h2><blockquote><p>UniformGrid 控件为控件提供了一种简化的网格布局。当控件添加到 UniformGrid 时，它们会排列在一个网格模式中，该网格模式会自动调整以使控件之间的距离保持均匀。单元格的数目将进行调整，以适应控件的数目。 各单元格的大小完全相同 单元格的数量取决于放入的控件的数量，且单元格一定是行、列数相同的，即1<em>1、2</em>2、3<em>3、4</em>4…的单元格分布</p></blockquote><h2 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-label="Permalink to &quot;Canvas&quot;">​</a></h2><blockquote><p>在WPF中子元素的绝对定位的布局控件</p></blockquote><ul><li>其子元素使用Width、Height定义元素的宽度和高度</li><li>使用Convas.Left（Convas.Right）、Convas.Top（Convas.Bottom）定义与Convas容器的相对位置</li><li>如果同时存在Convas.Left和Convas.Right、Convas.Top和Convas.Bottom，则Convas.Left、Convas.Top优先生效</li></ul><h2 id="inkcanvas" tabindex="-1">InkCanvas <a class="header-anchor" href="#inkcanvas" aria-label="Permalink to &quot;InkCanvas&quot;">​</a></h2><blockquote><p>在WPF中实现允许使用墨迹的控件,它提供了一个平面，用户可以在上面书写、绘制和触摸操作，支持手写笔输入和多点触控</p></blockquote>`,26),l=[h];function k(e,p,E,r,o,d){return a(),s("div",null,l)}const u=i(n,[["render",k]]);export{c as __pageData,u as default};
