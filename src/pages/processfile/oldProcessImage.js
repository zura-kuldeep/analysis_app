import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    ButtonGroup,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";
import { useSearchParams } from "react-router-dom";
import ImageFilter from "react-image-filter";
import { useEffect, useState } from "react";
import classes from "./ProcessImage.module.css";

const ProcessImage = (props) => {
    // console.log(props.imageT);

    const [searchparamss] = useSearchParams();
    const base64Img = JSON.parse(searchparamss.get("base64"));


    let customfilter = {
        one: 1, two: 0, three: 0, four: 0, five: 0,
        tOne: 0, ttwo: 1, tthree: 0, tfour: 0, tfive: 0,
        thone: 0, thtwo: 0, ththree: 1, thfour: 0, thfive: 0,
        fone: 0, ftwo: 0, fthree: 0, ffour: 1, ffive: 0,
    }

    const [filter, setFilter] = useState();
    const [colorOne, setColorOne] = useState();
    const [colorTwo, setColorTwo] = useState();

    const [customFilter, setCustomFilter] = useState(customfilter);

    // useEffect(()=>{
    //   setFilter(customFilter);
    // },[customFilter]);
    useEffect(() => {
        customFiltering();
    }, [customFilter]);
    console.log(filter);

    function customFiltering() {
        setFilter([customFilter.one, customFilter.two, customFilter.three, customFilter.four, customFilter.five, customFilter.tOne, customFilter.ttwo, customFilter.tthree, customFilter.tfour, customFilter.tfive, customFilter.thone, customFilter.thtwo, customFilter.ththree, customFilter.thfour, customFilter.thfive, customFilter.fone, customFilter.ftwo, customFilter.fthree, customFilter.ffour, customFilter.ffive]);

    }

    const [open, setOpen] = useState("1");
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };
    const resetFilters = () => {
        setFilter([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    };
    const invertImage = () => {
        setFilter("invert");
    };
    const greyImage = () => {
        setFilter("grayscale");
    };

    const sepia = () => {
        setFilter("sepia");
    };

    const editedImg = (e) => {
        // console.log(e.target.files[0]);
    };
    // debugger
    const redBlue = () => {
        setFilter("duotone");
        setColorOne([250, 50, 50]);
        setColorTwo([20, 20, 100]);
    };

    const greenPurple = () => {
        setFilter("duotone");
        setColorOne([50, 250, 50]);
        setColorTwo([250, 20, 220]);
    };

    const blueOrange = () => {
        setFilter("duotone");
        setColorOne([40, 250, 250]);
        setColorTwo([250, 150, 30]);
    };
    const blueRed = () => {
        setFilter("duotone");
        setColorOne([40, 70, 200]);
        setColorTwo([220, 30, 70]);
    };

    const removeRed = () => {
        setFilter([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);

    }
    const removeBlue = () => {
        setFilter([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);

    }
    const removeGreen = () => {
        setFilter([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);

    }

    const saveImage= ()=>{

        console.log(document.getElementById("filteredImage").toDataURL());

    }

    return (<div className={classes.maindiv}>
        <div style={{ marginLeft: "30px", display: "flex" }}>

            <Card style={{ width: '14rem', height: "300px" }}>
                <img src={base64Img} alt="" />
                <CardBody>
                    <CardTitle tag="h5">
                        FileName Here
                    </CardTitle>
                    <CardText>

                        File Details Here

                        ...
                    </CardText>

                    <Button style={{
                        marginTop: "10px",
                        backgroundColor: "White",
                        color: "red",
                        borderColor: "red"
                    }}
                        onClick={resetFilters}
                        outline
                    >
                        reset
                    </Button></CardBody>

            </Card>

            <div style={{
                marginLeft:"20px",
                borderLeft: " 1px solid #3B3B3B ",
                height: "350px"
            }}></div>

            <div style={{ height: "500px", marginLeft: "40px", width: "600px" }}>
                <ImageFilter
                    id="filteredImage"
                    image={base64Img}
                    filter={filter}
                    colorOne={colorOne}
                    colorTwo={colorTwo}
                />
            </div>

            <Accordion open={open} toggle={toggle} style={{ width: "300px", marginLeft: "30px", marginTop: "20px" }}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Color Filter</AccordionHeader>
                    <AccordionBody targetId="1">

                        <ButtonGroup vertical style={{ width: "250px" }}>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={removeRed}
                            >
                                Remove Red
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={removeBlue}
                            >
                                Remove Blue
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={removeGreen}
                            >
                                Remove Green
                            </Button>
                        </ButtonGroup>


                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>

                    <AccordionHeader targetId="2">Color Matrix</AccordionHeader>
                    <AccordionBody accordionId="2">

                        <div>
                            <div className={classes.row}>
                                <div class={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.one}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                one: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.two}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                two: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.three}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                three: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.four}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                four: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.five}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                five: e.target.value,
                                            })} />
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div class={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.tOne}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                tOne: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.ttwo}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                ttwo: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.tthree}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                tthree: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.tfour}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                tfour: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.tfive}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                tfive: e.target.value,
                                            })} />
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div class={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.thone}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                thone: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.thtwo}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                thtwo: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.ththree}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                ththree: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.thfour}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                thfour: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.thfive}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                thfive: e.target.value,
                                            })} />
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div class={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.fone}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                fone: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.ftwo}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                ftwo: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.fthree}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                fthree: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column} >
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.ffour}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                ffour: e.target.value,
                                            })} />
                                </div>
                                <div className={classes.column}>
                                    <input type="number" step="0.01" min="-1" max="2" value={customFilter.ffive}
                                        onChange={(e) =>
                                            setCustomFilter({
                                                ...customFilter,
                                                ffive: e.target.value,
                                            })} />
                                </div>
                            </div>
                        </div>

                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Mono Filter</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <ButtonGroup vertical style={{ width: "250px" }}>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={invertImage}
                            >
                                Invert
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={greyImage}
                            >
                                Grey
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={sepia}
                            >
                                sepia
                            </Button>
                        </ButtonGroup>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">Dual Color</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <ButtonGroup vertical style={{ width: "250px" }}>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={redBlue}
                            >
                                Duotone(red/blue)
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={greenPurple}
                            >
                                Duotone(green/purple)
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={blueOrange}
                            >
                                Duotone(light blue/orange)
                            </Button>
                            <Button
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "White",
                                    color: "black",
                                }}
                                onClick={blueRed}
                            >
                                Duotone(blue/red)
                            </Button>
                        </ButtonGroup>
                    </AccordionBody>
                </AccordionItem>

                <Button style={{
                    marginTop: "10px",
                    backgroundColor: "White",
                    color: "black",
                    borderColor: "black",
                    marginLeft:"60px",
                
                }}
                    
                    outline
                >
                    cancel
                </Button>


                <Button style={{
                    marginTop: "10px",
                    marginLeft:"20px",
                    backgroundColor: "White",
                    color: "green",
                    borderColor: "green"
                }}

                onClick={saveImage}
                    
                    outline
                >
                    save
                </Button>

            </Accordion>

        </div>

    </div >
    );
};

export default ProcessImage;