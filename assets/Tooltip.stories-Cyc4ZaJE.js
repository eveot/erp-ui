import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{B as f}from"./index-D0yTPoNf.js";import{a as i,I as l}from"./index-D0FTLS1t.js";import{r as T}from"./index-CDs2tPxN.js";const n=({align:t="bottom",text:u,children:d,iconLeft:a,iconRight:s})=>{const[x,r]=T.useState(!1);return e.jsxs("div",{className:"ev-tooltip","data-show":x,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[d,e.jsxs("div",{className:"ev-tooltip-box","data-align":t,children:[a&&e.jsx(i,{name:a}),u,s&&e.jsx(i,{name:s})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},iconLeft:{required:!1,tsType:{name:"union",raw:"TablerIconName | EveotIconName",elements:[{name:"unknown"},{name:"unknown"}]},description:""},iconRight:{required:!1,tsType:{name:"union",raw:"TablerIconName | EveotIconName",elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const j={component:n,parameters:{layout:"centered"},argTypes:{iconLeft:{options:l},iconRight:{options:l}}},o={args:{text:"Tooltip text"},render:t=>e.jsx(n,{...t,children:e.jsx(f,{size:"sm",children:"Tooltip"})})};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text'
  },
  render: props => <Tooltip {...props}>
      <Button size='sm'>Tooltip</Button>
    </Tooltip>
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const I=["Preview"];export{o as Preview,I as __namedExportsOrder,j as default};