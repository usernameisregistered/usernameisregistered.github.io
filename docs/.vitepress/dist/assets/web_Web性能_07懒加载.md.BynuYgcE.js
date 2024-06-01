import{_ as a,c as e,o as t,a2 as i}from"./chunks/framework.Bc4oNHcE.js";const S=JSON.parse('{"title":"07懒加载","description":"","frontmatter":{"layout":"doc","title":"07懒加载"},"headers":[],"relativePath":"web/Web性能/07懒加载.md","filePath":"web/Web性能/07懒加载.md"}'),l={name:"web/Web性能/07懒加载.md"},o=i('<h1 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h1><p>延迟加载（懒加载）是一种将资源标识为非阻塞（非关键）资源并仅在需要时加载它们的策略。这是一种缩短关键渲染路径长度的方法，可以缩短页面加载时间。</p><h2 id="策略" tabindex="-1">策略 <a class="header-anchor" href="#策略" aria-label="Permalink to &quot;策略&quot;">​</a></h2><p>延迟加载可以通过多种策略应用于多个资源。</p><h3 id="常规" tabindex="-1">常规 <a class="header-anchor" href="#常规" aria-label="Permalink to &quot;常规&quot;">​</a></h3><ul><li>代码拆分： JavaScript、CSS 和 HTML 可以被分割成较小的代码块。这样就可以在前期发送所需的最小代码，改善页面加载时间。其余的可以按需加载</li><li>JavaScript: 任何类型为 type=&quot;module&quot; 的脚本标签都被视为一个 JavaScript 模块，并且默认情况下会被延迟。</li><li>css：默认情况下，CSS 被视为渲染阻塞资源，因此，在 CSSOM 构造完成之前，浏览器不会渲染任何已处理的内容。CSS 必须尽量小，才能尽快送达，建议使用媒体类型和查询实现非阻塞渲染。</li><li>字体：字体请求会延迟到构造渲染树之前，这可能会导致文本渲染延迟。可以使用 &lt;link rel=&quot;preload&quot;&gt;、CSS font-display属性和字体加载API来覆盖默认行为并预加载网络字体资源。</li><li>图片和iframe:很多时候，网页包含许多图片，这些图片会影响数据的使用和网页的加载速度。这些图片大部分都在屏幕之外（非关键），需要用户互动，如滚动，才能看到它们</li><li>loading: 可用于指示浏览器推迟加载屏幕外的图像/iframe，直到用户滚动到其附近</li><li>Intersection Observer API:允许用户得知被观察的元素何时进入或退出浏览器的视口。</li></ul>',6),r=[o];function n(s,c,_,d,h,p){return t(),e("div",null,r)}const m=a(l,[["render",n]]);export{S as __pageData,m as default};
