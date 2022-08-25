import { useState } from "react";
import { Button } from "reactstrap";
import ReactPlayer from "react-player";
const PreViewVideo = (props) => {
  const displayvidsBack = () => {
    props.displayvidsBack();
  };
  console.log(props.vidforProc);
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <ReactPlayer
          url={URL.createObjectURL(props.vidforProc)}
          style={{
            height: "500px",
            width: "600px",
            margin: "0 5px",
          }}
          controls
        />

        <div style={{ borderLeft: "1px solid black", marginLeft: "5px" }}></div>
        <div style={{ marginLeft: "20px", backgroundColor: "#ebeded", borderRadius: "10px",height:"300px", width:"550px" }}>
        <div style={{ textAlign:"left",marginTop:"20px"}}>
          <p style={{fontWeight:"600",marginLeft:"40px",fontSize:"18px"}}>File Name :<b>{props.vidforProc.name}                              </b> </p><br/>
          <p style={{fontWeight:"600",marginLeft:"40px",fontSize:"18px"}}>File Type :<b>{props.vidforProc.type}                              </b> </p><br/>
          <p style={{fontWeight:"600",marginLeft:"40px",fontSize:"18px"}}>File Size :<b>{Math.floor(((props.vidforProc.size)/1024)/1024)}MB  </b> </p><br />
        </div>
        <div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button  outline style={{ marginRight: "10px", marginLeft: "5px",width:"150px" }}>Back</Button>
            <Button  outline style={{width:"150px"}}>Proceed</Button>
          </div>
        </div>
      </div>

    </>
  );
};

export default PreViewVideo;
