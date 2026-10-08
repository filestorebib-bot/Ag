import {useEffect,useState} from "react";
import {ChevronLeft,ChevronRight,Maximize2} from "lucide-react";
import {gallery} from "../data/siteData";
export default function GallerySlider({items=gallery}){
 const [i,setI]=useState(0); const [light,setLight]=useState(false);
 useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%items.length),5000);return()=>clearInterval(t)},[items.length]);
 const item=items[i];
 return <><div className="gallery-slider">
   <img src={item.image} alt={item.title}/>
   <div className="gallery-overlay"><span>{item.category}</span><h3>{item.title}</h3></div>
   <button className="slider-btn left" onClick={()=>setI((i-1+items.length)%items.length)} aria-label="Previous"><ChevronLeft/></button>
   <button className="slider-btn right" onClick={()=>setI((i+1)%items.length)} aria-label="Next"><ChevronRight/></button>
   <button className="lightbox-btn" onClick={()=>setLight(true)} aria-label="Open image"><Maximize2/></button>
   <div className="dots">{items.map((_,n)=><button key={n} className={n===i?"active":""} onClick={()=>setI(n)} aria-label={`Slide ${n+1}`}/>)}</div>
 </div>{light&&<div className="lightbox" onClick={()=>setLight(false)}><img src={item.image} alt={item.title}/></div>}</>
}
