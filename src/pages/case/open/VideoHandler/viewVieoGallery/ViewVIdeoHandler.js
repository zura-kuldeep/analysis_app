import { useState } from "react";

import UploadVideo from "../UploadVideo/UploadVideo";
import DisplayVIdeo from "../DisplayVideo/DisplayVideo";
import CardRight from "../../../../../components/card/case/CardRight";

import classes from "./ViewVideoHandler.module.css";
import { Button } from "reactstrap";

const ViewVideoHandler = (props) => {
  let video = props.cases[0].video;

  const [uploadVideo, setUploadVideo] = useState(false);
  const [displayVideo, setDisplayVideo] = useState(true);

  // const displayVideoHandler = () => {
  //     setDisplayVideo(true);
  //     setUploadVideo(false);
  // }
  const uploadVideoHandler = () => {
    setUploadVideo(true);
    setDisplayVideo(false);
  };
  const videoPassing = (e) => {
    setUploadVideo(false);
    setDisplayVideo(true);
    props.videoPassing(e);
  };
  const cancelUpload = () => {
    setDisplayVideo(true);
    setUploadVideo(false);
  };
  return (
    <CardRight>
      <div>
        <div>
          <h3
            style={{
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            {props.cases[0].caseName}
          </h3>

          <h5
            style={{
              fontSize: "1.2rem",
            }}
          >
            Video Gallery
          </h5>
          {!uploadVideo && (
            <Button
              onClick={uploadVideoHandler}
              style={{ float: "right", marginRight: "30px", marginTop: "5px" }}
              outline
            >
              Upload New videos
            </Button>
          )}
        </div>
        <hr />
        <div>
          {displayVideo && <DisplayVIdeo video={video} />}
          {uploadVideo && (
            <UploadVideo
              videoPassing={videoPassing}
              cancelUpload={cancelUpload}
            />
          )}
        </div>
      </div>
    </CardRight>
  );
};
export default ViewVideoHandler;
