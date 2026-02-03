import{j as e}from"./index-7s7xaQU8.js";import{j as P,S as l,D as h,W as u,a as m,M as p,b as x,V as a,O as S,c as F,k as Z,B as A,l as E,m as _}from"./month-view-biA_O7uk.js";import{s as j}from"./dataSource-CrVxx1x3.js";/* empty css               */import{a as $,A as q}from"./arrow-tail-fill-D6D8_xgs.js";import"./index-CC6F48bw.js";import"./index-qiR4Kxfn.js";const G=e.jsx("path",{d:"M12 2.16638L23.1448 12H20V22H13V15H11V22H4V12H0.855225L12 2.16638ZM6 10.1277V20H9V13H15V20H18V10.1277L12 4.83363L6 10.1277Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),J=P(G),K=e.jsx("path",{d:"M14.0648 14.1412C12.069 16.1523 8.83305 16.1523 6.8372 14.1412C4.84135 12.1302 4.84135 8.86973 6.8372 6.85871C8.83305 4.8477 12.069 4.8477 14.0648 6.85871C16.0607 8.86973 16.0607 12.1302 14.0648 14.1412ZM14.5554 16.3427C11.7822 18.3255 7.91356 18.0649 5.42835 15.5608C2.65442 12.7658 2.65442 8.23417 5.42835 5.43916C8.20229 2.64414 12.6997 2.64414 15.4737 5.43916C18.2476 8.23417 18.2476 12.7658 15.4737 15.5608C15.425 15.6098 15.3759 15.6579 15.3262 15.7052L15.6089 15.9901L16.2756 15.9547L21.3284 21.0459L19.9249 22.4601L14.8721 17.369L14.9072 16.6972L14.5554 16.3427Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),Q=P(K),U=({})=>{const r={dataSource:j},o=({startDate:c,endDate:k})=>e.jsxs("span",{children:[c.toDateString()," - ",k.toDateString()]}),t=c=>e.jsx(x,{...c,overflowMode:S.Scrollable,todayProps:{icon:e.jsx(J,{}),disabled:!0},previousProps:{icon:e.jsx(q,{}),variant:a.Outlined},nextProps:{icon:e.jsx($,{}),variant:a.Outlined},dateRangeProps:{variant:a.Outlined},dateRangeTemplate:o,viewSwitcherProps:{variant:a.Filled},children:c.children});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:t,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{})]})})})},X=({})=>{const r={dataSource:j},o=t=>e.jsxs(x,{...t,overflowMode:S.Scrollable,children:[t.previous,t.dateRange,t.next,t.viewSwitcher,t.today]});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{})]})})})},Y=({})=>{const r={dataSource:j},o=t=>e.jsxs(x,{...t,overflowMode:S.Scrollable,children:[t.today,t.previous,t.dateRange,t.next,e.jsx(F,{children:e.jsx(Z,{placeholder:"Type to search",variant:a.Outlined,suffix:e.jsx(A,{variant:a.Standard,icon:e.jsx(Q,{}),"aria-label":"search-button",title:"Search",size:E.Small})})}),e.jsx(_,{}),t.viewSwitcher]});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{})]})})})},ee=({})=>{const r={dataSource:j},o=t=>e.jsx(x,{...t,overflowMode:S.Scrollable,todayProps:null,viewSwitcherProps:null,children:t.children});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{})]})})})},ie={title:"Scheduler/HeaderCustomization",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},s={render:()=>e.jsx(U,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates the default header configuration using props.children to render the default header structure and customize the today button icon."}}}},n={render:()=>e.jsx(X,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates how to customize the header by manually arranging individual button components such as previous, dateRange, next view, and today buttons."}}}},d={render:()=>e.jsx(Y,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates how to integrate a custom search TextBox component with an icon button into the scheduler header for enhanced user interaction."}}}},i={render:()=>e.jsx(ee,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates a customized header with a hide the default toolbar buttons."}}}};var g,b,f,v,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DefaultHeaderSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default header configuration using props.children to render the default header structure and customize the today button icon.'
      }
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:`Story 1: Default Header with Children\r
Displays the standard header using props.children`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var y,H,T,D,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ReorderToolbarItemsSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to customize the header by manually arranging individual button components such as previous, dateRange, next view, and today buttons.'
      }
    }
  }
}`,...(T=(H=n.parameters)==null?void 0:H.docs)==null?void 0:T.source},description:{story:`Story 2: Individual Button Components\r
Shows how to manually arrange individual toolbar button components in the header`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var I,R,V,M,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <HeaderWithSearchSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to integrate a custom search TextBox component with an icon button into the scheduler header for enhanced user interaction.'
      }
    }
  }
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:`Story 3: Header with Search Box Integration\r
Features a custom search textbox integrated into the header toolbar`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var L,B,N,W,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <HideDefaultToolbarItem />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a customized header with a hide the default toolbar buttons.'
      }
    }
  }
}`,...(N=(B=i.parameters)==null?void 0:B.docs)==null?void 0:N.source},description:{story:`Story 4: Header with Hide the particular button\r
Hide the default toolbar buttons`,...(O=(W=i.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};const ce=["CutomizeDefaultButton","ReorderToolbarItemsSamples","HeaderWithCustomToolbar","HideDefaultToolbarItems"];export{s as CutomizeDefaultButton,d as HeaderWithCustomToolbar,i as HideDefaultToolbarItems,n as ReorderToolbarItemsSamples,ce as __namedExportsOrder,ie as default};
