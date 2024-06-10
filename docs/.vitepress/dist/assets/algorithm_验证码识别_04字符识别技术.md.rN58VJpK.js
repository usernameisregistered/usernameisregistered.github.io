import{_ as a,c as e,o as t,a2 as o}from"./chunks/framework.Bc4oNHcE.js";const u=JSON.parse('{"title":"04字符识别技术","description":"","frontmatter":{"layout":"doc","title":"04字符识别技术"},"headers":[],"relativePath":"algorithm/验证码识别/04字符识别技术.md","filePath":"algorithm/验证码识别/04字符识别技术.md"}'),r={name:"algorithm/验证码识别/04字符识别技术.md"},i=o('<h1 id="字符识别技术" tabindex="-1">字符识别技术 <a class="header-anchor" href="#字符识别技术" aria-label="Permalink to &quot;字符识别技术&quot;">​</a></h1><h2 id="模板匹配法" tabindex="-1">模板匹配法 <a class="header-anchor" href="#模板匹配法" aria-label="Permalink to &quot;模板匹配法&quot;">​</a></h2><p>模板匹配法故名思议就是用模板对待识别字符进行匹配。模板匹配的步骤如下 建立模板库，首先人工识别每个待识别字符，如果模板库中没有该字符，就将该字符的标准型加入模板库。在进行模板匹配时，用待识别字符对模 板库中的每一个模板进行对比，得到对比差别最小的模板，则可以认为这一模板代表的字符就是我们需要的字符。</p><h2 id="字符特征法" tabindex="-1">字符特征法 <a class="header-anchor" href="#字符特征法" aria-label="Permalink to &quot;字符特征法&quot;">​</a></h2><p>针对每个字符的内部和外部特征进行分析得到每个字符的唯一区分的特征，然后根据这些特征去识别字符</p><h2 id="神经网络法" tabindex="-1">神经网络法 <a class="header-anchor" href="#神经网络法" aria-label="Permalink to &quot;神经网络法&quot;">​</a></h2><p>的基本原理如下：利用神经网络的学习功能，以及神经网络的记忆功能，首先让神经网络进行大量的样本学习，让神经网络先记住这些样本的特征，在识别阶段，待识别字符输入神 经网络，通过神经网络的回忆功能，使用待识别字符与回忆出的样本进行比较，从而找到最接近待识别样本的所属类别。</p><h2 id="支持向量机svm" tabindex="-1">支持向量机SVM <a class="header-anchor" href="#支持向量机svm" aria-label="Permalink to &quot;支持向量机SVM&quot;">​</a></h2><p>SVM(Support Vector Machine) 同样是一种有监督学习方法，其基本思想是通过将输入样本映射到高维，寻找函数的最优解从而找到 使两个目标类具有最大分类间隔的平面，即最优分类超平面</p>',9),h=[i];function l(n,_,s,c,d,p){return t(),e("div",null,h)}const f=a(r,[["render",l]]);export{u as __pageData,f as default};
