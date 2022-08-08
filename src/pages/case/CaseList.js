import { useState, useMemo } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import SearchBar from "../../components/searchbar/SearchBar";
import NewSearchBar from "../../components/searchbar/NewSearchBar";

import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import classes from "./CaseList.module.css";

import imgIcon from "../../assets/images/image-gallery.png";
import vidIcon from "../../assets/images/video-files.png";
import caseIcon from "../../assets/images/case.png";

const cases = [
  {
    caseID: "121",
    caseName: "Drunk Man Driving",
    offence: "Drug Abuse",
    submittingOfficerName: "M.M",
    officerID: "142511i",
    date: "20-12-2015",
    location: "Madhapur,Hyderabad",
    caseDescription: "Drunk person driving on a busy street at Hyderabad",
    image: [],
    video: [],
  },
  {
    caseID: "122",
    caseName: "Man with Gun",
    offence: "Gun Abuse",
    submittingOfficerName: "p.p",
    officerID: "142511i",
    date: "02-04-2002",
    location: "marathalli,Banglore",
    caseDescription: "man took out his AR in a park",
    image: [],
    video: [],
  },
  {
    caseID: "123",
    caseName: "Road Accident",
    offence: "Vehicle Abuse",
    submittingOfficerName: "R.R",
    officerID: "142514i",
    date: "27-06-2011",
    location: "redfort,Delhi",
    caseDescription: "Two Vehicles collided during High Speed chase",
    image: [],
    video: [],
  },
  {
    caseID: "124",
    caseName: "Intentional Road Accident",
    offence: "Road Rage",
    submittingOfficerName: "S.S",
    officerID: "142511i",
    date: "20-03-2016",
    location: "nad,mumbai",
    caseDescription: "Unidentified man destroys public property on Road Rage",
    image: [],
    video: [],
  },
];
const filterCases = (cases, query) => {
  if (!query) {
    return cases;
  }
  return cases.filter((casef) => {
    const caseDesc = casef.caseDescription.toLowerCase();
    return caseDesc.includes(query);
  });
};

const CaseList = (props) => {
  // console.log(props.allCases.cases);

  // const listofCases = useMemo(()=>{

  //   let cases = props.allCases.cases;

  //   return cases.map(cases=>

  //   <ListGroupItem
  //     action
  //     tag="button"
  //     key={cases.caseID}
  //     onClick={() => {
  //       casefileHandler(cases);
  //     }}
  //   >
  //     {cases.caseName}
  //   </ListGroupItem>)
  // },[props.allCases]);

  localStorage.setItem("cases", JSON.stringify(cases));

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const filteredCases = filterCases(cases, searchQuery);

  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/regcase");
  };
  function casefileHandler(e) {
    navigate({
      pathname: "/case",
      search: createSearchParams({
        caseID: JSON.stringify(e.caseID),
      }).toString(),
    });
  }

  return (
    <>
      {/* <Container style={{ marginTop: "100px" }}> */}
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      {/* <ul>
        {filteredCases.map((cases) => (
          <li
            key={cases.id}
            value={setCasefile(cases.id)}
            onClick={casefileHandler(casefile)}
          >
            {cases.Description}
          </li>
        ))}
      </ul> */}
      {/* here */}

      {/* <ListGroup style={{ margin: "0 100px" }}>
        {filteredCases.map((cases) => (
          <ListGroupItem
            action
            tag="button"
            key={cases.caseID}
            onClick={() => {
              casefileHandler(cases);
            }}
          >
            {cases.caseName}
          </ListGroupItem>
        ))}
        
      </ListGroup>

      

      <Button className={classes.addbutton} onClick={clickHandler}>
        +
      </Button> */}

      {/* </Container> */}

      <div className={classes["main-div"]}>

        <div style={{textAlign:"center",marginTop:"-20px"}}>
        <h5> List Of Cases </h5>
        </div>

        <div className={classes["parent-div"]}>
          <div className={classes["child-div"]}>
            <div className={classes["register-div"]}>
            <ul>
              <li>
                <a href="#" onClick={clickHandler}>
              Register new Case
            </a>
              </li>
            </ul>
              
            </div>            
          </div>

          <div className={classes["child-div"]}>
            <div className={classes["search-bar-div"]}>
              <NewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <div className={classes["list-div"]}>
              <ul>
                {filteredCases.map((cases) => (
                  <li
                    key={cases.caseID}
                    onClick={() => {
                      casefileHandler(cases);
                    }}
                  >
                    <div>
                      <div className={classes["case-title"]}>
                      <img src={caseIcon} alt="" style={{height:"20px",marginRight:"5px"}}/>
                        {cases.caseName}
                      </div>
                      <div className={classes["case-details"]}>
                        <div className={classes["parent-div"]}>
                        <div className={classes["child-div"]}>
                          {" "}
                          {cases.date}{" "}
                        </div>
                        <div className={classes["child-div"]}>
                          <div className={classes["parent-div"]}>
                            <div className={classes["child-div"]}>
                              <img src={imgIcon} alt="" style={{height:"15px",marginRight:"5px"}}/>
                              {cases.image.length}
                            </div>
                            <div className={classes["child-div"]}>
                               <img src={vidIcon} alt="" style={{height:"15px",marginRight:"5px"}}/>
                              {cases.video.length}
                            </div>
                          </div>
                        </div>
                      </div></div>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseList;
