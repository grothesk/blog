import{d as C,l as g,af as v,$ as D,s as w,N as o,W as d}from"./entry.a850f2c1.js";import _ from"./ContentRenderer.88d734cb.js";import S from"./ContentQuery.e81826c4.js";import"./ContentRendererMarkdown.vue.8d0cc504.js";import"./asyncData.eaed2828.js";const $=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:a,path:s,query:i,head:r}=f,u=r===void 0?c:r,l={...i||{},path:s||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:a,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:a,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=$;export{j as default};
