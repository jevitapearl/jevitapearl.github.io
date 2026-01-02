import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

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
    <section className="contact-container">
      <div className="contact-card">
        <button className="contact-btn link-btn" onClick={() => navigate("/contact")}>Contact Me</button>

        <ul className="social-links">
          <li className="link-btn"><FaGithub onClick={() => handleSocialLink("github")} size={25}/></li>
          <li className="link-btn"><FaLinkedin onClick={() => handleSocialLink("linkedin")} size={25}/></li>
          {/* <li className="link-btn"><FaYoutube onClick={() => handleSocialLink("youtube")} size={25} /></li> */}
        </ul>
      </div>
    </section>
    
  );
}

export default Contact;