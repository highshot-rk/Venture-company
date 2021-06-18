import React from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";

function Company(props) {

  return (
    <div className="home-company">
      <div className="application">
        <div className="title">Start your business today</div>
        <div className="sub-title">We’ve raised more than $100M for our clients</div>
        <div className="flex flex-middle flex-center btnWrapper">
          <Button variant="contained" color="primary" className="btnConsultation">
            Book a Free Consultation
          </Button>
        </div>
      </div>
      <div className="feature-content">
        <div className="title">
          As seen on
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
        {/* <div className="gray-container"></div> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Company);