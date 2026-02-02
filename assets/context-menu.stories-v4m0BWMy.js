import{j as a,r as Ke}from"./index-7s7xaQU8.js";import{s as _e}from"./dataSource-CrVxx1x3.js";import{j as me,u as Ve,d as O,n as Xe,p as Ye,o as Le,q as we,r as je,A as ze,s as Te,t as Ue,S as $e,D as Fe,W as Ge,M as Je}from"./month-view-biA_O7uk.js";import{r as l}from"./index-CC6F48bw.js";import{D as Qe}from"./day-DckidZWe.js";import"./index-qiR4Kxfn.js";const et=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),tt=me(et),nt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),st=me(nt),rt=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),lt=me(rt),ot="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",ct="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",fe=()=>null,it=z=>{const{item:T,itemClasses:W,isFocused:I,hasSubmenu:D,isDisabled:k,isSelected:R,isSeparator:f,onMouseEnter:H,onClick:y,getContent:A,focusedItemRef:Z,attributes:_}=z,{ripple:M}=Ve(),{rippleMouseDown:U,Ripple:E}=Ue(M),g=S=>{M&&!k&&!f&&U(S)};return a.jsxs("li",{ref:I?Z:void 0,className:W,onMouseEnter:H,onMouseDown:g,onClick:y,tabIndex:-1,role:"menuitem","aria-disabled":f?void 0:k,"aria-haspopup":f?void 0:D,"aria-expanded":f?void 0:!!(D&&R),"aria-label":f?"separator":T.text||void 0,..._,children:[!f&&(T.url?a.jsx("a",{className:"sf-menu-url",href:T.url,onClick:S=>S.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:A(T)})}):A(T)),D&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Te,{d:ot,"aria-label":"submenu-icon"})}),M&&!k&&!f&&a.jsx(E,{})]})},at=l.forwardRef((z,T)=>{const{items:W=[],hoverDelay:I=0,onOpen:D,onClose:k,onSelect:R,open:f,offset:H,animation:y={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:A,closeOnScroll:Z=!0,allowBrowserContext:_=!1,targetRef:M,className:U,children:E,itemTemplate:g,...S}=z,L=l.useRef(null),v=l.useRef(null),[N,q]=l.useState(!1),[V,Q]=l.useState({x:0,y:0}),[o,$]=l.useState([]),Y=l.useRef(null),p=l.useRef(new Map),[d,B]=l.useState({focusedItems:null,hoveredItems:null}),oe=l.useRef(null),he=l.useRef(f),{dir:K}=Ve(),P=l.useRef([]),ee=l.useCallback(e=>{var t;if(!(_&&e.ctrlKey)){if(O.isIos&&pe.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];Q({x:n.clientX,y:n.clientY})}else e.preventDefault(),Q({x:e.pageX,y:e.pageY});D==null||D(e.originalEvent?e.originalEvent:e),!(D&&f===!1)&&q(!0)}},[D,f,_]),pe=l.useRef(Xe(O.isIos&&M?M:{current:null},{tapHold:ee})),Ne={items:P.current,hoverDelay:I,animation:y,open:f,offset:H,itemOnClick:A,targetRef:M,allowBrowserContext:_,closeOnScroll:Z,itemTemplate:g};l.useEffect(()=>(Ye("contextmenu"),()=>{var e,t,n;(e=p.current)==null||e.clear(),Y.current&&(clearTimeout(Y.current),Y.current=null),(n=(t=pe.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const ge=e=>{var t;N&&Z&&!((t=L==null?void 0:L.current)!=null&&t.contains(e.target))&&F(e)};l.useEffect(()=>(Z&&document.addEventListener("scroll",ge,!0),()=>{document.removeEventListener("scroll",ge,!0)}),[N,Z,k,f]),l.useEffect(()=>{const e=M==null?void 0:M.current;return e&&e.addEventListener("contextmenu",ee),()=>{e&&e.removeEventListener("contextmenu",ee)}},[M,D,ee]),l.useEffect(()=>{!f&&he.current===f||(he.current=f,f?(H&&H.left!==void 0&&H.top!==void 0&&Q({x:H.left,y:H.top}),q(!0)):ce())},[f,H]),l.useEffect(()=>{var e;if(N){let t=V.x,n=V.y;const s=Le(v.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=v==null?void 0:v.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=we(v.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==V.x||n!==V.y)&&Q({x:t,y:n}),ne(v.current),document.addEventListener("mousedown",ie)}else document.removeEventListener("mousedown",ie);return()=>document.removeEventListener("mousedown",ie)},[N,V]),l.useEffect(()=>{oe.current&&oe.current.focus()},[d]),l.useEffect(()=>{const e=E?l.Children.toArray(E).filter(n=>l.isValidElement(n)&&n.type===fe):null,t=e!=null&&e.length?Oe(e):W;P.current=Ae(t)},[W,E]),l.useImperativeHandle(T,()=>({...Ne,element:L.current})),l.useEffect(()=>{var e,t,n,s,r;if(o.length>0){const i=o[o.length-1].parentIndex.join("-"),c=(e=p.current)==null?void 0:e.get(i);if(O.isDevice){ne(c);return}const m=o[o.length-1];if(m.positionChanged){ne(c);return}let h=m.position.x,C=m.position.y;const x=Le(c,document.documentElement,K==="rtl"?h-((c==null?void 0:c.offsetWidth)||0):h,C);(x.includes("left")||x.includes("right"))&&(h=je(m.currentTarget,K==="rtl"?"right":"left","top").left,h=K==="rtl"?h:h-((c==null?void 0:c.offsetWidth)||0)),K==="rtl"&&!x.includes("right")&&!x.includes("left")&&(h=h-(((n=(t=p.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),x.includes("bottom")&&(C=we(c,null,{X:!1,Y:!0},{top:C,left:h}).top);const u=o.length>1?o[o.length-2].parentIndex.join("-"):"",w=((s=p.current)==null?void 0:s.size)===1?v.current:(r=p.current)==null?void 0:r.get(u);if(w&&!x.includes("right")){const j=w.offsetWidth-w.clientWidth;j>5&&(h+=K==="rtl"?-j:j)}m.position.x!==h||m.position.y!==C?$(j=>j.map((X,de)=>{var se;return de===j.length-1?((se=p.current)==null||se.clear(),{...X,position:{x:h,y:C},positionChanged:!0}):X})):ne(c)}},[o]);const ce=l.useCallback(()=>{var e;q(!1),$([]),(e=p==null?void 0:p.current)==null||e.clear(),B({focusedItems:null,hoveredItems:null})},[]),F=l.useCallback(e=>{k==null||k(e),!(k&&f===!0)&&ce()},[k,f,ce]),ie=e=>{var t;(t=L.current)!=null&&t.contains(e.target)||F(e)},xe=e=>{if(!l.isValidElement(e)||e.type!==fe)return null;const{children:t,text:n,id:s,icon:r,url:i,separator:c,disabled:m,...h}=e.props,C={text:n,id:s,icon:r,url:i,separator:c,disabled:m};if(t){const x=typeof t=="function"?t:l.Children.toArray(t).filter(w=>l.isValidElement(w)&&w.type!==fe);x.length>0&&(C.children=typeof x!="function"&&x.length===1?x[0]:x);const u=l.Children.toArray(t).map(xe).filter(Boolean);u.length>0&&(C.items=u)}return Object.keys(h).length>0&&(C.htmlAttributes=h),C},Oe=e=>{if(!e)return W;const t=l.Children.toArray(e).map(xe).filter(Boolean);return t.length>0?t:W},Ae=e=>{if(!O.isDevice)return e;const t=n=>n.map(s=>{var r,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(r=s.items[0])==null?void 0:r.icon)==null?void 0:i.key)==="previous";let m=s.items;return c||(m=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),m=t(m),{...s,items:m}}return s});return t(e)},ve=(e,t)=>{var r;if(!t||!v.current)return;let n=V.x,s=V.y;if(!O.isDevice){const i=je(t,K==="rtl"?"left":"right","top");s=i.top,n=i.left}$(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=p.current)==null||r.clear()},te=()=>{var e;o.length<1||($(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=p.current)==null||e.clear())},ne=e=>{var n;if(!e)return;if(y==null||y.duration&&y.duration<=0||(y==null?void 0:y.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=v.current)==null||n.focus();return}const t=ze({duration:y.duration,timingFunction:y.easing,name:y.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",y.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(y.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=v.current)==null||r.focus())}});e&&t.animate(e)},Ie=()=>{var r,i;const e=d==null?void 0:d.focusedItems,t=e?G(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;B(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(o.length>0){const c=e==null?void 0:e.slice(0,-1);s=(r=p.current.get(c.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(i=v.current)==null?void 0:i.children[e==null?void 0:e[0]];ae(e,s)},ae=(e,t)=>{Y.current&&clearTimeout(Y.current),Y.current=window.setTimeout(()=>{ve(e,t)},I)},Be=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),o.length>0?(te(),d.focusedItems&&d.focusedItems.length>1&&B(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):F(e.nativeEvent);break;case"Enter":case" ":{const n=o.length>0?G(o[o.length-1].parentIndex):P.current,s=d.focusedItems&&d.focusedItems.length>0?n[d.focusedItems[d.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){R==null||R({item:s,event:e}),F(e.nativeEvent);return}Ie(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Ee(-1);break;case"ArrowDown":e.preventDefault(),Ee(1);break;case"ArrowLeft":e.preventDefault(),d.focusedItems&&d.focusedItems.length>1&&B(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),o.length>0&&te();break;case"ArrowRight":e.preventDefault(),Ie();break;case"Home":e.preventDefault(),ue("first");break;case"End":e.preventDefault(),ue("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ue("character",t.toLowerCase()));break}},ue=(e,t)=>{var h,C,x;const n=o.length>0?G(o[o.length-1].parentIndex):P.current;if(!(n!=null&&n.length))return;const s=o.length>0?[...((h=o[o.length-1])==null?void 0:h.parentIndex)||[]]:[],r=((C=d==null?void 0:d.focusedItems)==null?void 0:C.length)===s.length+1?d.focusedItems[d.focusedItems.length-1]:-1,i=u=>u&&!u.separator&&!u.disabled,c=(u,w)=>u.text&&typeof u.text=="string"&&u.text.toLowerCase().startsWith(w);let m=-1;switch(e){case"first":m=n.findIndex(i);break;case"last":m=((x=n.map((u,w)=>({item:u,idx:w})).reverse().find(({item:u})=>i(u)))==null?void 0:x.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const u=Math.max(0,r+1),j=[...n.slice(u),...n.slice(0,u)].find(X=>i(X)&&c(X,t));j&&(m=n.indexOf(j))}break}m>=0&&(B==null||B(u=>({focusedItems:[...s,m],hoveredItems:(u==null?void 0:u.hoveredItems)||null})))},Ee=e=>{const t=o.length>0?G(o[o.length-1].parentIndex):P.current;if(t.length===0)return;const n=o.length>0?[...o[o.length-1].parentIndex]:[],s=d.focusedItems&&d.focusedItems.length===n.length+1?d.focusedItems[d.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&i<t.length;)r=(r+e+t.length)%t.length,i++;i>=t.length||B(c=>({focusedItems:[...n,r],hoveredItems:c==null?void 0:c.hoveredItems}))},G=l.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},P.current),[]),Pe=l.useMemo(()=>a.jsx(Te,{d:ct,"aria-label":"Previous"},"previous"),[]),We=e=>g?e.children||g(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),ye=(e,t)=>e.map((n,s)=>{var be,De,Me;const r=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,m=O.isDevice&&((be=n.icon)==null?void 0:be.key)==="previous",{className:h,...C}=n.htmlAttributes||{},x=r.join("-")===((De=d.focusedItems)==null?void 0:De.join("-")),u=r.join("-")===((Me=d.hoveredItems)==null?void 0:Me.join("-")),w=!n.icon&&e.find((b,re)=>re!==s&&b.icon)!==void 0,j=o.some(b=>t.length===0?b.parentIndex[0]===s:t.length===b.parentIndex.length-1&&b.parentIndex.slice(0,-1).join("-")===t.join("-")&&b.parentIndex[b.parentIndex.length-1]===s),X=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",m&&"sf-menu-header",(x||u)&&"sf-focused",j&&i&&"sf-has-submenu",w&&"sf-blank-icon",h].filter(Boolean).join(" "),de=b=>{var re,Se;if(B(J=>({focusedItems:J==null?void 0:J.focusedItems,hoveredItems:r})),!i){o.length===r.length?te():o.length>r.length&&($(o.slice(0,r.length-1)),(re=p==null?void 0:p.current)==null||re.clear());return}if(!O.isDevice&&i&&!A&&!c){if(o&&o.find(J=>J.parentIndex.join("-")===r.join("-")))return;(Se=p==null?void 0:p.current)==null||Se.clear(),ae(r,b.currentTarget)}},se=b=>{b.preventDefault(),!c&&(m?te():i?O.isDevice?ve(r,b.currentTarget):A&&ae(r,b.currentTarget):(R==null||R({item:n,event:b}),F(b.nativeEvent)))};return a.jsx(it,{item:n,itemClasses:X,isFocused:x,hasSubmenu:i,isDisabled:c,isSelected:j,isSeparator:!!n.separator,onMouseEnter:de,onClick:se,getContent:We,focusedItemRef:oe,attributes:C},r.join("-"))}),Ze=()=>o.map(({parentIndex:e,position:t,isVisible:n})=>{const s=G(e),r=e.join("-");return a.jsx("ul",{ref:i=>{i&&p.current&&p.current.set(r,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:O.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:ye(s,e)},`submenu-${r}`)}),qe=l.useMemo(()=>["sf-contextmenu","sf-control",K==="rtl"?"sf-rtl":"",U].filter(Boolean).join(" "),[K]),Ce=typeof document<"u"?document.body:null;return Ce?a.jsx(a.Fragment,{children:N&&Ke.createPortal(a.jsxs("div",{ref:L,className:qe,onKeyDown:Be,...S,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:V.y,left:V.x,display:O.isDevice&&o.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:v,children:P.current&&P.current.length>0&&ye(P.current,[])}),Ze()]}),Ce)}):null}),gt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},le={parameters:{controls:{disable:!0}},render:()=>{const z=E=>{A(E.value)},T=[{text:"New Event",id:"Add",icon:a.jsx(tt,{})},{text:"Today",id:"Today",icon:a.jsx(Qe,{})}],W=[{text:"Edit Event",id:"Edit",icon:a.jsx(lt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(st,{})}],I=l.useRef(null),D=l.useRef(null),[k,R]=l.useState(!1),[f,H]=l.useState(T),[y,A]=l.useState(new Date(2021,0,10)),Z=E=>{D.current=E},_=E=>{var q,V;const g=(E==null?void 0:E.target)??null;if(!I.current||!g)return;const S=I.current.element.querySelector(".sf-selected-cell"),L=I.current.element.querySelector(".sf-appointment-active");S==null||S.classList.remove("sf-selected-cell"),L==null||L.classList.remove("sf-appointment-active");const v=((q=g.closest)==null?void 0:q.call(g,".sf-appointment"))??null;if(v){v.classList.add("sf-appointment-active"),H(W),R(!0);return}const N=((V=g.closest)==null?void 0:V.call(g,".sf-work-cells, .sf-all-day-cell"))??null;N&&(N.classList.add("sf-selected-cell"),H(T),R(!0))},M=()=>{R(!1)},U=E=>{var v;const g=(v=E==null?void 0:E.item)==null?void 0:v.id;let S;if(!I.current||!g)return;const L=I.current.element.querySelector(".sf-appointment-active");switch(L&&(S=I.current.getEventDetails(L)),g){case"Today":{A(new Date);break}case"Add":{const N=I.current.element.querySelector(".sf-selected-cell"),q=I.current.getCellDetails(N);g==="Add"&&I.current.openEditor(g,q);break}case"Edit":{I.current.openEditor(g,S);break}case"Delete":{I.current.deleteEvent(S);break}}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:Z,children:[a.jsxs($e,{ref:I,height:"550px",width:"100%",selectedDate:y,eventSettings:{dataSource:_e},onSelectedDateChange:z,children:[a.jsx(Fe,{}),a.jsx(Ge,{}),a.jsx(Je,{})]}),a.jsx(at,{open:k,targetRef:D,items:f,onOpen:_,onClose:M,onSelect:U})]})})})}};var ke,Re,He;le.parameters={...le.parameters,docs:{...(ke=le.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const onSelectedDateChange = (event: SchedulerDateChangeEvent) => {
      setSelectedDate(event.value);
    };
    const cellMenuItems: MenuItemProps[] = [{
      text: 'New Event',
      id: 'Add',
      icon: <AddNotesIcon />
    }, {
      text: 'Today',
      id: 'Today',
      icon: <DayIcon />
    }];
    const eventMenuItems: MenuItemProps[] = [{
      text: 'Edit Event',
      id: 'Edit',
      icon: <EditIcon />
    }, {
      text: 'Delete Event',
      id: 'Delete',
      icon: <DeleteNotesIcon />
    }];
    const schedulerRef = useRef<IScheduler | null>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItemProps[]>(cellMenuItems);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));

    // Callback ref to capture the wrapper element as the target
    const setContainerRef = (el: HTMLDivElement | null) => {
      targetRef.current = el as HTMLElement | null;
    };
    const onContextMenuBeforeOpen = (args: Event) => {
      const target = args?.target as HTMLElement ?? null;
      if (!schedulerRef.current || !target) {
        return;
      }
      const selectedElement = schedulerRef.current.element.querySelector('.sf-selected-cell');
      const selectedEvent = schedulerRef.current.element.querySelector('.sf-appointment-active');
      selectedElement?.classList.remove('sf-selected-cell');
      selectedEvent?.classList.remove('sf-appointment-active');
      const appointment: HTMLElement = target.closest?.('.sf-appointment') ?? null;
      if (appointment) {
        appointment.classList.add('sf-appointment-active');
        setMenu(eventMenuItems);
        setOpen(true);
        return;
      }
      const cell = target.closest?.('.sf-work-cells, .sf-all-day-cell') as HTMLElement | null ?? null;
      if (cell) {
        cell.classList.add('sf-selected-cell');
        setMenu(cellMenuItems);
        setOpen(true);
      }
    };
    const onContextMenuClose = () => {
      setOpen(false);
    };
    const onContextMenuSelect = (args: ContextMenuSelectEvent) => {
      const type: string = args?.item?.id;
      let selectedEvent: EventModel;
      if (!schedulerRef.current || !type) {
        return;
      }
      const activeEvent: HTMLElement = schedulerRef.current.element.querySelector('.sf-appointment-active');
      if (activeEvent) {
        selectedEvent = schedulerRef.current.getEventDetails(activeEvent);
      }
      switch (type) {
        case 'Today':
          {
            setSelectedDate(new Date());
            break;
          }
        case 'Add':
          {
            const selectedElements: HTMLElement = schedulerRef.current.element.querySelector('.sf-selected-cell');
            const activeCellDetails = schedulerRef.current.getCellDetails(selectedElements);
            if (type === 'Add') {
              schedulerRef.current.openEditor(type, activeCellDetails);
            }
            break;
          }
        case 'Edit':
          {
            schedulerRef.current.openEditor(type, selectedEvent);
            break;
          }
        case 'Delete':
          {
            schedulerRef.current.deleteEvent(selectedEvent);
            break;
          }
      }
    };
    return <>\r
        <div className="control-section">\r
          <div className="schedulerr-control" ref={setContainerRef}>\r
                <Scheduler ref={schedulerRef} height={'550px'} width={'100%'} selectedDate={selectedDate} eventSettings={{
            dataSource: scheduleData
          }} onSelectedDateChange={onSelectedDateChange}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
              <ContextMenu open={open} targetRef={targetRef} items={menu} onOpen={onContextMenuBeforeOpen} onClose={onContextMenuClose} onSelect={onContextMenuSelect} />\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(He=(Re=le.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};const xt=["ContextMenuSample"];export{le as ContextMenuSample,xt as __namedExportsOrder,gt as default};
