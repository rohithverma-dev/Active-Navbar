import { useState } from "react";
import "./App.css";

function App() {
  const [activeName, setActiveName] = useState("HOME")
  
  return (
    <>
      <div className="navbar">
        <span>LOGO</span>
        <ul className="menu">
          <li><a onClick={()=>setActiveName("HOME")} className={`${(activeName==="HOME")? "active" : ""  } `} href="#HOME">HOME</a></li>
          <li><a onClick={()=>setActiveName("ABOUT")} className={`${(activeName==="ABOUT")? "active" : ""  } `} href="#ABOUT">ABOUT</a></li>
          <li><a onClick={()=>setActiveName("SERVICES")} className={`${(activeName==="SERVICES")? "active" : ""  } `} href="#SERVICES">SERVICES</a></li>
          <li><a onClick={()=>setActiveName("CONTACT")} className={`${(activeName==="CONTACT")? "active" : ""  } `} href="#CONTACT">CONTACT</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
