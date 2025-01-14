(()=>{var e={};e.id=375,e.ids=[220,375,636],e.modules={2155:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>h,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>b});var a=t(3865),l=t(9455),i=t(671),n=t(5583),c=t(1287),o=t(6164),d=e([o]);o=(d.then?(await d)():d)[0];let u=(0,i.M)(o,"default"),x=(0,i.M)(o,"getStaticProps"),p=(0,i.M)(o,"getStaticPaths"),m=(0,i.M)(o,"getServerSideProps"),h=(0,i.M)(o,"config"),f=(0,i.M)(o,"reportWebVitals"),b=(0,i.M)(o,"unstable_getStaticProps"),g=(0,i.M)(o,"unstable_getStaticPaths"),j=(0,i.M)(o,"unstable_getStaticParams"),v=(0,i.M)(o,"unstable_getServerProps"),S=(0,i.M)(o,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:l.A.PAGES,page:"/study",pathname:"/study",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:o});s()}catch(e){s(e)}})},889:(e,r,t)=>{"use strict";t.d(r,{A:()=>c});var s=t(8732),a=t(9965),l=t.n(a),i=t(1106),n=t.n(i);function c({activeItem:e}){return(0,s.jsxs)("header",{className:"flex flex-grow-0 justify-between p-4 border-b border-neutral-200",children:[(0,s.jsxs)(n(),{href:"/",className:"flex items-center text-2xl text-neutral-700 cursor-pointer",children:[(0,s.jsx)(l(),{src:"/logo.svg",width:40,height:40,alt:"得鹿梦鱼"}),(0,s.jsx)("span",{className:"text-4 ml-4",children:"得鹿梦鱼"})]}),(0,s.jsx)("div",{className:"right flex items-center cursor-pointer",children:[{name:"知识库",url:"/classify"},{name:"前端技能树",url:"/frontend"},{name:"面试题",url:"/question"},{name:"学习资料",url:"/study"},{name:"关于本人",url:"/about"}].map(r=>(0,s.jsx)(n(),{className:`mr-2 ${e===r.name?"text-sky-500":""} text-md `,href:r.url,children:r.name},r.name))})]})}},7969:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{F:()=>o});var a=t(8732),l=t(2015),i=t(4505),n=t(4043),c=e([i,n]);[i,n]=c.then?(await c)():c;let o=l.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(i.Root,{ref:s,className:(0,n.cn)("relative overflow-hidden",e),...t,children:[(0,a.jsx)(i.Viewport,{className:"h-full w-full rounded-[inherit]",children:r}),(0,a.jsx)(d,{}),(0,a.jsx)(i.Corner,{})]}));o.displayName=i.Root.displayName;let d=l.forwardRef(({className:e,orientation:r="vertical",...t},s)=>(0,a.jsx)(i.ScrollAreaScrollbar,{ref:s,orientation:r,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:(0,a.jsx)(i.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})}));d.displayName=i.ScrollAreaScrollbar.displayName,s()}catch(e){s(e)}})},6894:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var s=t(9021),a=t(3873);let l=JSON.parse((0,s.readFileSync)((0,a.join)(process.cwd(),"./config.json")).toString()).docDirectory;function i(){return JSON.parse((0,s.readFileSync)((0,a.join)(l,"study.json")).toString())}},4043:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{cn:()=>n});var a=t(802),l=t(5979),i=e([a,l]);function n(...e){return(0,l.twMerge)((0,a.clsx)(e))}[a,l]=i.then?(await i)():i,s()}catch(e){s(e)}})},1287:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(8732);function a({Component:e,pageProps:r}){return(0,s.jsx)(e,{...r})}t(2880),t(3995),t(3335)},5583:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(8732),a=t(883);function l(){return(0,s.jsxs)(a.Html,{lang:"zh-cn",children:[(0,s.jsx)(a.Head,{}),(0,s.jsxs)("body",{"data-for":"html-export",className:"antialiased",children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},6164:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>u,getStaticProps:()=>x});var a=t(8732),l=t(889),i=t(6894),n=t(7969),c=t(7912),o=t.n(c),d=e([n]);function u({studyList:e}){return(0,a.jsxs)("div",{className:"w-screen",children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"得鹿梦鱼-学习资料"})}),(0,a.jsx)(l.A,{activeItem:"学习资料"}),(0,a.jsx)(n.F,{className:"scroll-classify-height",children:(0,a.jsxs)("div",{className:"w-5/6 m-auto pt-20 ",children:[(0,a.jsx)("div",{className:"border-b border-gray-200 pb-4 text-lg text-black text-center",children:"平时收集的学习资料"}),(0,a.jsxs)("div",{className:"flex py-4 leading-4 border-b border-neutral-200",children:[(0,a.jsx)("div",{className:"basis-[300px]",children:"名称"}),(0,a.jsx)("div",{className:"flex-1",children:"描述"})]}),e.map(e=>(0,a.jsxs)("div",{className:"flex py-4 leading-4 border-b border-neutral-200",children:[(0,a.jsx)("div",{className:"basis-[300px] hover:text-blue-300",children:(0,a.jsx)("a",{href:e.url,target:"_blank",children:e.name})}),(0,a.jsx)("div",{className:"flex-1",children:e.description})]},e.name))]})})]})}n=(d.then?(await d)():d)[0];let x=()=>{let e=(0,i.A)();return{props:{title:"得鹿梦鱼",content:"",studyList:e}}};s()}catch(e){s(e)}})},2880:()=>{},3335:()=>{},3995:()=>{},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},4505:e=>{"use strict";e.exports=import("@radix-ui/react-scroll-area")},802:e=>{"use strict";e.exports=import("clsx")},5979:e=>{"use strict";e.exports=import("tailwind-merge")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[883,938],()=>t(2155));module.exports=s})();