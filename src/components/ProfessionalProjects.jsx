import professionalProjects from "../data/professionalProjects.json"

function ProfessionalProjects(){

  return(
    <div>
      <h2 className="project-main-heading">Projects I've worked on</h2>
      <ul className="projects-grid">
        {
          professionalProjects.map((project) => {
            return (
            <li className="project-item" key={project.title}>
              <a href={project.link} target="_blank"><h5 className="project-heading">{project.title}</h5></a>
              <p>{project.description}</p>
            </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ProfessionalProjects;