<<<<<<<< HEAD:public/assets/math_线性代数_02矩阵及其计算.md.BF8xvXMf.js
import{_ as t,c as r,o as n,a2 as a}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/074889fc-f1bd-4b9c-b11e-1638b0b80a19.CAmsyQHC.png",s="data:image/png;base64,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",A="data:image/png;base64,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",k=JSON.parse('{"title":"02矩阵及其计算","description":"","frontmatter":{"layout":"doc","title":"02矩阵及其计算"},"headers":[],"relativePath":"math/线性代数/02矩阵及其计算.md","filePath":"math/线性代数/02矩阵及其计算.md"}'),e={name:"math/线性代数/02矩阵及其计算.md"},l=a('<h1 id="矩阵及其计算" tabindex="-1">矩阵及其计算 <a class="header-anchor" href="#矩阵及其计算" aria-label="Permalink to &quot;矩阵及其计算&quot;">​</a></h1><h2 id="线性方程组" tabindex="-1">线性方程组 <a class="header-anchor" href="#线性方程组" aria-label="Permalink to &quot;线性方程组&quot;">​</a></h2><h3 id="n元非齐次性方程组" tabindex="-1">n元非齐次性方程组 <a class="header-anchor" href="#n元非齐次性方程组" aria-label="Permalink to &quot;n元非齐次性方程组&quot;">​</a></h3><p><img src="'+o+'" alt="n元非齐次性方程组"></p><h3 id="n元齐次性方程组" tabindex="-1">n元齐次性方程组 <a class="header-anchor" href="#n元齐次性方程组" aria-label="Permalink to &quot;n元齐次性方程组&quot;">​</a></h3><p><img src="'+s+'" alt="n元齐次性方程组"></p><blockquote><p>对于n元齐次性方程组来说，一定存在一个零解，但不一定存在非零解</p></blockquote><blockquote><p>对于n元非齐次性方程组来说，一定不存在零解，但不一定存在非零解</p></blockquote><h2 id="矩阵" tabindex="-1">矩阵 <a class="header-anchor" href="#矩阵" aria-label="Permalink to &quot;矩阵&quot;">​</a></h2><blockquote><p>由m * n 个数排成的m行n列数表，称为m行n列矩阵。m*n矩阵</p></blockquote><blockquote><p>实矩阵: 元素是实数的矩阵</p></blockquote><blockquote><p>复矩阵：元素是复数的矩阵</p></blockquote><blockquote><p>n阶矩阵：行数和列数都等于n的矩阵</p></blockquote><blockquote><p>行矩阵[行向量]： 只有一行的矩阵</p></blockquote><blockquote><p>列矩阵[列向量]： 只有一列的矩阵</p></blockquote><blockquote><p>零矩阵： 元素都是零的矩阵</p></blockquote><blockquote><p>同型矩阵： 2个矩阵的行数和列数相等</p></blockquote><blockquote><p>单位矩阵： 对角线上的元素都是1，其他位置的元素为0的矩阵</p></blockquote><h2 id="矩阵的计算" tabindex="-1">矩阵的计算 <a class="header-anchor" href="#矩阵的计算" aria-label="Permalink to &quot;矩阵的计算&quot;">​</a></h2><p>设存在2个矩阵 <strong>A</strong> 和 <strong>B</strong></p><h3 id="矩阵的加法" tabindex="-1">矩阵的加法 <a class="header-anchor" href="#矩阵的加法" aria-label="Permalink to &quot;矩阵的加法&quot;">​</a></h3><blockquote><p>当2个矩阵为同型矩阵时，才可以进行加法运算</p></blockquote><blockquote><p>矩阵的加法满足交换律</p></blockquote><blockquote><p>矩阵和副矩阵的和为零矩阵</p></blockquote><blockquote><p><strong>A</strong> + <strong>B</strong> = <strong>B</strong> + <strong>A</strong></p></blockquote><blockquote><p>( <strong>A</strong> + <strong>B</strong> ) + <strong>C</strong> = <strong>B</strong> + ( <strong>A</strong> + <strong>c</strong> )</p></blockquote><h2 id="数与矩阵的乘法" tabindex="-1">数与矩阵的乘法 <a class="header-anchor" href="#数与矩阵的乘法" aria-label="Permalink to &quot;数与矩阵的乘法&quot;">​</a></h2><blockquote><p>(λμ)<strong>A</strong> = λ(μ<strong>A</strong>)</p></blockquote><blockquote><p>(λ+μ)<strong>A</strong> = λ<strong>A</strong> + μ<strong>A</strong></p></blockquote><blockquote><p>λ( <strong>A</strong> + <strong>B</strong> ) = λ<strong>A</strong> + λ<strong>B</strong></p></blockquote><h3 id="矩阵的加法和乘法统称为矩阵的线性运算" tabindex="-1">矩阵的加法和乘法统称为矩阵的线性运算 <a class="header-anchor" href="#矩阵的加法和乘法统称为矩阵的线性运算" aria-label="Permalink to &quot;矩阵的加法和乘法统称为矩阵的线性运算&quot;">​</a></h3><h2 id="矩阵与矩阵相乘" tabindex="-1">矩阵与矩阵相乘 <a class="header-anchor" href="#矩阵与矩阵相乘" aria-label="Permalink to &quot;矩阵与矩阵相乘&quot;">​</a></h2><blockquote><p>定义 设<strong>A</strong>=(a<sub>ij</sub>)是一个m * s的矩阵,<strong>B</strong>=(b<sub>ij</sub>)是一个s * n的矩阵,那么规定矩阵<strong>A</strong>和矩阵<strong>B</strong>的乘积是一个m * n的矩阵，记做<strong>C</strong> = <strong>AB</strong></p></blockquote><blockquote><p>只有当第一个矩阵(左矩阵)的列数等于第二个矩阵(右矩阵)的行数时，2个矩阵才可以相乘</p></blockquote><blockquote><p>矩阵的乘法不满足交换律</p></blockquote><blockquote><p>(<strong>AB</strong>)<strong>C</strong> = <strong>A</strong>(<strong>BC</strong>)</p></blockquote><blockquote><p>(λ)<strong>AB</strong> = (λ<strong>A</strong>)<strong>B</strong> = <strong>A</strong>(λ<strong>B</strong>)</p></blockquote><blockquote><p><strong>A</strong>( <strong>B</strong> + <strong>C</strong> ) = <strong>AB</strong> + <strong>AC</strong></p></blockquote><h2 id="矩阵的转置" tabindex="-1">矩阵的转置 <a class="header-anchor" href="#矩阵的转置" aria-label="Permalink to &quot;矩阵的转置&quot;">​</a></h2><blockquote><p>把矩阵<strong>A</strong>的行换成同系数的列得到的一个新矩阵，叫<strong>A</strong>的转置矩阵记做 <strong>A</strong><sup>T</sup></p></blockquote><blockquote><p><strong>A</strong><sup>T</sup>)<sup>T</sup> = <strong>A</strong></p></blockquote><blockquote><p>( <strong>A</strong> + <strong>B</strong> )<sup>T</sup> = <strong>A</strong><sup>T</sup> + <strong>B</strong><sup>T</sup></p></blockquote><blockquote><p>(λ<strong>A</strong>)<sup>T</sup> = λ<strong>A</strong><sup>T</sup></p></blockquote><blockquote><p>(<strong>AB</strong>)<sup>T</sup> = <strong>B</strong><sup>T</sup><strong>A</strong><sup>T</sup></p></blockquote><h3 id="对称矩阵" tabindex="-1">对称矩阵 <a class="header-anchor" href="#对称矩阵" aria-label="Permalink to &quot;对称矩阵&quot;">​</a></h3><blockquote><p>满足<strong>A</strong><sup>T</sup> = <strong>A</strong></p></blockquote><blockquote><p>元素以对角线为对称轴对应相等</p></blockquote><h2 id="逆矩阵" tabindex="-1">逆矩阵 <a class="header-anchor" href="#逆矩阵" aria-label="Permalink to &quot;逆矩阵&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><blockquote><p>对于n阶矩阵<strong>A</strong>，如果存在一个矩阵<strong>B</strong>使 <strong>AB</strong> = <strong>E</strong>[单位矩阵]，那么矩阵<strong>A</strong>就是可逆的，<strong>B</strong> 称为矩阵<strong>A</strong>的逆矩阵，简称逆阵</p></blockquote><h2 id="奇异矩阵-当-a-0-时-该矩阵为奇异矩阵-否则为非奇异矩阵" tabindex="-1">奇异矩阵：当|A| = 0 时，该矩阵为奇异矩阵，否则为非奇异矩阵 <a class="header-anchor" href="#奇异矩阵-当-a-0-时-该矩阵为奇异矩阵-否则为非奇异矩阵" aria-label="Permalink to &quot;奇异矩阵：当|A| = 0 时，该矩阵为奇异矩阵，否则为非奇异矩阵&quot;">​</a></h2><h3 id="定理" tabindex="-1">定理 <a class="header-anchor" href="#定理" aria-label="Permalink to &quot;定理&quot;">​</a></h3><blockquote><p>若矩阵<strong>A</strong>可逆，则|A| ≠ 0</p></blockquote><h2 id="克拉默法则" tabindex="-1">克拉默法则 <a class="header-anchor" href="#克拉默法则" aria-label="Permalink to &quot;克拉默法则&quot;">​</a></h2><p><img src="'+o+'" alt="线性方程组"></p><blockquote><p>线性方程组的系数矩阵A的行列式不等于0，则方程组存在唯一解。</p></blockquote><p><img src="'+A+'" alt="线性方程组的解"></p><blockquote><p>其中<strong>A</strong><sub>j</sub>为把系数矩阵<strong>A</strong>中的第j列的元素用线性方程组的常数矩阵替换后得到的n阶矩阵</p></blockquote><blockquote><p>根据可逆矩阵可知，方程的解为系数矩阵的逆矩阵和常数矩阵的乘积</p></blockquote><h2 id="矩阵分块法" tabindex="-1">矩阵分块法 <a class="header-anchor" href="#矩阵分块法" aria-label="Permalink to &quot;矩阵分块法&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><blockquote><p>将矩阵<strong>A</strong>用若干条横线和若干条纵线分成许多个小矩阵每一个小矩阵称为<strong>A</strong>的子块，以子块为元素的形式上的矩阵称为分块矩阵</p></blockquote>',62),g=[l];function u(c,q,b,h,p,i){return n(),r("div",null,g)}const B=t(e,[["render",u]]);export{k as __pageData,B as default};
========
import{_ as t,c as r,o as n,a2 as a}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/7441f803-d5fa-49cd-997a-1895147fc939.CAmsyQHC.png",s="data:image/png;base64,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",A="data:image/png;base64,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",k=JSON.parse('{"title":"02矩阵及其计算","description":"","frontmatter":{"layout":"doc","title":"02矩阵及其计算"},"headers":[],"relativePath":"math/线性代数/02矩阵及其计算.md","filePath":"math/线性代数/02矩阵及其计算.md"}'),e={name:"math/线性代数/02矩阵及其计算.md"},l=a('<h1 id="矩阵及其计算" tabindex="-1">矩阵及其计算 <a class="header-anchor" href="#矩阵及其计算" aria-label="Permalink to &quot;矩阵及其计算&quot;">​</a></h1><h2 id="线性方程组" tabindex="-1">线性方程组 <a class="header-anchor" href="#线性方程组" aria-label="Permalink to &quot;线性方程组&quot;">​</a></h2><h3 id="n元非齐次性方程组" tabindex="-1">n元非齐次性方程组 <a class="header-anchor" href="#n元非齐次性方程组" aria-label="Permalink to &quot;n元非齐次性方程组&quot;">​</a></h3><p><img src="'+o+'" alt="n元非齐次性方程组"></p><h3 id="n元齐次性方程组" tabindex="-1">n元齐次性方程组 <a class="header-anchor" href="#n元齐次性方程组" aria-label="Permalink to &quot;n元齐次性方程组&quot;">​</a></h3><p><img src="'+s+'" alt="n元齐次性方程组"></p><blockquote><p>对于n元齐次性方程组来说，一定存在一个零解，但不一定存在非零解</p></blockquote><blockquote><p>对于n元非齐次性方程组来说，一定不存在零解，但不一定存在非零解</p></blockquote><h2 id="矩阵" tabindex="-1">矩阵 <a class="header-anchor" href="#矩阵" aria-label="Permalink to &quot;矩阵&quot;">​</a></h2><blockquote><p>由m * n 个数排成的m行n列数表，称为m行n列矩阵。m*n矩阵</p></blockquote><blockquote><p>实矩阵: 元素是实数的矩阵</p></blockquote><blockquote><p>复矩阵：元素是复数的矩阵</p></blockquote><blockquote><p>n阶矩阵：行数和列数都等于n的矩阵</p></blockquote><blockquote><p>行矩阵[行向量]： 只有一行的矩阵</p></blockquote><blockquote><p>列矩阵[列向量]： 只有一列的矩阵</p></blockquote><blockquote><p>零矩阵： 元素都是零的矩阵</p></blockquote><blockquote><p>同型矩阵： 2个矩阵的行数和列数相等</p></blockquote><blockquote><p>单位矩阵： 对角线上的元素都是1，其他位置的元素为0的矩阵</p></blockquote><h2 id="矩阵的计算" tabindex="-1">矩阵的计算 <a class="header-anchor" href="#矩阵的计算" aria-label="Permalink to &quot;矩阵的计算&quot;">​</a></h2><p>设存在2个矩阵 <strong>A</strong> 和 <strong>B</strong></p><h3 id="矩阵的加法" tabindex="-1">矩阵的加法 <a class="header-anchor" href="#矩阵的加法" aria-label="Permalink to &quot;矩阵的加法&quot;">​</a></h3><blockquote><p>当2个矩阵为同型矩阵时，才可以进行加法运算</p></blockquote><blockquote><p>矩阵的加法满足交换律</p></blockquote><blockquote><p>矩阵和副矩阵的和为零矩阵</p></blockquote><blockquote><p><strong>A</strong> + <strong>B</strong> = <strong>B</strong> + <strong>A</strong></p></blockquote><blockquote><p>( <strong>A</strong> + <strong>B</strong> ) + <strong>C</strong> = <strong>B</strong> + ( <strong>A</strong> + <strong>c</strong> )</p></blockquote><h2 id="数与矩阵的乘法" tabindex="-1">数与矩阵的乘法 <a class="header-anchor" href="#数与矩阵的乘法" aria-label="Permalink to &quot;数与矩阵的乘法&quot;">​</a></h2><blockquote><p>(λμ)<strong>A</strong> = λ(μ<strong>A</strong>)</p></blockquote><blockquote><p>(λ+μ)<strong>A</strong> = λ<strong>A</strong> + μ<strong>A</strong></p></blockquote><blockquote><p>λ( <strong>A</strong> + <strong>B</strong> ) = λ<strong>A</strong> + λ<strong>B</strong></p></blockquote><h3 id="矩阵的加法和乘法统称为矩阵的线性运算" tabindex="-1">矩阵的加法和乘法统称为矩阵的线性运算 <a class="header-anchor" href="#矩阵的加法和乘法统称为矩阵的线性运算" aria-label="Permalink to &quot;矩阵的加法和乘法统称为矩阵的线性运算&quot;">​</a></h3><h2 id="矩阵与矩阵相乘" tabindex="-1">矩阵与矩阵相乘 <a class="header-anchor" href="#矩阵与矩阵相乘" aria-label="Permalink to &quot;矩阵与矩阵相乘&quot;">​</a></h2><blockquote><p>定义 设<strong>A</strong>=(a<sub>ij</sub>)是一个m * s的矩阵,<strong>B</strong>=(b<sub>ij</sub>)是一个s * n的矩阵,那么规定矩阵<strong>A</strong>和矩阵<strong>B</strong>的乘积是一个m * n的矩阵，记做<strong>C</strong> = <strong>AB</strong></p></blockquote><blockquote><p>只有当第一个矩阵(左矩阵)的列数等于第二个矩阵(右矩阵)的行数时，2个矩阵才可以相乘</p></blockquote><blockquote><p>矩阵的乘法不满足交换律</p></blockquote><blockquote><p>(<strong>AB</strong>)<strong>C</strong> = <strong>A</strong>(<strong>BC</strong>)</p></blockquote><blockquote><p>(λ)<strong>AB</strong> = (λ<strong>A</strong>)<strong>B</strong> = <strong>A</strong>(λ<strong>B</strong>)</p></blockquote><blockquote><p><strong>A</strong>( <strong>B</strong> + <strong>C</strong> ) = <strong>AB</strong> + <strong>AC</strong></p></blockquote><h2 id="矩阵的转置" tabindex="-1">矩阵的转置 <a class="header-anchor" href="#矩阵的转置" aria-label="Permalink to &quot;矩阵的转置&quot;">​</a></h2><blockquote><p>把矩阵<strong>A</strong>的行换成同系数的列得到的一个新矩阵，叫<strong>A</strong>的转置矩阵记做 <strong>A</strong><sup>T</sup></p></blockquote><blockquote><p><strong>A</strong><sup>T</sup>)<sup>T</sup> = <strong>A</strong></p></blockquote><blockquote><p>( <strong>A</strong> + <strong>B</strong> )<sup>T</sup> = <strong>A</strong><sup>T</sup> + <strong>B</strong><sup>T</sup></p></blockquote><blockquote><p>(λ<strong>A</strong>)<sup>T</sup> = λ<strong>A</strong><sup>T</sup></p></blockquote><blockquote><p>(<strong>AB</strong>)<sup>T</sup> = <strong>B</strong><sup>T</sup><strong>A</strong><sup>T</sup></p></blockquote><h3 id="对称矩阵" tabindex="-1">对称矩阵 <a class="header-anchor" href="#对称矩阵" aria-label="Permalink to &quot;对称矩阵&quot;">​</a></h3><blockquote><p>满足<strong>A</strong><sup>T</sup> = <strong>A</strong></p></blockquote><blockquote><p>元素以对角线为对称轴对应相等</p></blockquote><h2 id="逆矩阵" tabindex="-1">逆矩阵 <a class="header-anchor" href="#逆矩阵" aria-label="Permalink to &quot;逆矩阵&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><blockquote><p>对于n阶矩阵<strong>A</strong>，如果存在一个矩阵<strong>B</strong>使 <strong>AB</strong> = <strong>E</strong>[单位矩阵]，那么矩阵<strong>A</strong>就是可逆的，<strong>B</strong> 称为矩阵<strong>A</strong>的逆矩阵，简称逆阵</p></blockquote><h2 id="奇异矩阵-当-a-0-时-该矩阵为奇异矩阵-否则为非奇异矩阵" tabindex="-1">奇异矩阵：当|A| = 0 时，该矩阵为奇异矩阵，否则为非奇异矩阵 <a class="header-anchor" href="#奇异矩阵-当-a-0-时-该矩阵为奇异矩阵-否则为非奇异矩阵" aria-label="Permalink to &quot;奇异矩阵：当|A| = 0 时，该矩阵为奇异矩阵，否则为非奇异矩阵&quot;">​</a></h2><h3 id="定理" tabindex="-1">定理 <a class="header-anchor" href="#定理" aria-label="Permalink to &quot;定理&quot;">​</a></h3><blockquote><p>若矩阵<strong>A</strong>可逆，则|A| ≠ 0</p></blockquote><h2 id="克拉默法则" tabindex="-1">克拉默法则 <a class="header-anchor" href="#克拉默法则" aria-label="Permalink to &quot;克拉默法则&quot;">​</a></h2><p><img src="'+o+'" alt="线性方程组"></p><blockquote><p>线性方程组的系数矩阵A的行列式不等于0，则方程组存在唯一解。</p></blockquote><p><img src="'+A+'" alt="线性方程组的解"></p><blockquote><p>其中<strong>A</strong><sub>j</sub>为把系数矩阵<strong>A</strong>中的第j列的元素用线性方程组的常数矩阵替换后得到的n阶矩阵</p></blockquote><blockquote><p>根据可逆矩阵可知，方程的解为系数矩阵的逆矩阵和常数矩阵的乘积</p></blockquote><h2 id="矩阵分块法" tabindex="-1">矩阵分块法 <a class="header-anchor" href="#矩阵分块法" aria-label="Permalink to &quot;矩阵分块法&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><blockquote><p>将矩阵<strong>A</strong>用若干条横线和若干条纵线分成许多个小矩阵每一个小矩阵称为<strong>A</strong>的子块，以子块为元素的形式上的矩阵称为分块矩阵</p></blockquote>',62),g=[l];function u(c,q,b,h,p,i){return n(),r("div",null,g)}const B=t(e,[["render",u]]);export{k as __pageData,B as default};
>>>>>>>> githubmaster:public/assets/math_线性代数_02矩阵及其计算.md.B5w4ese0.js
