import { useState, useEffect } from "react";
import PersonalProjects from "../components/PersonalProjects";
import ProfessionalProjects from "../components/ProfessionalProjects";

function Projects(){
  const [personalView, setPersonalView] = useState(() =>{
    const view = localStorage.getItem("view");
    if (!view) return false;
    return JSON.parse(view);
  });  

  useEffect(() => {
    localStorage.setItem("view", JSON.stringify(personalView));
  }, [personalView]);

  return(
    <div className="mt-12 mb-24 relative">
      {personalView ? <PersonalProjects/> : <ProfessionalProjects/>}

      {/* Floating Toggle Switch */}
      <div 
        className="sticky bottom-12 left-1/2 z-[999] -translate-x-1/2 scale-75 md:scale-90
                   border-2 border-black bg-white rounded-[3rem] 
                   flex items-center w-[20rem] h-[4.5rem] mt-16 cursor-pointer" 
        onClick={() => setPersonalView(!personalView)}
      >
        <span className={`
          bg-black text-white h-full w-[80%] flex items-center justify-center 
          rounded-[3rem] text-p transition-transform duration-300 ease-in
          ${personalView ? "translate-x-0" : "translate-x-[4rem]"}
        `}>
          {personalView ? "Personal" : "Professional"}
        </span>
      </div>
    </div>
  );
}

export default Projects;