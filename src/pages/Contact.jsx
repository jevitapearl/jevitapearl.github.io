import { useState } from "react";

function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const myEmail = "jevitapearl@gmail.com";

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault;
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hello, my name is ${formData.name}.\n\n${formData.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  }

  return(
    <div className="contact-form-container">
      <h2 className="contact-form-heading">This is the part where you email me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          className="contact-field"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          required
        />
        <input 
          className="contact-field"
          type="text" 
          placeholder="Subject"
          onChange={handleChange}
          name="subject"
          required
        />
        <textarea 
          className="contact-field contact-message"
          type="text" 
          placeholder="Enter your message"
          onChange={handleChange}
          name="message"
          required
        />
        <button className="btn">Submit</button>
      </form>
      
    </div>
  );
}

export default Contact;