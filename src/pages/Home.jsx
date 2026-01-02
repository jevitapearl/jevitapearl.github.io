import Hero from "../components/Hero"
import Education from "../components/Education"
import MajorProjects from "../components/MajorProjects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";


function Home(){
  return (
    <>
      <Hero/>
      <Education/>
      <MajorProjects/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default Home;