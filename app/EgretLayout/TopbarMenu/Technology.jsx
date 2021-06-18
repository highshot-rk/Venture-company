import React from 'react';
import { Grid } from "@material-ui/core";

export default function Technology() {

  return (
    <div className="topbar-menu-container">
      <div className="title border">Technology</div>
      <Grid container spacing={2} className="menu-container">
        <Grid item lg={4} md={4} xs={12} className="menu-column">
          <div className="first">Agile</div>
          <div className="second">Custom Software Development</div>
          <div className="second">Custom Application Development </div>
          <div className="second">Prototypes</div>
          <div className="second">Backlog Feature Implementation</div>
          <div className="second">Functional Specification</div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="menu-column">
          <div className="first">Custom Design and Build</div>
          <div className="first">Automation</div>
          <div className="first">Data Analytics Implementation</div>
        </Grid>
      </Grid>
    </div>
  );
}
