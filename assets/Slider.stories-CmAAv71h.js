import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";const l=({label:s,value:a=0,min:e=0,max:t,step:p,style:m="dark",disabled:f,onChange:u})=>{const v={"--track-width":`${c.useCallback(()=>{if(!t)return a;const g=Math.max(t,e),h=a-e,y=g-e,T=h/y*100;return Math.min(Math.max(T,0),100)},[a,t,e])()}%`};return n.jsxs("div",{className:"ev-slider",style:v,"data-style":m,children:[n.jsx("input",{type:"range",value:a,min:e,max:t,step:p,readOnly:!u,onChange:u,disabled:f}),n.jsx("p",{children:s})]})};l.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{label:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const k={component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{label:"Label",value:30},render:s=>{const[a,e]=c.useState(0);return n.jsx(l,{...s,value:a,onChange:t=>e(Number(t.currentTarget.value))})}};var o,d,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    value: 30
  },
  render: props => {
    const [value, setValue] = useState(0);
    return <Slider {...props} value={value} onChange={event => setValue(Number(event.currentTarget.value))} />;
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,k as default};