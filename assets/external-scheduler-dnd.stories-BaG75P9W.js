import{j as e}from"./index-7s7xaQU8.js";import{r as T}from"./index-CC6F48bw.js";import{S as I,D as A,W as R,a as b,M as k}from"./month-view-FGFzg5jE.js";/* empty css               */import"./index-qiR4Kxfn.js";const M=(i,a="")=>{const s=(f,t,n=0)=>new Date(f.getFullYear(),f.getMonth(),f.getDate(),t,n),o=new Date(i);o.setDate(i.getDate()-1);const D=new Date(i);D.setDate(i.getDate()+1);const w=new Date(i);w.setDate(i.getDate()+2);const S=new Date(i);S.setDate(i.getDate()+3);const v=new Date(i);v.setDate(i.getDate()+4);const y=new Date(i);return y.setDate(i.getDate()+5),[{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Offsite (All day)`,StartTime:new Date(o.getFullYear(),o.getMonth(),o.getDate()),EndTime:new Date(o.getFullYear(),o.getMonth(),o.getDate()),IsAllDay:!0,Location:"Offsite",Description:`${a} company offsite - previous day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Standup`,StartTime:s(D,8),EndTime:s(D,10,30),IsAllDay:!1,Location:"Online",Description:`${a} daily standup`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Deployment`,StartTime:s(i,1),EndTime:s(i,3),IsAllDay:!1,Location:"Data Center",Description:`${a} overnight deployment spanning into next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Follow-up`,StartTime:s(D,15),EndTime:s(D,16),IsAllDay:!1,Location:"Headquarters",Description:`${a} post-event follow-up on next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Kickoff Meeting`,StartTime:s(o,10),EndTime:s(o,11),IsAllDay:!1,Location:"Conference Room 1",Description:`${a} project kickoff on Oct 29`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Planning Session`,StartTime:s(i,12),EndTime:s(i,13),IsAllDay:!1,Location:"War Room",Description:`${a} sprint planning on Oct 30`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Customer Demo`,StartTime:s(D,11),EndTime:s(D,12),IsAllDay:!1,Location:"Online",Description:`${a} product demo on Oct 31`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Design Review`,StartTime:s(w,14),EndTime:s(w,15,30),IsAllDay:!1,Location:"Design Lab",Description:`${a} design review on Nov 1`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Code Freeze`,StartTime:s(S,16),EndTime:s(S,18),IsAllDay:!1,Location:"Repository",Description:`${a} code freeze preparations on Nov 2`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Retrospective`,StartTime:s(v,10),EndTime:s(v,11,30),IsAllDay:!1,Location:"Conference Room 2",Description:`${a} sprint retrospective on Nov 3`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${a} Team Outing`,StartTime:s(y,12),EndTime:s(y,14),IsAllDay:!1,Location:"City Park",Description:`${a} team outing on Nov 4`}]},J=()=>{const i=T.useRef(null),a=T.useRef(null),s=T.useRef(null),o=T.useRef(null),D={dataSource:M(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},w={dataSource:M(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},S=t=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:t.Subject??"Untitled",StartTime:t.StartTime??t.startTime,EndTime:t.EndTime??t.endTime,IsAllDay:t.IsAllDay??t.isAllDay,Location:t.Location??t.location,Description:t.Description??t.description}),v=(t,n)=>!!(t.current&&n&&t.current.contains(n)),y=t=>{var r,u,c,p;const n=t.target||null;if(!(!n||!t.data)&&v(o,n)){const d=t.data,l=d.Id??d.id;(u=(r=i.current)==null?void 0:r.deleteEvent)==null||u.call(r,l),(p=(c=a.current)==null?void 0:c.addEvent)==null||p.call(c,S(t.data))}},f=t=>{var r,u,c,p;const n=t.target||null;if(!(!n||!t.data)&&v(s,n)){const d=t.data,l=d.Id??d.id;(u=(r=a.current)==null?void 0:r.deleteEvent)==null||u.call(r,l),(p=(c=i.current)==null?void 0:c.addEvent)==null||p.call(c,S(t.data))}};return e.jsxs("div",{className:"control-section",children:[e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsxs("div",{ref:s,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(I,{className:"sf-first",ref:i,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:D,onDragStop:y,children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]}),e.jsxs("div",{ref:o,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(I,{className:"sf-second",ref:a,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:w,onDragStop:f,children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]})]}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag events between the two schedulers. When an event is dropped in the other scheduler, it is removed from the source and added to the target."})]})},X={title:"Scheduler/External Drag & Drop",parameters:{layout:"padded"},tags:["autodocs"]},C={render:()=>e.jsx(J,{})},W={render:()=>{const i=()=>{const a=T.useRef(null),s=T.useRef(null),o=T.useRef(null),D={dataSource:M(new Date(2017,9,30),"A"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},w={dataSource:M(new Date(2017,9,30),"B"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},S={dataSource:M(new Date(2017,9,30),"C"),fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},v=t=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:t.Subject??"Untitled",StartTime:t.StartTime??t.startTime,EndTime:t.EndTime??t.endTime,IsAllDay:t.IsAllDay??t.isAllDay,Location:t.Location??t.location,Description:t.Description??t.description}),y=t=>t?t.closest(".sf-first")?a:t.closest(".sf-second")?s:t.closest(".sf-third")?o:null:null,f=t=>n=>{var d,l,h,E;const r=n.target||null;if(!r||!n.data)return;const u=y(r);if(!u||u===t)return;const c=n.data,p=c.Id??c.id;(l=(d=t.current)==null?void 0:d.deleteEvent)==null||l.call(d,p),(E=(h=u.current)==null?void 0:h.addEvent)==null||E.call(h,v(n.data))};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr",gap:16},children:[e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(I,{className:"sf-first",ref:a,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:D,onDragStop:f(a),children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(I,{className:"sf-second",ref:s,height:"350px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:w,onDragStop:f(s),children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler C"}),e.jsxs(I,{className:"sf-third",ref:o,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:S,onDragStop:f(o),children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]})]})})};return e.jsx(i,{})}},N={render:()=>{const i=()=>{const a=T.useRef(null),s=T.useRef(null),[o,D]=T.useState([{id:"ext-1",Subject:"Interview",Description:"Candidate interview",Duration:60},{id:"ext-2",Subject:"Lunch",Description:"Team lunch",Duration:60},{id:"ext-3",Subject:"Code Review",Description:"Review PRs",Duration:30}]),[w,S]=T.useState(M(new Date(2017,9,30),"E")),v=(n,r)=>{const u={ExternalId:r.id,Subject:r.Subject,Description:r.Description,Duration:r.Duration,__external:!0};try{n.dataTransfer.setData("application/json",JSON.stringify(u))}catch{}n.dataTransfer.effectAllowed="copy"},y=n=>{n.preventDefault(),n.stopPropagation();const r=n.target||null;if(!r||!r.closest(".sf-scheduler"))return;const c=!!r.closest('.sf-all-day-row, [data-allday="true"]'),p=!!r.closest(".sf-work-cells"),d=!!r.closest(".sf-month-view");if(!c&&!p&&!d)return;let l=null;try{const h=n.dataTransfer.getData("application/json");h&&(l=JSON.parse(h))}catch{}if(l&&l){const h=l.ExternalId??l.id,E=Number(l.Duration??60);let m=new Date,L=new Date(m.getTime()+E*6e4);if(p){const g=r.closest(".sf-work-cells")??r;if(g){const x=g.getAttribute("data-date");if(x){const j=parseInt(x,10);isNaN(j)||(m=new Date(j),L=new Date(m.getTime()+E*6e4))}}}else if(c){const g=r.closest("[data-date]");if(g){const x=g.getAttribute("data-date");if(x){const j=parseInt(x,10);isNaN(j)||(m=new Date(j),L=new Date(m.getFullYear(),m.getMonth(),m.getDate()))}}}else if(d){const g=r.closest("[data-date]");if(g){const x=g.getAttribute("data-date");if(x){const j=parseInt(x,10);isNaN(j)||(m=new Date(j),L=new Date(m.getFullYear(),m.getMonth(),m.getDate()))}}}const _={Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:l.Subject??"Untitled",StartTime:m,EndTime:L,IsAllDay:c||d,Location:l.Location??"",Description:l.Description??""};S(g=>[...g,_]),h&&D(g=>g.filter(x=>x.id!==h))}},f=n=>{if(!n.data)return;const r=n.data,u=n.target||null;if(s.current&&u&&s.current.contains(u)){const c=r.Id??r.id;S(E=>E.filter(m=>m.Id!==c));const p=r.StartTime??r.startTime??r.start,d=r.EndTime??r.endTime??r.end;let l=60;try{l=Math.max(15,Math.round((new Date(d).getTime()-new Date(p).getTime())/6e4))}catch{}const h={id:"ext-"+Math.random().toString(36).slice(2),Subject:r.subject??r.Subject??"Untitled",Description:r.description??r.Description??"",Duration:l};D(E=>[...E,h]);return}},t={dataSource:w,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay"}};return e.jsx("div",{className:"control-section",onDragOver:n=>{n.preventDefault(),n.stopPropagation()},onDrop:y,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"External Events"}),e.jsx("div",{className:"external-list",ref:s,style:{border:"1px dashed #ccc",padding:8,minHeight:200},children:o.map(n=>e.jsxs("div",{draggable:!0,onDragStart:r=>v(r,n),style:{padding:8,marginBottom:8,background:"#fff",cursor:"grab",border:"1px solid #ddd"},children:[e.jsx("strong",{children:n.Subject}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:n.Description})]},n.id))}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag items to/from the Scheduler. Events dropped here are removed from the Scheduler."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler"}),e.jsxs(I,{ref:a,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".control-section",interval:15},eventSettings:t,onDragStop:f,children:[e.jsx(A,{}),e.jsx(R,{}),e.jsx(b,{}),e.jsx(k,{})]})]})]})})};return e.jsx(i,{})}};var B,V,$;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <TwoSchedulerExternalDnd />
}`,...($=(V=C.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var F,O,H;W.parameters={...W.parameters,docs:{...(F=W.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(O=W.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var P,U,Y;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const ExternalListToSchedulerComp: FC = () => {
      const schedulerRef = useRef<IScheduler>(null);
      const externalWrapperRef = useRef<HTMLDivElement>(null);
      const [externalItems, setExternalItems] = useState([{
        id: 'ext-1',
        Subject: 'Interview',
        Description: 'Candidate interview',
        Duration: 60
      }, {
        id: 'ext-2',
        Subject: 'Lunch',
        Description: 'Team lunch',
        Duration: 60
      }, {
        id: 'ext-3',
        Subject: 'Code Review',
        Description: 'Review PRs',
        Duration: 30
      }]);
      const [schedulerEvents, setSchedulerEvents] = useState(makeEventsForDate(new Date(2017, 9, 30), 'E'));

      // List item drag start - mark as external
      const onExternalDragStart = (e: React.DragEvent, item: any) => {
        const payload = {
          ExternalId: item.id,
          Subject: item.Subject,
          Description: item.Description,
          Duration: item.Duration,
          __external: true
        };
        try {
          e.dataTransfer.setData('application/json', JSON.stringify(payload));
        } catch {}
        // try { e.dataTransfer.setData('text/plain', JSON.stringify(payload)); } catch {}
        e.dataTransfer.effectAllowed = 'copy';
      };

      // List drop handler - receive external list items from scheduler
      const onExternalListDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const targetEl = e.target as HTMLElement || null;
        if (!targetEl) {
          return;
        }

        // Check if dropped inside the scheduler area (valid cell detection)
        const isDroppedInScheduler = targetEl.closest('.sf-scheduler');
        if (!isDroppedInScheduler) {
          return;
        }

        // Check if it's in a valid cell (allday, time slot, or month cell)
        const isAllDayCell = !!targetEl.closest('.sf-all-day-row, [data-allday="true"]');
        const isTimeSlotCell = !!targetEl.closest('.sf-work-cells');
        const isMonthCell = !!targetEl.closest('.sf-month-view');
        if (!isAllDayCell && !isTimeSlotCell && !isMonthCell) {
          return;
        }

        // Try to get the dragged data
        let droppedData: any = null;
        try {
          const jsonData = e.dataTransfer.getData('application/json');
          if (jsonData) {
            droppedData = JSON.parse(jsonData);
          }
        } catch {}
        if (!droppedData) {
          return;
        }

        // Create event from external item
        if (droppedData) {
          const externalId = droppedData.ExternalId ?? droppedData.id;
          const durationMin = Number(droppedData.Duration ?? 60);
          let startTime = new Date();
          let endTime = new Date(startTime.getTime() + durationMin * 60000);

          // For time slot cells, extract the timestamp from the cell's data-date attribute
          if (isTimeSlotCell) {
            const cellEl = targetEl.closest('.sf-work-cells') ?? targetEl;
            if (cellEl) {
              const cellDateStr = cellEl.getAttribute('data-date');
              if (cellDateStr) {
                const cellTimestamp = parseInt(cellDateStr, 10);
                if (!isNaN(cellTimestamp)) {
                  startTime = new Date(cellTimestamp);
                  endTime = new Date(startTime.getTime() + durationMin * 60000);
                }
              }
            }
          }
          // For all-day cells, set to start of day
          else if (isAllDayCell) {
            const cellEl = targetEl.closest('[data-date]');
            if (cellEl) {
              const cellDateStr = cellEl.getAttribute('data-date');
              if (cellDateStr) {
                const cellTimestamp = parseInt(cellDateStr, 10);
                if (!isNaN(cellTimestamp)) {
                  startTime = new Date(cellTimestamp);
                  endTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate());
                }
              }
            }
          }
          // For month cells, set to start of day
          else if (isMonthCell) {
            const cellEl = targetEl.closest('[data-date]');
            if (cellEl) {
              const cellDateStr = cellEl.getAttribute('data-date');
              if (cellDateStr) {
                const cellTimestamp = parseInt(cellDateStr, 10);
                if (!isNaN(cellTimestamp)) {
                  startTime = new Date(cellTimestamp);
                  endTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate());
                }
              }
            }
          }
          const record = {
            Id: Math.random().toString(36).slice(2) + Date.now().toString(36),
            Subject: droppedData.Subject ?? 'Untitled',
            StartTime: startTime,
            EndTime: endTime,
            IsAllDay: isAllDayCell || isMonthCell,
            Location: droppedData.Location ?? '',
            Description: droppedData.Description ?? ''
          };

          // Add event to scheduler state
          setSchedulerEvents(prev => [...prev, record]);

          // Remove from external items
          if (externalId) {
            setExternalItems(prev => prev.filter(it => it.id !== externalId));
          }
        }
      };

      // Scheduler drag stop handler - detects where the drop happened
      const onSchedulerDragStop = (args: SchedulerDragEvent): void => {
        if (!args.data) {
          return;
        }
        const raw = args.data as any;
        const targetEl = args.target as HTMLElement || null;

        // Scheduler → List: if dropped inside external list area, remove event and add to list
        if (externalWrapperRef.current && targetEl && externalWrapperRef.current.contains(targetEl)) {
          const id = raw.Id ?? raw.id;

          // Remove from scheduler state
          setSchedulerEvents(prev => prev.filter(evt => evt.Id !== id));
          const start = raw.StartTime ?? raw.startTime ?? raw.start;
          const end = raw.EndTime ?? raw.endTime ?? raw.end;
          let durationMin = 60;
          try {
            durationMin = Math.max(15, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60000));
          } catch {}
          const newItem = {
            id: 'ext-' + Math.random().toString(36).slice(2),
            Subject: raw.subject ?? raw.Subject ?? 'Untitled',
            Description: raw.description ?? raw.Description ?? '',
            Duration: durationMin
          };
          setExternalItems(prev => [...prev, newItem]);
          return;
        }
      };
      const eventSettings = {
        dataSource: schedulerEvents,
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
      return <div className="control-section" onDragOver={e => {
        e.preventDefault();
        e.stopPropagation();
      }} onDrop={onExternalListDrop}>\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 16
        }}>\r
            <div>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>External Events</h4>\r
              <div className="external-list" ref={externalWrapperRef} style={{
              border: '1px dashed #ccc',
              padding: 8,
              minHeight: 200
            }}>\r
                {externalItems.map(it => <div key={it.id} draggable onDragStart={e => onExternalDragStart(e, it)} style={{
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
                Drag items to/from the Scheduler. Events dropped here are removed from the Scheduler.\r
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
}`,...(Y=(U=N.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const Z=["SchedulerToScheduler","ThreeSchedulersExternalDnd","ExternalListToScheduler"];export{N as ExternalListToScheduler,C as SchedulerToScheduler,W as ThreeSchedulersExternalDnd,Z as __namedExportsOrder,X as default};
