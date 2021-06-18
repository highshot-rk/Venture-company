import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";

const styles = theme => {
  return {
    expandIcon: {
      transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
      transform: "rotate(90deg)"
    },
    collapseIcon: {
      transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
      transform: "rotate(0deg)"
    },
    "expansion-panel": {
      overflow: "hidden",
      transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)"
    },
    highlight: {
      background: theme.palette.primary.main
    }
  };
};

class EgretVerticalNavExpansionPanel extends Component {
  state = {
    collapsed: true
  };
  elementRef = React.createRef();

  componentHeight = 0;

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
    // this.props.onClickNav(this.props.item);
  };

  calcaulateHeight(node) {
    if (node.name !== "child") {
      for (let child of node.children) {
        this.calcaulateHeight(child);
      }
    }
    this.componentHeight += node.clientHeight;
    return;
  }
  componentDidMount() {
    // let { location } = this.props;
    this.calcaulateHeight(this.elementRef);

    // // OPEN DROPDOWN IF CHILD IS ACTIVE
    // for (let child of this.elementRef.children) {
    //   if (child.getAttribute("href") === location.pathname) {
    //     this.setState({ collapsed: false });
    //   }
    // }
  }
  render() {
    let { collapsed } = this.state;
    let { classes, children, currentLanguage } = this.props;
    let { name, icon, badge, language } = this.props.item;
    return (
      <div>
        <TouchRipple
          className={`nav-item flex-middle h-48 w-100 ${!collapsed ? 'active' : ''}`}
          onClick={this.handleClick}
        >
          <div className="flex flex-middle">
            <span className="text-middle item-text mr-6">
              {name === 'Language' ? 
                <><span>{name}</span><span className="ml-12">{currentLanguage}</span></>
              : name}
            </span>
            {language && <div
              className={
                collapsed
                  ? classes.collapseIcon + " item-arrow"
                  : classes.expandIcon + " item-arrow"
              }
            >
              <Icon className="text-middle">arrow_right</Icon>
            </div>}
          </div>
        </TouchRipple>
        <div
          ref={el => (this.elementRef = el)}
          className={classes["expansion-panel"] + " submenu"}
          style={
            collapsed
              ? { maxHeight: "0px" }
              : { maxHeight: this.componentHeight + "px" }
          }
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EgretVerticalNavExpansionPanel);
