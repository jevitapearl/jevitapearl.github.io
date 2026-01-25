import professionalProjects from "../data/professionalProjects.json"

function ProfessionalProjects(){
  return(
    <div>
      <h2 className="my-20 text-h3">Projects I've worked on</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {professionalProjects.map((project) => (
          <li className="p-6 border-2 border-black bg-white rounded-[2rem] flex flex-col gap-4" key={project.title}>
            <a href={project.link} target="_blank" className="hover:underline cursor-pointer">
              <h5 className="font-extrabold text-h5">{project.title}</h5>
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionalProjects;