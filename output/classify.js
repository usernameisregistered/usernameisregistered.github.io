(()=>{var e={};e.id=670,e.ids=[220,636,670],e.modules={4635:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>h,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>b});var a=t(3865),l=t(9455),i=t(671),c=t(5583),n=t(1287),d=t(4697),o=e([d]);d=(o.then?(await o)():o)[0];let u=(0,i.M)(d,"default"),x=(0,i.M)(d,"getStaticProps"),m=(0,i.M)(d,"getStaticPaths"),p=(0,i.M)(d,"getServerSideProps"),h=(0,i.M)(d,"config"),f=(0,i.M)(d,"reportWebVitals"),b=(0,i.M)(d,"unstable_getStaticProps"),j=(0,i.M)(d,"unstable_getStaticPaths"),g=(0,i.M)(d,"unstable_getStaticParams"),N=(0,i.M)(d,"unstable_getServerProps"),v=(0,i.M)(d,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:l.A.PAGES,page:"/classify",pathname:"/classify",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:d});s()}catch(e){s(e)}})},889:(e,r,t)=>{"use strict";t.d(r,{A:()=>n});var s=t(8732),a=t(9965),l=t.n(a),i=t(1106),c=t.n(i);function n({activeItem:e}){return(0,s.jsxs)("header",{className:"flex flex-grow-0 justify-between p-4 border-b border-neutral-200",children:[(0,s.jsxs)(c(),{href:"/",className:"flex items-center text-2xl text-neutral-700 cursor-pointer",children:[(0,s.jsx)(l(),{src:"/logo.svg",width:40,height:40,alt:"得鹿梦鱼"}),(0,s.jsx)("span",{className:"text-4 ml-4",children:"得鹿梦鱼"})]}),(0,s.jsx)("div",{className:"right flex items-center cursor-pointer",children:[{name:"知识库",url:"/classify"},{name:"前端技能树",url:"/frontend"},{name:"面试题",url:"/question"},{name:"学习资料",url:"/study"},{name:"关于本人",url:"/about"}].map(r=>(0,s.jsx)(c(),{className:`mr-2 ${e===r.name?"text-sky-500":""} text-md `,href:r.url,children:r.name},r.name))})]})}},6006:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{BT:()=>u,Wu:()=>x,ZB:()=>o,Zp:()=>n,aR:()=>d});var a=t(8732),l=t(2015),i=t(4043),c=e([i]);i=(c.then?(await c)():c)[0];let n=l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...r}));n.displayName="Card";let d=l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...r}));d.displayName="CardHeader";let o=l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...r}));o.displayName="CardTitle";let u=l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",e),...r}));u.displayName="CardDescription";let x=l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",e),...r}));x.displayName="CardContent",l.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter",s()}catch(e){s(e)}})},7969:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{F:()=>d});var a=t(8732),l=t(2015),i=t(4505),c=t(4043),n=e([i,c]);[i,c]=n.then?(await n)():n;let d=l.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(i.Root,{ref:s,className:(0,c.cn)("relative overflow-hidden",e),...t,children:[(0,a.jsx)(i.Viewport,{className:"h-full w-full rounded-[inherit]",children:r}),(0,a.jsx)(o,{}),(0,a.jsx)(i.Corner,{})]}));d.displayName=i.Root.displayName;let o=l.forwardRef(({className:e,orientation:r="vertical",...t},s)=>(0,a.jsx)(i.ScrollAreaScrollbar,{ref:s,orientation:r,className:(0,c.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:(0,a.jsx)(i.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})}));o.displayName=i.ScrollAreaScrollbar.displayName,s()}catch(e){s(e)}})},1613:(e,r,t)=>{"use strict";t.d(r,{bo:()=>c,xO:()=>i});var s=t(9021),a=t(3873),l=t.n(a);let i=JSON.parse((0,s.readFileSync)(l().join(process.cwd(),"data.json")).toString());JSON.parse((0,s.readFileSync)(l().join(process.cwd(),"book.json")).toString());let c=JSON.parse((0,s.readFileSync)(l().join(process.cwd(),"chapter.json")).toString())},4043:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{cn:()=>c});var a=t(802),l=t(5979),i=e([a,l]);function c(...e){return(0,l.twMerge)((0,a.clsx)(e))}[a,l]=i.then?(await i)():i,s()}catch(e){s(e)}})},1287:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(8732);function a({Component:e,pageProps:r}){return(0,s.jsx)(e,{...r})}t(2880),t(3995),t(3335)},5583:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(8732),a=t(883);function l(){return(0,s.jsxs)(a.Html,{lang:"zh-cn",children:[(0,s.jsx)(a.Head,{}),(0,s.jsxs)("body",{"data-for":"html-export",className:"antialiased",children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},4697:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>h,getStaticProps:()=>p});var a=t(8732),l=t(889),i=t(6006),c=t(7969),n=t(1613),d=t(7912),o=t.n(d),u=t(1106),x=t.n(u),m=e([i,c]);[i,c]=m.then?(await m)():m;let p=()=>({props:{classifyGroup:n.xO}}),h=({classifyGroup:e})=>(0,a.jsxs)("div",{className:"w-screen",children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"得鹿梦鱼-知识库"})}),(0,a.jsx)(l.A,{activeItem:"书架"}),(0,a.jsx)(c.F,{className:"scroll-classify-height",children:e.map(e=>(0,a.jsxs)("div",{className:"w-full  my-2",children:[(0,a.jsx)("div",{className:"p-1  border-b text-md border-neutral-200 mx-4 font-semibold text-lg",children:e.name}),(0,a.jsx)("div",{className:"grid grid-cols-4 gap-4 m-4",children:e.classifys.map(e=>(0,a.jsxs)(i.Zp,{children:[(0,a.jsxs)(i.aR,{children:[(0,a.jsx)(i.ZB,{className:"border-b border-gray-400 pb-4",children:e.name}),(0,a.jsx)(i.BT,{className:"border-b max-h-16  pb-2",children:(0,a.jsx)(c.F,{className:"border-neutral-300 h-16",children:e.description})})]}),(0,a.jsx)(i.Wu,{children:e.books&&e.books.length?(0,a.jsx)(c.F,{className:"border-neutral-300 h-48",children:e.books.map(e=>(0,a.jsx)(x(),{className:"mb-2 cursor-pointer block text-neutral-600 hover:text-sky-600",href:e.url,children:e.name},e.id))}):(0,a.jsx)("div",{className:"text-center text-neutral-500 my-8 h-10 leading-10",children:"暂无数据"})})]},e.id))})]},e.id))})]});s()}catch(e){s(e)}})},2880:()=>{},3335:()=>{},3995:()=>{},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},4505:e=>{"use strict";e.exports=import("@radix-ui/react-scroll-area")},802:e=>{"use strict";e.exports=import("clsx")},5979:e=>{"use strict";e.exports=import("tailwind-merge")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[883,938],()=>t(4635));module.exports=s})();