import{_ as a,c as s,o as i,a2 as t}from"./chunks/framework.Bc4oNHcE.js";const p="/assets/58a500d0-43ba-413d-8448-78d4d4073124.DQ-FUnRN.png",n="/assets/87cec1a5-4b90-48eb-b341-0b16bd324601.DN7hk7F9.png",l="/assets/903a84cf-de81-488e-8edb-5b94f5334d6a.D0069jch.png",h="/assets/e3497a4a-cfe8-4d53-bb99-f73d6fd439f8.Dxs1Acc5.png",e="/assets/ae5ef317-609d-4bcf-ae0f-ae13d41b3294.CFtBthuW.png",r="/assets/47df4f69-a347-4598-9e13-2ff5632f4ea1.B9P6Cycz.png",k="/assets/1a759edf-617c-468c-8544-c3f5d465ce4f.Dl7oImyJ.png",b=JSON.parse('{"title":"03引擎并行处理架构的设计与实现","description":"","frontmatter":{"layout":"doc","title":"03引擎并行处理架构的设计与实现"},"headers":[],"relativePath":"web/JavaScript引擎并行化研究与设计/03引擎并行处理架构的设计与实现.md","filePath":"web/JavaScript引擎并行化研究与设计/03引擎并行处理架构的设计与实现.md"}'),d={name:"web/JavaScript引擎并行化研究与设计/03引擎并行处理架构的设计与实现.md"},c=t('<h1 id="javascript引擎并行处理架构的设计与实现" tabindex="-1">JavaScript引擎并行处理架构的设计与实现 <a class="header-anchor" href="#javascript引擎并行处理架构的设计与实现" aria-label="Permalink to &quot;JavaScript引擎并行处理架构的设计与实现&quot;">​</a></h1><p>尽管动态编译方式和缓存区优化模式能够有效的降低JavaScript引擎的内存开销和网页的加载时间，但是对于一些输入输出密集型的运算它的效率并不高。此外由于目前的JavaScript引擎都是单线程方式进行执行，对热点代码的探测、即时编译和即时编译模式与解释模式的切换都是线性的进行执行，无法充分的利用当前流行的多处理器底层平台的运行资源，时间开销较大。而且被即时编译之后的代码需要迅速被执行，也无法做到代码优化。</p><p>针对以上提出的优化技术的缺点，从当前的多线程技术的优化技术的角度出发，对热点代码的探测和对热点代码的即时编译的过程与对热点代码的执行过程进行分离进行并行即时编译与执行 。</p><h2 id="并行处理架构研究" tabindex="-1">并行处理架构研究 <a class="header-anchor" href="#并行处理架构研究" aria-label="Permalink to &quot;并行处理架构研究&quot;">​</a></h2><p>在JavaScript引擎的动态编译方式中当一个函数块被探测为热点区域后该函数块需要被进行即时编译，生成相应平台的机器码在该函数块被再次调用的时候JavaScript引擎则直接调用对应的机器码进行执行。</p><p>在动态编译方式中，即时编译模块与解释执行模块之间耦合度较低，只存在线性的数据交换与上下文切换。即时编译模块将即时编译生成的相应平台的机器码存入到编译缓存区中，而当解释执行模块在遇到上下文切换标记时则从相应代码编译缓存区中将需要执行的相应平台的机器码取出后进行执行。在动态编译执行流程中，其中只有在对于同一块代码缓存区进行存入和取出时存在读写冲突。</p><p>因此本文根据多线程的优化技术，采用了在多核处理器平台下的多线程的控制模式，将对热点区域代码的探测和对热点区域代码的即时编译过程都分别由一个独立于解释执行方式的线程来控制减少了在即时编译模式下由于代码过大即时编译时间过长所造成的等待时间过长的情况造成的JavaScript引擎执行时间增加导致网页加载时间过长，最终导致用户体验较差的问题。因此本文使用多线程在后台对JavaScript代码进行即时编译可以使得即时编译模块能够生成代码质量更好的相应平台的机器码</p><p>主要设计目的是利用目前的多线程优化技术和多核处理器平台环境来减少JavaScript代码在JavaScript引擎的执行过程中的各种开销；包括</p><ul><li>使用多线程优化技术，使得即时编译和执行并行执行，减少了执行的等待开销</li><li>使用多线程优化技术，使得对JavaScript代码热点区域的探测和即时编译并行执行，减少了即时编译的等待开销</li><li>使用多线程优化技术，使得解释执行和对JavaScript代码热点区域的探测并行执行，减少了解释执行与即时编译执行的切换时间</li></ul><h3 id="多线程应用程序设计" tabindex="-1">多线程应用程序设计 <a class="header-anchor" href="#多线程应用程序设计" aria-label="Permalink to &quot;多线程应用程序设计&quot;">​</a></h3><p>需要将应用程序划分为多个相独立的任务，这样的划分模式称为分解。目前常见的分解模式有三种：</p><ol><li>任务分解：类似的应用程序往往包括了几个功能相对独立的模块。各个线程通过系统的分配调度分区去完成这些独立的功能模块</li><li>数据分解：应用程序的各个线程对依赖性相对降低的各个数据对象进行同样的操作执行；</li><li>数据流分解：应用程序中的数据在各个任务 之间进行通信，通过对各个人物之间的进行通信的数据流进行分析，从而对应用程序程序进行相应的人物分解</li></ol><h3 id="引擎多线程划分" tabindex="-1">引擎多线程划分 <a class="header-anchor" href="#引擎多线程划分" aria-label="Permalink to &quot;引擎多线程划分&quot;">​</a></h3><p>在JavaScript 引擎的执行过程中JavaScript代码被翻译为字节码后JavaScript引擎需要对字节码进行热点区域探测，当热点区域被探测之后需要进行即时编译，将热点区域的字节码即时编译为相应平台的机器码存入到编译缓存区中，并相应的字节码热点区域添加跳转标记。JavaScript引擎开始执行JavaScript代码时，如果在字节码中遇到跳转标记，则根据跳转标记执行跳转地址内的对于平台的机器码。如果在字节码中没有跳转标记，则按照解释执行的方式执行字节码。</p><p>在这其中，对字节码的热点区域探测过程和对字节码的即时编译过程之间存在着的是线性单向的数据之间的通信因为在对字节码的探测过程中，只是对字节码中的热点区域进行探测标记，而在对字节码中的热点区域进行即时编译的过程中，只需要对探测标记的字节码热点区域进行即时编译即可。因此，可将对字节码的热点区域探测过程与对字节码的热点区域的即时编译过程分解由两个线程来进行，前者被命名为探测线程””，后者被命名为即时编译线程。探测线程在启动之后会持续对字节码进行热点区域的探测并将探测出来的热点区域进行标记而即时编译线程则会通过对字节码进行扫描，当即时编译线程找到标记后，则对相应的字节码中的热点区域进行即时编译，对字节码中热点区域的即时编译过程与对已即时编译完成了的字节码中热点区域的所生成的对应平台的机器码的编译执行过程之间也只存在着线性单向的数据之间的通信，因为在对字节码中热点区域的即时编译过程中，只需要将即时编译所生成的对应平台的机器码存入到编译缓存区后即可，而编译执行过程则是将所需要执行的对应平台的机器码拷贝到执行缓冲池中进行编译执行。两者之间由编译缓存区为媒介，构成了典型的生产者消费者关系。因此，可将对字节码中热点区域的即时编译过程与对已即时编译完成了的字节码中热点区域的所生成的对应平台的机器码的编译执行过程分解由两个线程来运行上文中已将前者命名为即时编译线程而后者将被命名为编译执行线程。即时编译线程在对字节码中的热点区域进行即时编译之后，只是将生成的对应平台的机器码存入到编译缓存区中，而编译执行线程则只是在编译缓存区中进行查找，将需要进行编译执行的机器码拷贝到执行缓冲池中进行执行。此外，由于在JavaScript引擎中，对字节码的解释执行和对字节码的编译执行的切换行为的主要根据的是字节码上的跳转标记，但是可能出现由于所需要编译的字节码中的热点区域过大，即时编译时间较长，因此可能会造成JavaScript引擎出现等待即时编译的情况，增加编译时间开销。而JavaScript引擎的字节码的解释执行过程与编译过程的功能都是独立的模块，因此可以将这两个过程分解为两个线程来运行。前者将被命名为主线程而后者则包括了上文中所命名的探测线程、即时编译线程和编译执行线程</p><h3 id="线程间依赖性分析" tabindex="-1">线程间依赖性分析 <a class="header-anchor" href="#线程间依赖性分析" aria-label="Permalink to &quot;线程间依赖性分析&quot;">​</a></h3><p>探测线程与即时编译线程之间虽然只是存在简单的线程单向的数据间的通信，但是两者间还是有一定的依赖性关系。探测线程在探测到字节码中热点区域时，需要将所需即时编译的热点区域的地址发送给即时编译线程，即时编译线程只有获取了需要即时编译的热点区域的地址后才能进行即时编译。如果即时编译线程没有获取到需要即时编译的字节码的热点区域的地址，即时编译线程将进行等待，直到探测线程将所需要进行即时编译的字节码的热点区域的地址发送给即时编译线程。这种情况所造成的影响是，如果即时编译线程无法在需要即时编译之前获得需要即时编译的字节码中的热点区域的地址，那么即时编译线程就无法和探测线程并行的执行，从而导致JavaScript引擎对字节码中的热点区域的编译执行方式退化为和之前的JavaScript引擎一样的线性执行模式，从而降低了JavaScript引擎的并行系统的性能优势。</p><p>同时由于编译执行线程在编译执行需要执行的对应平台的机器码时，需要在编译缓存区中进行寻找，如果在寻找的过程中即时编译线程并没有将所需执行的机器码所对应得字节码进行编译，则编译线程则需要进行等待，增加了JavaScript引擎的执行时间。此外，主线程如果在解释执行的过程中在字节码中遇到了跳转标记，则需要调用编译执行线程对跳转标记中所对应的热点区域的机器码进行编译执行，如果即时编译线程并没有将所需执行的机器码所对应得字节码进行编译，则编译线程则需要进行等待，而主线程也将等待使得JavaScript引擎的等待开销大量增加，降低了用户体验性能。</p><h2 id="并行系统架构设计" tabindex="-1">并行系统架构设计 <a class="header-anchor" href="#并行系统架构设计" aria-label="Permalink to &quot;并行系统架构设计&quot;">​</a></h2><p>JavaScript引擎的并行处理架构是基于WebKit小组开发的SquirrelFishExtremeJavaScript引擎是将JavaScript引擎的各个功能模块进多线程任务的划分和并行化设计后所形成的多线程系统。它使用了一系列的优化方案，目的在于能够利用当前的多核处理器平台，实现对于热点区域代码块的即时编译与优化缓存区。使得JavaScript引擎能够减少内存消耗和网页的加载时间</p><p><img src="'+p+'" alt="并行模型"></p><h3 id="模块分析" tabindex="-1">模块分析 <a class="header-anchor" href="#模块分析" aria-label="Permalink to &quot;模块分析&quot;">​</a></h3><p>架构上看，JavaScript引擎并行系统分为个功能模块，分别为：初始化模块、解释执行模块、热点区域探测模块、即时编译模块、缓存区管理模块、编译执行模块。</p><ul><li>代码加载模块：JavaScript引擎启动后，JavaScript代码将被翻译成为抽象语法生成树。 字节码翻译模块：将语法生成树翻译为对应的字节码。</li><li>热点区域探测模块：根据上文所述算法对JavaScript代码所生产的字节码进行热点区域探测，标记热点区域。</li><li>即时编译模块：对被探测为热点区域的JavaScript代码进行即时编译。并将即时编译后生成的对应平台的机器码存入缓存区中，同时在对应的字节码处添加跳转标记。</li><li>编译缓存区管理模块：对即时编译后生成的对应平台的机器码进行管理。</li><li>解释执行模块：在解释模式下对JavaScript代码进行执行。</li><li>编译执行模块：在即时编译模式下对JavaScript代码进行执行。</li></ul><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><p>JavaScript 引擎并行系统的执行分为主线程、探测线程、即时编译线程和编译执行线程四个线程</p><p>主线程在JavaScript 引擎开始执行时便已存在，经过初始化模块和翻译模块后主线程便启动探测线程，经过热点区域探测模块后主线程便启动即时编译线程</p><p>主线程主要负责初始化模块、翻译模块和解释执行模块。探测线程主要负责热点区域探测模块，而即时编译线程主要负责即时编译模块和缓存区管理模块</p><p><img src="'+n+'" alt="主线程工作流程"></p><p><img src="'+l+'" alt="探测线程工作流程"></p><p><img src="'+h+'" alt="即时编译线程"></p><p><img src="'+e+`" alt="编译执行工作流程"></p><h2 id="线程的实现" tabindex="-1">线程的实现 <a class="header-anchor" href="#线程的实现" aria-label="Permalink to &quot;线程的实现&quot;">​</a></h2><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        JSThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ~</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JSThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> terminate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setStopFlag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getStopFlag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        unsigned</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getTID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setThreadArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JSThreadArg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pThrArg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> null);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSThreadArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            JSThread</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_pThread;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            void*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_pArg;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JSThreadArg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_pThrArg;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        pthread_attr_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_attr;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        pthread_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_dwThreadId;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_bStopFlag;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_bStarted;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> routine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="`+r+'" alt="线程运行流程"></p><h2 id="线程资源锁的设计与实现" tabindex="-1">线程资源锁的设计与实现 <a class="header-anchor" href="#线程资源锁的设计与实现" aria-label="Permalink to &quot;线程资源锁的设计与实现&quot;">​</a></h2><p>当即时编译线程在字节码中添加跳转标记时如果主线程正在对字节码进行解释执行，则即时编译线程必须等待主线程将该段字节码解释执行完成之后才进行修改。因此即时编译线程会与解释执行线程出现互斥现象，需要加锁机制来解决</p><p><img src="'+k+'" alt="主线程与即时编译线程互斥流程"></p><h2 id="消息通信的设计" tabindex="-1">消息通信的设计 <a class="header-anchor" href="#消息通信的设计" aria-label="Permalink to &quot;消息通信的设计&quot;">​</a></h2><p>消息通信实现了线程间的信息交流。在JavaScript引擎的并行系统中，线程间的消息交换需要递交给主线程的消息交换模块，由消息交换模块根据各个线程的优先等级和递交先后进行处</p><p>消息交换模块 中含有根据各个线程的优先等级将线程传递的消息进行排序的队列。当某个线程发送消息到消息交换模块后，消息交换模块根据各个线程的有 限等级将将消息按照等级顺序插入到消息队列中。如果优先等级一样，则按照到达时间的先后进行排序。消息交换模块对消息的传递从队首到队尾的顺序进行按照消息中含有的需要传递的目标线程将消息发送到相应的线程中去</p><p>在JavaScript引擎中，主线程发送的消息和主要是关于解释执行与编译执行之间的切换信息。由于解释执行与编译执行的切换是否及时影响到了JavaScript引擎能否及时执行JavaScript代码因此主线程发送的消息的优先级为最高。对于编译执行线程而言，当其对热点区域的机器码编译执行完毕后，需要通知主线程编译执行完毕，需要切换到解释执行状态，这也影响到JavaScript引擎的执行效率因此编译执行线程的优先等级也和主线程一样，属于最高优先级。而即时编译线程由于只是对探测线程所判定的JavaScript代码中的热点区域的字节码进行即时编译，因此其等级属于最低优先等级。探测线程的主要目的是实现对于JavaScript代码热点区域的探测，提高JavaScript引擎的编译效率，节约编译开销但是由于其并不影响JavaScript引擎对JavaScript代码的执行，因此其优先等级在主线程、编译执行线程和即时编译线程之间。</p><p>在消息交换模块中，线程的优先等级采用一个Priori结构来存储，包含在线程所发送的消息中。所示，优先等级中第一位为最高优先级最后一位为最低优先级。当某个位置被设为1时，则表示该线程的优先等级是相应的优先级。消息交换模块通过某个线程发送的消息中的Priori结构读出该线程的优先级，继而将消息按照相应的顺序在队列中进行排序如下表</p><table><thead><tr><th style="text-align:center;">主线程</th><th style="text-align:center;">编译执行线程</th><th style="text-align:center;">探测线程</th><th style="text-align:center;">即时编译线程</th></tr></thead><tbody><tr><td style="text-align:center;">第1等级</td><td style="text-align:center;">第1等级</td><td style="text-align:center;">第2等级</td><td style="text-align:center;">第3等级</td></tr></tbody></table>',44),o=[c];function g(E,y,v,F,S,_){return i(),s("div",null,o)}const m=a(d,[["render",g]]);export{b as __pageData,m as default};
