import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

import "./Navbar.css";
import Modal from "./Modal";

let startIndex = 0,
  endIndex = 10,
  searchValue = "";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "110%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [searchParam, setSearchParam] = useState("");

  const history = useHistory();

  const [index, setIndex] = useState({
    start: 0,
    end: 10,
  });

  let url = `https://api.edamam.com/search?q=${searchParam}&app_id=afcbd816&app_key=9d90b886ca0e3e3c0d070151b3192f96&from=${index.start}&to=${index.end}`;

  const handleSearch = (data) => {
    console.log(data);

    if (typeof data.calorie !== "undefined") {
      url = url + "&calories=" + data.calorie.min + "-" + data.calorie.max;
    }

    if (typeof data.diet !== "undefined") {
      url = url + "&diet=" + data.diet;
    }

    if (typeof data.ingCount !== "undefined") {
      url = url + "&ingr=" + data.ingCount;
    }

    if (typeof data.time !== "undefined") {
      url = url + "&time=" + data.time.min + "-" + data.time.max;
    }

    console.log(url);
  };

  function nextPage(e) {
    e.preventDefault();
    history.push({
      pathname: "/results",
      data: {
        url,
      },
    });
  }

  return (
    <div className={classes.root}>
      <form onSubmit={nextPage}>
        <AppBar position="static">
          <Toolbar className="toolbar__alignment">
            <Typography className={classes.title} variant="h5" noWrap>
              HealthyEATS
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
              />
            </div>

            <Modal onSubmit={handleSearch} />
          </Toolbar>
        </AppBar>
      </form>
    </div>
  );
}
