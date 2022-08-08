import { useState } from "react";

import UploadImage from "./UploadHandler/UploadImage";
import CardRight from "../../../../components/card/case/CardRight";

import DisplayImages from "./DisplayImages/DisplayImages";
import { Button } from "reactstrap";

const ViewImages = (props) => {
  let images = props.cases[0].image;

  const [displayImages, setDisplayImages] = useState(true);
  const [uploadImg, setUploadImg] = useState(false);
  const [disableUpload, setDisableUpload] = useState(true);

  const uploadHandler = () => {
    setDisplayImages(false);
    setUploadImg(true);
  };
  const imagepassing = (e) => {
    setUploadImg(false);
    setDisplayImages(true);
    props.imagepass(e);
  };
  const uploadCancel = () => {
    setUploadImg(false);
    setDisplayImages(true);
  };
  const ondisableuploadButton = () => {
    setDisableUpload(false);
    
  };
  const onUploadEnableButton=()=>{
    setDisableUpload(true);
  }
  return (
    <CardRight>
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
          Image Gallery
        </h5>
        {!uploadImg && disableUpload && (
          <Button
            onClick={uploadHandler}
            style={{ float: "right", marginRight: "30px", marginTop: "5px" }}
            outline
          >
            Upload Images
          </Button>
        )}
      </div>

      <hr />

      <div>
        {displayImages && (
          <DisplayImages images={images} ondisableuploadButton={ondisableuploadButton} onUploadEnableButton={onUploadEnableButton} />
        )}
        {uploadImg && (
          <UploadImage
            imagepassing={imagepassing}
            cancelRequest={uploadCancel}
          />
        )}
      </div>
    </CardRight>
  );
};
export default ViewImages;
