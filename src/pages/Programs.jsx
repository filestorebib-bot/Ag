import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import GallerySlider from "../components/GallerySlider";
import {programs} from "../data/siteData";
export default function Programs(){return <div className="page"><div className="page-hero"><div className="container"><span className="eyebrow">Academic programs</span><h1>Programs</h1><p>Explore the agriculture and plant-science pathway.</p></div></div><section className="section"><div className="container"><div className="cards-2">{programs.map(p=><ProgramCard key={p.id} program={p}/>)}</div></div></section><section className="section section-muted"><div className="container"><SectionHeading eyebrow="Program gallery" title="Learning in action"/><GallerySlider/></div></section></div>}
