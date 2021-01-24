import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: 300,
    minWidth: 245,
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
  },
});

export default function RecipeReviewCard(props) {
  const classes = useStyles(props);
  return (
    <div className="card__hover">
      <Card
        className={classes.root}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.img})`,
          fontSize: "10px",
        }}
      >
        <CardHeader title={props.title} />
      </Card>
    </div>
  );
}
