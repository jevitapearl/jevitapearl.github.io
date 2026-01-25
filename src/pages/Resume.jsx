import { Document } from "react-pdf";

function Resume(){
  const pdfURL="/JevitaPearlCrasta_resume.pdf";

  return(
    <div className="my-24 mx-auto w-full flex flex-col items-center">
      <div className="flex gap-12 mb-12">
        <button className="btn"><a href={pdfURL} target="_blank">Open in new tab</a></button>
        <button className="btn"><a href={pdfURL} download="JevitaPearlCrasta_resume.pdf">Download</a></button>
      </div>

      <iframe
        className="w-full aspect-[3/4] md:w-[90%] lg:w-[80%]"
        src={pdfURL+"#toolbar=0"}
        title="Resume PDF"
      />
    </div>
    
  );
}

export default Resume;