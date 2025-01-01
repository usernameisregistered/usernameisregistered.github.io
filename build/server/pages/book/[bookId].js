(()=>{var e={};e.id=762,e.ids=[220,636,762],e.modules={2401:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>b});var a=r(3865),i=r(9455),l=r(671),n=r(5583),o=r(1287),c=r(7613),d=e([c]);c=(d.then?(await d)():d)[0];let u=(0,l.M)(c,"default"),x=(0,l.M)(c,"getStaticProps"),m=(0,l.M)(c,"getStaticPaths"),p=(0,l.M)(c,"getServerSideProps"),h=(0,l.M)(c,"config"),f=(0,l.M)(c,"reportWebVitals"),b=(0,l.M)(c,"unstable_getStaticProps"),g=(0,l.M)(c,"unstable_getStaticPaths"),v=(0,l.M)(c,"unstable_getStaticParams"),S=(0,l.M)(c,"unstable_getServerProps"),j=(0,l.M)(c,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:i.A.PAGES,page:"/book/[bookId]",pathname:"/book/[bookId]",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});s()}catch(e){s(e)}})},889:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(8732),a=r(9965),i=r.n(a),l=r(1106),n=r.n(l);function o({activeItem:e}){return(0,s.jsxs)("header",{className:"flex flex-grow-0 justify-between p-4 border-b border-neutral-200",children:[(0,s.jsxs)(n(),{href:"/",className:"flex items-center text-2xl text-neutral-700 cursor-pointer",children:[(0,s.jsx)(i(),{src:"/logo.svg",width:40,height:40,alt:"无事人"}),(0,s.jsx)("span",{className:"text-4 ml-4",children:"无事人"})]}),(0,s.jsx)("div",{className:"right flex items-center cursor-pointer",children:[{name:"书架",url:"/classify"},{name:"学习资料",url:"/study"},{name:"关于本人",url:"/about"}].map(t=>(0,s.jsx)(n(),{className:`mr-2 ${e===t.name?"text-sky-500":""} text-md `,href:t.url,children:t.name},t.name))})]})}},7969:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{F:()=>c});var a=r(8732),i=r(2015),l=r(4505),n=r(4043),o=e([l,n]);[l,n]=o.then?(await o)():o;let c=i.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(l.Root,{ref:s,className:(0,n.cn)("relative overflow-hidden",e),...r,children:[(0,a.jsx)(l.Viewport,{className:"h-full w-full rounded-[inherit]",children:t}),(0,a.jsx)(d,{}),(0,a.jsx)(l.Corner,{})]}));c.displayName=l.Root.displayName;let d=i.forwardRef(({className:e,orientation:t="vertical",...r},s)=>(0,a.jsx)(l.ScrollAreaScrollbar,{ref:s,orientation:t,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===t&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:(0,a.jsx)(l.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})}));d.displayName=l.ScrollAreaScrollbar.displayName,s()}catch(e){s(e)}})},1613:(e,t,r)=>{"use strict";r.d(t,{Yq:()=>o,bo:()=>c,xO:()=>n});var s=r(9021),a=r(3873),i=r.n(a);let l=JSON.parse((0,s.readFileSync)(i().join(process.cwd(),"data.json")).toString()),n=l.rootGroups,o=l.bookIdLists,c=l.chapterLists},5478:(e,t,r)=>{"use strict";r.d(t,{v:()=>x,A:()=>d});var s=r(9021),a=r.n(s),i=r(3873),l=r.n(i);let{Notebook:n}=r(9156);async function o(e){let t,r,s;let i=(await n.init({config:{previewTheme:"atom-light.css",mathRenderingOption:"KaTeX",codeBlockTheme:"atom-light.css",printBackground:!0,enableScriptExecution:!0}})).getNoteMarkdownEngine(e);await i.htmlExport({offline:!1,runAllCodeChunks:!0});let o=a().readFileSync(e.replace("md","html")).toString(),c=/<img[^src]*src="([^"]*)"/g,d={};for(;null!==(t=c.exec(o));){let r=l().join(l().dirname(e),t[1]);d[t[1]]=`data:image/${l().extname(r)};base64,${a().readFileSync(r).toString("base64")}`}if((t=/<title>([\s\S]*)<\/title>/gm.exec(o))&&(r=t[1]),t=/<body [^>]*>([\s\S]*)<\/body>/gm.exec(o))for(let e in s=t[1],d)s=s.replace(e,d[e]);return a().rmSync(e.replace("md","html")),{title:r,content:`${s}<script>
</script>`}}var c=r(1613);function d(e){return u(e)}function u(e){let t;for(let r of JSON.parse(JSON.stringify(c.xO))){if(t)break;for(let s of r.classifys){if(t)break;for(let r of s.books)if(r.id===e){t=r;break}}}return t}async function x(e,t){let r=u(e),s=r.chapterList.find(e=>e.id===t),a=await o(s.fullPath);return r.content=a.content,r.title=a.title,r}},4043:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{cn:()=>n});var a=r(802),i=r(5979),l=e([a,i]);function n(...e){return(0,i.twMerge)((0,a.clsx)(e))}[a,i]=l.then?(await l)():l,s()}catch(e){s(e)}})},1287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8732);function a({Component:e,pageProps:t}){return(0,s.jsx)(e,{...t})}r(2880),r(3995),r(3335)},5583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(8732),a=r(883);function i(){return(0,s.jsxs)(a.Html,{lang:"zh-cn",children:[(0,s.jsx)(a.Head,{}),(0,s.jsxs)("body",{"data-for":"html-export",className:"antialiased",children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},7613:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>b,getStaticPaths:()=>h,getStaticProps:()=>f});var a=r(8732),i=r(889),l=r(7969),n=r(1613),o=r(5478),c=r(7912),d=r.n(c),u=r(1106),x=r.n(u),m=r(6715),p=e([l]);l=(p.then?(await p)():p)[0];let f=({params:e})=>({props:{bookInfo:(0,o.A)(e.bookId)}});async function h(){return{paths:n.Yq.map(e=>({params:{bookId:e}})),fallback:!1}}let b=({bookInfo:e})=>{let t=(0,m.useRouter)();return setTimeout(()=>{t.replace(e.chapterList[0].url)},0),(0,a.jsxs)("div",{className:"w-screen flex flex-col h-screen",children:[(0,a.jsx)(d(),{children:(0,a.jsxs)("title",{children:["无事人-",e.name]})}),(0,a.jsx)(i.A,{activeItem:""}),(0,a.jsxs)("div",{className:"w-screen flex flex-1",children:[(0,a.jsxs)("aside",{className:"basis-2/12 border-r border-gray-300 h-full overflow-hidden",children:[(0,a.jsx)("div",{className:"text-md font-bold text-gray-700 m-4",children:e.name}),(0,a.jsx)(l.F,{className:"scroll--chapter-height",children:e.chapterList.map(e=>(0,a.jsx)(x(),{className:"text-md text-gray-600 block mx-4 mb-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-sky-300",href:e.url,children:e.name},e.id))})]}),(0,a.jsxs)("section",{className:"basis-10/12 flex flex-col p-1",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(l.F,{className:"scroll-content-height",children:"加载中..."})}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{className:"border w-60 h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300"}),(0,a.jsx)("div",{className:"border w-60 h-10 leading-10 border-gray-300 text-center cursor-pointer rounded-md hover:text-sky-300"})]})]})]})]})};s()}catch(e){s(e)}})},2880:()=>{},3335:()=>{},3995:()=>{},9156:e=>{"use strict";e.exports=require("crossnote")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4075:e=>{"use strict";e.exports=require("zlib")},4505:e=>{"use strict";e.exports=import("@radix-ui/react-scroll-area")},802:e=>{"use strict";e.exports=import("clsx")},5979:e=>{"use strict";e.exports=import("tailwind-merge")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[883,938,715],()=>r(2401));module.exports=s})();