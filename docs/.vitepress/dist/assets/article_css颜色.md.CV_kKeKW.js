import{_ as t,c as d,o as r,a2 as s}from"./chunks/framework.Bc4oNHcE.js";const m=JSON.parse('{"title":"css颜色","description":"","frontmatter":{"layout":"doc","title":"css颜色"},"headers":[],"relativePath":"article/css颜色.md","filePath":"article/css颜色.md"}'),e={name:"article/css颜色.md"},c=s('<h2 id="css颜色" tabindex="-1">css颜色 <a class="header-anchor" href="#css颜色" aria-label="Permalink to &quot;css颜色&quot;">​</a></h2><p>CSS 数据类型<strong>color</strong>表示一种标准RGB色彩空间,一个颜色可以包括一个<em>alpha</em>通道，来表明颜色如何与它的背景色混合</p><p>表示方式</p><ol><li>使用一个关键字</li><li>使用RGB立体坐标系统（以“#”加十六进制或者rgb() 和rgba()函数表达式的形式）</li><li>使用HSL圆柱坐标系统（以hsl()和hsla()函数表达式的形式）</li></ol><h3 id="颜色关键字" tabindex="-1">颜色关键字 <a class="header-anchor" href="#颜色关键字" aria-label="Permalink to &quot;颜色关键字&quot;">​</a></h3><p>是不区分大小写的标识符，它表示一个具体的颜色</p><p><strong>transparent</strong> 关键字表示一个完全透明的颜色，即该颜色看上去将是背景色。从技术上说，它是带有阿尔法通道为最小值的黑色，是 rgba(0,0,0,0) 的简写</p><details><summary> 颜色关键色枚举 css1 <b>16种</b>css2 <b>1</b>种 </summary><table><thead><tr><th>颜色关键字</th><th>中文名</th><th>颜色值</th><th>css版本</th></tr></thead><tbody><tr><td>black</td><td>黑色</td><td>rgb( 0, 0, 0)</td><td>css1</td></tr><tr><td>silver</td><td>银白色</td><td>rgb( 192, 192, 129)</td><td>css1</td></tr><tr><td>gray</td><td>灰色</td><td>rgb( 128, 128, 128)</td><td>css1</td></tr><tr><td>white</td><td>白色</td><td>rgb( 255, 255, 255)</td><td>css1</td></tr><tr><td>maroon</td><td>褐红色</td><td>rgb( 128, 0, 0)</td><td>css1</td></tr><tr><td>red</td><td>红色</td><td>rgb( 255, 0, 0)</td><td>css1</td></tr><tr><td>purple</td><td>紫色</td><td>rgb( 128, 0, 128)</td><td>css1</td></tr><tr><td>fuchsia</td><td>紫红色</td><td>rgb(255, 0, 255 )</td><td>css1</td></tr><tr><td>green</td><td>绿色</td><td>rgb( 0, 128, 0)</td><td>css1</td></tr><tr><td>lime</td><td>石灰色</td><td>rgb( 0, 255, 0 )</td><td>css1</td></tr><tr><td>olive</td><td>橄榄色</td><td>rgb( 128, 128, 0)</td><td>css1</td></tr><tr><td>yellow</td><td>黄色</td><td>rgb( 255, 255, 0 )</td><td>css1</td></tr><tr><td>navy</td><td>深蓝色</td><td>rgb( 0, 0, 128)</td><td>css1</td></tr><tr><td>blue</td><td>蓝色</td><td>rgb( 0, 0, 255)</td><td>css1</td></tr><tr><td>teal</td><td>蓝绿色</td><td>rgb( 0, 128, 128)</td><td>css1</td></tr><tr><td>aqua</td><td>浅绿色</td><td>rgb( 0, 255, 255)</td><td>css1</td></tr><tr><td>orange</td><td>橙色</td><td>rgb( 255, 165, 0)</td><td>css2</td></tr><tr><td>aliceblue</td><td>爱丽丝蓝</td><td>rgb(240, 248, 245)</td><td>css3</td></tr><tr><td>antiquewhite</td><td>古董白</td><td>rgb(250, 235, 215)</td><td>css3</td></tr><tr><td>aquamarine</td><td>碧绿色</td><td>rgb(127, 255, 212)</td><td>css3</td></tr><tr><td>azure</td><td>天蓝色</td><td>rgb(240, 255, 255)</td><td>css3</td></tr><tr><td>beige</td><td>淡棕色</td><td>rgb(245, 245, 220)</td><td>css3</td></tr><tr><td>bisque</td><td>橘黄色</td><td>rgb(255, 228, 196)</td><td>css3</td></tr><tr><td>blanchedalmond</td><td>白杏色</td><td>rgb(255, 235, 205)</td><td>css3</td></tr><tr><td>blueviolet</td><td>蓝紫色</td><td>rgb(138, 43, 226)</td><td>css3</td></tr><tr><td>brown</td><td>褐色</td><td>rgb(165, 42, 42)</td><td>css3</td></tr><tr><td>burlywood</td><td>实木色</td><td>rgb(222, 184, 35)</td><td>css3</td></tr><tr><td>cadetblue</td><td>军蓝色</td><td>rgb( 95, 158, 160)</td><td>css3</td></tr><tr><td>chartreuse</td><td>黄绿色</td><td>rgb(127, 255, 0)</td><td>css3</td></tr><tr><td>chocolate</td><td>深褐色</td><td>rgb(210, 105, 30)</td><td>css3</td></tr><tr><td>coral</td><td>橘红色</td><td>rgb(255, 127, 80)</td><td>css3</td></tr><tr><td>cornflowerblue</td><td>浅蓝色</td><td>rgb(100, 149, 237)</td><td>css3</td></tr><tr><td>cornsilk</td><td>玉米色</td><td>rgb(255, 248, 220)</td><td>css3</td></tr><tr><td>crimson</td><td>深红色</td><td>rgb(220, 20, 60)</td><td>css3</td></tr><tr><td>darkblue</td><td>深蓝色</td><td>rgb( 0, 0, 139)</td><td>css3</td></tr><tr><td>darkcyan</td><td>深青色</td><td>rgb( 0, 139, 139)</td><td>css3</td></tr><tr><td>darkgoldenrod</td><td>暗金黄</td><td>rgb(184, 134, 11)</td><td>css3</td></tr><tr><td>darkgray</td><td>深灰色</td><td>rgb(169, 169, 169)</td><td>css3</td></tr><tr><td>darkgreen</td><td>深绿色</td><td>rgb( 0, 100, 0)</td><td>css3</td></tr><tr><td>darkkhaki</td><td>暗卡其色</td><td>rgb(189, 183, 107)</td><td>css3</td></tr><tr><td>darkmagenta</td><td>暗洋红色</td><td>rgb(139, 0, 139)</td><td>css3</td></tr><tr><td>darkolivegreen</td><td>暗橄榄绿色</td><td>rgb( 85, 107, 47)</td><td>css3</td></tr><tr><td>darkorange</td><td>暗橙色</td><td>rgb(255, 140, 0)</td><td>css3</td></tr><tr><td>darkorchid</td><td>暗紫色</td><td>rgb(153, 50, 204)</td><td>css3</td></tr><tr><td>darkred</td><td>暗红色</td><td>rgb(139, 0, 0)</td><td>css3</td></tr><tr><td>darksalmon</td><td>暗橙红色</td><td>rgb(233, 150, 122)</td><td>css3</td></tr><tr><td>darkseagreen</td><td>深绿色</td><td>rgb(143, 188, 143)</td><td>css3</td></tr><tr><td>darkslateblue</td><td>暗灰蓝色</td><td>rgb( 72, 61, 139)</td><td>css3</td></tr><tr><td>darkslategray</td><td>墨绿色</td><td>rgb( 47, 79, 79)</td><td>css3</td></tr><tr><td>darkturquoise</td><td>--</td><td>rgb( 0, 206, 209)</td><td>css3</td></tr><tr><td>darkviolet</td><td>--</td><td>rgb(148, 0, 211)</td><td>css3</td></tr><tr><td>deeppink</td><td>--</td><td>rgb(255, 20, 147)</td><td>css3</td></tr><tr><td>deepskyblue</td><td>--</td><td>rgb( 0, 191, 255)</td><td>css3</td></tr><tr><td>dimgray</td><td>--</td><td>rgb(105, 105, 105)</td><td>css3</td></tr><tr><td>dimgrey</td><td>--</td><td>rgb(105, 105, 105)</td><td>css3</td></tr><tr><td>dodgerblue</td><td>--</td><td>rgb( 30, 144, 255)</td><td>css3</td></tr><tr><td>firebrick</td><td>--</td><td>rgb(178, 34, 34)</td><td>css3</td></tr><tr><td>floralwhite</td><td>--</td><td>rgb(255, 250, 240)</td><td>css3</td></tr><tr><td>forestgreen</td><td>--</td><td>rgb( 34, 139, 34)</td><td>css3</td></tr><tr><td>gainsboro</td><td>--</td><td>rgb(220, 220, 220)</td><td>css3</td></tr><tr><td>ghostwhite</td><td>--</td><td>rgb(248, 248, 255)</td><td>css3</td></tr><tr><td>gold</td><td>--</td><td>rgb(255, 215, 0)</td><td>css3</td></tr><tr><td>goldenrod</td><td>--</td><td>rgb(218, 165, 32)</td><td>css3</td></tr><tr><td>greenyellow</td><td>--</td><td>rgb(173, 255, 47)</td><td>css3</td></tr><tr><td>grey</td><td>--</td><td>rgb(128, 128, 128)</td><td>css3</td></tr><tr><td>honeydew</td><td>--</td><td>rgb(240, 255, 240)</td><td>css3</td></tr><tr><td>hotpink</td><td>--</td><td>rgb(255, 105, 180)</td><td>css3</td></tr><tr><td>indianred</td><td>--</td><td>rgb(205, 92, 92)</td><td>css3</td></tr><tr><td>indigo</td><td>--</td><td>rgb( 75, 0, 130)</td><td>css3</td></tr><tr><td>ivory</td><td>--</td><td>rgb(255, 255, 240)</td><td>css3</td></tr><tr><td>khaki</td><td>--</td><td>rgb(240, 230, 140)</td><td>css3</td></tr><tr><td>lavender</td><td>--</td><td>rgb(230, 230, 250)</td><td>css3</td></tr><tr><td>lavenderblush</td><td>--</td><td>rgb(255, 240, 245)</td><td>css3</td></tr><tr><td>lawngreen</td><td>--</td><td>rgb(124, 252, 0)</td><td>css3</td></tr><tr><td>lemonchiffon</td><td>--</td><td>rgb(255, 250, 205)</td><td>css3</td></tr><tr><td>lightblue</td><td>--</td><td>rgb(173, 216, 230)</td><td>css3</td></tr><tr><td>lightcoral</td><td>--</td><td>rgb(240, 128, 128)</td><td>css3</td></tr><tr><td>lightcyan</td><td>--</td><td>rgb(224, 255, 255)</td><td>css3</td></tr><tr><td>lightgoldenrodyellow</td><td>--</td><td>rgb(250, 250, 210)</td><td>css3</td></tr><tr><td>lightgray</td><td>--</td><td>rgb(211, 211, 211)</td><td>css3</td></tr><tr><td>lightgreen</td><td>--</td><td>rgb(144, 238, 144)</td><td>css3</td></tr><tr><td>lightgrey</td><td>--</td><td>rgb(211, 211, 211)</td><td>css3</td></tr><tr><td>lightpink</td><td>--</td><td>rgb(255, 182, 193)</td><td>css3</td></tr><tr><td>lightsalmon</td><td>--</td><td>rgb(255, 160, 122)</td><td>css3</td></tr><tr><td>lightseagreen</td><td>--</td><td>rgb( 32, 178, 170)</td><td>css3</td></tr><tr><td>lightskyblue</td><td>--</td><td>rgb(135, 206, 250)</td><td>css3</td></tr><tr><td>lightslategray</td><td>--</td><td>rgb(119, 136, 153)</td><td>css3</td></tr><tr><td>lightslategrey</td><td>--</td><td>rgb(119, 136, 153)</td><td>css3</td></tr><tr><td>lightsteelblue</td><td>--</td><td>rgb(176, 196, 222)</td><td>css3</td></tr><tr><td>lightyellow</td><td>--</td><td>rgb(255, 255, 224)</td><td>css3</td></tr><tr><td>limegreen</td><td>--</td><td>rgb( 50, 205, 50)</td><td>css3</td></tr><tr><td>linen</td><td>--</td><td>rgb(250, 240, 230)</td><td>css3</td></tr><tr><td>mediumaquamarine</td><td>--</td><td>rgb(102, 205, 170)</td><td>css3</td></tr><tr><td>mediumblue</td><td>--</td><td>rgb( 0, 0, 205)</td><td>css3</td></tr><tr><td>mediumorchid</td><td>--</td><td>rgb(186, 85, 211)</td><td>css3</td></tr><tr><td>mediumpurple</td><td>--</td><td>rgb(147, 112, 219)</td><td>css3</td></tr><tr><td>mediumseagreen</td><td>--</td><td>rgb( 60, 179, 113)</td><td>css3</td></tr><tr><td>mediumslateblue</td><td>--</td><td>rgb(123, 104, 238)</td><td>css3</td></tr><tr><td>mediumspringgreen</td><td>--</td><td>rgb( 0, 250, 154)</td><td>css3</td></tr><tr><td>mediumturquoise</td><td>--</td><td>rgb( 72, 209, 204)</td><td>css3</td></tr><tr><td>mediumvioletred</td><td>--</td><td>rgb(199, 21, 133)</td><td>css3</td></tr><tr><td>midnightblue</td><td>--</td><td>rgb( 25, 25, 112)</td><td>css3</td></tr><tr><td>mintcream</td><td>--</td><td>rgb(245, 255, 250)</td><td>css3</td></tr><tr><td>mistyrose</td><td>--</td><td>rgb(255, 228, 225)</td><td>css3</td></tr><tr><td>moccasin</td><td>--</td><td>rgb(255, 228, 181)</td><td>css3</td></tr><tr><td>navajowhite</td><td>--</td><td>rgb(255, 222, 173)</td><td>css3</td></tr><tr><td>oldlace</td><td>--</td><td>rgb(253, 245, 230)</td><td>css3</td></tr><tr><td>olivedrab</td><td>--</td><td>rgb(107, 142, 35)</td><td>css3</td></tr><tr><td>orangered</td><td>--</td><td>rgb(255, 69, 0)</td><td>css3</td></tr><tr><td>orchid</td><td>--</td><td>rgb(218, 112, 214)</td><td>css3</td></tr><tr><td>palegoldenrod</td><td>--</td><td>rgb(238, 232, 170)</td><td>css3</td></tr><tr><td>palegreen</td><td>--</td><td>rgb(152, 251, 152)</td><td>css3</td></tr><tr><td>paleturquoise</td><td>--</td><td>rgb(175, 238, 238)</td><td>css3</td></tr><tr><td>palevioletred</td><td>--</td><td>rgb(219, 112, 147)</td><td>css3</td></tr><tr><td>papayawhip</td><td>--</td><td>rgb(255, 239, 213)</td><td>css3</td></tr><tr><td>peachpuff</td><td>--</td><td>rgb(255, 218, 185)</td><td>css3</td></tr><tr><td>peru</td><td>--</td><td>rgb(205, 133, 63)</td><td>css3</td></tr><tr><td>pink</td><td>--</td><td>rgb(255, 192, 203)</td><td>css3</td></tr><tr><td>plum</td><td>--</td><td>rgb(221, 160, 221)</td><td>css3</td></tr><tr><td>powderblue</td><td>--</td><td>rgb(176, 224, 230)</td><td>css3</td></tr><tr><td>rosybrown</td><td>--</td><td>rgb(188, 143, 143)</td><td>css3</td></tr><tr><td>royalblue</td><td>--</td><td>rgb( 65, 105, 225)</td><td>css3</td></tr><tr><td>saddlebrown</td><td>--</td><td>rgb(139, 69, 19)</td><td>css3</td></tr><tr><td>salmon</td><td>--</td><td>rgb(250, 128, 114)</td><td>css3</td></tr><tr><td>sandybrown</td><td>--</td><td>rgb(244, 164, 96)</td><td>css3</td></tr><tr><td>seagreen</td><td>--</td><td>rgb( 46, 139, 87)</td><td>css3</td></tr><tr><td>seashell</td><td>--</td><td>rgb(255, 245, 238)</td><td>css3</td></tr><tr><td>sienna</td><td>--</td><td>rgb(160, 82, 45)</td><td>css3</td></tr><tr><td>skyblue</td><td>--</td><td>rgb(135, 206, 235)</td><td>css3</td></tr><tr><td>slateblue</td><td>--</td><td>rgb(106, 90, 205)</td><td>css3</td></tr><tr><td>slategray</td><td>--</td><td>rgb(112, 128, 144)</td><td>css3</td></tr><tr><td>slategrey</td><td>--</td><td>rgb(112, 128, 144)</td><td>css3</td></tr><tr><td>snow</td><td>--</td><td>rgb(255, 250, 250)</td><td>css3</td></tr><tr><td>springgreen</td><td>--</td><td>rgb( 0, 255, 127)</td><td>css3</td></tr><tr><td>steelblue</td><td>--</td><td>rgb( 70, 130, 180)</td><td>css3</td></tr><tr><td>tan</td><td>--</td><td>rgb(210, 180, 140)</td><td>css3</td></tr><tr><td>thistle</td><td>--</td><td>rgb(216, 191, 216)</td><td>css3</td></tr><tr><td>tomato</td><td>--</td><td>rgb(255, 99, 71)</td><td>css3</td></tr><tr><td>turquoise</td><td>--</td><td>rgb( 64, 224, 208)</td><td>css3</td></tr><tr><td>violet</td><td>紫罗兰色</td><td>rgb(238, 130, 238)</td><td>css3</td></tr><tr><td>wheat</td><td>小麦色</td><td>rgb(245, 222, 179)</td><td>css3</td></tr><tr><td>whitesmoke</td><td>烟白色</td><td>rgb(245, 245, 245)</td><td>css3</td></tr><tr><td>yellowgreen</td><td>黄绿色</td><td>rgb(154, 205, 50)</td><td>css3</td></tr></tbody></table></details><h3 id="rgb立体坐标系统" tabindex="-1">RGB立体坐标系统 <a class="header-anchor" href="#rgb立体坐标系统" aria-label="Permalink to &quot;RGB立体坐标系统&quot;">​</a></h3><p>可以使用红 - 绿 - 蓝（red-green-blue (RGB)）模式定义</p><ol><li>十六进制符号：#RRGGBB[AA]</li><li>十六进制符号：#RGB[A]</li><li>函数符：rgb[a](R, G, B[, A])</li><li>函数符：rgb[a](R G B[ / A])</li></ol><h3 id="hsl圆柱坐标系统" tabindex="-1">HSL圆柱坐标系统 <a class="header-anchor" href="#hsl圆柱坐标系统" aria-label="Permalink to &quot;HSL圆柱坐标系统&quot;">​</a></h3><p>可以使用色相-饱和度-亮度（Hue-saturation-lightness）模式定义</p><ol><li>函数符：hsl[a](H, S, L[, A])</li><li>函数符：hsl[a](H S L[ / A])</li></ol><h3 id="rgb颜色转换hsl" tabindex="-1">RGB颜色转换HSL <a class="header-anchor" href="#rgb颜色转换hsl" aria-label="Permalink to &quot;RGB颜色转换HSL&quot;">​</a></h3><ol><li>颜色值归一化：将RGB值转化为0~1之间的数值</li><li>求色相H：确定RGB各通道的大小值</li></ol><blockquote><p>如果最大值为R H = (G-B)/(max-min) 如果最大值为G H = 2.0 + (B - R)/(max-min) 如果最大值为B H = 4.0 + (R -G)/(max-min) 如果最大值等于最小值则色相为0 色相值结果除6加1确保色相介于0到1之间</p></blockquote><ol start="3"><li>求饱和度S</li></ol><blockquote><p>如果最大值等于最小值则S = 0 S = (max-min)/ max</p></blockquote><ol start="4"><li>计算亮度L</li></ol><blockquote><p>L =(max + min) / 2</p></blockquote>',21),g=[c];function b(a,l,i,o,n,h){return r(),d("div",null,g)}const p=t(e,[["render",b]]);export{m as __pageData,p as default};
