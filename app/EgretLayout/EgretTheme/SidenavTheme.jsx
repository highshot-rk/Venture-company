import React from "react";
import { Helmet } from "react-helmet";

const SidenavTheme = ({ theme, settings }) => {

  function darkHoverStyle() {
    return theme.palette.type === "dark"
      ? `.navigation .nav-item:hover,
        .navigation .nav-item.active {
          color: ${theme.palette.text.primary};
        }`
      : "";
  }

  function lightHoverStyle() {
    return theme.palette.type === "light"
      ? `.navigation .submenu {
          background: rgba(0, 0, 0, .08);
        }`
      : "";
  }

  return (
    <Helmet>
      <style>
        {`
        
        ${
          theme.palette.type === "dark"
            ? `.sidenav {
          color: ${theme.palette.text.secondary};
        }`
            : " "
        }

        .sidenav__hold {
          opacity: 1 !important;
        }
        .sidenav__hold::after {
          background: ${theme.palette.primary.main};
          opacity: ${settings.layout1Settings.leftSidebar.bgOpacity};
        }

        ${lightHoverStyle()}
        ${darkHoverStyle()}
        
      `}
      </style>
    </Helmet>
  );
};

export default SidenavTheme;
