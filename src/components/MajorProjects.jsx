import journalPic from "../assets/majorProjectImages/journal.png";
import krytilPic from "../assets/majorProjectImages/krytil.png";

function MajorProjects(){
  const majorprojects = [
    {
      id:"journal",
      img: journalPic, 
      title: "FrontEnd Template for a Journal App", 
      link: "https://jevitapearl.github.io/journal-app/index.html", 
      description: "This is my first Frontend project and was very helpful in getting my foundations on HTML and CSS very strong."
    },
    {
      id: "krytil",
      img: krytilPic, 
      title: "Cover letter and ATS feature frontEnd", 
      link:"https://cv.krytil.com/", 
      description: "Built responsive, polished UI using modern frontend tools (React), designed intuitive form flows, and integrated with backend APIs to fetch/generate tailored cover-letter content."
    }
  ]

  function handleViewButtonClick(url){
    window.open(url, '_blank')
  }

  return(
    <div className="my-40 mx-4 md:mx-0">
      <h2 className="subsection-heading">Projects</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {majorprojects.map((project) => {
          return(
            <li className="bg-secondary-bg rounded-[3rem] p-12 flex flex-col gap-6 shadow-[1px_1px_3px_0px_var(--color-shadow)]" key={project.id}>
              <section className="flex flex-col gap-6 grow">
                <img className="h-[25rem] w-full border border-black object-cover object-top" src={project.img} alt={project.id} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </section>
              <button className="btn text-center" onClick={() => handleViewButtonClick(project.link)}>View</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MajorProjects;