import classes from "./CaseInfo.module.css";

import CardRight from "../../../../components/card/case/CardRight";

const CaseInfo = (props) => {
  let cases = props.cases;

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
            Case Information
          </h3>
        </div>
        <div style={{ float: "right", marginRight: "100px" }}>
          {/* edit option */}
        </div>
        <div className={classes["case-details"]}>
            <div>
              <h5> Case ID :</h5> <p> {cases[0].caseID}</p>
            </div>
            <div>
              <h5> Case Name :</h5> <p>{cases[0].caseName}</p>
            </div>
            <div>
              <h5> Case Description :</h5> <p>{cases[0].caseDescription}</p>
            </div>
            <div>
              <h5>Submitting Officer ID :</h5> <p>{cases[0].officerID}</p>
            </div>
            <div>
              <h5>Submitting Officer :</h5>{" "}
              <p>{cases[0].submittingOfficerName}</p>
            </div>
            <div>
              <h5>Date :</h5> <p> {cases[0].date}</p>
            </div>
            <div>
              <h5>Location : </h5> <p>{cases[0].location}</p>
            </div>
          </div>
        </div>
    </CardRight>
  );
};

export default CaseInfo;
