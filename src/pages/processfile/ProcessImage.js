import { useSearchParams } from "react-router-dom";
import { OpenCvProvider, useOpenCv } from "opencv-react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {
    UncontrolledAccordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    ButtonGroup,
    Button,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardText


} from "reactstrap";
import classes from "./ProcessImage.module.css";

const ProcessImage = () => {

    const [searchparamss] = useSearchParams();
    const base64Img = JSON.parse(searchparamss.get("base64"));
    // console.log(base64Img);


    const [imageforEdit, setImageForEdit] = useState();
    const [imageForDetect, setImageForDetect] = useState();
    const [imageFiltersArray, setImageFiltersArray] = useState([base64Img]);

    let navigate = useNavigate();


    useEffect(() => {
        setImageForEdit(base64Img);
    }, [searchparamss]);


    const savingImageEdits = () => {
        let x = document.getElementById("outputsrc").toDataURL()
        if(imageFiltersArray.includes(x)){
            return ;
        }
        setImageFiltersArray([...imageFiltersArray, x]);
    }

    const undoRedoImage = (x) => {
        setImageForEdit(x);
        // let c = document.getElementById("outputsrc");
        // var ctx = c.getContext("2d");
        // var img = document.getElementById("imagesrc");
        // ctx.drawImage(img,0,0);
        let cv = window.cv;
        let imgsrc = document.getElementById("imagesrc");
        let src = cv.imread(imgsrc);
        cv.imshow("outputsrc", src);
        src.delete();

    }

    const deleteSaves =(x)=>{

        let allSaves = imageFiltersArray;

        allSaves = allSaves.filter((values)=>{
            return values !== x;
        })
        setImageFiltersArray(allSaves);
    }

    const saveAllEdits=()=>{

        console.log(imageFiltersArray);

        // navigate("/");

    }
    const greyFilter = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        // You can try more different parameters
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();

        setImageForEdit(document.getElementById("outputsrc").toDataURL());

    };

    const imageBlur = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        let ksize = new cv.Size(3, 3);
        let anchor = new cv.Point(-1, -1);
        cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();

        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const gaussianBlur = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        let ksize = new cv.Size(3, 3);
        cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();

        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };

    const medianBlur = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        // You can try more different parameters
        cv.medianBlur(src, dst, 5);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();

        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const bilateralFilter = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
        // You can try more different parameters
        cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();
        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const erosion = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        let M = cv.Mat.ones(5, 5, cv.CV_8U);
        let anchor = new cv.Point(-1, -1);
        // You can try more different parameters
        cv.erode(
            src,
            dst,
            M,
            anchor,
            1,
            cv.BORDER_CONSTANT,
            cv.morphologyDefaultBorderValue()
        );
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();
        M.delete();
        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };

    const dilation = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        let M = cv.Mat.ones(5, 5, cv.CV_8U);
        let anchor = new cv.Point(-1, -1);
        // You can try more different parameters
        cv.dilate(
            src,
            dst,
            M,
            anchor,
            1,
            cv.BORDER_CONSTANT,
            cv.morphologyDefaultBorderValue()
        );
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();
        M.delete();
        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const morphologicalGradient = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
        let dst = new cv.Mat();
        let M = cv.Mat.ones(5, 5, cv.CV_8U);
        // You can try more different parameters
        cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();
        M.delete();
        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const cannyEdgeDetect = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let dst = new cv.Mat();
        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        // You can try more different parameters
        cv.Canny(src, dst, 50, 100, 3, false);
        cv.imshow("outputsrc", dst);
        src.delete();
        dst.delete();
        setImageForEdit(document.getElementById("outputsrc").toDataURL());
    };
    const detectionInput = (e) => {
        setImageForDetect(URL.createObjectURL(e.target.files[0]));
        // console.log(e.target.files[0]);
    };
    const matching = () => {
        let cv = window.cv;
        let src = cv.imread("imagesrc");
        let templ = cv.imread("miniImg"); // image source of other image
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
        let result = cv.minMaxLoc(dst, mask);
        let maxPoint = result.maxLoc;
        let color = new cv.Scalar(255, 0, 0, 255);
        let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
        cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
        cv.imshow("outputsrc", src);
        src.delete();
        dst.delete();
        mask.delete();
    };
    const onLoaded = (cv) => {
        console.log("opencv loaded, cv");
        console.log(cv);
        let imgtag = document.getElementById("imagesrc");
        let src = cv.imread(imgtag);
        cv.imshow("outputsrc", src);
        src.delete();
    };
    const zoomIn = () => {
        var myImg = document.getElementById("outputsrc");
        var currWidth = myImg.clientWidth;
        if (currWidth == 2500) return false;
        else {
            myImg.style.width = currWidth + 100 + "px";
        }
    };
    const zoomOut = () => {
        var myImg = document.getElementById("outputsrc");
        var currWidth = myImg.clientWidth;
        if (currWidth == 100) return false;
        else {
            myImg.style.width = currWidth - 100 + "px";
        }
    };
    const ResetPic = () => {
        setImageForEdit(base64Img);
        let cv = window.cv;
        let imgtag = document.getElementById("imagesrc");
        let src = cv.imread(imgtag);
        cv.imshow("outputsrc", src);
        src.delete();
    }
    return (
        <OpenCvProvider onLoad={onLoaded} openCvPath="/opencv/opencv.js">
            <div className={classes["maindiv"]}>
                <img id="imagesrc" src={imageforEdit} alt=" " style={{ display: "none" }} />
                <img id="miniImg" src={imageForDetect} alt=" " style={{display:"none"}}/>

                {/* <div style={{ marginLeft: "2px" }}>
                    <Card style={{ width: '14rem', height: "300px" }}>
                        <img src={base64Img} alt="" />
                        <CardBody>
                            <CardTitle tag="h5">
                                FileName Here
                            </CardTitle>
                            <br /><br />
                            <CardText>

                                File Details Here

                                ...
                            </CardText>

                        </CardBody>

                    </Card>

                </div> */}
                <div style={{ width: "220px" }}>
                    <div style={{ height: "85vh", marginLeft: "10px", overflowY: "scroll" }}>

                        {imageFiltersArray.map((filterHistory,index) => {
                            return (
                            <div className={classes["saves-div"]}>
                            <img key={index+22} src={filterHistory} style={{ height: "100px", width: "180px", marginLeft: "5px", marginTop: "5px", cursor: "pointer" }} alt=" " onClick={() => { undoRedoImage(filterHistory) }} />
                            <button className={classes["proc-close-btn"]} onClick={()=>deleteSaves(filterHistory)}>x</button>
                            </div>
                            )
                            
                        })}
                    </div>
                </div>

                <div className={classes["editing-div"]}>
                    <div className={classes["buttons-over-img"]}>
                        <Button
                            className={classes["img-top-btn"]}
                            color="white"
                            onClick={zoomIn}
                            title="Zoom In"
                        >
                            +
                        </Button>
                        <Button
                            className={classes["img-top-btn"]}
                            color="white"
                            onClick={zoomOut}
                            title="Zoom Out"
                        >
                            -
                        </Button>
                        <div style={{ float: "right" }} >
                            <Button
                                color="white"
                                className={classes["img-top-btn"]}

                                onClick={savingImageEdits}
                            >
                                save
                            </Button>
                            <Button
                                color="white"
                                className={classes["img-top-btn"]}

                                onClick={ResetPic}
                            >
                                reset
                            </Button>
                        </div>


                    </div>
                    <canvas id="outputsrc"></canvas>
                </div>

                <div className={classes["filter-buttons"]}>
                    <UncontrolledAccordion defaultOpen={[]} stayOpen>
                        <AccordionItem>
                            <AccordionHeader targetId="1">Color Filter</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <ButtonGroup className={classes["btn-group"]} vertical>
                                    <Button onClick={greyFilter} color="white">
                                        Grey
                                    </Button>
                                </ButtonGroup>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">Smoothing Filters</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <ButtonGroup className={classes["btn-group"]} vertical>
                                    <Button onClick={imageBlur} color="white">
                                        Averaging
                                    </Button>
                                    <Button onClick={gaussianBlur} color="white">
                                        Gaussian Blur
                                    </Button>
                                    <Button onClick={medianBlur} color="white">
                                        Median Blur
                                    </Button>
                                    <Button onClick={bilateralFilter} color="white">
                                        {" "}
                                        Bilateral Filter{" "}
                                    </Button>
                                </ButtonGroup>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                Morphological Transformations
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                <ButtonGroup className={classes["btn-group"]} vertical>
                                    <Button onClick={erosion} color="white">
                                        Erosion
                                    </Button>
                                    <Button onClick={dilation} color="white">
                                        Dilation
                                    </Button>
                                    <Button onClick={morphologicalGradient} color="white">
                                        Morphological Gradient
                                    </Button>
                                </ButtonGroup>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="4">Edge Detection</AccordionHeader>
                            <AccordionBody accordionId="4">
                                <ButtonGroup className={classes["btn-group"]} vertical>
                                    <Button onClick={cannyEdgeDetect} color="white">
                                        Canny Edge
                                    </Button>
                                </ButtonGroup>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="5">Template Matching</AccordionHeader>
                            <AccordionBody accordionId="5">
                                Insert Image to match
                                <Input
                                    id="exampleFile"
                                    name="file"
                                    type="file"
                                    style={{ width: "250px" }}
                                    onChange={(e) => detectionInput(e)}
                                />
                                {imageForDetect && (
                                    <Button onClick={matching} color="white" style={{marginTop:"5px"}}>
                                        Detect
                                    </Button>
                                )}
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>

                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <Button color="danger" outline style={{ width: "80px" }}>
                            cancel
                        </Button>
                        <Button color="success" outline style={{ marginLeft: "10px", width: "80px" }} onClick={saveAllEdits}>
                            save all
                        </Button>
                    </div>
                </div>
            </div>
        </OpenCvProvider>
    );
};
export default ProcessImage;
