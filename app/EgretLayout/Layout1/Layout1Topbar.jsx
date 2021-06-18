import React, { useState, useEffect } from "react";
import {
  withStyles,
  MuiThemeProvider,
  Icon,
} from "@material-ui/core";
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import { setLayoutSettings } from "../../../app/redux/actions/LayoutActions";
import { logoutUser } from "../../../app/redux/actions/UserActions";
import { debounce } from "../../utils";
import Topbar from '../SharedCompoents/Topbar';

const styles = theme => {
  return {
  };
};

function Layout1Topbar(props) {
  let { theme, settings } = props;
  const router = useRouter()
  const topbarTheme =
    settings.themes[settings.layout1Settings.topbar.theme] || theme;

  useEffect(() => {
    if (window) {
      const scrollListener = listenWindowScroll();
      // LISTEN WINDOW RESIZE
      window.addEventListener("scroll", scrollListener, false);
      return () => {
				return window.removeEventListener("scroll", scrollListener);
			}
    }
  }, [])

  const listenWindowScroll = () => {
    return debounce(() => {
      const topbar = document.getElementById("topbar");
      if (window.scrollY > 250) {
        topbar.classList.remove("js-hidden");
        topbar.classList.add("js-scroll");
      } else if (window.scrollY > 100) {
        topbar.classList.remove("js-scroll");
        topbar.classList.add("js-hidden");
      } else if (window.scrollY === 0) {
        topbar.classList.remove("js-hidden");
        topbar.classList.remove("js-scroll");
      }
    }, 100);
  };
  
  return (
    <MuiThemeProvider theme={topbarTheme}>
      <div id="topbar" className={`topbar ${router.pathname !== '/' ? 'colored' : '' }`}>
        <div className={`topbar-hold`}>
          <Topbar />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => ({
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    { setLayoutSettings, logoutUser }
  )(Layout1Topbar)
);