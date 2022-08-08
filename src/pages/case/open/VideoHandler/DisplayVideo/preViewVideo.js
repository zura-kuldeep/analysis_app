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
        <div style={{ marginLeft: "20px" }}>
          <p>File Name : {props.vidforProc.name}</p>
          <p>File Type : {props.vidforProc.type}</p>
          <p>File Size : {props.vidforProc.size}</p>
          <p>Uploaded Date : {props.vidforProc.lastModified}</p>
        </div>
      </div>

      <br></br>
      <Button
        onClick={displayvidsBack}
        outline
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        Close
      </Button>
      <Button outline>Process</Button>
    </>
  );
};

export default PreViewVideo;
