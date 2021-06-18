import React, { useState, useEffect } from "react";
import Link from 'next/link'
import TouchRipple from "@material-ui/core/ButtonBase";
import EgretVerticalNavExpansionPanel from "./EgretVerticalNavExpansionPanel";
import { withStyles, Icon } from "@material-ui/core";

const styles = theme => ({
  expandIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(90deg)"
  },
  collapseIcon: {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "rotate(0deg)"
  }
});

function EgretVerticalNav(props) {
  const { navigation, onClickNav, isMobileScreen } = props;
  const [collapsed, setCollapsed] = useState(false)
  const [language, setLanguage] = useState('English')

  const handleNav = (data) => {
    if (data.children) {
      onClickNav(data)
    } else if (data.language) {
      setLanguage(data.value);
    }
  }

  const handleNavLink = (data) => {
    if (data.language) {
      setLanguage(data.value);
    }
  }

  const renderMobileLevels = data => {
    return data.map((item, index) => {
        return (
          item.border
            ?
              <div key={index} className="nav-border"></div>
            :
          // <Link key={index} href={item.path} className="nav-item">
            <div key={index} className={`nav-item ${item.secondary ? 'secondary' : null}`} onClick={() => handleNav(item)}>
              <TouchRipple key={item.name} name="child" className="w-100">
                {item.image && <img className="mr-10" src={`/assets/images/country/${item.image}`} alt="country" />}
                <span className="text-middle item-text">
                  {item.name === 'Language' ? 
                    <><span>{item.name}</span><span className="ml-12">{language}</span></>
                    : item.name
                  }
                </span>
                {item.name === 'Language' && <div className="item-arrow">
                  <Icon className="text-middle">arrow_right</Icon>
                </div>
                }
                <div className="mx-auto"></div>
              </TouchRipple>
            </div>
          // </Link>
        );
      // }
    });
  };

  const renderLevels = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <EgretVerticalNavExpansionPanel item={item} key={index} currentLanguage={language}>
            {renderLevels(item.children)}
          </EgretVerticalNavExpansionPanel>
        );
      } else {
        return (
          item.border
            ?
              <div className="nav-border"></div>
            :
          // <Link key={index} href={item.path} className="nav-item">
            <div key={index} className={`nav-item ${item.secondary ? 'secondary' : null}`} onClick={() => handleNavLink(item)}>
              <TouchRipple key={item.name} name="child" className="w-100">
                {item.image && <img className="mr-10" src={`/assets/images/country/${item.image}`} alt="country" />}
                <span className="text-middle item-text">{item.name}</span>
                <div className="mx-auto"></div>
              </TouchRipple>
            </div>
          // </Link>
        );
      }
    });
  };

  const renderSelectedNav = (data) => {
    return (
      <>
        <div className={`nav-item select-parent ${data.secondary ? 'secondary' : ''}`}>
          <div className="w-100">
            <span className="text-middle item-text">
              {data.name === 'Language' ? data.mobileName : data.name}
            </span>
            <div className="mx-auto"></div>
          </div>
        </div>
        {data.children && data.children.map((item, index) => (
          <div key={index} className={`nav-item ${item.secondary ? 'secondary' : ''}`} onClick={() => handleNav(item)}>
            <TouchRipple key={item.name} name="child" className="w-100">
              {item.image && <img className="mr-10" src={`/assets/images/country/${item.image}`} alt="country" />}
              <span className="text-middle item-text">{item.name}</span>
              {item.children && <div className="item-arrow">
                  <Icon className="text-middle">arrow_right</Icon>
                </div>
              }
              <div className="mx-auto"></div>
            </TouchRipple>
          </div>
        ))}
      </>
    )
  }

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="navigation">
      {!isMobileScreen
        ?
        renderLevels(navigation)
        :
        Array.isArray(navigation) ? renderMobileLevels(navigation) : renderSelectedNav(navigation)
      }
    </div>
  );
}

export default withStyles(styles)(EgretVerticalNav);
