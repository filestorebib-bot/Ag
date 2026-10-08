import {Link} from "react-router-dom";
import {Phone,MapPin,Mail,ArrowUpRight} from "lucide-react";
import {site} from "../data/siteData";
export default function Footer(){
 return <footer className="footer"><div className="container footer-grid">
  <div><Link to="/" className="footer-brand"><img src="/logo.svg" alt=""/><span><b>{site.name}</b><small>{site.department}</small></span></Link><p>A modern agriculture-focused learning community in Katari, Udayapur.</p><div className="footer-contact"><span><MapPin/> {site.address}</span><span><Phone/> {site.phone}</span></div></div>
  <div><h4>Quick Links</h4><Link to="/about">About Us</Link><Link to="/programs">Programs</Link><Link to="/ojt">OJT</Link><Link to="/classes">Classes</Link><Link to="/notices">Notices</Link><Link to="/contact">Contact</Link></div>
  <div><h4>Academic</h4><Link to="/classes/9">Class 9</Link><Link to="/classes/10">Class 10</Link><Link to="/classes/11">Class 11</Link><Link to="/classes/12">Class 12</Link><Link to="/classes">Syllabus</Link></div>
  <div><h4>Contact</h4><span><Phone/> {site.phone}</span><span><MapPin/> Katari-4, Udayapur</span><span><Mail/> School email — update</span></div>
 </div><div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} {site.name} — {site.department}. All Rights Reserved.</span><Link to="/developer">Website designed & developed by <b>Bibash Lamichhane</b> <ArrowUpRight size={14}/></Link></div></div></footer>
}
