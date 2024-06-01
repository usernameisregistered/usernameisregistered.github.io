import{_ as s,c as a,o as n,a2 as e}from"./chunks/framework.Bc4oNHcE.js";const g=JSON.parse('{"title":"06高级","description":"","frontmatter":{"layout":"doc","title":"06高级"},"headers":[],"relativePath":"database/redis/06高级.md","filePath":"database/redis/06高级.md"}'),t={name:"database/redis/06高级.md"},p=e(`<h2 id="数据备份与恢复" tabindex="-1">数据备份与恢复 <a class="header-anchor" href="#数据备份与恢复" aria-label="Permalink to &quot;数据备份与恢复&quot;">​</a></h2><blockquote><p>BGSAVE SAVE</p></blockquote><h2 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h2><blockquote><p>config get requirepass config set requirepass password auth password</p></blockquote><h2 id="性能测试" tabindex="-1">性能测试 <a class="header-anchor" href="#性能测试" aria-label="Permalink to &quot;性能测试&quot;">​</a></h2><blockquote><p>redis-benchmark</p></blockquote><h2 id="客户端连接" tabindex="-1">客户端连接 <a class="header-anchor" href="#客户端连接" aria-label="Permalink to &quot;客户端连接&quot;">​</a></h2><blockquote><p>config get maxclients</p></blockquote><h2 id="php-使用-redis" tabindex="-1">PHP 使用 Redis <a class="header-anchor" href="#php-使用-redis" aria-label="Permalink to &quot;PHP 使用 Redis&quot;">​</a></h2><blockquote><p>安装</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget https://github.com/phpredis/phpredis/archive/3.1.4.tar.gz</span></span>
<span class="line"><span>tar -zxvf phpredis-3.1.4.tar.gz</span></span>
<span class="line"><span>cd phpredis-3.1.4    </span></span>
<span class="line"><span>./configure --with-php-config=/usr/local/php/bin/php-config</span></span>
<span class="line"><span>make &amp;&amp; make install</span></span>
<span class="line"><span>vi php.ini</span></span>
<span class="line"><span>extension_dir = &quot;/usr/local/php/lib/php/extensions/no-debug-zts-20090626&quot;</span></span>
<span class="line"><span>extension=redis.so</span></span>
<span class="line"><span>service apache restart</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$redis = new Redis();</span></span>
<span class="line"><span>$redis-&gt;connect(&#39;127.0.0.1&#39;, 6379);</span></span>
<span class="line"><span>echo &quot;Connection to server successfully&quot;;</span></span>
<span class="line"><span>echo &quot;Server is running: &quot; . $redis-&gt;ping();</span></span>
<span class="line"><span>$redis-&gt;set(&quot;tutorial-name&quot;, &quot;Redis tutorial&quot;)</span></span>
<span class="line"><span>echo &quot;Stored string in redis:: &quot; . $redis-&gt;get(&quot;tutorial-name&quot;)\\</span></span>
<span class="line"><span>$redis-&gt;lpush(&quot;tutorial-list&quot;, &quot;Redis&quot;);</span></span>
<span class="line"><span>$redis-&gt;lpush(&quot;tutorial-list&quot;, &quot;Mongodb&quot;);</span></span>
<span class="line"><span>$redis-&gt;lpush(&quot;tutorial-list&quot;, &quot;Mysql&quot;);</span></span>
<span class="line"><span>$arList = $redis-&gt;lrange(&quot;tutorial-list&quot;, 0 ,5)</span></span>
<span class="line"><span>var_dump($arList)</span></span></code></pre></div>`,12),i=[p];function o(l,r,c,u,d,h){return n(),a("div",null,i)}const b=s(t,[["render",o]]);export{g as __pageData,b as default};
