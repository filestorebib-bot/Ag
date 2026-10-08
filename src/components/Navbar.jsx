import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Menu, X, ChevronDown, Leaf} from "lucide-react";
import {site} from "../data/siteData";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [classesOpen,setClassesOpen]=useState(false);
  const nav=[["/","Home"],["/about","About Us"],["/programs","Programs"],["/ojt","OJT"],["/classes","Classes"],["/notices","Notices"],["/contact","Contact Us"]];
  return <header className="navbar">
    <div className="container nav-inner">
      <Link to="/" className="brand" onClick={()=>setOpen(false)}>
        <img src="/logo.svg" alt="Triveni Secondary School logo"/>
        <span><b>{site.name}</b><small>{site.department}</small></span>
      </Link>
      <button className="icon-btn mobile-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <nav className={`nav-links ${open?"open":""}`}>
        {nav.map(([to,label])=> label==="Classes" ? (
          <div className="nav-dropdown" key={to}>
            <button className="nav-link dropdown-trigger" onClick={()=>setClassesOpen(!classesOpen)}>Classes <ChevronDown size={15}/></button>
            <div className={`dropdown-menu ${classesOpen?"show":""}`}>
              {[9,10,11,12].map(c=><Link key={c} to={`/classes/${c}`} onClick={()=>{setOpen(false);setClassesOpen(false)}}>Class {c}</Link>)}
            </div>
          </div>
        ):<NavLink key={to} to={to} end={to==="/"} onClick={()=>setOpen(false)} className={({isActive})=>`nav-link ${isActive?"active":""}`}>{label}</NavLink>)}
        <Link to="/admin" className="nav-admin" onClick={()=>setOpen(false)}><Leaf size={15}/> Admin</Link>
      </nav>
    </div>
  </header>
}
