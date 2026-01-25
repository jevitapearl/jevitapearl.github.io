import { FaRegCopyright } from "react-icons/fa";
import { useState, useEffect } from "react";

function Footer(){
  const [dateTime, setDateTime] = useState("");

  useEffect( () => {
      const interval = setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();  
        setDateTime(`${formattedDate} - ${formattedTime}`)
      }, 1000);
      return () => clearInterval(interval);
    }
    , []
  )

  return(
    <div className="flex flex-col md:flex-row justify-between p-12 border-t border-shadow text-primary-text text-sm gap-4 items-center md:items-start" id="footer">
      <p className="flex items-center gap-2">2025 <FaRegCopyright /></p>
      <p>Assembled by a human. No seriously.</p>
      <p>{dateTime}</p>
    </div>
  );
}

export default Footer;