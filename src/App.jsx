import "./App.css"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="layout-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
    
    
  );
}

export default App;