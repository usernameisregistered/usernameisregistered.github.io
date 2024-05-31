import{_ as a,c as i,o as s,a2 as t}from"./chunks/framework.Bc4oNHcE.js";const p="/assets/0f0e5987-e605-480c-b133-87fb4d71e7fd.ddilVbCP.png",h="/assets/4a499a91-78ec-41a4-907f-4bd4c94b499b.BAP0tg-K.png",l="/assets/f163d850-423b-458c-b918-118297c33453.B3IkXbAp.png",r="/assets/8848c34a-022f-4390-8443-794624a96a49.D8qq3HUW.png",n="/assets/5872c444-9aab-4859-8715-3ffd64dcc8a1.C8P6uKkZ.png",e="/assets/e665dd55-219a-4f33-ad86-14298d705f66.CbkH7TVu.png",b=JSON.parse('{"title":"01引擎优化技术","description":"","frontmatter":{"layout":"doc","title":"01引擎优化技术"},"headers":[],"relativePath":"web/JavaScript引擎并行化研究与设计/01引擎优化技术.md","filePath":"web/JavaScript引擎并行化研究与设计/01引擎优化技术.md"}'),k={name:"web/JavaScript引擎并行化研究与设计/01引擎优化技术.md"},c=t('<h1 id="javascript引擎优化技术" tabindex="-1">JavaScript引擎优化技术 <a class="header-anchor" href="#javascript引擎优化技术" aria-label="Permalink to &quot;JavaScript引擎优化技术&quot;">​</a></h1><h2 id="javascript语言" tabindex="-1">JavaScript语言 <a class="header-anchor" href="#javascript语言" aria-label="Permalink to &quot;JavaScript语言&quot;">​</a></h2><blockquote><p>JavaScript语言是一个实实在在的标准的脚本语言，作用于网络客户端的编程上，主要用于网页中的事件 触发、密集计算和 与用户之间的互动操作。</p></blockquote><h2 id="虚拟机优化技术" tabindex="-1">虚拟机优化技术 <a class="header-anchor" href="#虚拟机优化技术" aria-label="Permalink to &quot;虚拟机优化技术&quot;">​</a></h2><blockquote><p>一般来说脚本语言例如Python、Ruby、JavaScript 都是动态语言，动态语言的特性就是只有在运行时才能确定代码对象的类型，因此一般都是通过解释器来进行执行。动态语言在执行时需要有对应平台的解释器，这样的好处在于由于解释器速度很快，执行速度也会很快。而编译方式则需要在对代码编译完生成对应平台的可执行目标代码后才执行，增加了等待时间。但是代码中如果出现了需要频繁执行的部分，解释器由于生产对应平台的可执行目标代码，则需要不断的边翻译边执行，同时针对不同指令集的平台又需要不同的解释器。而编译方式可以重复利用生成的可执行目标代码，提高执行效率。</p></blockquote><blockquote><p>而为了提高动态语言的执行效率，使其能够在不同系统、不同架构的平台上都能运行，就必须使得动态语言具有平台的独立性。程序代码能够在不同系统、不同架构的计算机平台上运行，不受其限制。因此动态语言都普遍采取虚拟机技术。虚拟机技术对动态语言的代码编译生成字节码，字节码是一种与具体平台的机器指令集无关的指令集合。字节码通过虚拟机的解释，生成所对应平台的可执行目标代码，就能够在相应的平台上面运行。而可执行目标代码则在虚拟机中存 储，当可执行目标代码需要再次执行时，则可以直接从虚拟机中调取进行执行</p></blockquote><h2 id="javascript-引擎架构" tabindex="-1">JavaScript 引擎架构 <a class="header-anchor" href="#javascript-引擎架构" aria-label="Permalink to &quot;JavaScript 引擎架构&quot;">​</a></h2><p>本文中所采用的的JavaScript引擎为webkit浏览器中所使用的<strong>SquirrelFish Extreme(SFX)</strong>,其架构大概可以分为编译模块、编译器控制模块、机器码缓存区和执行模块，如下图所示</p><p><img src="'+p+'" alt="引擎结构图"></p><p>SFX引擎采用即时编译模式执行JS代码，引擎将JS代码编译成个字节码，编译模块将字节码编译成对应平台的可执行机器码后存入机器码缓存区中，执行模块再从缓存池中取出需要执行的机器码进行执行</p><p>在SFX引擎中，编译模块对字节码进行编译的最小单位是函数块，当某个函数被首次调用执行时，改函数将被编译为机器码存入缓存区中，之后该函数需要被再次调用时引擎则直接从缓存区中调用改函数的机器码，而其他的引擎如V8的执行过程是直接将JS代码编译成为对应平台的可执行机器码而没有翻译成字节码，TraceMonkey JavaScript 引擎对字节码进行编译的最小单元是 JavaScript引擎追踪判定的热点路径而非函数块</p><h2 id="字节码的优化技术" tabindex="-1">字节码的优化技术 <a class="header-anchor" href="#字节码的优化技术" aria-label="Permalink to &quot;字节码的优化技术&quot;">​</a></h2><p>JS引擎中定义了一个包含了109种字节码指令的指令集，该指令集的存取采用的是基于寄存器机制而非Java虚拟器的基于栈的机制，该指令集中的多数指令包括了js引擎中重要的执行指令语义，包括创建新的对象、读写寄存器、执行算术运行、写入对象属性、创造分支和循环结构、调用在js引擎自定义的函数和管理函数调用的上下文环境等功能。SFX引擎的字节码即时编译的流程是在低昂CTI专用函数来处理字节码指令后，才编译为机器码，而没有直接编译为机器码。在这109个指令中，其中有51个指令必须被CTI函数处理后才能够被编译，另外有40个指令只有在该指令运行直接被编译为机器码时才不需要被CTI函数处理，而剩余的18个精简指令将被直接被编译为机器码，而java虚拟机能够将绝大多数的字节码指令直接编译为机器码。因此js引擎的即时编译的性能低于同样使用了即时编译模式的java虚拟机</p><p>影响js引擎即时编译性能的因素还包括生成的机器码的代码质量。JS引擎在即时编译模式下降字节码编译为机器码时，必须调用宏汇编编译器提供的预定义的macro assembler函数和字节码通信，下图展示了将字节码指令op_bitxor编译为ARM汇编指令机器码的emit_op_bitxor()宏汇编函数的主要代码</p><p><img src="'+h+'" alt="宏汇编编译函数流程"></p><p>在即时编译模式下必须调用emit_op_bitxor()宏汇编编译函数对字节码指令op_bitxor处理，然后在调用其他的宏汇编编译器来生成对应平台的机器码。首先js引擎通过调用宏汇编编译函数emitGetVirtualRegisters()生成将2个参数从js引擎的物理寄存器中转存到虚拟寄存器中的机器码，然后调用宏汇编编译函数xorPtr()用于生成ARM上的按位XOR汇编指令机器码，然后调用宏汇编编译函数emitPutVirtualRegister()生成将虚拟寄存器中的结果存入物理寄存器文件中的机器码，由于虚拟寄存器是去全局映射于物理寄存器，因此字节码指令转为ARM机器码如下图所示</p><p><img src="'+l+'" alt="字节码指令转换为机器码"></p><p>尽管这种基于宏汇编编译器的机器码生成模式能够加速对应平台的即时编译生成的机器码的重定位，但是这种模式下严重的限制了代码质量的优化，与java虚拟器的即时编码模式相比，js引擎中每一个字节码都是独立的进行编译，导致编译生成的机器码的数据结构类型的与解释模式下的一样，无法生成高质量的机器代码，对于每个字节码。宏汇编便器决定了字节码指令生成的机器码的顺序，因此机器码也无法进行优化，此外，虚拟寄存器无需使用独立的寄存器定位机制实现全局映射物理寄存器，多数复杂的字节码指令在即时编译模式下被编译时是直接调用CTI函数，因此所生成的机器码质量低于在JAVA虚拟器中以即时编译所实现的机器码的质量</p><h2 id="预编译方式的优化技术" tabindex="-1">预编译方式的优化技术 <a class="header-anchor" href="#预编译方式的优化技术" aria-label="Permalink to &quot;预编译方式的优化技术&quot;">​</a></h2><p>预编译指的是在JavaScript引擎在执行JavaScript代码之前，预先将JavaScript代码所生成的字节码编译成对应平台的可执行的本地代码，并且存入本地内存中，之后JavaScript引擎均在对应平台上对本地代码进行执行，不再重新编译JavaScript代码，</p><p><img src="'+r+'" alt="预编译工作流程"></p><h3 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h3><ul><li>大幅度缩短了js代码的加载启动时间</li><li>只对js代码进行一次编译，减少了js引擎在执行js代码时的编译开销</li><li>可以在编译过程中对js代码进行与静态编译相类似的复杂的代码优化，提高质量</li></ul><h3 id="劣势" tabindex="-1">劣势 <a class="header-anchor" href="#劣势" aria-label="Permalink to &quot;劣势&quot;">​</a></h3><ul><li>JavaScript 引擎需要大量的内存空间来保存编译之后生成的本地代码，而本地代码由于进行了复杂的代码优化，其会比原始的字节码占用更大量的JavaScript 引擎的存储空间；</li><li>编译之后生成的本地代码不具备跨平台的可移植性</li><li>由于JavaScript 语言自身所具有的动态性，如动态类的类型装载，垃圾回收处理、异常行为检测等，都会使得预编译方式的优化技术实现起来较为困难</li></ul><h2 id="即时编译方式的优化技术" tabindex="-1">即时编译方式的优化技术 <a class="header-anchor" href="#即时编译方式的优化技术" aria-label="Permalink to &quot;即时编译方式的优化技术&quot;">​</a></h2><p>即时编译指的是JavaScript 引擎在执行JavaScript 代码之前，通常以字节码中的函数块为基本的编译单元，首先将JavaScript 代码生成的字节码编译成对应平台的机器码，存入相应的编译缓存区中。当该段机器码需要再次进行执行时，则可以从编译缓存区中再次取出这段机器码进行执行，避免了再次编译的编译开销，减少了JavaScript 引擎等待编译的时间。在用户关闭浏览器之后，编译生成的机器码的存储空间将被释放。当用户再次打开浏览器执行相同的JavaScript 代码时，JavaScript 引擎不能立即执行，而需要再次即时编译</p><p><img src="'+n+`" alt="即时编译工作流程"></p><p>与预编译方式的优化技术相比较，即时编译方式的优化技术具有以下的优势</p><ul><li>没有必要长期保存编译生成的对应平台的机器码，节省了JavaScript的静态解释执行的存储空间</li><li>由于即时编译方式是在JavaScript 代码执行时进行即时编译，所以实现JavaScript语言自有的动态特征相对而言比较容易</li><li>JavaScript 引擎每次运行时都会对JavaScript 代码再次进行编译，不会影响JavaScript代码生成的字节码的可移植性与跨平台性</li></ul><p>与预编译方式的优化技术相比较，即时编译方式的优化技术具有以下的劣势</p><ul><li>即时编译需要占用JavaScript 引擎的运行时间，编译开销过大，从而导致JavaScript代码的执行时间过长</li><li>对字节码即时编译所生成的对应平台的机器码会导致JavaScript引擎的内存空间的紧张</li><li>由于即时编译需要在JavaScript代码执行前就要完成，因此许多用于解释执行过程中对代码的复杂优化方式都无法使用 导致无法提升机器码的代码质量；</li><li>由于即时编译方式中通常以字节码中的函数块为基本的编译单元要做到对字节码进行全局性的优化很困难</li></ul><h2 id="javascript-引擎中其他常用的优化技术" tabindex="-1">JavaScript 引擎中其他常用的优化技术 <a class="header-anchor" href="#javascript-引擎中其他常用的优化技术" aria-label="Permalink to &quot;JavaScript 引擎中其他常用的优化技术&quot;">​</a></h2><h3 id="多态内联缓存" tabindex="-1">多态内联缓存 <a class="header-anchor" href="#多态内联缓存" aria-label="Permalink to &quot;多态内联缓存&quot;">​</a></h3><p>由于JavaScript语言是基于原型prototype based的语言，在执行过程中有对对象属性的动态访问，因此JavaScript引擎的执行性能也取决于如何更好的实现对JavaScript代码对对象属性的动态访问。多态内联缓存目前应用在WebKit小组的SquirrelFish Extreme JavaScript引擎中。多态内联缓存对通过属性记号在哈希表中查询进行了改进，在首次命中属性后，对对象的结构编号合属性在哈希表中的位置进行缓存，当再次访问该属性时则直接从缓存直接读取，提高了属性的命中率</p><h3 id="上下文链接的即时编译" tabindex="-1">上下文链接的即时编译 <a class="header-anchor" href="#上下文链接的即时编译" aria-label="Permalink to &quot;上下文链接的即时编译&quot;">​</a></h3><p>针对JavaScript 代码中出现的判断选择分支代码，将相应的分支代码进行判断，只对判断选择分支中的一项进行即时编译，编译生成不含有分支的机器码。这样能够使得JavaScript引擎在执行时减少对JavaScript代码中判断选择分支的判断开销。同时将JavaScript代码中复杂的执行设置为方法调用，将一些简单的JavaScript代码和一些常用的JavaScript代码内嵌到JavaScript 引擎的内核中，提升JavaScript引擎的执行速度</p><h3 id="直接产生机器码" tabindex="-1">直接产生机器码 <a class="header-anchor" href="#直接产生机器码" aria-label="Permalink to &quot;直接产生机器码&quot;">​</a></h3><p>该技术使用在Google 的Chrome浏览器的V8 JavaScript引擎中。 V8JavaScript引擎并没有将 JavaScript代码中首先转换为字节码，然后再将其即时编译为对应平台的机器码。而是将JavaScript 代码进行优化，直接将其编译为对应平台的机器码加以执行。由于V8JavaScript引擎中没有将JavaScript代码转换为字节码的中间步骤，因此JavaScript代码能够得到很快的执行。然而，由于其是直接将JavaScript代码转换为对应平台的机器码，因此缺乏转换成字节码所带来的可移植性和字节码优化性。</p><h3 id="trace-技术" tabindex="-1">Trace 技术 <a class="header-anchor" href="#trace-技术" aria-label="Permalink to &quot;Trace 技术&quot;">​</a></h3><p>Trace技术主要运用在Mozilla的Firefox浏览的Monkey系列JavaScript引擎中。在JavaScript引擎执行JavaScript代码时，JavaScript代码中可能会出现许多条件判断分支代码，而在JavaScript代码的运行过程中，其中的一个分支可能会长时间运行。因此Trace技术就是通过对其中运行时间较长的分支代码的追踪，形成一条热点路径，对热点路径即时编译，而其他代码则以解释的方式进行执行</p><h3 id="垃圾回收技术" tabindex="-1">垃圾回收技术 <a class="header-anchor" href="#垃圾回收技术" aria-label="Permalink to &quot;垃圾回收技术&quot;">​</a></h3><p>垃圾回收技术在Google的Chrome浏览器的V8JavaScript引擎中，使用了更加主动地垃圾回收策略，而其他的JavaScript引擎和一些动态语言比如Python、Ruby都是使用的时被动地垃圾回收策略。因为被动的垃圾回收策略的操作比较精简，但是主动地垃圾回收策略虽然比较复杂，但是却更加有优势。Java虚拟机的垃圾回收策略就是主动地垃圾回收</p><p>主动地垃圾回收策略是对JavaScript引擎中不再使用的存储空间主动地检测，并将其释放；而被动的垃圾回收策略则是对JavaScript引擎中的不再使用的存储空间并没有主动检测，而是只是当JavaScript引擎中的存储空间不足时才对不再使用的存储空间进行释放。主动地垃圾回收策略还通过实行使用了分解的垃圾回收策略使用轻量级加载在高等级的分解垃圾回收上加载垃圾回收，在低等级的垃圾回收上使用被动的垃圾回收策略，因为主动地垃圾回收策略要对执行的JavaScript代码中的对象进行移动，而在保守的垃圾回收策略中这种操作相当复杂。V8JavaScript引擎对于对象地址的移动没有使用句柄来对对象地址作出索引，而是根据地址的改变对对象对应的数据进行修改。虽然不使用句柄会造成操作开销的增加，但是由于没有使用索引操作，减少了查找开销。</p><h3 id="循环不变式外移" tabindex="-1">循环不变式外移 <a class="header-anchor" href="#循环不变式外移" aria-label="Permalink to &quot;循环不变式外移&quot;">​</a></h3><p>循环不变式是在JavaScript代码中的某个循环结构中，在执行过程中一直为原表达初始值的表达式，是一种JavaScript引擎对JavaScript代码的优化手段</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        s[n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如同上面的示例代码，内层循环中的表达式<code> m / 2</code>,在内层循环中一直保持不变，因此该行代码为循环不变式，因此可以优化为</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        s[n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>将循环不变式外移出其表达式值保持不变的循环，能够减少JavaScript引擎在执行代码的执行开销，提高循环代码的执行效率</p><h3 id="基于寄存器的字节码指令集" tabindex="-1">基于寄存器的字节码指令集 <a class="header-anchor" href="#基于寄存器的字节码指令集" aria-label="Permalink to &quot;基于寄存器的字节码指令集&quot;">​</a></h3><p>JavaScript引擎没有采用基于栈的字节码指令集，而是采用了基于寄存器的字节码指令集。由于JavaScript 引擎对JavaScript代码的执行速度是影响JavaScript引擎的性能的一个最关键性的因素，而寄存器的访问速度和查找效率要大大优于选择了基于寄存器的指令集</p><p>JavaScript引擎采用基于寄存器字节码指令集时，会在执行时启用虚拟寄存器映射到运行平台上的物理寄存器上。由于JavaScript 引擎中一些字节码指令需要经常被执行，比如JavaScript 引擎中的字节码指令顺序进行管理的程序计数器，因此为了能够更加快速的访问这些需要频繁执行的字节码指令，这些字节码指令都一般存放在运行平台的物理寄存器中。然而JavaScript 引擎所启用的虚拟寄存器的数量一般会比运行平台中的物理寄存器的数量要多，因此虚拟寄存器无法实现与物理寄存器的一一映射，导致JavaScript引擎执行效率的降低。因此JavaScript引擎 将频繁执行的字节码指令放置到虚拟寄存器中存放</p><p>而使用基于栈的字节码指令集的JavaScript 引擎由于没有通用寄存器，能够比较好的对允许平台中的物理寄存器进行分配。这样基于栈的字节码指令集的JavaScript 引擎能够很好的在各个运行平台上进行移植。在使用基于栈的字节码指令集的JavaScript 引擎中，栈通过即时编译映射到运行平台的物理寄存器中，减少了字节码指令的查找开销</p><h3 id="异常处理推迟" tabindex="-1">异常处理推迟 <a class="header-anchor" href="#异常处理推迟" aria-label="Permalink to &quot;异常处理推迟&quot;">​</a></h3><p>JavaScript语言为代码中出现的错误处理提供了异常处理机制，以下面的JavaScript代码为例</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 请假定0不能为除数是会报错的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // output error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在以上的JavaScript代码中，在try块中的代码如果出现了访问到内核区域的现象，就会发生0不能为除数异常。那么这个异常将会被catch块中的异常处理代码捕获。在JavaScript引擎执行该段JavaScript代码的时候，并不会对其中的try/catch异常处理模块即时编译为对应平台的机器码，而是在该段JavaScript代码执行过程中出现了0不能为除数异常时才会对异常进行处理。这样做的主要原因在于在JavaScript代码的执行过程中，异常出现的情况往往很少发生，JavaScript引擎没有必有对try/catch异常处理模块进行编译而增加对应平台的机器码的大小，造成对缓存区的存储空间的压力</p><h2 id="线程级推测技术" tabindex="-1">线程级推测技术 <a class="header-anchor" href="#线程级推测技术" aria-label="Permalink to &quot;线程级推测技术&quot;">​</a></h2><p>线程级推测技术(Thread-Level Speculation，TLS)是一种能够动态对线性执行的程序进行并行性扩展的技术，其能够运用在硬件和软件环境下。线程级推测技术一个主要的方法就是将每个循环迭代方法分配给每个线程。通过线程级推测技术的进行并行扩展例子如下图所示。在一个串行执行的代码，代码段A、Sub和B是串行执行的。通过线程级推测技术的分析，Sub代码段能够和B并行执行，因此可将Sub代码段分离出来使用另一个处理器进行执行，但是也造成相应的执行开销。</p><p><img src="`+e+'" alt="线程级推测技术案例"></p><p>每个循环迭代都能够平均分配到每个处理器上面。但是由于会出现数据依赖性问题，会限制并行执行的循环迭代的数量。同时，嵌入式设备的内存限制和在JavaScript代码运行时JavaScript引擎对数据依赖性的检测开销都是需要考虑的问题。在两个连续的循环迭代中可能会出现三种类型的数据依赖：写后读、读后写和写后写。而线程级推测技术必须能够对这三种类型的数据依赖通过每个循环迭代对内存空间的读写的动态信息的检测在JavaScript代码的执行过程中能够探测出来。而线程级推测技术的最关键问题就是如何保证其所探测出来的数据依赖性能够精确的检查出来。一旦数据依赖冲突被检测出来，JavaScript引擎对JavaScript 代码的执行过程必须中断，同时需要将执行回滚到一个没有冲突的地方。因此，每个线程级推测技术都需要一个高效的回滚机制。而对于出现的数据依赖冲突造成的回滚，其回滚开销和内存的存储开销都是很高的，因此需要在线程级推测过程中尽量避免回滚发生的情况。一个关键的线程级推测技术的因素是对数据依赖冲突进行追踪和检测的数据结构。一般来说，如果需要更加精确的数据依赖冲突追踪，就需要更大的内存空间。而会对数据依赖冲突检测的精确性造成影响的因素则是线程级推测技术检测到的数据依赖冲突可能不是当前运行时出现的数据依赖冲突</p><h2 id="river-trial的优化技术" tabindex="-1">River Trial的优化技术 <a class="header-anchor" href="#river-trial的优化技术" aria-label="Permalink to &quot;River Trial的优化技术&quot;">​</a></h2><p>River Trail是英特尔 公司开发的一种 并行编程的扩展插件。用户通过River Trail对于网络应用进行编程时，使用方法现有的JavaScript编程规则。同时River Trail使用确定性并行数据结构对JavaScript进行扩展，该结构在运行时会被转换为底层硬件抽象层指令。通过利用多核处理器和向量处理指令，River Trail可以大幅提升执行速度。</p>',64),d=[c];function E(o,v,g,S,y,J){return s(),i("div",null,d)}const F=a(k,[["render",E]]);export{b as __pageData,F as default};
