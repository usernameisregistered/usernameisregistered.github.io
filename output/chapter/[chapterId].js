(()=>{var e={};e.id=656,e.ids=[220,636,656],e.modules={3221:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>b});var a=r(3865),i=r(9455),n=r(671),l=r(5583),c=r(1287),o=r(2723),d=e([o]);o=(d.then?(await d)():d)[0];let u=(0,n.M)(o,"default"),p=(0,n.M)(o,"getStaticProps"),h=(0,n.M)(o,"getStaticPaths"),x=(0,n.M)(o,"getServerSideProps"),m=(0,n.M)(o,"config"),f=(0,n.M)(o,"reportWebVitals"),b=(0,n.M)(o,"unstable_getStaticProps"),g=(0,n.M)(o,"unstable_getStaticPaths"),v=(0,n.M)(o,"unstable_getStaticParams"),j=(0,n.M)(o,"unstable_getServerProps"),S=(0,n.M)(o,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:i.A.PAGES,page:"/chapter/[chapterId]",pathname:"/chapter/[chapterId]",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:o});s()}catch(e){s(e)}})},889:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var s=r(8732),a=r(9965),i=r.n(a),n=r(1106),l=r.n(n);function c({activeItem:e}){return(0,s.jsxs)("header",{className:"flex flex-grow-0 justify-between p-4 border-b border-neutral-200",children:[(0,s.jsxs)(l(),{href:"/",className:"flex items-center text-2xl text-neutral-700 cursor-pointer",children:[(0,s.jsx)(i(),{src:"/logo.svg",width:40,height:40,alt:"得鹿梦鱼"}),(0,s.jsx)("span",{className:"text-4 ml-4",children:"得鹿梦鱼"})]}),(0,s.jsx)("div",{className:"right flex items-center cursor-pointer",children:[{name:"书架",url:"/classify"},{name:"学习资料",url:"/study"},{name:"关于本人",url:"/about"}].map(t=>(0,s.jsx)(l(),{className:`mr-2 ${e===t.name?"text-sky-500":""} text-md `,href:t.url,children:t.name},t.name))})]})}},7969:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{F:()=>o});var a=r(8732),i=r(2015),n=r(4505),l=r(4043),c=e([n,l]);[n,l]=c.then?(await c)():c;let o=i.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(n.Root,{ref:s,className:(0,l.cn)("relative overflow-hidden",e),...r,children:[(0,a.jsx)(n.Viewport,{className:"h-full w-full rounded-[inherit]",children:t}),(0,a.jsx)(d,{}),(0,a.jsx)(n.Corner,{})]}));o.displayName=n.Root.displayName;let d=i.forwardRef(({className:e,orientation:t="vertical",...r},s)=>(0,a.jsx)(n.ScrollAreaScrollbar,{ref:s,orientation:t,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===t&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:(0,a.jsx)(n.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})}));d.displayName=n.ScrollAreaScrollbar.displayName,s()}catch(e){s(e)}})},1613:(e,t,r)=>{"use strict";r.d(t,{Yq:()=>c,bo:()=>o,xO:()=>l});var s=r(9021),a=r(3873),i=r.n(a);let n=JSON.parse((0,s.readFileSync)(i().join(process.cwd(),"data.json")).toString()),l=n.rootGroups,c=n.bookIdLists,o=n.chapterLists},5478:(e,t,r)=>{"use strict";r.d(t,{v:()=>p,A:()=>d});var s=r(9021),a=r.n(s),i=r(3873),n=r.n(i);let{Notebook:l}=r(9156);async function c(e){let t,r,s;let i=(await l.init({config:{previewTheme:"atom-light.css",mathRenderingOption:"KaTeX",codeBlockTheme:"atom-light.css",printBackground:!0,enableScriptExecution:!0}})).getNoteMarkdownEngine(e);await i.htmlExport({offline:!1,runAllCodeChunks:!0});let c=a().readFileSync(e.replace("md","html")).toString(),o=/<img[^src]*src="([^"]*)"/g,d={};for(;null!==(t=o.exec(c));){let r=n().join(n().dirname(e),decodeURIComponent(t[1])),s=Date.now()+Math.random().toString().slice(4,8)+n().extname(r),i=n().join(process.cwd(),"public/assets",s);a().copyFileSync(r,i),d[t[1]]=`/assets/${s}`}if((t=/<title>([\s\S]*)<\/title>/gm.exec(c))&&(r=t[1]),t=/<body [^>]*>([\s\S]*)<\/body>/gm.exec(c))for(let e in s=t[1],d)s=s.replace(e,d[e]);return a().rmSync(e.replace("md","html")),{title:r,content:`${s}`}}var o=r(1613);function d(e){return u(e)}function u(e){let t;for(let r of JSON.parse(JSON.stringify(o.xO))){if(t)break;for(let s of r.classifys){if(t)break;for(let r of s.books)if(r.id===e){t=r;break}}}return t}async function p(e){let t=u(e.split("_")[0]),r=t.chapterList.find(t=>t.id===e),s=await c(r.fullPath);return t.content=s.content,t.title=s.title,t}},4043:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{cn:()=>l});var a=r(802),i=r(5979),n=e([a,i]);function l(...e){return(0,i.twMerge)((0,a.clsx)(e))}[a,i]=n.then?(await n)():n,s()}catch(e){s(e)}})},1287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8732);function a({Component:e,pageProps:t}){return(0,s.jsx)(e,{...t})}r(2880),r(3995),r(3335)},5583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(8732),a=r(883);function i(){return(0,s.jsxs)(a.Html,{lang:"zh-cn",children:[(0,s.jsx)(a.Head,{}),(0,s.jsxs)("body",{"data-for":"html-export",className:"antialiased",children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},2723:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>b,getStaticPaths:()=>m,getStaticProps:()=>f});var a=r(8732),i=r(889),n=r(7969),l=r(1613),c=r(5478),o=r(1106),d=r.n(o),u=r(6715),p=r(7912),h=r.n(p),x=e([n]);n=(x.then?(await x)():x)[0];let f=async({params:e})=>{let t=await (0,c.v)(e.chapterId);return{props:{bookInfo:t,title:t.title}}};async function m(){return{paths:l.bo.map(e=>({params:{chapterId:e}})),fallback:"blocking"}}let b=({bookInfo:e})=>{let t=(0,u.useRouter)(),r=t.query,s=e.chapterList.findIndex(e=>e.id===r.chapterId);return(0,a.jsxs)("div",{className:"w-screen flex flex-col h-screen",children:[(0,a.jsx)(h(),{children:(0,a.jsxs)("title",{children:["得鹿梦鱼-",e.title,"-",e.name]})}),(0,a.jsx)(i.A,{activeItem:""}),(0,a.jsxs)("div",{className:"w-screen flex flex-1",children:[(0,a.jsxs)("aside",{className:"basis-2/12 border-r border-gray-300 h-full overflow-hidden",children:[(0,a.jsx)("div",{className:"text-md font-bold text-gray-700 m-4",children:e.name}),(0,a.jsx)(n.F,{className:"scroll--chapter-height",children:e.chapterList.map(e=>(0,a.jsx)(d(),{className:`text-md ${r.chapterId!==e.id?"text-gray-600":"text-sky-300"} block mx-4 mb-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-sky-300`,href:e.url,children:e.name},e.id))})]}),(0,a.jsxs)("section",{className:"basis-10/12 flex flex-col p-1",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(n.F,{className:"scroll-content-height",children:(0,a.jsx)("div",{id:"markdown-container",dangerouslySetInnerHTML:{__html:e.content}})})}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{className:`${s?"visible":"invisible"} border min-w-60 h-10 px-4 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300`,onClick:()=>{t.push(e.chapterList[s-1].url)},children:s?e.chapterList[s-1].name:""}),(0,a.jsx)("div",{className:`${s<e.chapterList.length-1?"visible":"invisible"} border min-w-60 px-4  h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300`,onClick:()=>{t.push(e.chapterList[s+1].url)},children:s<e.chapterList.length-1?e.chapterList[s+1].name:""})]})]})]})]})};s()}catch(e){s(e)}})},2880:()=>{},3335:()=>{},3995:()=>{},9156:e=>{"use strict";e.exports=require("crossnote")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4075:e=>{"use strict";e.exports=require("zlib")},4505:e=>{"use strict";e.exports=import("@radix-ui/react-scroll-area")},802:e=>{"use strict";e.exports=import("clsx")},5979:e=>{"use strict";e.exports=import("tailwind-merge")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[883,938,715],()=>r(3221));module.exports=s})();