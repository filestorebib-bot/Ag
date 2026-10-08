import {Link} from "react-router-dom";
import {ArrowRight, Bell, Sprout} from "lucide-react";
import {site} from "../data/siteData";
export default function Hero(){
 return <section className="hero">
  <div className="hero-bg"></div>
  <div className="container hero-grid">
   <div className="hero-copy">
    <div className="pill"><Sprout size={16}/> Agriculture-focused education</div>
    <h1>Grow knowledge.<br/><span>Shape tomorrow.</span></h1>
    <p>{site.tagline} A modern learning environment for students interested in agriculture, plant science and practical skills.</p>
    <div className="hero-actions"><Link className="btn btn-primary" to="/programs">Explore Programs <ArrowRight size={17}/></Link><Link className="btn btn-light" to="/notices"><Bell size={17}/> View Notices</Link></div>
    <div className="hero-trust"><span>📍 Katari-4, Udayapur</span><span>☎ {site.phone}</span></div>
   </div>
   <div className="hero-visual">
    <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1500&q=90" alt="Green agricultural field"/>
    <div className="floating-card"><b>Plant Science</b><span>Learn • Practice • Grow</span></div>
   </div>
  </div>
 </section>
}
