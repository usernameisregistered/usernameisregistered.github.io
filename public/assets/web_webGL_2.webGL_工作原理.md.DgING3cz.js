import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.Bc4oNHcE.js";const e="/assets/57f5d86a-c009-4995-87e2-18f6e8fa5ed6.DGE75EvU.gif",y=JSON.parse('{"title":"2.webGL_工作原理","description":"","frontmatter":{"layout":"doc","title":"2.webGL_工作原理"},"headers":[],"relativePath":"web/webGL/2.webGL_工作原理.md","filePath":"web/webGL/2.webGL_工作原理.md"}'),n={name:"web/webGL/2.webGL_工作原理.md"},l=t(`<h1 id="webgl-工作原理" tabindex="-1">webGL 工作原理 <a class="header-anchor" href="#webgl-工作原理" aria-label="Permalink to &quot;webGL 工作原理&quot;">​</a></h1><p>WebGL在GPU上的工作基本上分为两部分，第一部分是将顶点（或数据流）转换到裁剪空间坐标， 第二部分是基于第一部分的结果绘制像素点</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> primitiveType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gl.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TRIANGLES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> offset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawArrays</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(primitiveType, offset, count);</span></span></code></pre></div><p><img src="`+e+`" alt="顶点着色器运行"></p><p>左侧是你提供的数据，顶点着色器是你写进GLSL中的一个方法，每个顶点调用一次，在这个方法中做一些数学运算后设置一个特殊的gl_position变量，这个变量就是该顶点转换到裁剪空间中坐标值，GPU接收该值并将其保存起来。 假设你正在画三角形，顶点着色器每完成三次顶点处理，WebGL就会用这三个顶点画一个三角形。 它计算出这三个顶点对应的像素后，就会光栅化这个三角形，“光栅化”其实就是“用像素画出来” 的花哨叫法。对于每一个像素，它会调用你的片段着色器询问你使用什么颜色。 你通过给片段着色器的一个特殊变量gl_FragColor设置一个颜色值，实现自定义像素颜色。</p><h2 id="关于buffer和attribute的代码是干什么的" tabindex="-1">关于buffer和attribute的代码是干什么的 <a class="header-anchor" href="#关于buffer和attribute的代码是干什么的" aria-label="Permalink to &quot;关于buffer和attribute的代码是干什么的&quot;">​</a></h2><p>缓冲操作是在GPU上获取顶点和其他顶点数据的一种方式。 gl.createBuffer创建一个缓冲；gl.bindBuffer是设置缓冲为当前使用缓冲； gl.bufferData将数据拷贝到缓冲，这个操作一般在初始化完成。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> positionLocation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAttribLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(program, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a_position&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colorLocation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAttribLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(program, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a_color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enableVertexAttribArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bindBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gl.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARRAY_BUFFER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, someBuffer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vertexAttribPointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location,numComponents, typeOfData, normalizeFlag, strideToNextPieceOfData, offsetIntoBuffer);</span></span></code></pre></div><h3 id="vertexattribpointer-中的-normalizeflag-参数是什么意思" tabindex="-1">vertexAttribPointer 中的 normalizeFlag 参数是什么意思？ <a class="header-anchor" href="#vertexattribpointer-中的-normalizeflag-参数是什么意思" aria-label="Permalink to &quot;vertexAttribPointer 中的 normalizeFlag 参数是什么意思？&quot;">​</a></h3><p>标准化标记（normalizeFlag）适用于所有非浮点型数据。如果传递false就解读原数据类型。 BYTE 类型的范围是从 -128 到 127，UNSIGNED_BYTE 类型的范围是从 0 到 255， SHORT 类型的范围是从 -32768 到 32767，等等...</p><p>如果标准化标记设为true，BYTE 数据的值(-128 to 127)将会转换到 -1.0 到 +1.0 之间， UNSIGNED_BYTE (0 to 255) 变为 0.0 到 +1.0 之间，SHORT 也是转换到 -1.0 到 +1.0 之间， 但比 BYTE 精确度高</p>`,11),h=[l];function p(r,k,E,o,d,g){return a(),i("div",null,h)}const b=s(n,[["render",p]]);export{y as __pageData,b as default};
