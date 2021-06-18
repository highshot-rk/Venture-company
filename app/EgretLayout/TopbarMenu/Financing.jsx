import React from 'react';
import { Grid } from "@material-ui/core";

export default function Financing() {

  return (
    <div className="topbar-menu-container">
      <div className="title border">FINANCING</div>
      <Grid container spacing={2} className="menu-container">
        <Grid item lg={4} md={4} xs={12} className="menu-column">
          <div className="first">Private Placements</div>
          <div className="first">Regulation D</div>
          <div className="second">506 (B) Relationship Investors</div>
          <div className="second">506 (C) Advertised Offering</div>
          <div className="second">Grants</div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="menu-column">
          <div className="first">Private Equity</div>
          <div className="first">Regulation S Offshore Offering</div>
          <div className="first">Regulation A+ Crowd Funding</div>
          <div className="first">Investment Portfolio Managment</div>
          <div className="first">Private Placement Memorandum</div>
          <div className="first">Deal Structuring</div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="menu-column">
          <div className="first">Mergers & Acquisitions </div>
          <div className="second">Post Merger Integration</div>
          <div className="second">Diviestitures</div>
          <div className="second">Due Deligince Certification</div>
          <div className="second">Forensic accounting</div>
          <div className="second">Securitization</div>
          <div className="second">Real Estate Investment Trust Fund</div>
        </Grid>
      </Grid>
    </div>
  );
}
