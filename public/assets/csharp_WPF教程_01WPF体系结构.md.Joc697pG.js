import{_ as e,c as t,o as a,a2 as r}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/9727c148-0510-4139-be2a-8003e3119841.DXJrcz9G.png",s="/assets/3047854d-577e-4f54-bbe8-5d2011803d16.CmdudBXe.png",W=JSON.parse('{"title":"01WPF体系结构","description":"","frontmatter":{"layout":"doc","title":"01WPF体系结构"},"headers":[],"relativePath":"csharp/WPF教程/01WPF体系结构.md","filePath":"csharp/WPF教程/01WPF体系结构.md"}'),c={name:"csharp/WPF教程/01WPF体系结构.md"},_=r('<h1 id="wpf体系结构" tabindex="-1">WPF体系结构 <a class="header-anchor" href="#wpf体系结构" aria-label="Permalink to &quot;WPF体系结构&quot;">​</a></h1><p><img src="'+o+'" alt="WPF体系结构"></p><p>图中PresentationFramework、PresentationCore和milcore是WPF的主要代码部分，在这些组件中，只有一个是非托管组件 – milcore。milcore 是以非托管代码编写的，目的是实现与 DirectX 的紧密集成。WPF 中的所有显示是通过 DirectX 引擎完成的，可实现高效的硬件和软件呈现。WPF 还要求对内存和执行进行精确控制。milcore 中的组合引擎受性能影响关系大，需要放弃 CLR 的许多优点来提高性能。</p><h2 id="常用控件类继承结构图" tabindex="-1">常用控件类继承结构图 <a class="header-anchor" href="#常用控件类继承结构图" aria-label="Permalink to &quot;常用控件类继承结构图&quot;">​</a></h2><p><img src="'+s+'" alt="控件类继承结构图"></p>',5),i=[_];function n(p,d,l,P,m,h){return a(),t("div",null,i)}const f=e(c,[["render",n]]);export{W as __pageData,f as default};
