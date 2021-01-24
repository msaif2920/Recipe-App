import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles2();
  const [diet, setDiet] = useState("");

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Diet</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={diet}
          onChange={(e) => {
            props.onClick(e);
            const data = e.target.value;
            setDiet(data);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          <MenuItem value="balanced">Balanced</MenuItem>
          <MenuItem value="high-protein">High Protein</MenuItem>
          <MenuItem value="high-fiber">High Fiber</MenuItem>
          <MenuItem value="low-fat">Low Fat</MenuItem>
          <MenuItem value="low-carb">Low Carb</MenuItem>
          <MenuItem value="low-sodium">Low sodium</MenuItem>
        </Select>
        <FormHelperText>Diet Type</FormHelperText>
      </FormControl>
    </div>
  );
}
