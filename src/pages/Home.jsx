import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import GallerySlider from "../components/GallerySlider";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import TeacherCard from "../components/TeacherCard";
import TestimonialSlider from "../components/TestimonialSlider";
import ClassCard from "../components/ClassCard";
import {programs,teachers,classes} from "../data/siteData";
import {ArrowRight,CheckCircle2, Sprout} from "lucide-react";
import {Link} from "react-router-dom";

export default function Home(){
 return <>
  <Hero/>
  <Leadership/>
  <section className="section section-muted"><div className="container split-feature"><div><SectionHeading eyebrow="Learning by doing" title="Plant science beyond the classroom" description="Agriculture education becomes meaningful when students can observe, practice, measure, discuss and reflect."/><ul className="check-list"><li><CheckCircle2/> Practical and field-oriented learning</li><li><CheckCircle2/> Foundations for higher study and careers</li><li><CheckCircle2/> Agriculture entrepreneurship awareness</li><li><CheckCircle2/> Responsible, sustainable learning</li></ul><Link className="text-link" to="/about">Discover our approach <ArrowRight/></Link></div><GallerySlider/></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="Academic pathway" title="Programs designed for future-ready learners" description="A clear place to explore the agriculture and plant-science learning pathway. School-confirmed curriculum details can be managed from Admin."/><div className="cards-3">{programs.map(p=><ProgramCard key={p.id} program={p}/>)}</div></div></section>
  <section className="section section-soft"><div className="container"><SectionHeading eyebrow="Find your class" title="Classes & learning resources" description="Explore subjects, units, syllabus links and downloadable resources."/><div className="cards-4">{classes.map(c=><ClassCard key={c.id} item={c}/>)}</div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="People who teach" title="Meet our teachers" description="Verified staff profiles can be updated from the administration dashboard."/><div className="teacher-grid">{teachers.map(t=><TeacherCard key={t.id} teacher={t}/>)}</div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="Alumni voice" title="Voice of Our Former Students" description="Publish only approved, verified testimonials."/><TestimonialSlider/></div></section>
 </>;
}
