import { Link } from "react-router-dom";

function UnderConstruction(){
  return(
    <div className="h-screen flex flex-col w-full justify-center items-center gap-8 text-center">
      <h3>This page is yet to be designed. </h3>
      <p>You could drop a <u><Link to="/contact">mail</Link></u> or DM me on <u><a href="https://www.linkedin.com/in/jevita-pearl/">Linkedin</a></u></p>
    </div>
  );
}

export default UnderConstruction;