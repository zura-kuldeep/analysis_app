import { useState,useEffect } from "react";

const DateTime =()=>{
  const date = new Date().toLocaleDateString();
  const [time, setTime] = useState();

  useEffect(() => {

      setInterval(() => 
      setTime(new Date().toLocaleTimeString()),300);
      

  }, []);
    return (<>
    <div style={{fontSize:"12px",margin:"15px",}}>
        <div>{date}</div>
        <div><p id="Time">{time}</p></div>
    </div>
    </>);
}
export default DateTime;