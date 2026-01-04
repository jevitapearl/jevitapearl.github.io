import jsProjects from "../data/jsProjects.json";
import reactProjects from "../data/reactProjects.json"
import { Link } from "react-router-dom";

function PersonalProjects(){

  return(
    <div>
      <h2 className="project-main-heading">Projects in vanilla JS</h2>
      <ul className="projects-grid">
        {
          jsProjects.map((project) => {
            return (
            <li className="project-item" key={project.title}>
              <Link to={project.link}><h5 className="project-heading">{project.title}</h5></Link>
              <p>{project.description}</p>
            </li>
            );
          })
        }
      </ul>
      
      <h2 className="project-main-heading">Projects in React.js</h2>
      <ul className="projects-grid">
        {
          reactProjects.map((project) => {
            return (
            <li className="project-item" key={project.title}>
              <Link to={project.link}><h5 className="project-heading">{project.title}</h5></Link>
              <p>{project.description}</p>
            </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default PersonalProjects;