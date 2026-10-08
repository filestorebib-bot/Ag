import {leadership} from "../data/siteData";
import {Phone} from "lucide-react";
export default function Leadership(){
 return <section className="section"><div className="container leadership-grid">
  {leadership.map(person=><article className="person-card" key={person.id}><img src={person.photo} alt={person.name}/><div><span className="eyebrow">{person.role}</span><h3>{person.name}</h3><p>{person.bio}</p><small><Phone size={14}/> {person.contact}</small></div></article>)}
 </div></section>
}
