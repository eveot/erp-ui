import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{I as f}from"./index-KOMLSbxG.js";import{r as h}from"./index-CDs2tPxN.js";import{B as i}from"./index-DJXlMN2W.js";const m=({title:d,subtitle:r,placeholder:u="Placeholder",type:a="confirmation",onClick:l})=>{const[n,p]=h.useState("");return e.jsxs("div",{className:["ev-modal-legacy",`ev-modal-legacy",-mode--${a}`].join(" "),children:[e.jsx("h3",{children:d}),r&&e.jsx("p",{children:r}),a==="input"&&e.jsx(f,{placeholder:u,onChange:g=>p(g.target.value),value:n,size:"lg",name:"ModalLegacyLegacy"}),e.jsxs("div",{className:"ev-ModalLegacyLegacy-buttons",children:[a!=="hint"&&e.jsx(i,{mode:"default",size:"lg",onClick:()=>l(!1,n),children:"Отменить"}),e.jsx(i,{mode:"primary",size:"lg",onClick:()=>l(!0,n),children:a==="hint"?"Понятно":"Подтвердить"})]})]})};m.__docgenInfo={description:"@deprecated",methods:[],displayName:"ModalLegacy",props:{title:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'confirmation' | 'input' | 'hint'",elements:[{name:"literal",value:"'confirmation'"},{name:"literal",value:"'input'"},{name:"literal",value:"'hint'"}]},description:"",defaultValue:{value:"'confirmation'",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(accepted: boolean, value?: string | number) => void",signature:{arguments:[{type:{name:"boolean"},name:"accepted"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Placeholder'",computed:!1}}}};const j={title:"ModalLegacy",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"Title",subtitle:"Subtitle",onClick:()=>{},placeholder:"Placeholder"}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    onClick: () => {},
    placeholder: 'Placeholder'
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,j as default};
