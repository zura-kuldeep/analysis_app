import { useState } from "react";

import PreView from "./PreView";

import classes from "./DisplayImage.module.css"

const DisplayImages = (props) => {
  const [display, setDisplay] = useState(true);
  const [processImg, setProcessImg] = useState();
 
  if (props.images.length === 0) {
    return (
      <div className={classes["card"]}>
      <p>No Images Found.</p></div>
    );
  }

  const sendImg = (e) => {
    props.ondisableuploadButton();
    setDisplay(false);
    setProcessImg(e);
    
  };
  const displayImgBack = () => {
    props.onUploadEnableButton();
    setDisplay(true);
  };

  return (
    <div style={props.style}>
      <div style={{ margin: "20px 0 0 20px" }}>
        <div className={classes["container-all"]}>
        {display &&
          props.images.map((e, i) => {
            return (
              <div className={classes.container}>
              <img
                alt=""
                src={URL.createObjectURL(e.file)}
                key={i}
                onClick={() => sendImg(e)}
               
              ></img> 
              {/* style={{
                  height: "100px",
                  width: "150px",
                  borderRadius: "10px",
                  margin: "0 5px",
                  cursor: "pointer",
                }} */}
              <span className={classes.text}>{e.file.name}</span>
              </div>
            );
          })}
          </div>
        {!display && (
          <PreView style={props.style} imgforProc={processImg} displayImgBack={displayImgBack} />
        )}
      </div>
    </div>
  );
};
export default DisplayImages;
