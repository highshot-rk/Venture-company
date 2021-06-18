import React from "react";
import { Grid } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from "react-redux";

function Help(props) {

  return (
    <div className="contact-help">
      <div className="title border text-center pb-sm-10">
        <span className="black">WHAT CAN WE </span>
        <span className="primary">HELP YOU WITH?</span>
      </div>
      <Grid container spacing={2}>
				<Grid item lg={6} md={6} xs={12} className="">
          <div className="help-content">We bring a fresh perspective and infectious energy to every client relationship. Our emphasis on teamwork, trust and tolerance for diverging opinions helps clients focus on their opportunities, build their capabilities and win the future. Together, we achieve results that bridge what is with what can be.v</div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="assistant-wrapper">
          <div className="assistant-card">
            <div className="title">Need Assistance?</div>
            <div className="phone">
              <PhoneIcon color="primary" />
              <span className="ml-12">1-800-VENTURE</span>
            </div>
            <div className="mail">
              <MailIcon />
              <span className="ml-12">info@ventureplans.net</span>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="thanks title text-center">
        <span className="black">Tnanks For Your interest, </span>
        <span className="primary">select the service you need help with</span>
      </div>
      <div className="help-content">We bring a fresh perspective and infectious energy to every client relationship. Our emphasis on teamwork, trust and tolerance for diverging opinions helps clients focus on their opportunities, build their capabilities and win the future. Together, we achieve results that bridge what is with what can be.v</div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Help);