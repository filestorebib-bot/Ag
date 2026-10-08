import {useState} from "react";
import {Link} from "react-router-dom";
import {notices as seedNotices,teachers as seedTeachers,programs as seedPrograms} from "../data/siteData";
import {loadContent,saveContent} from "../lib/storage";
import {LayoutDashboard,Bell,Users,BookOpen,LogOut,Plus,Trash2,Save,ArrowLeft,ShieldAlert} from "lucide-react";

const tabs=[["overview","Overview",LayoutDashboard],["notices","Notices",Bell],["teachers","Teachers",Users],["programs","Programs",BookOpen]];

export default function Admin(){
 const [authed,setAuthed]=useState(sessionStorage.getItem("triveni-admin")==="1");
 const [password,setPassword]=useState("");
 const [tab,setTab]=useState("overview");
 const [content,setContent]=useState(loadContent());
 const signIn=e=>{e.preventDefault(); if(password==="admin123"){sessionStorage.setItem("triveni-admin","1");setAuthed(true)} else alert("Demo password: admin123")};
 const update=(key,next)=>{const c={...content,[key]:next};setContent(c);saveContent(c)};
 if(!authed)return <div className="admin-login"><div className="admin-login-card"><img src="/logo.svg" alt=""/><span className="eyebrow">Content management</span><h1>Admin Dashboard</h1><p>This starter build uses demo authentication. Connect Supabase Auth before production.</p><form onSubmit={signIn}><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} autoFocus/></label><button className="btn btn-primary full">Sign in</button></form><small>Demo password: <b>admin123</b></small><Link to="/">← Return to website</Link></div></div>;
 const collections={notices:content.notices??seedNotices,teachers:content.teachers??seedTeachers,programs:content.programs??seedPrograms};
 return <div className="admin-shell"><aside className="admin-sidebar"><Link to="/" className="admin-logo"><img src="/logo.svg" alt=""/><span>Triveni Admin</span></Link>{tabs.map(([id,label,Icon])=><button key={id} className={tab===id?"active":""} onClick={()=>setTab(id)}><Icon/>{label}</button>)}<button onClick={()=>{sessionStorage.removeItem("triveni-admin");setAuthed(false)}}><LogOut/> Sign out</button></aside><section className="admin-main"><div className="admin-top"><div><Link to="/"><ArrowLeft/> Website</Link><h1>{tabs.find(x=>x[0]===tab)?.[1]}</h1></div><span className="admin-badge"><ShieldAlert/> Demo mode</span></div>{tab==="overview"&&<Overview collections={collections}/>} {tab!=="overview"&&<CollectionEditor type={tab} items={collections[tab]} onSave={next=>update(tab,next)}/>}</section></div>
}

function Overview({collections}){return <div><div className="admin-cards">{Object.entries(collections).map(([k,v])=><div className="admin-stat" key={k}><span>{k}</span><b>{v.length}</b><small>records</small></div>)}</div><div className="admin-note"><ShieldAlert/><div><h3>Production security note</h3><p>The included admin is intentionally self-contained so the site runs immediately after GitHub upload. For a real school deployment, replace demo auth/localStorage with Supabase Auth + Row Level Security and a storage bucket.</p></div></div></div>}

function CollectionEditor({type,items,onSave}){
 const [draft,setDraft]=useState(items); const [selected,setSelected]=useState(null);
 const add=()=>{const item=type==="notices"?{id:Date.now(),title:"New notice",date:"2083/—/—",category:"General",type:"text",description:"Add description",content:"Add official notice content.",important:false}:type==="teachers"?{id:Date.now(),name:"New teacher",designation:"Designation",qualification:"Qualification",subject:"Subject",photo:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=85",contact:"School office",bio:"Profile"}:{id:`program-${Date.now()}`,title:"New program",classRange:"Grades",image:"https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=85",description:"Program description",objectives:[],features:[],careers:[]};setDraft([...draft,item]);setSelected(item.id)};
 const updateField=(id,key,val)=>setDraft(draft.map(x=>x.id===id?{...x,[key]:val}:x));
 const remove=id=>setDraft(draft.filter(x=>x.id!==id));
 return <div className="editor"><div className="editor-toolbar"><button className="btn btn-primary" onClick={add}><Plus/> Add {type.slice(0,-1)}</button><button className="btn btn-light" onClick={()=>onSave(draft)}><Save/> Save changes</button></div><div className="editor-layout"><div className="editor-list">{draft.map(x=><button className={selected===x.id?"selected":""} key={x.id} onClick={()=>setSelected(x.id)}>{x.title||x.name}<small>{x.category||x.designation||x.classRange}</small></button>)}</div><div className="editor-form">{selected==null?<div className="empty-state">Select a record or add a new one.</div>:(()=>{const x=draft.find(a=>a.id===selected); return <><div className="editor-form-head"><h2>Edit record</h2><button className="danger-icon" onClick={()=>{remove(x.id);setSelected(null)}}><Trash2/></button></div>{Object.entries(x).filter(([k])=>!["id","objectives","features","careers","resources","units"].includes(k)).map(([k,v])=><label key={k}>{k}<textarea rows={typeof v==="string"&&v.length>100?5:2} value={String(v??"")} onChange={e=>updateField(x.id,k,e.target.value)}/></label>)}<button className="btn btn-primary" onClick={()=>onSave(draft)}><Save/> Save this record</button></>})()}</div></div></div>
}
