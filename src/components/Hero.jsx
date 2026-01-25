import profilePic from "../assets/profile-pic.png";

function Hero(){
  return (
    <section className="min-h-[calc(100vh-7rem)] grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-12 md:gap-0">
      
      <div className="flex flex-col justify-center text-center md:text-left p-4 order-2 md:order-1">
        <h1 className="font-hero text-[8rem] md:text-[6.4rem] lg:text-[8rem] mt-0 md:mt-36 leading-tight">
          Hello, <br/>I'm Jev
        </h1>
        <p className="mt-4 text-[1.6rem]">
          I’m a CS student with love for creating things. I aspire to be a full-stack developer. 
          I love working with puzzles and logic. I believe the internet is a beautiful thing 
          and hope you fall in love with it too!
        </p>
      </div>

      <div className="relative border-2 border-black rounded-[19rem] text-p flex justify-center order-1 md:order-2">
        <span className="btn absolute top-28 -left-36 hidden md:block">Jevita Pearl Crasta</span>
        
        <img 
          className="h-[35rem] md:h-[45rem] rounded-[19rem] pt-12 hover:scale-105 transition-transform duration-300" 
          src={profilePic} 
          alt="profile-picture" 
        />
        
        <span className="btn absolute top-[30rem] -right-24 hidden md:block">20 year old</span>
        <span className="btn absolute bottom-16 -left-8 hidden md:block">India</span>
      </div>      

    </section> 
  );
}

export default Hero;