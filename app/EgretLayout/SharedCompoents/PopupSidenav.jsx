import React, { useState, useEffect } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { Drawer, Button, TextField, InputAdornment } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { connect } from "react-redux";
import { navigations } from "../../navigations";
import { EgretVerticalNav } from "../../../egret";
import { getSelectedNavigation, isMobile, debounce } from '../../utils';

function PopupSidenav(props) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [open, setOpen] = useState(false)
  const [navDepths, setNavDepths] = useState([])

  useEffect(() => {
    setIsMobileScreen(isMobile());
		if (window) {
			const listenWindowResizeRef = listenWindowResize();
			// LISTEN WINDOW RESIZE
			window.addEventListener("resize", listenWindowResizeRef);

			return () => {
				window.removeEventListener("resize", listenWindowResizeRef);
			}
		}
	}, []);

  const listenWindowResize = () => {
		return debounce(() => {
		  setIsMobileScreen(isMobile());
		}, 100);
	};


  const onClickNav = (data, parent) => {
    if (data.children) {
      setNavDepths([...navDepths, data.name])
    }
  }

  const onBack = () => {
    setNavDepths([...navDepths].slice(0, -1))
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const navs = !isMobileScreen ? navigations : getSelectedNavigation(navigations, navDepths)

  return (
    <>
      {!open && <MenuIcon className="hambuger" onClick={toggleDrawer(true)} />}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        className="nav-drawer"
        PaperProps={{
          className: 'nav-paper'
        }}
      >
        <div className={`nav-header-container ${!Array.isArray(navs) ? 'border' : ''} `}>
          {Array.isArray(navs)
            ?
            <div className="nav-header">
              <img src="/assets/images/nav-mark.png" className="mt-24" alt="venture-plans" />
            </div>
            :
            <div className="btnBack" onClick={onBack}>
              <ArrowLeftIcon className="back" />
              <span>Back</span>
            </div>
          }
          <Button
            className="btnCloseDrawer"
            variant="contained"
            startIcon={<CloseIcon />}
            onClick={toggleDrawer(false)}
          />
        </div>
        {Array.isArray(navs) && (
          <TextField
            className="nav-search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        <Scrollbar option={{suppressScrollX: true}} className="scrollable position-relative">
          <EgretVerticalNav navigation={navs} onClickNav={(data) => onClickNav(data)} isMobileScreen={isMobileScreen} />
        </Scrollbar>
      </Drawer>
    </>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {
  }
)(PopupSidenav)