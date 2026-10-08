import {Link} from "react-router-dom";
import {ArrowRight,BookOpen} from "lucide-react";
export default function ClassCard({item}){return <Link className="class-card" to={`/classes/${item.id}`}><div className="class-icon"><BookOpen/></div><span>{item.subtitle}</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore subjects <ArrowRight size={16}/></b></Link>}
