import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

function Passion(props) {
  return (
    <div className="about-passion">
      <div className="navigation-title">
        <span className="black">Passion for </span>
        <span className="primary">results</span>
      </div>
      <div className="passion-wrapper">
        <div className="title">Results, not reports</div>
        <div className="passion-content">We opened our doors on the principle that clients should get results—not just reports—from their consultants. We broke the rules by developing customized strategies that helped clients beat their competition. We continue to work with ambitious clients who want to define the future, not hide from it.</div>
        <br />
        <br />
        <div className="title">Putting our money where our mouth is</div>
        <div className="passion-content">We have various "tied economics" arrangements with our clients, allowing us to better align our financial incentives with client outcomes. Our people are passionate about delivering tangible results for clients, and these arrangements make our commitments more than a promise. We succeed only when our clients do.</div>
        <br />
        <br />
        <div className="title">Results Delivery®</div>
        <div className="passion-content">More than 80% of major change efforts fall short of their goals. Our approach helps clients overcome the odds by predicting, measuring and managing the risk associated with change from day one. The results: a proven method to structure, orchestrate and enable the changes necessary to achieve a competitive advantage.</div>
      </div>
      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="btnConsultation">
          GET A FREE CONSULTATION
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
)(Passion);