import React  from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { EgretTextField, EgretSelect, EgretDropDown } from '../../egret'
import { COLORS } from '../../app/config'

function Ready(props) {
  const { data } = props;

  return (
    <div className="ready">
      <Grid container spacing={2} className="ready-container">
        <Grid item xs={12}>
          <div className="ready-title">
            Ready to talk?
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="experience">
          <div className="ready-market">Experienced in capital markets, a client-first culture, and potent track-record</div>
        </Grid>
				<Grid item lg={6} md={6} xs={12} className="talk-container">
          <div className="ready-description">I want to talk to your experts in:</div>
          <EgretDropDown
            data={data}
            placeholder={'SELECT A SERVICE'}
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="info-container">
          <EgretTextField
            placeholder="Full Name"
            className="full-name"
            bordercolor={'transparent'}
          />
          <EgretTextField
            placeholder="Phone Number"
            className="mt-16"
            bordercolor={'transparent'}
          />
          <EgretTextField
            placeholder="Your Email Address"
            className="mt-16"
            bordercolor={'transparent'}
          />
          <Button variant="outlined" color="secondary" className="btnSubmit">
            Submit
          </Button>
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
)(Ready);