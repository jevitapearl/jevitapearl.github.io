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
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hello, my name is ${formData.name}.\n\n${formData.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  }

  return(
    <div className="my-20 flex flex-col gap-12 items-center justify-center min-h-[calc(100vh-7rem)]">
      <h2 className="my-8 text-center md:text-left">This is the part where you email me</h2>
      <form className="flex flex-col items-center justify-center min-w-[30rem] md:min-w-[40rem] gap-12" onSubmit={handleSubmit}>
        <input 
          className="w-full p-3"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          required
        />
        <input 
          className="w-full p-3"
          type="text" 
          placeholder="Subject"
          onChange={handleChange}
          name="subject"
          required
        />
        <textarea 
          className="w-full p-3 min-h-[10rem]"
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