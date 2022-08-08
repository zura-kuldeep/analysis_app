import { useState, useEffect } from "react";
import ReactPlayer from "react-player";


import { Button,Input } from "reactstrap";


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
      <div>
      <form onSubmit={videoUploadHandler} style={{display:"flex"}}>
            <Input
                style={{width:"500px"}}
                id="exampleFile"
                name="file"
                type="file"
                onChange={fileSelected}
                accept="video/*"
            />
             <div style={{marginLeft:"10px"}}>
                <Button onClick={cancelUpload} style={{ marginRight: "5px" }} outline>
                    cancel
                </Button>
                 <Button type="submit" outline>upload</Button>
            </div>
            </form>

        {/* <input type="file" onChange={fileSelected} accept="video/*" /> */}
      </div>
      <div style={{ marginTop: "2px" }}>
        {selected && <ReactPlayer url={preview} controls />}
      </div>
      {/* <div style={{ marginTop: "5px" }}>
        <Button style={{ marginRight: "5px" }} outline onClick={cancelUpload}>
          cancel
        </Button>
        {selected && (
          <Button outline onClick={videoUploadHandler}>
            upload
          </Button>
        )}
      </div> */}
    </div>
  );
};
export default UploadVideo;
