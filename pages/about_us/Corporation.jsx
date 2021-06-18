import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { COLORS } from '../../app/config'

const useStyles = makeStyles({
  root: {
    height: 60,
    '& .MuiBottomNavigationAction-root': {
      flex: 'unset',
      maxWidth: 'unset',
      color: '#353535',
      '&:hover': {
        color: COLORS.PRIMARY
      },
      '&.Mui-selected': {
        color: COLORS.PRIMARY,
        borderBottom: `3px solid ${COLORS.PRIMARY}`
      },
      '& .MuiBottomNavigationAction-label': {
        fontSize: '1em',
      }
    }
  },
});

function Corporation(props) {
  const classes = useStyles();

  return (
    <div className="about-corporation">
      <div className="navigation-title">
        <span className="black">Our </span>
        <span className="primary">Firm</span>
      </div>
      <div className="card-container px-sm-100">
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} xs={12} className="card-wrapper">
            <div className="corporation-card px-sm-30">
              <div className="flex flex-middle mb-sm-30">
                <div className="order">1</div>
                <span className="title">Our Vision</span>
              </div>
              <div className="card-content">
                <div className="card-text">Building processes to help businesses succeed and win in the long term</div>
                <div className="image-wrapper">
                  <img src="/assets/images/about/corporation-vision.png" alt="vision" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12} className="card-wrapper">
            <div className="corporation-card px-sm-30">
              <div className="flex flex-middle mb-sm-24">
                <div className="order">2</div>
                <span className="title">Our Mission</span>
              </div>
              <div className="card-content">
                <div className="card-text">To deploy digital innovation to drive top line growth</div>
                <div className="image-wrapper">
                  <img src="/assets/images/about/corporation-mission.png" alt="mission" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12} className="card-wrapper">
            <div className="corporation-card px-sm-30">
              <div className="flex flex-middle mb-sm-24">
                <div className="order">3</div>
                <span className="title">Our Culture</span>
              </div>
              <div className="card-content">
                <div className="card-text">By identifying new markets, optimizing revenue, operations, technology and financing, we help businesses across sectors transform and expand.</div>
                <div className="image-wrapper">
                  <img src="/assets/images/about/corporation-culture.png" alt="culture" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container className="place-container mt-sm-120">
          <Grid item lg={6} md={6} xs={12} className="text-container flex flex-column flex-space-between">
            <div>
              <div className="navigation-title text-align-left">
                <span className="black">Work at the </span>
                <span className="primary">best place</span>
              </div>
              <div className="mb-30 text">We offer a diverse environment for consultants who want to expand their knowledge and experience working with Some of the best talents and innovative ideas in the world.</div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className="flex flex-column flex-center image">
            <img src="/assets/images/about/corporation-place.png" alt="png" />
          </Grid>
          <Button variant="contained" color="primary" className="mx-sm-50 btnConsultation checkAvailable">
            CHECK AVAILABLE POSITIONS
          </Button>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Corporation);