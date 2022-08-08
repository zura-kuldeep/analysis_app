import { useState, useEffect } from "react";
import { Button } from "reactstrap";

import classes from "./UploadImage.module.css"

const UploadImage = (props) => {
  const [selected, setSelected] = useState();
  const [preview, setPreview] = useState();
  const [byte64,setByte64] = useState();
  useEffect(() => {
    if (!selected) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selected);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selected]);
  
  const imageUploadHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelected(undefined);
      return;
    }


    let reader =  new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
      setByte64(reader.result);
    }
    // console.log(e.target.files[0]);
    setSelected(e.target.files[0]);
  };
  const uploadHandler = () => {
    let value ={byte64:byte64,file:selected}
    props.imagepassing(value);
  };
  const cancelHandler = () => {
    props.cancelRequest();
  };

  return (
    <div style={{ margin: "20px 0 0 200px" }}>
      {/* {!selected && <p>Select a Image to Upload</p>} */}

      <div className={classes["upload-btn-wrapper"]}>
        <button className={classes.btn}>select file</button>
        <input type="file" onChange={imageUploadHandler} accept="image/*" />
      </div>


      <div style={{ marginTop: "2px" }}>
        {selected && (
          <img src={preview} style={{ height: "300px", width: "300px" }} alt=""/>
        )}
      </div>
      <div style={{ marginTop: "5px" }}>
        <Button onClick={cancelHandler} style={{ marginRight: "5px" }} outline>
          cancel
        </Button>
        {selected && (
          <Button onClick={uploadHandler} outline>
            upload
          </Button>
        )}
      </div>
    </div>
  );
};
export default UploadImage;
