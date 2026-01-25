import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){
  const navigate = useNavigate();
  const websites = {
    "github": "https://github.com/jevitapearl",
    "linkedin": "https://www.linkedin.com/in/jevita-pearl/"
  };

  function handleSocialLink(name){
    window.open(websites[name], '_blank');
  }

  return(
    <section className="my-60 h-auto md:h-[20rem] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 md:gap-0 p-8 md:p-0">
      <h2 className="text-h4 md:text-h2">Got ideas? I’ve got a keyboard or<br />Say hi→</h2>

      <div className="self-end w-full flex flex-col items-center justify-center p-4">
        <button className="btn text-p scale-125 hover:scale-130 transition-transform" onClick={() => navigate("/contact")}>Contact Me</button>

        <ul className="flex justify-center gap-[3rem] mt-20 text-primary-text w-full">
          <li className="cursor-pointer hover:scale-110 active:scale-110 transition-transform"><FaGithub onClick={() => handleSocialLink("github")} size={35}/></li>
          <li className="cursor-pointer hover:scale-110 active:scale-110 transition-transform"><FaLinkedin onClick={() => handleSocialLink("linkedin")} size={35}/></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;