import React  from "react";
import {
  Grid,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
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

function About(props) {
  return (
    <div className="about">
      <div className="image-content"></div>
      <Grid container spacing={2} style={{ flex: 1, paddingTop: 60 }}>
				<Grid item lg={6} md={6} xs={12} className="info-container px-sm-80 mb-sm-50">
          <div className="flex flex-column">
            <span className="more-about mb-sm-40">Tell Us More About</span>
            <div className="flex flex-middle flex-space-between mb-sm-60">
              <div className="more-item">
                <span>15+</span>
                <span>Years in operation</span>
              </div>
              <div className="more-item">
                <span>750+</span>
                <span>Projects done</span>
              </div>
              <div className="more-item">
                <span>6</span>
                <span>Offices</span>
              </div>
            </div>
            <div className="flex flex-column award">
              <span className="mb-sm-24">AWWARDS & Recogntion</span>
              <div className="flex flex-middle">
                <img src="/assets/images/award-1.png" alt="award-1" />
                <img src="/assets/images/award-2.png" alt="award-2" />
                <img src="/assets/images/award-3.png" alt="award-3" />
                <img src="/assets/images/award-4.png" alt="award-4" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="info-form px-sm-80">
          <div className="about-content p-sm-50">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12}>
                <EgretTextField
                  placeholder="First Name"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <EgretTextField
                  placeholder="Last Name"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretTextField
                  placeholder="Phone Number"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretTextField
                  placeholder="Your Email Address"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretTextField
                  placeholder="Country"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretTextField
                  placeholder="Company"
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretSelect
                  className="select-service"
                  placeholder="Select a Service"
                  data={SELECT_DATA}
                  backgroundcolor={COLORS.WHITE}
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                  color={'rgba(0, 0, 0, 0.87)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <EgretTextField
                  placeholder="Project Decription"
                  multiple
                  bordercolor={'rgba(0, 0, 0, 0.23)'}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <div className="flex flex-middle flex-space-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="send"
                        color="primary"
                      />
                    }
                    label="Send NDA"
                  />
                  <Button
                    color="primary"
                    startIcon={<img src="/assets/images/path.png" alt="path" />}
                  >
                    Attach file
                  </Button>
                </div>
              </Grid>
              <Button variant="contained" color="primary" className="btnSubmit">
                Schedule a consultation
              </Button>
            </Grid>
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
)(About);