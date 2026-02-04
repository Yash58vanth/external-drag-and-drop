import{j as e}from"./index-7s7xaQU8.js";import{r as a}from"./index-CC6F48bw.js";import{S as m,D as p,W as g,a as x,M as S}from"./month-view-BJ-OPtgR.js";import{d as y}from"./dataSource-CrVxx1x3.js";/* empty css               */import"./index-qiR4Kxfn.js";const B=({logger:t})=>{const[n,r]=a.useState([]);return a.useEffect(()=>{const o=s=>{const d=s.detail,u=new Date().toLocaleTimeString();r(k=>[`${u} - ${d}`,...k].slice(0,50))};return t.addEventListener("log",o),()=>t.removeEventListener("log",o)},[t]),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("h4",{style:{margin:0},children:"Event trace"}),e.jsx("button",{onClick:()=>r([]),children:"Clear"})]}),e.jsx("div",{id:"event-trace",style:{height:510,overflow:"auto",border:"1px solid #e0e0e0",borderRadius:4,padding:8,background:"#fafafa"},children:n.length===0?e.jsx("div",{style:{color:"#666"},children:"Interact with the scheduler to see events here."}):e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:n.map((o,s)=>e.jsx("li",{style:{padding:"4px 0",borderBottom:"1px dashed #e5e5e5"},children:o},s))})})]})},I=({enable:t=!0})=>{const n={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},r=a.useRef(null);return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(m,{ref:r,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:t,eventSettings:n,children:[e.jsx(p,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(S,{})]})})})},R=({})=>{const t=a.useRef(new EventTarget),n=a.useMemo(()=>o=>{t.current.dispatchEvent(new CustomEvent("log",{detail:o}))},[]),r={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"scheduler-control",style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"16px"},children:[e.jsxs(m,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:!0,eventSettings:r,onDragStart:()=>n("onDragStart"),onDrag:()=>n("onDrag"),onDragStop:()=>n("onDragStop"),children:[e.jsx(p,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(S,{})]}),e.jsx(B,{logger:t.current})]})})},C=({enable:t=!0,interval:n=10,excludeSelectors:r="sf-all-day-cell",autoScroll:o=!0,scrollBy:s=5,timeDelay:d=10})=>{const u={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(m,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:{enable:t,interval:n,excludeSelectors:r,scroll:{enable:o,scrollBy:s,timeDelay:d}},eventSettings:u,children:[e.jsx(p,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(S,{})]})})})},M={title:"Scheduler/Drag and Drop",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},l={render:t=>e.jsx(I,{...t}),args:{enable:!0},parameters:{controls:{include:["enable"]}},argTypes:{enable:{control:"boolean"}}},c={render:t=>e.jsx(C,{...t}),args:{enable:!0,interval:15,excludeSelectors:"sf-all-day-cell",autoScroll:!0,scrollBy:5,timeDelay:10},parameters:{controls:{include:["enable","interval","excludeSelectors","autoScroll","scrollBy","timeDelay"]}},argTypes:{enable:{control:"boolean"},interval:{control:"number"},excludeSelectors:{control:"text"},autoScroll:{control:"boolean"},scrollBy:{control:"number"},timeDelay:{control:"number"}}},i={render:()=>e.jsx(R,{})};var h,j,D;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <EventDragSample {...args} />,
  args: {
    enable: true
  },
  parameters: {
    controls: {
      include: ['enable']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    }
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var v,b,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <CustomizedSample {...args} />,
  args: {
    enable: true,
    interval: 15,
    excludeSelectors: 'sf-all-day-cell',
    autoScroll: true,
    scrollBy: 5,
    timeDelay: 10
  },
  parameters: {
    controls: {
      include: ['enable', 'interval', 'excludeSelectors', 'autoScroll', 'scrollBy', 'timeDelay']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    },
    interval: {
      control: 'number'
    },
    excludeSelectors: {
      control: 'text'
    },
    autoScroll: {
      control: 'boolean'
    },
    scrollBy: {
      control: 'number'
    },
    timeDelay: {
      control: 'number'
    }
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var E,w,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <DragEventsSample />
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const U=["EventDrag","Customization","UserEndEvents"];export{c as Customization,l as EventDrag,i as UserEndEvents,U as __namedExportsOrder,M as default};
