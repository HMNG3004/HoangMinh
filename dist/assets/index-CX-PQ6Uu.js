import{j as e,u as d,R as m,r as g,f as x,b as u}from"./index-BcFpP8sJ.js";import{A as b}from"./arrow-right-_qYAC0q7.js";const h=[{name:"Introduce",color:"bg-blue-100 text-blue-800"},{name:"Daily",color:"bg-green-100 text-green-800"},{name:"Study",color:"bg-purple-100 text-purple-800"}],p=({name:a,color:r})=>e.jsx("span",{className:`text-sm font-medium me-2 px-2.5 py-0.5 rounded ${r}`,children:a}),N=()=>{const a=d(),[r,n]=m.useState([]),l=u;g.useEffect(()=>{n(l)},[l]);const o=t=>{a(`/blog/${t}`)},c=t=>{const s=h.find(i=>i.name===t);return s?s.color:"bg-gray-100 text-gray-800"};return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 w-4/5 mb-10",children:"My Blog Posts"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 w-4/5",children:r.sort((t,s)=>s.time.getTime()-t.time.getTime()).map((t,s)=>e.jsxs("div",{className:"p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-center mb-5 text-gray-500",children:[e.jsx(p,{name:t.tag,color:c(t.tag)}),e.jsx("span",{className:"text-sm",children:x(t.time.toString())})]}),e.jsxs("div",{className:"grid grid-cols-8 place-content-center",children:[e.jsx("div",{className:"col-span-7",children:e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:t.title})}),e.jsx("div",{className:"col-span-1 flex justify-end",children:e.jsx("button",{onClick:()=>o(t.slug),className:"inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline",children:e.jsx(b,{className:"w-4 h-4 ml-1"})})})]})]},s))})]})};export{N as default};