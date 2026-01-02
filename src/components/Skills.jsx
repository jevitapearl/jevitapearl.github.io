import CurvedLoop from './CurvedLoop';

function Skills(){

  const techSkills = "HTML ✦ CSS ✦ Tailwind ✦ JavaScript ✦ DSA ✦ React.js ✦ Python ✦ DSA ✦ MongoDB ✦ ";

  return(
    <div>
      <h2 className="subsection-heading">Skills</h2>

      <div className="tails">
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