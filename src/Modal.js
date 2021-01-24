import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Select from "./Select";

import "./Modal.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: " #62959c !important",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outlineWidth: "0",
    borderRadius: "25px",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  //Modal options
  const [ingrCount, setIngrCount] = useState();
  const [calories, setCalories] = useState({
    max: null,
    min: null,
  });
  const [cooktime, setCookTime] = useState({
    max: null,
    min: null,
  });
  const [exclude, setExclude] = useState("");
  const [dietType, setDietType] = useState("");

  let dietChange = (event) => {
    setDietType(event.target.value);
  };

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    const data = {};

    if (calories.min !== null) {
      data.calorie = calories;
    }

    if (ingrCount >= 4) {
      data.ingCount = ingrCount;
    }
    if (cooktime.min !== null) {
      data.time = cooktime;
    }

    if (dietType.length !== 0) {
      data.diet = dietType;
    }

    props.onSubmit(data);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modal__ingredient">
        <p className="modal__contenttitles">Incredient Count:</p>
        <div className="modal__count">
          <Input
            type="number"
            value={ingrCount}
            onChange={(e) => setIngrCount(e.target.value)}
          />
        </div>
        <Select onClick={dietChange} />
      </div>
      <div className="modal__minmax">
        <p className="modal__contenttitles">Calories:</p>
        <div className="modal__count">
          <Input
            placeholder="min"
            value={calories.min}
            onChange={(e) => {
              const value = e.target.value;
              setCalories((prev) => ({ ...prev, min: value }));
            }}
          />
        </div>
        <div className="modal__count">
          <Input
            placeholder="max"
            value={calories.max}
            onChange={(e) => {
              const value = e.target.value;
              setCalories((prev) => ({ ...prev, max: value }));
            }}
          />
        </div>
      </div>
      <div className="modal__minmax">
        <p className="modal__contenttitles">Cook time(min):</p>
        <div className="modal__count">
          <Input
            placeholder="min"
            value={cooktime.min}
            onChange={(e) => {
              const value = e.target.value;
              setCookTime((prev) => ({ ...prev, min: value }));
            }}
          />
        </div>
        <div className="modal__count">
          <Input
            placeholder="max"
            value={cooktime.max}
            onChange={(e) => {
              const value = e.target.value;
              setCookTime((prev) => ({ ...prev, max: value }));
            }}
          />
        </div>
      </div>
      <div className="modal__ingredient">
        <p className="modal__contenttitles">Exclude Ingridient:</p>{" "}
        <Input
          type="text"
          value={exclude.max}
          onChange={(e) => {
            const value = e.target.value;
            setExclude(value);
          }}
        />
      </div>
      <div className="modal__button">
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClose}
          type="submit"
        >
          Done
        </Button>
      </div>
    </div>
  );

  return (
    <div className="modal__view">
      <IconButton onClick={handleOpen}>
        <FilterListIcon fontSize="small"></FilterListIcon>Filters
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
