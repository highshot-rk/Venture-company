import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { LineChart, VictoryChart } from '../../egret'
import { COLORS } from '../../app/config';

const BIG_CONSULTANTS = [
  { x: 1, y: 4, opacity: 1.0, fill: COLORS.PRIMARY },
  { x: 2, y: 1, opacity: 1.0, fill: '#f3f4f7' },
];

const SMALL_CONSULTANTS = [
  { x: 1, y: 1, opacity: 0.5, fill: COLORS.PRIMARY },
  { x: 2, y: 1, opacity: 1.0, fill: '#f3f4f7' },
];

const BIG_EXPERIENCE = [
  { x: 1, y: 1, opacity: 1.0, fill: '#f3f4f7' },
  { x: 2, y: 4, opacity: 1.0, fill: COLORS.PRIMARY },
];

const SMALL_EXPERIENCE = [
  { x: 1, y: 1, opacity: 1.0, fill: '#f3f4f7' },
  { x: 2, y: 1, opacity: 0.5, fill: COLORS.PRIMARY },
];

function Sectors(props) {
  return (
    <div className="home-sectors">
      <div className="title border pb-sm-10">Sectors we excelled in</div>
      <div className="description">Client expertise in 150+ Industries, find out how we can help you adapt to a changing economy</div>
      <Grid container spacing={4} className="sector-container">
				<Grid container spacing={4} item lg={6} md={6} xs={12} className="animation">
        </Grid>
        <Grid container spacing={4} item lg={6} md={6} xs={12} className="chart-container">
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <span className="value">8</span>
                <span className="chart-title">Industry Consultants</span>
              </div>
              <div className="card-content victory">
                <div className="victory-chart">
                  <VictoryChart
                    data={BIG_CONSULTANTS}
                  />
                  <div className="small-chart">
                    <VictoryChart
                      data={SMALL_CONSULTANTS}
                    />
                  </div>
                  <div className="value-label">8</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <span className="value">35MM</span>
                <span className="chart-title">Raised</span>
              </div>
              <div className="card-content line-chart">
                <LineChart
                  height="300px"
                  color={[COLORS.PRIMARY]}
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <span className="value">386</span>
                <span className="chart-title">Business Plans Written</span>
              </div>
              <div className="card-content line-chart">
                <LineChart
                  height="300px"
                  color={[COLORS.PRIMARY]}
                  showYAxis
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <span className="value">10</span>
                <span className="chart-title">Years of Experience</span>
              </div>
              <div className="card-content victory">
                <div className="victory-chart">
                  <VictoryChart
                    data={BIG_EXPERIENCE}
                  />
                  <div className="small-chart">
                    <VictoryChart
                      data={SMALL_EXPERIENCE}
                    />
                  </div>
                  <div className="value-label">10</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="btnConsultation">
          Book a Free Consultation
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Sectors);