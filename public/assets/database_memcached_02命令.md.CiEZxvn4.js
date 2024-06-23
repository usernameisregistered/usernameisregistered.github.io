import{_ as s,c as a,o as e,a2 as p}from"./chunks/framework.Bc4oNHcE.js";const r=JSON.parse('{"title":"02命令","description":"","frontmatter":{"layout":"doc","title":"02命令"},"headers":[],"relativePath":"database/memcached/02命令.md","filePath":"database/memcached/02命令.md"}'),n={name:"database/memcached/02命令.md"},t=p(`<p>将 value(数据值) 存储在指定的 key(键) 中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set key flags exptime bytes [noreply] </span></span>
<span class="line"><span>value </span></span>
<span class="line"><span></span></span>
<span class="line"><span>add key flags exptime bytes [noreply]</span></span>
<span class="line"><span>value</span></span></code></pre></div><p>替换已存在的 key(键) 的 value(数据值)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>replace key flags exptime bytes [noreply]</span></span>
<span class="line"><span>value</span></span></code></pre></div><p>向已存在 key(键) 的 value(数据值) 后面追加数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>append key flags exptime bytes [noreply]</span></span>
<span class="line"><span>value</span></span></code></pre></div><p>向已存在 key(键) 的 value(数据值) 前面追加数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>prepend key flags exptime bytes [noreply]</span></span>
<span class="line"><span>value</span></span></code></pre></div><p>用于执行一个&quot;检查并设置&quot;的操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cas key flags exptime bytes unique_cas_token [noreply]</span></span>
<span class="line"><span>value</span></span></code></pre></div><p>获取存储在 key(键) 中的 value(数据值)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>get key</span></span>
<span class="line"><span>get key1 key2 key3</span></span></code></pre></div><p>获取带有 CAS 令牌存 的 value(数据值)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gets key</span></span>
<span class="line"><span>gets key1 key2 key3</span></span></code></pre></div><p>删除已存在的 key(键)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>delete key [noreply]</span></span></code></pre></div><p>对已存在的 key(键) 的数字值进行自增或自减操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>incr key increment_value</span></span>
<span class="line"><span>decr key decrement_value</span></span></code></pre></div><p>返回统计信息例如 PID(进程号)、版本号、连接数 stats 显示各个 slab 中 item 的数目和存储时长 stats items 显示各个slab的信息，包括chunk的大小、数目、使用情况 stats slabs 显示所有item的大小和个数 stats sizes 清理缓存中的所有 key=&gt;value(键=&gt;值) 对 flush_all [time] [noreply]</p>`,19),l=[t];function i(c,o,d,h,u,g){return e(),a("div",null,l)}const y=s(n,[["render",i]]);export{r as __pageData,y as default};
