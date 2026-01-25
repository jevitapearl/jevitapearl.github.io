import jsProjects from "../data/jsProjects.json";
import reactProjects from "../data/reactProjects.json"

function PersonalProjects(){
  return(
    <div>
      <h2 className="my-20 text-h3">Projects in vanilla JS</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {jsProjects.map((project) => (
          <li className="p-6 border-2 border-black bg-white rounded-[2rem] flex flex-col gap-4" key={project.title}>
            <a href={"https://jevitapearl.github.io"+project.link} target="_blank" className="hover:underline cursor-pointer">
              <h5 className="font-extrabold text-h5">{project.title}</h5>
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      
      <h2 className="my-20 text-h3">Projects in React.js</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reactProjects.map((project) => (
          <li className="p-6 border-2 border-black bg-white rounded-[2rem] flex flex-col gap-4" key={project.title}>
            <a href={"https://jevitapearl.github.io"+project.link} target="_blank" className="hover:underline cursor-pointer">
              <h5 className="font-extrabold text-h5">{project.title}</h5>
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalProjects;