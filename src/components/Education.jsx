function Education(){
  const qualification = [
    {degree: "Bachelor’s of Engineering in Computer Science and Engineering (Data Science)", school: "Alva’s Institute of Engineering and Technology, Mangalore"},
    {degree: "12th Grade / Pre-University (PCMB)", school: "St. Agnes PU college, Mangalore"},
    {degree: "10th Grade / SSLC", school:"St. Antony’s Girls’ High School, Bangalore"}
  ];

  return(
    <div className="education-container">
      <h2 className="subsection-heading">Education</h2>
      <ul>
        {qualification.map((q) => {
          return(
            <li className="edu-item" key={q.degree}>
              <p>{q.degree}</p>
              <i>{q.school}</i>
            </li>
          );
        } 
        )}
      </ul>
    </div>
  );
}

export default Education