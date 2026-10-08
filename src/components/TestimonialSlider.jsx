import {useEffect,useState} from "react";
import {ChevronLeft,ChevronRight,Quote} from "lucide-react";
import {testimonials} from "../data/siteData";
export default function TestimonialSlider(){
 const [i,setI]=useState(0); const t=testimonials[i];
 useEffect(()=>{const id=setInterval(()=>setI(x=>(x+1)%testimonials.length),6500);return()=>clearInterval(id)},[]);
 return <div className="testimonial"><Quote className="quote-icon"/><img src={t.photo} alt={t.name}/><div><p className="quote">“{t.quote}”</p><h3>{t.name}</h3><small>{t.class} • {t.occupation}</small></div><div className="test-controls"><button onClick={()=>setI((i-1+testimonials.length)%testimonials.length)}><ChevronLeft/></button><button onClick={()=>setI((i+1)%testimonials.length)}><ChevronRight/></button></div></div>
}
