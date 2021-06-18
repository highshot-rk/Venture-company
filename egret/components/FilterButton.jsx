import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { 
    Button,
    MuiThemeProvider,
    Drawer
} from "@material-ui/core";

const Filter = withStyles(theme => ({
    root: {
        backgroundColor: "#d8d8d8",
        borderRadius: "3px",
        opacity: "0.52",
        width: "115px",
        height: "36px",
        marginLeft: "7px",
        marginRight: "7px",
        color: "#37404b",
    },
}))(Button);

function FilterButton(props) {
    const rightPanel = props.rightPanel;

    function handleDrawerToggle() {
        if (!props.filter.panelOpen) {
        }
        props.showFilterPanel();
    }

    let leftSidebar = {
        show: true,
        mode: 'full', // full, close, compact, mobile,
    }

    return (
        <MuiThemeProvider theme={leftSidebar}>
            <Filter
                variant="contained"
                onClick={handleDrawerToggle}
            >
                Filter
                <img src="/assets/images/people/filter.svg" alt="filter"/>
            </Filter>

            <Drawer
                width={"100px"}
                // container={container}
                variant="temporary"
                anchor={"right"}
                open={props.filter.panelOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
            >
                {rightPanel}
            </Drawer>
        </MuiThemeProvider>
    );
}

const mapStateToProps = state => ({
    filter: state.filter,
    showFilterPanel: PropTypes.func.isRequired,
});
  
export default withStyles({}, { withTheme: true })(connect(
    mapStateToProps,
    {  }
  )(FilterButton));
