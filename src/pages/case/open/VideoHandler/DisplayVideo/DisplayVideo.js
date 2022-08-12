import { useState } from "react";

import PreViewVideo from "./preViewVideo";

import classes from "./DisplayVIdeo.module.css"


const DisplayVIdeo = (props) => {
  const [display, setDisplay] = useState(true);
  const [processVideo, setProcessVideo] = useState();
  if (props.video.length === 0) {
    return (<div className={classes["card"]}>
      <p> No Videos Found.</p></div>
    );
  }

  const setVideoForProcess = (e) => {
    setDisplay(false);
    setProcessVideo(e);
  };
  const displayvidsBack = () => {
    setDisplay(true);
  };
  return (
    <div style={props.style}>
      <div style={{ margin: "20px 0 0 20px" }}>
        <div className={classes["container-all"]}>
        {display &&
          props.video.map((e, i) => {
            return (
              <div className={classes.container}>
              <video
                alt=""
                src={URL.createObjectURL(e)}
                key={i}
                onClick={() => {
                  setVideoForProcess(e);
                }}
              >
              </video>
              {/* <span className={classes.text}>{e.file}</span> */}
               {/* style={{
                  height: "100px",
                  width: "150px",
                  borderRadius: "10px",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
               */}
              </div>
            );
          })}</div>
        {!display && (
          <PreViewVideo
            style={props.style}
            vidforProc={processVideo}
            displayvidsBack={displayvidsBack}
          />
        )}
      </div>
    </div>
  );
};
export default DisplayVIdeo;
