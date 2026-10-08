import {useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import NoticeTicker from "./components/NoticeTicker";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import OJT from "./pages/OJT";
import Classes from "./pages/Classes";
import ClassDetails from "./pages/ClassDetails";
import SubjectDetails from "./pages/SubjectDetails";
import Notices from "./pages/Notices";
import NoticeDetails from "./pages/NoticeDetails";
import Contact from "./pages/Contact";
import Developer from "./pages/Developer";
import Admin from "./admin/Admin";

function ScrollTop(){
  const {pathname} = useLocation();
  useEffect(()=>window.scrollTo({top:0,behavior:"instant"}),[pathname]);
  return null;
}

export default function App(){
  return <div className="app">
    <ScrollTop/>
    <Navbar/>
    <NoticeTicker/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/programs/:id" element={<ProgramDetails/>}/>
        <Route path="/ojt" element={<OJT/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/classes/:id" element={<ClassDetails/>}/>
        <Route path="/classes/:classId/subjects/:subjectId" element={<SubjectDetails/>}/>
        <Route path="/notices" element={<Notices/>}/>
        <Route path="/notices/:id" element={<NoticeDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/developer" element={<Developer/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    </main>
    <Footer/>
  </div>
}
