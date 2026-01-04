import profilePic from "../assets/profile-pic.png";

function Hero(){
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1 className="hero-text">Hello, <br/>I'm Jev</h1>
        <p>I’m a CS student with love for creating things. I aspire to be a full-stack developer. I love working with puzzles and logic. I believe the internet is a beautiful thing and hope you fall in love with it too!</p>
      </div>

      <div className="hero-right">
        <span className="btn profile-name">Jevita Pearl Crasta</span>
        <img className="profile-pic" src={profilePic} alt="profile-picture" />
        <span className="btn profile-age">20 year old</span>
        <span className="btn profile-location">India</span>


      </div>      

    </section> 
  );
}

export default Hero;