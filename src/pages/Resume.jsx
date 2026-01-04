import { Document } from "react-pdf";

function Resume(){
  const pdfURL="/JevitaPearlCrasta_resume.pdf";

  return(
    <div className="resume-container">
      <div className="resume-actions">
        <button className="btn"><a href={pdfURL} target="_blank">Open in new tab</a></button>
        <button className="btn"><a href={pdfURL} download="JevitaPearlCrasta_resume.pdf">Download</a></button>
      </div>

      <iframe
        className="resume-viewer"
        src={pdfURL+"#toolbar=0"}
        title="Resume PDF"
      />
    </div>
    
  );
}

export default Resume;