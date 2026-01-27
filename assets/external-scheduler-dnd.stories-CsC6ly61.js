import{j as t}from"./index-7s7xaQU8.js";import{r as p}from"./index-CC6F48bw.js";import{S as T,D as v,W as w,a as x,M as j}from"./month-view-n0NY1yVr.js";/* empty css               */import"./index-qiR4Kxfn.js";const I=(s,r="")=>{const n=(u,e,a=0)=>new Date(u.getFullYear(),u.getMonth(),u.getDate(),e,a),i=new Date(s);i.setDate(s.getDate()-1);const l=new Date(s);l.setDate(s.getDate()+1);const g=new Date(s);g.setDate(s.getDate()+2);const h=new Date(s);h.setDate(s.getDate()+3);const S=new Date(s);S.setDate(s.getDate()+4);const m=new Date(s);return m.setDate(s.getDate()+5),[{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Offsite (All day)`,StartTime:new Date(i.getFullYear(),i.getMonth(),i.getDate()),EndTime:new Date(i.getFullYear(),i.getMonth(),i.getDate()),IsAllDay:!0,Location:"Offsite",Description:`${r} company offsite - previous day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Standup`,StartTime:n(l,8),EndTime:n(l,10,30),IsAllDay:!1,Location:"Online",Description:`${r} daily standup`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Deployment`,StartTime:n(s,1),EndTime:n(s,3),IsAllDay:!1,Location:"Data Center",Description:`${r} overnight deployment spanning into next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Follow-up`,StartTime:n(l,15),EndTime:n(l,16),IsAllDay:!1,Location:"Headquarters",Description:`${r} post-event follow-up on next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Kickoff Meeting`,StartTime:n(i,10),EndTime:n(i,11),IsAllDay:!1,Location:"Conference Room 1",Description:`${r} project kickoff on Oct 29`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Planning Session`,StartTime:n(s,12),EndTime:n(s,13),IsAllDay:!1,Location:"War Room",Description:`${r} sprint planning on Oct 30`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Customer Demo`,StartTime:n(l,11),EndTime:n(l,12),IsAllDay:!1,Location:"Online",Description:`${r} product demo on Oct 31`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Design Review`,StartTime:n(g,14),EndTime:n(g,15,30),IsAllDay:!1,Location:"Design Lab",Description:`${r} design review on Nov 1`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Code Freeze`,StartTime:n(h,16),EndTime:n(h,18),IsAllDay:!1,Location:"Repository",Description:`${r} code freeze preparations on Nov 2`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Retrospective`,StartTime:n(S,10),EndTime:n(S,11,30),IsAllDay:!1,Location:"Conference Room 2",Description:`${r} sprint retrospective on Nov 3`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Team Outing`,StartTime:n(m,12),EndTime:n(m,14),IsAllDay:!1,Location:"City Park",Description:`${r} team outing on Nov 4`}]},C=()=>{const s=p.useRef(null),r=p.useRef(null),n=p.useRef(null),i=p.useRef(null),l={dataSource:I(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},g={dataSource:I(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},h=e=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:e.Subject??"Untitled",StartTime:e.StartTime??e.startTime,EndTime:e.EndTime??e.endTime,IsAllDay:e.IsAllDay??e.isAllDay,Location:e.Location??e.location,Description:e.Description??e.description}),S=(e,a)=>!!(e.current&&a&&e.current.contains(a)),m=e=>{var o,D,c,f;const a=e.target||null;if(!(!a||!e.data)&&S(i,a)){const d=e.data,y=d.Id??d.id;(D=(o=s.current)==null?void 0:o.deleteEvent)==null||D.call(o,y),(f=(c=r.current)==null?void 0:c.addEvent)==null||f.call(c,h(e.data))}},u=e=>{var o,D,c,f;const a=e.target||null;if(!(!a||!e.data)&&S(n,a)){const d=e.data,y=d.Id??d.id;(D=(o=r.current)==null?void 0:o.deleteEvent)==null||D.call(o,y),(f=(c=s.current)==null?void 0:c.addEvent)==null||f.call(c,h(e.data))}};return t.jsxs("div",{className:"control-section",children:[t.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[t.jsxs("div",{ref:n,style:{minWidth:0},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),t.jsxs(T,{className:"sf-first",ref:s,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:l,onDragStop:m,children:[t.jsx(v,{}),t.jsx(w,{}),t.jsx(x,{}),t.jsx(j,{})]})]}),t.jsxs("div",{ref:i,style:{minWidth:0},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),t.jsxs(T,{className:"sf-second",ref:r,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:g,onDragStop:u,children:[t.jsx(v,{}),t.jsx(w,{}),t.jsx(x,{}),t.jsx(j,{})]})]})]}),t.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag events between the two schedulers. When an event is dropped in the other scheduler, it is removed from the source and added to the target."})]})},U={title:"Scheduler/External Drag & Drop",parameters:{layout:"padded"},tags:["autodocs"]},E={render:()=>t.jsx(C,{})},R={render:()=>{const s=()=>{const r=p.useRef(null),n=p.useRef(null),i=p.useRef(null),l={dataSource:I(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},g={dataSource:I(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},h={dataSource:I(new Date(2017,9,30),"C"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},S=e=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:e.Subject??"Untitled",StartTime:e.StartTime??e.startTime,EndTime:e.EndTime??e.endTime,IsAllDay:e.IsAllDay??e.isAllDay,Location:e.Location??e.location,Description:e.Description??e.description}),m=e=>e?e.closest(".sf-first")?r:e.closest(".sf-second")?n:e.closest(".sf-third")?i:null:null,u=e=>a=>{var d,y,A,k;const o=a.target||null;if(!o||!a.data)return;const D=m(o);if(!D||D===e)return;const c=a.data,f=c.Id??c.id;(y=(d=e.current)==null?void 0:d.deleteEvent)==null||y.call(d,f),(k=(A=D.current)==null?void 0:A.addEvent)==null||k.call(A,S(a.data))};return t.jsx("div",{className:"control-section",children:t.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr",gap:16},children:[t.jsxs("div",{style:{minWidth:0},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),t.jsxs(T,{className:"sf-first",ref:r,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:l,onDragStop:u(r),children:[t.jsx(v,{}),t.jsx(w,{}),t.jsx(x,{}),t.jsx(j,{})]})]}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),t.jsxs(T,{className:"sf-second",ref:n,height:"350px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:g,onDragStop:u(n),children:[t.jsx(v,{}),t.jsx(w,{}),t.jsx(x,{}),t.jsx(j,{})]})]}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler C"}),t.jsxs(T,{className:"sf-third",ref:i,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:h,onDragStop:u(i),children:[t.jsx(v,{}),t.jsx(w,{}),t.jsx(x,{}),t.jsx(j,{})]})]})]})})};return t.jsx(s,{})}};var B,W,L;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <TwoSchedulerExternalDnd />
}`,...(L=(W=E.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,V,b;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const ThreeSchedulerExternalDnd: FC = () => {
      const schedulerARef = useRef<IScheduler>(null);
      const schedulerBRef = useRef<IScheduler>(null);
      const schedulerCRef = useRef<IScheduler>(null);
      const schedulerAEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'A'),
        fields: {
          id: 'Id',
          subject: 'Subject',
          location: 'Location',
          description: 'Description',
          startTime: 'StartTime',
          endTime: 'EndTime',
          isAllDay: 'IsAllDay',
          isBlock: 'IsBlock',
          isReadonly: 'IsReadonly'
        }
      };
      const schedulerBEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'B'),
        fields: {
          id: 'Id',
          subject: 'Subject',
          location: 'Location',
          description: 'Description',
          startTime: 'StartTime',
          endTime: 'EndTime',
          isAllDay: 'IsAllDay',
          isBlock: 'IsBlock',
          isReadonly: 'IsReadonly'
        }
      };
      const schedulerCEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'C'),
        fields: {
          id: 'Id',
          subject: 'Subject',
          location: 'Location',
          description: 'Description',
          startTime: 'StartTime',
          endTime: 'EndTime',
          isAllDay: 'IsAllDay',
          isBlock: 'IsBlock',
          isReadonly: 'IsReadonly'
        }
      };
      const toSchedulerRecord = (data: EventModel): Record<string, any> => ({
        Id: Math.random().toString(36).slice(2) + Date.now().toString(36),
        Subject: data.Subject ?? 'Untitled',
        StartTime: data.StartTime ?? data.startTime,
        EndTime: data.EndTime ?? data.endTime,
        IsAllDay: data.IsAllDay ?? data.isAllDay,
        Location: data.Location ?? data.location,
        Description: data.Description ?? data.description
      });
      const getTargetSchedulerRef = (target: HTMLElement | null) => {
        if (!target) {
          return null;
        }
        if (target.closest('.sf-first')) {
          return schedulerARef;
        }
        if (target.closest('.sf-second')) {
          return schedulerBRef;
        }
        if (target.closest('.sf-third')) {
          return schedulerCRef;
        }
        return null;
      };
      const createDragStopHandler = (sourceRef: React.RefObject<IScheduler>) => (args: SchedulerDragEvent): void => {
        const targetEl = args.target as HTMLElement || null;
        if (!targetEl || !args.data) {
          return;
        }
        const targetRef = getTargetSchedulerRef(targetEl);
        if (!targetRef || targetRef === sourceRef) {
          return;
        }
        const raw = args.data as any;
        const id = raw.Id ?? raw.id;
        sourceRef.current?.deleteEvent?.(id as any);
        targetRef.current?.addEvent?.(toSchedulerRecord(args.data));
      };
      return <div className="control-section">\r
          <div className="schedulers-container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16
        }}>\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler A</h4>\r
              <Scheduler className='sf-first' ref={schedulerARef} height={'400px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerAEventSettings} onDragStop={createDragStopHandler(schedulerARef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler B</h4>\r
              <Scheduler className='sf-second' ref={schedulerBRef} height={'350px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerBEventSettings} onDragStop={createDragStopHandler(schedulerBRef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler C</h4>\r
              <Scheduler className='sf-third' ref={schedulerCRef} height={'400px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerCEventSettings} onDragStop={createDragStopHandler(schedulerCRef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
          </div>\r
        </div>;
    };
    return <ThreeSchedulerExternalDnd />;
  }
}`,...(b=(V=R.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};const Y=["SchedulerToScheduler","ThreeSchedulersExternalDnd"];export{E as SchedulerToScheduler,R as ThreeSchedulersExternalDnd,Y as __namedExportsOrder,U as default};
