import React, { useState, useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles, Button } from '@material-ui/core';
import { Icon } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PopupSidenav from '../SharedCompoents/PopupSidenav';
import Consulting from '../TopbarMenu/Consulting';
import Financing from '../TopbarMenu/Financing';
import Technology from '../TopbarMenu/Technology';
import Offices from '../TopbarMenu/Offices';
import Language from '../TopbarMenu/Language';
import { isMobile, debounce } from "../../../app/utils";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  expandIcon: {
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(180deg)"
  },
  collapseIcon: {
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)"
  },
}));

const TOPBAR_TYPES = [
  'About',
  'Consulting',
  'Financing',
  'Technology',
  'Legal',
  'Careers',
  'Insights',
  'Industries',
  'Reviews',
  'Contact'
]

export default function Topbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);
  const [openOffice, setOpenOffice] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  
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

  const handlePopoverOpen = (event, index) => {
    if (openOffice || openLanguage)
      return

    if (index !== 1 && index !== 2 && index !== 3)
      return;

    const topbar = document.getElementById("topbar");
    if (topbar)
      topbar.classList.add("is-hover");
    setAnchorEl(event.currentTarget);
    setSelected(index)
  };

  const handlePopoverClose = () => {
    const topbar = document.getElementById("topbar");
    if (topbar)
      topbar.classList.remove("is-hover");
    setAnchorEl(null);
    setSelected(null);
  };

  const renderMenu = (item) => {
    switch (item) {
      case 'Consulting':
        return <Consulting />
      case 'Financing':
        return <Financing />
      case 'Technology':
        return <Technology />
      default:
        return <></>
    }
  }

  const handleOpenUtil = (event, type) => {
    const topbar = document.getElementById("topbar");
    if (topbar)
      topbar.classList.add("is-hover");
    setAnchorEl(event.currentTarget);
    setSelected(null)
    if (type === 'office') {
      setOpenOffice(true);
      setOpenLanguage(false);
    } else {
      setOpenLanguage(true);
      setOpenOffice(false);
    }
  }

  const handleCloseOffice = () => {
    const topbar = document.getElementById("topbar");
    if (topbar)
      topbar.classList.add("is-hover");
      setOpenOffice(false);
      setOpenLanguage(false);
  }

  return (
    <div className="flex flex-column h-100">
      {!isMobileScreen
      ?
      <>
        <div className="flex flex-center language-bar">
          <div className="language-item" onClick={(event) => handleOpenUtil(event, 'office')}>
            <span>Offices</span>
            <div className={
                !openOffice
                  ? classes.collapseIcon
                  : classes.expandIcon
              }>
              <Icon className="text-middle">arrow_drop_down</Icon>
            </div>
          </div>
          <div className="language-item" onClick={(event) => handleOpenUtil(event, 'language')}>
            <span>Language&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;English</span>
            <div className={
                !openLanguage
                  ? classes.collapseIcon
                  : classes.expandIcon
              }>
              <Icon className="text-middle">arrow_drop_down</Icon>
            </div>
          </div>
        </div>
        <div className="flex menu-bar">
          <div className="nav-wrapper">
            <div className="flex">
              <PopupSidenav />
            </div>
            <div className="mark"></div>
            {TOPBAR_TYPES.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  onMouseEnter={(event) => handlePopoverOpen(event, index)}
                  // onMouseLeave={handlePopoverClose}
                  className={`nav-link ${index === selected ? 'is-hover' : ''}`}
                  
                >
                  {item}
                </div>
                <Popover
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={index === selected}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  // onClose={handlePopoverClose}
                  disableRestoreFocus
                  PaperProps={{
                    className: 'subMenuPopoverPaper'
                  }}
                >
                  <div className="sub-menu">
                    {renderMenu(item)}
                    <CloseIcon className="btnClose" onClick={handlePopoverClose} />
                  </div>
                </Popover>
              </React.Fragment>
            ))}
          </div>
          <div className="btnWrapper">
            <Button variant="contained" className="btnConsultation calendar">
              <img src="/assets/images/calendar.svg" alt="calendar" />
              Schedule a consultation
            </Button>
            <Button variant="contained" className="btnConsultation">
              <img src="/assets/images/phone.svg" alt="calendar" />
              1-800-000-0000
            </Button>
          </div>
        </div>
        </>
        :
          <>
            <div className="flex flex-middle flex-space-between w-100">
              <div className="flex">
                <PopupSidenav />
              </div>
              <div className="flex">
                <div className="mark mobile"></div>
                <div className="flex flex-center language-bar">
                  <div className="language-item" onClick={(event) => handleOpenUtil(event, 'language')}>
                    <span>Language&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;English</span>
                    <div className={
                        !openLanguage
                          ? classes.collapseIcon
                          : classes.expandIcon
                      }>
                      <Icon className="text-middle">arrow_drop_down</Icon>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <div className="btnWrapper">
              <Button variant="contained" className="btnConsultation calendar">
                <img src="/assets/images/calendar.svg" alt="calendar" />
                Schedule a consultation
              </Button>
              <Button variant="contained" className="btnConsultation">
                <img src="/assets/images/phone.svg" alt="calendar" />
                1-800-000-0000
              </Button>
            </div>
        </>
      }
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={openOffice || openLanguage}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        // onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          className: 'subMenuPopoverPaper office'
        }}
      >
        <div className="sub-menu">
          {openOffice ? <Offices /> : <Language />}
          <CloseIcon className="btnClose" onClick={handleCloseOffice} />
        </div>
    </Popover>
    </div>
  );
}
