import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function Feature(props) {

  return (
    <div className="contact-feature text-center">
      <div className="feature-content">
        <div className="title">
          As featured in
        </div>
        <div className="company-card-container">
          <div className="company-card">
            <img src="/assets/images/contact/bbc.png" alt="bbc" />
          </div>
          <div className="company-card">
            <img src="/assets/images/contact/times.png" alt="times" />
          </div>
          <div className="company-card">
            <img src="/assets/images/contact/cbs.png" alt="cbs" />
          </div>
          <div className="company-card">
            <img src="/assets/images/contact/nbc.png" alt="nbc" />
          </div>
          <div className="company-card">
            <img src="/assets/images/contact/fox.png" alt="fox" />
          </div>
        </div>
        <div className="gray-container"></div>
      </div>
      <Grid container spacing={2} className="feature-card-container">
				<Grid item lg={4} md={4} xs={12} className="">
          <div className="feature-card">
            <div className="mb-sm-30"><LocationOnIcon /></div>
            <span>9255 Sunset Blvd. #1100 <br />Beverly Hills, CA 90069</span>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="">
          <div className="feature-card">
            <div className="mb-sm-30"><MailIcon /></div>
            <span>info@ventureplans.com</span>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="">
          <div className="feature-card">
            <div className="mb-sm-30"><PhoneIcon /></div>
            <span>1-800-VENTURE</span>
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
)(Feature);