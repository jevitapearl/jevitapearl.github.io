import { useState } from "react";
import PersonalProjects from "../components/PersonalProjects";
import ProfessionalProjects from "../components/ProfessionalProjects";

function Projects(){
  const [personalView, setPersonalView] = useState(false);

  return(
    <div className="projects-container">
      {personalView? <PersonalProjects/> : <ProfessionalProjects/>}

      <div className="view" onClick={() => setPersonalView(!personalView)}>
        <span className={"toggle "+(personalView?"toggle-left":"toggle-right")}>{personalView?"Personal":"Professional"}</span>
      </div>
    </div>
  );
}

export default Projects;