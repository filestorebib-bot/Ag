import {Link} from "react-router-dom";
export default function TeacherCard({teacher}){return <Link to={`/contact#teacher-${teacher.id}`} className="teacher-card"><img src={teacher.photo} alt={teacher.name}/><div><span>{teacher.designation}</span><h3>{teacher.name}</h3><p>{teacher.qualification}</p><small>{teacher.subject}</small></div></Link>}
