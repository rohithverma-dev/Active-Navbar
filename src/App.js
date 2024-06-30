import { useState } from "react";
import "./App.css";

function App() {
  const [activeName, setActiveName] = useState("HOME")
  
  return (
    <>
      <div className="navbar">
        <span>LOGO</span>
        <ul className="menu">
          <li><a onClick={()=>setActiveName("HOME")} className={`HOME ${activeName==="HOME"? `active` : ""  } `} href="">HOME</a></li>
          <li><a onClick={()=>setActiveName("ABOUT")} className={`ABOUT ${activeName==="ABOUT"? `active` : ""  } `} href="">ABOUT</a></li>
          <li><a onClick={()=>setActiveName("SERVICES")} className={`SERVICES ${activeName==="SERVICES"? `active` : ""  } `} href="">SERVICES</a></li>
          <li><a onClick={()=>setActiveName("CONTACT")} className={`CONTACT ${activeName==="CONTACT"? `active` : ""  } `} href="">CONTACT</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
