<<<<<<<< HEAD:public/assets/csharp_WPF教程_03WPF窗体.md.BFW5uHEk.js
import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Bc4oNHcE.js";const t="/assets/7bae7045-1b39-44e5-b523-558228f612be.DO43OOSa.png",y=JSON.parse('{"title":"03WPF窗体","description":"","frontmatter":{"layout":"doc","title":"03WPF窗体"},"headers":[],"relativePath":"csharp/WPF教程/03WPF窗体.md","filePath":"csharp/WPF教程/03WPF窗体.md"}'),h={name:"csharp/WPF教程/03WPF窗体.md"},l=n(`<h1 id="wpf窗体" tabindex="-1">WPF窗体 <a class="header-anchor" href="#wpf窗体" aria-label="Permalink to &quot;WPF窗体&quot;">​</a></h1><blockquote><p>自定义的窗体均继承System.Windows.Window类（类型化窗体）</p></blockquote><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// xmal文件</span></span>
========
import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Bc4oNHcE.js";const t="/assets/ddad14fc-9ac2-4e82-9eaf-2602c2e113d3.DO43OOSa.png",y=JSON.parse('{"title":"03WPF窗体","description":"","frontmatter":{"layout":"doc","title":"03WPF窗体"},"headers":[],"relativePath":"csharp/WPF教程/03WPF窗体.md","filePath":"csharp/WPF教程/03WPF窗体.md"}'),h={name:"csharp/WPF教程/03WPF窗体.md"},l=n(`<h1 id="wpf窗体" tabindex="-1">WPF窗体 <a class="header-anchor" href="#wpf窗体" aria-label="Permalink to &quot;WPF窗体&quot;">​</a></h1><blockquote><p>自定义的窗体均继承System.Windows.Window类（类型化窗体）</p></blockquote><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// xmal文件</span></span>
>>>>>>>> githubmaster:public/assets/csharp_WPF教程_03WPF窗体.md.BYZpqX8b.js
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Window</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    xmlns:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    x:Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WpfWindow.BasicWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    x:Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Window&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BasicWindow&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x:Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btnMessage&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;79&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;24&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Canvas.Left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;172&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Canvas.Top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;93&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btnMessage_Click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x:Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;txtValue&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;215&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Canvas.Left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;36&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Canvas.Top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;48&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TextWrapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Wrap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Window</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .cs文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Windows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WindowHelloWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> partial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Window</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseWindow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InitializeComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> btnMessage_Click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RoutedEventArgs</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            txtValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="窗体的生存周期" tabindex="-1">窗体的生存周期 <a class="header-anchor" href="#窗体的生存周期" aria-label="Permalink to &quot;窗体的生存周期&quot;">​</a></h2><ul><li>显示窗体</li></ul><blockquote><p>Show()、ShowDialog()方法：Show()方法显示非模态窗口，ShowDialog()方法显示模态窗口 Loaded事件：窗体第一次Show()或ShowDialog()时引发的事件，通常在此事件中加载窗体的初始化数据</p></blockquote><ul><li>关闭窗体</li></ul><blockquote><p>Close()方法：关闭窗体，并释放窗体的资源 Closing事件、Closed事件：关闭时、关闭后引发的事件，通常在Closing事件中提示用户是否退出</p></blockquote><ul><li>窗体激活</li></ul><blockquote><p>Activate()方法：激活某窗体 Activated、Deactivated事件：当窗体激动、失去焦点时引发的事件</p></blockquote><p><img src="`+t+'" alt="窗体的生存周期"></p><h2 id="常用属性" tabindex="-1">常用属性 <a class="header-anchor" href="#常用属性" aria-label="Permalink to &quot;常用属性&quot;">​</a></h2><ul><li>窗体边框模式（WindowStyle属性）和是否允许更改窗体大小（ResizeMode属性）</li><li>窗体启动位置（WindowStartupLocation属性）和启动状态（WindowState属性）</li><li>窗体标题（Title属性）</li><li>始终在最前（TopMost属性）</li><li>是否显示在任务栏（ShowInTaskbar）</li></ul>',15),k=[l];function p(e,E,d,r,o,g){return a(),i("div",null,k)}const c=s(h,[["render",p]]);export{y as __pageData,c as default};
