import SectionHeading from "../components/SectionHeading";
import ClassCard from "../components/ClassCard";
import {classes} from "../data/siteData";
export default function Classes(){return <div className="page"><div className="page-hero"><div className="container"><span className="eyebrow">Academic resources</span><h1>Classes & Syllabus</h1><p>Class → Subject → Unit → Resources. Build the academic library from the admin dashboard.</p></div></div><section className="section"><div className="container"><SectionHeading eyebrow="Choose a class" title="Explore learning resources"/><div className="cards-4">{classes.map(c=><ClassCard key={c.id} item={c}/>)}</div></div></section></div>}
