import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CaseInfo from "./CaseDetails/CaseInfo";
import ViewImages from "./ImageHandler/ViewImages";
import ViewVideoHandler from "./VideoHandler/viewVieoGallery/ViewVIdeoHandler";

import classes from "./ViewCase.module.css";

import infopic from "../../../assets/images/file.png"
import editpic from "../../../assets/images/edit-image.png"
import videopic from "../../../assets/images/video.png"

const ViewCase = () => {
  let navigate = useNavigate();
  let cases = [];

  const [caseView, setCaseView] = useState(true);
  const [imageView, setImageView] = useState(false);
  const [videoView, setVideoView] = useState(false);
  const [moveCss,setmoveCss] = useState();
  const [marginCss,setMarginCss] = useState({marginLeft:"90px",fontSize:"28px",padding:"0px 10px"});
  const [tempcss,setTempcss] = useState({marginLeft:"100px"})
  

  const [searchparamss] = useSearchParams();

  let allCases = JSON.parse(localStorage.getItem("cases"));
  let caseID = JSON.parse(searchparamss.get("caseID"));
  // console.log(allCases);

  // const newCase = JSON.parse(localStorage.getItem("newCase"));

  for (let i = 0; i < allCases.length; i++) {
    if (caseID === allCases[i].caseID) {
      cases.push(allCases[i]);
      // console.log(cases);
    }
    // if (caseID === newCase.caseID) {
    //   console.log(newCase); // fix here
    //   cases.push(newCase);
    // }
  }

  const caseInfoHandler = () => {
    setImageView(false);
    setVideoView(false);
    setCaseView(true);
  };

  const imageViewHandler = () => {
    // debugger;
    setCaseView(false);
    setVideoView(false);
    setImageView(true);
  };

  const videoViewHandler = () => {
    setVideoView(true);
    setImageView(false);
    setCaseView(false);
  };

  const updatingImage = (e) => {
    // console.log(e);
    cases[0].image.push(...e);
    localStorage.setItem("updatedcases", JSON.stringify(cases));
  };
  const updatingVideo = (e) => {
    cases[0].video.push(e);
  };

  const navigateToCases = () => {
    navigate("/");
  };

  const moveRight=()=>{

    setmoveCss(classes["movable-div"]);
    setMarginCss({marginLeft:"0px",fontSize:"28px",padding:"0px 10px"});
    setTempcss({marginLeft:"2px"});
  }

  const moveBack=()=>{

    setmoveCss(classes["movable-div-zero"])
    setMarginCss({marginLeft:"90px",fontSize:"28px",padding:"0px 10px"});
    setTempcss({marginLeft:"100px"});
  }

  return (
    <>
      {/* <div className={classes.sidenav}>
        <div className={classes.contents}>
          <a href="#" onClick={caseInfoHandler}>
            Case Info
          </a>
          <a href="#" onClick={imageViewHandler}>
            Image
          </a>
          <a href="#" onClick={videoViewHandler}>
            Video
          </a>
        </div>
      </div> */}
      {/* replace here */}
      <div>
        <nav className={classes["nav__cont"]} onMouseOver={moveRight} onMouseOut={moveBack}>
          <ul className={classes["nav"]}>
            <li className={classes["nav__items"]} style={{ marginTop: '125px' }}>
              <img src={infopic} onClick={caseInfoHandler} alt=""/>
              <a href="#" onClick={caseInfoHandler}>Info</a>
            </li>

            <li className={classes["nav__items"]}>
              <img src={editpic} onClick={imageViewHandler} alt=""/>
              <a href="#" onClick={imageViewHandler}>Images</a>
            </li>

            <li className={classes["nav__items"]}>
              <img src={videopic} onClick={videoViewHandler} alt=""/>
              <a href="#" onClick={videoViewHandler}>Videos</a>
            </li>

          </ul>
        </nav>
      </div>

      <div className={moveCss}>
        <div className={classes.rightside} style={tempcss}>
          <a style={{textDecoration: "underline",fontSize:"15px"}} onClick={navigateToCases}>
            cases 
          </a>
          <span>&nbsp;/&nbsp;{cases[0].caseID}</span>
        </div>
        <div style={{borderBottom:"1px dashed"}}></div>
        {caseView && <CaseInfo cases={cases} style={marginCss} />}
        {imageView && (
          <ViewImages
            cases={cases}
            imagepass={updatingImage}
            style={marginCss}
          />
        )}
        {videoView && (
          <ViewVideoHandler
            cases={cases}
            videoPassing={updatingVideo}
            style={marginCss}
            
          />
        )}

        
      </div>
    </>
  );
};
export default ViewCase;
