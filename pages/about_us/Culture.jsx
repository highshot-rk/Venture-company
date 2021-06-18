import React from "react";
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

function Culture(props) {
  const classes = useStyles();

  return (
    <div className="about-culture">
      <div className="navigation-title">
        <span className="black">Our </span>
        <span className="primary">Culture</span>
      </div>
      <div className="image-containter">
        <div className="title">With you In your greatest business challenges</div>
      </div>
      <div className="card-container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={6} xs={12} className="card-wrapper">
            <div className="culture-card">
              <div className="header">
                Passion & Commitment
              </div>
            </div>
            <div className="card-content">
              We exceed professional expectations through customer engagement  and guarantee results with strong work ethic.
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12} className="card-wrapper">
            <div className="culture-card">
              <div className="header">
                Honesty & Openness
              </div>
            </div>
            <div className="card-content">
              We uphold integrity and trust in our work. We are accountable and consistent in driving results. 
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12} className="card-wrapper">
            <div className="culture-card">
              <div className="header">
                Practical
              </div>
            </div>
            <div className="card-content">
              We use proprietary standard operating procedures that are tested and proven for maximizing operational efficiencies 
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12} className="card-wrapper">
            <div className="culture-card">
              <div className="header">
                One Team
              </div>
            </div>
            <div className="card-content">
              Our accredited advisors work together to align with your vision and boost your growth. 
            </div>
          </Grid>
        </Grid>
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
)(Culture);