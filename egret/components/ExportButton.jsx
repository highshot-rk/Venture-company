import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import { Button } from "@material-ui/core";

const Export = withStyles(theme => ({
    root: {
        border: "1px dashed #979797",
        backgroundColor: "#ffffff",
        borderRadius: "3px",
        opacity: "0.52",
        width: "115px",
        height: "36px",
        color: "#37404b",
        marginRight: "7px"
    }
}))(Button);

class ExportButton extends Component {

  render() {
    return (
        <Export
            variant="contained"
        >
            <InsertDriveFileOutlinedIcon />
            Export
        </Export>
    );
  }
}

export default ExportButton;
