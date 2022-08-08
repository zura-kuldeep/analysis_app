import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "reactstrap";
const UploadVideo = (props) => {
  const [selected, setSelected] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selected) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selected]);
  const fileSelected = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
      return;
    }
    // console.log(e.target.files[0]);
    setSelected(true);
    setFile(e.target.files[0]);
  };
  const videoUploadHandler = () => {
    props.videoPassing(file);
  };
  const cancelUpload = () => {
    props.cancelUpload();
  };
  return (
    <div style={{ margin: "20px 0 0 200px" }}>
      {!selected && <p>Select a Video to Upload</p>}
      <div>
        <input type="file" onChange={fileSelected} accept="video/*" />
      </div>
      <div style={{ marginTop: "2px" }}>
        {selected && <ReactPlayer url={preview} controls />}
      </div>
      <div style={{ marginTop: "5px" }}>
        <Button style={{ marginRight: "5px" }} outline onClick={cancelUpload}>
          cancel
        </Button>
        {selected && (
          <Button outline onClick={videoUploadHandler}>
            upload
          </Button>
        )}
      </div>
    </div>
  );
};
export default UploadVideo;
