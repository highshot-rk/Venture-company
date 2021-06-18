import React  from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { EgretTextField, EgretSelect } from '../../egret'
import { COLORS } from '../../app/config'

const SELECT_DATA = [
	{ id: 1, name: 'Commercial Real Estate' },
	{ id: 2, name: 'Cannabis Application Support' },
	{ id: 3, name: 'Consumer Product & services' },
	{ id: 4, name: 'Clean Tech, Fitness' },
	{ id: 5, name: 'Financial Services' },
  { id: 6, name: 'Medical Technology, Biotech, Healthcare' },
  { id: 7, name: 'Education & E-Learning' },
];

function Header(props) {
  return (
    <div className="home-header">
      <Grid container spacing={2}>
				<Grid item lg={6} md={7} xs={12} className="plan-container px-sm-80 mt-100">
          <div className="plan-investor">
            Raise Capital With Custom Investor Business Plans And
          </div>
          <div className="plan mt-16">Venture Plans, your dream starts with us</div>
          <div className="plan mt-12">Get funding with FINRA and Harvard</div>
          <div className="plan mt-12">Accredited Industry Experts</div>
          <EgretSelect
            className="select-service mt-30"
            placeholder="Select a Service"
            data={SELECT_DATA}
            backgroundcolor={COLORS.PRIMARY}
          />
        </Grid>
        <Grid item lg={6} md={5} xs={12} className="info-container px-sm-80">
          <EgretTextField
            placeholder="Full Name"
            className="mt-12"
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
          <Button variant="contained" color="primary" className="mt-16 btnSubmit">
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
)(Header);