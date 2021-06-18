import React from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";

function Feature(props) {

  return (
    <div className="grants-feature text-center">
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
      <div className="grants-feature-image"></div>

      <div className="feature-card-container">
        <Grid container spacing={6}>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-1.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">10500 +</div>
                <div className="small">
                  <span>Institutional Level Investor</span>
                  <span>Business Plans, PPMS, RFPS,</span>
                  <span>Grant Proposal Drafted</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-2.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">$650 MM</div>
                <div className="small">
                  <span>Amount of Investments We</span>
                  <span>Helped Our Clients Raise</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-3.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">Accredited Experts</div>
                <div className="small">
                  <span>Ivy League Trained</span>
                  <span>Industry Specific</span>
                  <span>Executive Level Grant Experts</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-4.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">Comprehensive Compact Pitch</div>
                <div className="small">
                  <span>Accurate Financial</span>
                  <span>Projections & Current</span>
                  <span>Market Research</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-5.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">Expedited Services</div>
                <div className="small">
                  <span>Custom Business Plans</span>
                  <span>Delivered As Fast As  3 Days.</span>
                  <span>We Guarante On Time Delivery</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/card-6.png" alt="card" />
              </div>
              <div className="card-text">
                <div className="big">20 Consultants</div>
                <div className="small">
                  <span>In Finance</span>
                  <span>Artificial Intelligence</span>
                  <span>Cannabis, Robotics</span>
                  <span>Real Estate, Fashion</span>
                  <span>Healthcare and More</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="btnConsultation">
          BOOK FREE CONSULTATION
        </Button>
      </div>

      <div className="consult-card-container">
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/consult-card-1.png" alt="card" />
              </div>
              <div className="card-title">15 Years</div>
              <div className="card-text">
                In Business with many client success stories for grants, investor business plans, request for proposal, ppm, &
                immigration plans.
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/consult-card-2.png" alt="card" />
              </div>
              <div className="card-title">Trusted</div>
              <div className="card-text">
                By The Most Influential Company’s In the United States & The World.
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/consult-card-3.png" alt="card" />
              </div>
              <div className="card-title">Accredited</div>
              <div className="card-text">
                Our consultants & Legal Advisors are accredited with FINRA, CFI Institute, Harvard Law, and Certified Valuators and Analysts.
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src="/assets/images/grants/consult-card-4.png" alt="card" />
              </div>
              <div className="card-title">Free Consult</div>
              <div className="card-text">
                In your free consultation you get, strategy and direction, financing advisory, and a custom quote for your project.
              </div>
            </div>
          </Grid>
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
)(Feature);