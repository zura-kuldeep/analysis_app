import { useState } from "react";

import { Button, Input } from "reactstrap";
import classes from "./newUploadImage.module.css";
import CardRight from "../../../../../components/card/case/CardRight";

const UploadImage = (props) => {
    const [images, setImage] = useState([]);
    const [bytecode,setbytecode] = useState([]);
    const [view, setView] = useState();
    const [uploadButton, setUploadButton] = useState(false);
    const [byte64,setByte64] = useState();
    

    const fileSelectedHandler = (e) => {
        let val = e.target.files[0];
 
        function ree(val){
        let reader =  new FileReader();
        reader.readAsDataURL(val);
        reader.onload=function(){
          setByte64(reader.result);
          let v = reader.result;
          
          return v;
        }
    }
    console.log(ree(val));


        let file = { byte64:byte64,file:e.target.files[0] }
        setImage([file,...images]);
        setView(e.target.files[0]);
        setUploadButton(true);
        console.log(file);
    };
    const deleteImage = (ima) => {

        let filteredImages = images;
        
        filteredImages = filteredImages.filter(images => {
            return images.file.name !== ima.file.name;
        })

        setImage(filteredImages);
        if(filteredImages.length>1){
        setView(filteredImages[0].file);}
        else if(filteredImages.length == 0){
         setView();
         setUploadButton(false);
        }
    }
    const submithandler = () => {
        props.imagepassing(images);
        console.log(images);
    };

    const displayImage = (images) => {

        setView(images);

    }
    const cancelHandler = () => {
        props.cancelRequest();
    };
    return (<>
        <CardRight>

            <Input
            className={classes["file-input"]}
                id="exampleFile"
                name="file"
                type="file"
                onChange={fileSelectedHandler}
            />

            <div style={{display:"flex"}}>
            {view && <div className={classes["main-div"]}>
                <div>
                    <img className={classes["image-div"]} src={URL.createObjectURL(view)} alt="" />
                </div>

                <div>
                    <div className={classes["row"]}>
                        {images.map((images) => {
                            return (
                                <div className={classes["column"]}>
                                    <img
                                        className={classes["demo-img"]}
                                        style={{ height: "99px", width: "99px" }}
                                        src={URL.createObjectURL(images.file)}
                                        key={"image uniqueid"}
                                        alt=""
                                        onClick={() => displayImage(images.file)}
                                    />
                                    <button className={classes["close-btn"]} onClick={() => deleteImage(images)}>x</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>}
            <div className={classes["upload-btn-div"]}>
                <Button onClick={cancelHandler} style={{ marginRight: "5px" }} outline>
                    cancel
                </Button>
                {uploadButton && <Button onClick={submithandler} outline>upload</Button>}
            </div>
            </div>

        </CardRight></>
    );
};
export default UploadImage;