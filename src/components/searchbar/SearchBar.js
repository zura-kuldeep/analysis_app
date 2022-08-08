import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Card } from "reactstrap";
import classes from "./SearchBar.module.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Card style={{ margin: "20px 100px" }}>
      <Grid item xs={12}>
        <TextField
          id="searchCase"
          name="searchCase"
          label="Search Case"
          fullWidth
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Grid>
    </Card>
  );
};

export default SearchBar;
