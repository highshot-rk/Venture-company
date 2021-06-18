import React, { useState } from "react";
import { Grid, Chip } from "@material-ui/core";
import { connect } from "react-redux";

function Values(props) {
  return (
    <div className="home-values">
      <div className="title">
        <span className="black">Our </span>
        <span className="primary">Core Values</span>
      </div>
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="text">
                Passion & Diligence
              </div>
              <div className="circle">1</div>
            </div>
            <div className="card-text">
              Passion is a main driver to change your idea into a profitable venture. Our diligence is reflected in our careful and persistent work ethic. 
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="text">
                Honesty & Flexibility
              </div>
              <div className="circle">2</div>
            </div>
            <div className="card-text">
              We uphold integrity, honesty and trust in our work. We are accountable and consistent in driving results. 
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="text">
                Practical
              </div>
              <div className="circle">3</div>
            </div>
            <div className="card-text">
              Propietry standard operating procedures that are tested and proven for maximizing operational efficiencies 
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="text">
                One Team
              </div>
              <div className="circle">4</div>
            </div>
            <div className="card-text">
              Our accredited advisors work together to align with your vision and boost your growth.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Values);