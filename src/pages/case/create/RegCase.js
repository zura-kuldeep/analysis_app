import { useState } from "react";
import { createSearchParams,useNavigate } from "react-router-dom";
// import axios from "axios";
import backIcon from "../../../assets/images/left-arrow.png"

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./RegCase.module.css";

const RegCase = () => {
  const [formData, setFormData] = useState([]);
  let navigate = useNavigate();


  const formSubmitHandler = (e) => {
    e.preventDefault();

     let cases = JSON.parse(localStorage.getItem("cases"));
    
    let newCase = {
      caseID: formData.caseID,
      caseName: formData.caseName,
      offence: formData.Offence,
      submittingOfficerName: formData.submittingOfficerName,
      officerID: formData.officerID,
      date: formData.date,
      location: formData.location,
      caseDescription: formData.caseDescription,
      image: [],
      video: []
    }

//  axios.post('./data.json',JSON.stringify(newCase)).then((response)=>{
//       console.log(response.data);
//     }).catch((err)=>{console.log(err)});

    localStorage.removeItem("cases");

    let newCases = [...cases,newCase];

    console.log(newCases);

    localStorage.setItem("cases",JSON.stringify(newCases));

    navigate({
      pathname: "/case",
      search: createSearchParams({
        caseID: JSON.stringify(formData.caseID),
      }).toString(),
    });
  };

  return (
    <div className={classes["contain"]}>
      <div className={classes.containImg}>
        <img src={backIcon} alt="" onClick={()=>{navigate("/")}}/>
      </div>
      <div className={classes.register}>
      <Typography variant="h6" gutterBottom>
        Register a New Case
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="caseId"
            name="caseId"
            label="case Id:"
            fullWidth
            variant="standard"
            value={formData.caseId}
            onChange={(e) =>
              setFormData({ ...formData, caseID: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Offence"
            name="Offence"
            label="Offence"
            fullWidth
            variant="standard"
            value={formData.Offence}
            onChange={(e) =>
              setFormData({ ...formData, Offence: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="caseName"
            name="caseName"
            label="Case Name"
            fullWidth
            variant="standard"
            value={formData.caseName}
            onChange={(e) =>
              setFormData({ ...formData, caseName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Case Description"
            fullWidth
            variant="standard"
            value={formData.caseDescription}
            onChange={(e) =>
              setFormData({ ...formData, caseDescription: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="submittingOfficerName"
            name="submittingOfficerName"
            label="submitting Officer Name"
            fullWidth
            variant="standard"
            value={formData.submittingOfficerName}
            onChange={(e) =>
              setFormData({
                ...formData,
                submittingOfficerName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="submittingOfficerId"
            name="submittingOfficerID"
            label="submitting Officer Id"
            fullWidth
            variant="standard"
            value={formData.submittingOfficerID}
            onChange={(e) =>
              setFormData({
                ...formData,
                officerID: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date of Incident"
            fullWidth
            variant="standard"
            value={formData.dateOfIncident}
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="location"
            name="location"
            label="Location of Evidence"
            fullWidth
            variant="standard"
            value={formData.LocationOfEvidence}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
          />
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" style={{ marginTop: "20px" }}>
        <Button variant="outlined" onClick={formSubmitHandler}>
          Submit
        </Button>
      </Stack>
      </div>
    </div>
  );
};
export default RegCase;
