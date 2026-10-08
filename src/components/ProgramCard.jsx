import {Link} from "react-router-dom";
import {ArrowUpRight,Share2} from "lucide-react";
export default function ProgramCard({program}){
 const share=async()=>{const url=location.origin+`/programs/${program.id}`; if(navigator.share) await navigator.share({title:program.title,url}); else await navigator.clipboard?.writeText(url)};
 return <article className="program-card"><img src={program.image} alt={program.title}/><div className="card-body"><span className="tag">{program.classRange}</span><h3>{program.title}</h3><p>{program.description}</p><div className="card-actions"><Link to={`/programs/${program.id}`}>Read More <ArrowUpRight size={16}/></Link><button onClick={share}><Share2 size={15}/> Share</button></div></div></article>
}
