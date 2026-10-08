import {Link} from "react-router-dom";
import {Megaphone, ArrowRight} from "lucide-react";
import {notices} from "../data/siteData";
export default function NoticeTicker(){
  const items=[...notices,...notices];
  return <div className="ticker-wrap"><div className="container ticker">
    <div className="ticker-label"><Megaphone size={16}/> NOTICE</div>
    <div className="ticker-window"><div className="ticker-track">
      {items.map((n,i)=><Link to={`/notices/${n.id}`} key={`${n.id}-${i}`} className="ticker-item">
        <span className={n.important?"dot important":"dot"}></span>{n.title}<small>{n.date}</small><ArrowRight size={14}/>
      </Link>)}
    </div></div>
  </div></div>
}
