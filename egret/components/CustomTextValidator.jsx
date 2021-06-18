import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px",
    width: "100%",
    '& label': {
        top: "inherit",
        left: "inherit",
        color: "#666666",
        fontSize: "13px",
    },
    '& fieldset': {
        borderRadius: "12px",
        border: "solid 1px #e5e5e5",
    },
  },
  inputRoot: {
    borderRadius: '6px',
  },
  inputInput: {
    padding: '12px 14px'
  },
}));

const CustomTextValidator = (props) => {
  const classes = useStyles();
  return (
    <TextValidator 
      className={classes.root}
      InputProps={{
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
      }}
      {...props}
    />
  );
};

export default CustomTextValidator;
