import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";


import classes from "./Header.module.css"

import logo from "../assets/images/header-logo.png";
import profile from "../assets/images/account.png"

import DateTime from "./time/DateTime";



const Header = () => {

  const [logoutDiv,setLogoutDiv] = useState(false);

  let navigate = useNavigate();
  const options=()=>{
    setLogoutDiv(!logoutDiv);
  }

  const logOutHandler=()=>{
    sessionStorage.removeItem('token');
    navigate("/");
    window.location.reload();
    
  }
  

  return (
    <>
    <div className={classes["top-bar"]}>
      <div className={classes["head-logo"]}><img src={logo} alt=""/></div>
      <div style={{marginLeft:"10px"}}>
      <NavLink to="/" className={classes.link}>
        Home
      </NavLink>
       </div>

       <div style={{position:"absolute",right:"0",display:"flex",marginRight:"3%"}}>
          
        <div className={classes["logout-container"]}> 
        <button style={{background:"transparent",borderRadius:"50%",borderColor:"transparent"}} onClick={options}>
        <img style={{width:"25px",marginTop:"20px",cursor:"pointer"}} alt="" src={profile}/>
        </button>
        {logoutDiv && <div style={{height:"50px",width:"140px",position:"absolute",background:"black",padding:"15px",left:"-15px"}}>
          <p style={{marginLeft:"10px",color:"white",cursor:"pointer"}} onClick={logOutHandler}>Logout</p>
          </div>}       

        </div>
        <div>
          <DateTime />
        </div>
      </div>
    </div></>
  );
};
export default Header;
