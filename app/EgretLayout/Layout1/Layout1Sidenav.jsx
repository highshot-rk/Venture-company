import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
} from "@material-ui/core";

import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import Sidenav from "../SharedCompoents/Sidenav";
import { isMdScreen } from "utils";

const styles = theme => ({
  plus: {
    marginRight: '10px'
  },
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: '4px',
    color: theme.palette.grey[500]
  },
  modalTitle: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#30304e'
  }
});

class Layout1Sidenav extends Component {
  state = {
    sidenavToggleChecked: false,
    hidden: true,
    open: false
  };

  componentDidMount() {
    // CLOSE SIDENAV ON ROUTE CHANGE ON MOBILE
    this.unlistenRouteChange = this.props.history.listen((location, action) => {
      if (isMdScreen()) {
        this.updateSidebarMode({ mode: "close" });
      }
    });

    setTimeout(() => {
      this.setState({ hidden: false });
    }, 400);
  }

  componentWillUnmount() {
    this.unlistenRouteChange();
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings, setDefaultSettings } = this.props;
    const updatedSettings = {
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    };
    setLayoutSettings(updatedSettings);
    setDefaultSettings(updatedSettings);
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };

  renderUser = () => {
    return (
      <div className="sidenav__user">
        <div className="username-photo">
          <img src="/assets/images/face.jpg" alt="user" />
        </div>
      </div>
    );
  };

  render() {
    let { theme, settings } = this.props;
    const sidenavTheme =
      settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;
    return (
      <MuiThemeProvider theme={sidenavTheme}>
        <div className="sidenav">
          <div className="sidenav__hold">
            {!this.state.hidden && (
              <Fragment>
                <Sidenav>{this.renderUser()}</Sidenav>
              </Fragment>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    {
      setLayoutSettings,
      setDefaultSettings,
      logoutUser
    }
  )(Layout1Sidenav)
);
