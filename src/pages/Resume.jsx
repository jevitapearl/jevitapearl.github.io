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
        className="w-full aspect-[3/4] md:w-[80vw] lg:w-[50vw]"
        src={pdfURL+"#toolbar=0&navpanes=0&scrollbar=0"}
        title="Resume PDF"
      />
    </div>
    
  );
}

export default Resume;