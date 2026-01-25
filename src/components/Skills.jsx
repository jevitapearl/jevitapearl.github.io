import CurvedLoop from './CurvedLoop';

function Skills(){
  const techSkills = "HTML ✦ CSS ✦ Tailwind ✦ JavaScript ✦ DSA ✦ React.js ✦ Python ✦ DSA ✦ MongoDB ✦ ";

  return(
    <div className="hidden md:block my-28">
      <h2 className="subsection-heading">Skills</h2>

      <div className="my-28">
        <CurvedLoop
        marqueeText={techSkills}
        curveAmount={100}
        />

        <CurvedLoop
          marqueeText={techSkills}
          curveAmount={-100}
        />
      </div>
      
    </div>
  );
}

export default Skills;