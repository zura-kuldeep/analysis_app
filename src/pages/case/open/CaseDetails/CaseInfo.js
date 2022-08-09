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
              fontSize: "24px",
              marginTop: "5px",
            }}
          >
            CASE INFORMATION
          </h3>
        </div>
        <div style={{ float: "right", marginRight: "100px" }}>
          {/* edit option */}
        </div>
        <div className={classes["case-details"]}>
          <table>
            <tbody>
            <tr>
              <td>
                <h5> Case ID </h5>
              </td>
              <td>
                <b> : </b>
              </td>
              <td>
                <p>{cases[0].caseID}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Case Name </h5>
              </td>
              <td>
                <b> : </b>
              </td>
              <td>
                <p>{cases[0].caseName.toLowerCase()}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5> Case Description </h5>
              </td>
              <td>
                <b> : </b>
              </td>
              <td>
                <p>{cases[0].caseDescription.toLowerCase()}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Officer ID </h5>
              </td>
              <td>
                <b> : </b>
              </td>
              <td>
                <p>{cases[0].officerID}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Officer Name </h5>
              </td>
              <td>
                <b > : </b>
              </td>
              <td>
                <p>{cases[0].submittingOfficerName.toLowerCase()}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Date </h5>
              </td>
              <td>
                <b > : </b>
              </td>
              <td>
                <p>{cases[0].date}</p>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Location </h5>
              </td>
              <td>
                <b > : </b>
              </td>
              <td>
                <p>{cases[0].location.toLowerCase()}</p>
              </td>
            </tr>

            </tbody>

          </table>
        </div>
      </div>
    </CardRight>
  );
};

export default CaseInfo;
