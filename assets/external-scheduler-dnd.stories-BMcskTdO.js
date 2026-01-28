import{j as e}from"./index-7s7xaQU8.js";import{r as p}from"./index-CC6F48bw.js";import{S as v,D as x,W as T,a as w,M as j}from"./month-view-8qfidW35.js";/* empty css               */import"./index-qiR4Kxfn.js";const E=(a,r="")=>{const n=(S,t,c=0)=>new Date(S.getFullYear(),S.getMonth(),S.getDate(),t,c),o=new Date(a);o.setDate(a.getDate()-1);const u=new Date(a);u.setDate(a.getDate()+1);const m=new Date(a);m.setDate(a.getDate()+2);const i=new Date(a);i.setDate(a.getDate()+3);const s=new Date(a);s.setDate(a.getDate()+4);const l=new Date(a);return l.setDate(a.getDate()+5),[{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Offsite (All day)`,StartTime:new Date(o.getFullYear(),o.getMonth(),o.getDate()),EndTime:new Date(o.getFullYear(),o.getMonth(),o.getDate()),IsAllDay:!0,Location:"Offsite",Description:`${r} company offsite - previous day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Standup`,StartTime:n(u,8),EndTime:n(u,10,30),IsAllDay:!1,Location:"Online",Description:`${r} daily standup`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Deployment`,StartTime:n(a,1),EndTime:n(a,3),IsAllDay:!1,Location:"Data Center",Description:`${r} overnight deployment spanning into next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Follow-up`,StartTime:n(u,15),EndTime:n(u,16),IsAllDay:!1,Location:"Headquarters",Description:`${r} post-event follow-up on next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Kickoff Meeting`,StartTime:n(o,10),EndTime:n(o,11),IsAllDay:!1,Location:"Conference Room 1",Description:`${r} project kickoff on Oct 29`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Planning Session`,StartTime:n(a,12),EndTime:n(a,13),IsAllDay:!1,Location:"War Room",Description:`${r} sprint planning on Oct 30`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Customer Demo`,StartTime:n(u,11),EndTime:n(u,12),IsAllDay:!1,Location:"Online",Description:`${r} product demo on Oct 31`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Design Review`,StartTime:n(m,14),EndTime:n(m,15,30),IsAllDay:!1,Location:"Design Lab",Description:`${r} design review on Nov 1`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Code Freeze`,StartTime:n(i,16),EndTime:n(i,18),IsAllDay:!1,Location:"Repository",Description:`${r} code freeze preparations on Nov 2`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Retrospective`,StartTime:n(s,10),EndTime:n(s,11,30),IsAllDay:!1,Location:"Conference Room 2",Description:`${r} sprint retrospective on Nov 3`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${r} Team Outing`,StartTime:n(l,12),EndTime:n(l,14),IsAllDay:!1,Location:"City Park",Description:`${r} team outing on Nov 4`}]},F=()=>{const a=p.useRef(null),r=p.useRef(null),n=p.useRef(null),o=p.useRef(null),u={dataSource:E(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},m={dataSource:E(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},i=t=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:t.Subject??"Untitled",StartTime:t.StartTime??t.startTime,EndTime:t.EndTime??t.endTime,IsAllDay:t.IsAllDay??t.isAllDay,Location:t.Location??t.location,Description:t.Description??t.description}),s=(t,c)=>!!(t.current&&c&&t.current.contains(c)),l=t=>{var d,D,h,f;const c=t.target||null;if(!(!c||!t.data)&&s(o,c)){const g=t.data,y=g.Id??g.id;(D=(d=a.current)==null?void 0:d.deleteEvent)==null||D.call(d,y),(f=(h=r.current)==null?void 0:h.addEvent)==null||f.call(h,i(t.data))}},S=t=>{var d,D,h,f;const c=t.target||null;if(!(!c||!t.data)&&s(n,c)){const g=t.data,y=g.Id??g.id;(D=(d=r.current)==null?void 0:d.deleteEvent)==null||D.call(d,y),(f=(h=a.current)==null?void 0:h.addEvent)==null||f.call(h,i(t.data))}};return e.jsxs("div",{className:"control-section",children:[e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsxs("div",{ref:n,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(v,{className:"sf-first",ref:a,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:u,onDragStop:l,children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]}),e.jsxs("div",{ref:o,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(v,{className:"sf-second",ref:r,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:m,onDragStop:S,children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]})]}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag events between the two schedulers. When an event is dropped in the other scheduler, it is removed from the source and added to the target."})]})},P={title:"Scheduler/External Drag & Drop",parameters:{layout:"padded"},tags:["autodocs"]},A={render:()=>e.jsx(F,{})},R={render:()=>{const a=()=>{const r=p.useRef(null),n=p.useRef(null),o=p.useRef(null),u={dataSource:E(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},m={dataSource:E(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},i={dataSource:E(new Date(2017,9,30),"C"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},s=t=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:t.Subject??"Untitled",StartTime:t.StartTime??t.startTime,EndTime:t.EndTime??t.endTime,IsAllDay:t.IsAllDay??t.isAllDay,Location:t.Location??t.location,Description:t.Description??t.description}),l=t=>t?t.closest(".sf-first")?r:t.closest(".sf-second")?n:t.closest(".sf-third")?o:null:null,S=t=>c=>{var g,y,I,k;const d=c.target||null;if(!d||!c.data)return;const D=l(d);if(!D||D===t)return;const h=c.data,f=h.Id??h.id;(y=(g=t.current)==null?void 0:g.deleteEvent)==null||y.call(g,f),(k=(I=D.current)==null?void 0:I.addEvent)==null||k.call(I,s(c.data))};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr",gap:16},children:[e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(v,{className:"sf-first",ref:r,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:u,onDragStop:S(r),children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(v,{className:"sf-second",ref:n,height:"350px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:m,onDragStop:S(n),children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler C"}),e.jsxs(v,{className:"sf-third",ref:o,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:i,onDragStop:S(o),children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]})]})})};return e.jsx(a,{})}},b={render:()=>{const a=()=>{const r=p.useRef(null),n=[{Subject:"Interview",Description:"Candidate interview",Duration:60},{Subject:"Lunch",Description:"Team lunch",Duration:60},{Subject:"Code Review",Description:"Review PRs",Duration:30}],o=(i,s)=>{const l={Subject:s.Subject,Description:s.Description,Duration:s.Duration,__external:!0};try{i.dataTransfer.setData("application/json",JSON.stringify(l))}catch{}try{i.dataTransfer.setData("text/plain",JSON.stringify(l))}catch{}i.dataTransfer.effectAllowed="copy"},u=i=>{var d,D;if(!i.data)return;const s=i.data;if(!s.__external)return;const l=i.startTime||i.start||new Date,S=Number(s.Duration??60),t=new Date(l.getTime()+S*6e4),c={Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:s.Subject??"Untitled",StartTime:l,EndTime:t,IsAllDay:s.IsAllDay??!1,Location:s.Location??"",Description:s.Description??""};(D=(d=r.current)==null?void 0:d.addEvent)==null||D.call(d,c)},m={dataSource:[],fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay"}};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"External Events"}),e.jsx("div",{className:"external-list",style:{border:"1px dashed #ccc",padding:8},children:n.map((i,s)=>e.jsxs("div",{draggable:!0,onDragStart:l=>o(l,i),style:{padding:8,marginBottom:8,background:"#fff",cursor:"grab",border:"1px solid #ddd"},children:[e.jsx("strong",{children:i.Subject}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:i.Description})]},s))}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag these items onto the Scheduler to create events."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler"}),e.jsxs(v,{ref:r,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".control-section",interval:15},eventSettings:m,onDragStop:u,children:[e.jsx(x,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{})]})]})]})})};return e.jsx(a,{})}};var L,W,B;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <TwoSchedulerExternalDnd />
}`,...(B=(W=A.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var M,C,V;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(C=R.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var N,$,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const ExternalListToSchedulerComp: FC = () => {
      const schedulerRef = useRef<IScheduler>(null);
      const externalItems = [{
        Subject: 'Interview',
        Description: 'Candidate interview',
        Duration: 60
      }, {
        Subject: 'Lunch',
        Description: 'Team lunch',
        Duration: 60
      }, {
        Subject: 'Code Review',
        Description: 'Review PRs',
        Duration: 30
      }];
      const onExternalDragStart = (e: React.DragEvent, item: any) => {
        const payload = {
          Subject: item.Subject,
          Description: item.Description,
          Duration: item.Duration,
          __external: true
        };
        try {
          e.dataTransfer.setData('application/json', JSON.stringify(payload));
        } catch {}
        try {
          e.dataTransfer.setData('text/plain', JSON.stringify(payload));
        } catch {}
        e.dataTransfer.effectAllowed = 'copy';
      };
      const onSchedulerDragStop = (args: SchedulerDragEvent): void => {
        if (!args.data) {
          return;
        }
        const raw = args.data as any;
        if (!raw.__external) {
          return;
        }
        const start = (args as EventModel).startTime as Date || (args as EventModel).start as unknown as Date || new Date();
        const durationMin = Number(raw.Duration ?? 60);
        const end = new Date(start.getTime() + durationMin * 60000);
        const record = {
          Id: Math.random().toString(36).slice(2) + Date.now().toString(36),
          Subject: raw.Subject ?? 'Untitled',
          StartTime: start,
          EndTime: end,
          IsAllDay: raw.IsAllDay ?? false,
          Location: raw.Location ?? '',
          Description: raw.Description ?? ''
        };
        schedulerRef.current?.addEvent?.(record);
      };
      const eventSettings = {
        dataSource: [],
        fields: {
          id: 'Id',
          subject: 'Subject',
          location: 'Location',
          description: 'Description',
          startTime: 'StartTime',
          endTime: 'EndTime',
          isAllDay: 'IsAllDay'
        }
      };
      return <div className="control-section">\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 16
        }}>\r
            <div>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>External Events</h4>\r
              <div className="external-list" style={{
              border: '1px dashed #ccc',
              padding: 8
            }}>\r
                {externalItems.map((it, idx) => <div key={idx} draggable onDragStart={e => onExternalDragStart(e, it)} style={{
                padding: 8,
                marginBottom: 8,
                background: '#fff',
                cursor: 'grab',
                border: '1px solid #ddd'
              }}>\r
                    <strong>{it.Subject}</strong>\r
                    <div style={{
                  fontSize: 12,
                  color: '#666'
                }}>{it.Description}</div>\r
                  </div>)}\r
              </div>\r
              <p style={{
              marginTop: 12,
              color: '#555'
            }}>\r
                Drag these items onto the Scheduler to create events.\r
              </p>\r
            </div>\r
\r
            <div>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler</h4>\r
              <Scheduler ref={schedulerRef} height={'550px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.control-section',
              interval: 15
            }} eventSettings={eventSettings} onDragStop={onSchedulerDragStop}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
          </div>\r
        </div>;
    };
    return <ExternalListToSchedulerComp />;
  }
}`,...(O=($=b.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const Y=["SchedulerToScheduler","ThreeSchedulersExternalDnd","ExternalListToScheduler"];export{b as ExternalListToScheduler,A as SchedulerToScheduler,R as ThreeSchedulersExternalDnd,Y as __namedExportsOrder,P as default};
