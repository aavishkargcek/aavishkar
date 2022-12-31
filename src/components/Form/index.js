import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  formStyle: {
    "background-color": "#434242",
    width: "50%",
    margin: "auto",
    padding: 20,
    color: "#fff",
    "border-radius": 5,
  },
  main: {
    "background-color": "#000",
    height: 500,
    "text-align": "center",
    margin: "auto",
    padding: "2rem",
    "padding-bottom": "10px",
  },
  inputColor: {
    "background-color": "#434242",
  },
  h1: {
    color: "#fff",
    padding: 20,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <h1 className={classes.h1}>Contact Us</h1>
        <FormGroup className={classes.formStyle}>
          <FormControl>
            <InputLabel className={classes.inputColor}>Full Name</InputLabel>
            <Input className={classes.inputColor} />
          </FormControl>
          <FormControl>
            <InputLabel>Company</InputLabel>
            <Input className={classes.inputColor} />
          </FormControl>
          <FormControl>
            <InputLabel>Contact No.</InputLabel>
            <Input className={classes.inputColor} />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input className={classes.inputColor} />
          </FormControl>
          <FormControl>
            <InputLabel>Description</InputLabel>
            <Input className={classes.inputColor} />
          </FormControl>
          <Button varient="contained" color="success" component="label">
            Submit
          </Button>
        </FormGroup>
      </div>
    </>
  );
};

export default Contact;
