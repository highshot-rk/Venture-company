import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import ShareIcon from '@material-ui/icons/Share'

function Insights(props) {
  return (
    <div className="home-insights">
      <div className="title border pb-sm-10">OUR LATEST INSIGHTS</div>
      <Grid container spacing={3} className="card-container">
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-1.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">How wealthy individuals can contribute to the overall economic growth Cycle.</div>
              <div className="card-title pb-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-2.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">How wealthy individuals can contribute to the overall economic growth Cycle.</div>
              <div className="card-title pb-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-3.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">Key drivers for finding quality Talent for your business</div>
              <div className="card-title pb-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-4.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">How industries can increase job Opportunities with automation</div>
              <div className="card-title pb-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
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
)(Insights);