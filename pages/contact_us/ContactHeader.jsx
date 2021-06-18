import React, { useState } from "react";
import { makeStyles, Grid, Button, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { connect } from "react-redux";
import { EgretTextField, EgretDropDown } from '../../egret'
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

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 60,
    background: 'transparent',
    textAlign: 'center',
    '& .MuiBottomNavigationAction-root': {
      maxWidth: 'unset',
      color: '#353535',
      fontWeight: '600',
      margin: '0 50px',
      padding: '20px 0 25px',
      '&:hover': {
        color: COLORS.PRIMARY
      },
      '&.Mui-selected': {
        borderBottom: `3px solid ${COLORS.PRIMARY}`
      },
      '& .MuiBottomNavigationAction-label': {
        fontSize: '1em',
      }
    }
  },
});

function ContactHeader(props) {
  const classes = useStyles();
  const [value, setValue] = useState('los-angeles');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="contact-header">
      <div className="plan-investor">
        <div>Drive change in how your </div>
        <div>company operates Contact US</div>
      </div>
      <Grid container spacing={2} style={{ zIndex: 20 }}>
				<Grid item lg={6} md={7} xs={12} className="plan-container">
          <EgretDropDown
            data={SELECT_DATA}
            placeholder={'Reason for inquiry'}
          />
        </Grid>
        <Grid item lg={6} md={5} xs={12} className="info-container">
          <EgretTextField
            placeholder="Full Name"
            className="full-name"
            bordercolor={'transparent'}
          />
          <EgretTextField
            placeholder="Phone Number"
            className="phone-number"
            bordercolor={'transparent'}
          />
          <EgretTextField
            placeholder="Your Email Address"
            className="email"
            bordercolor={'transparent'}
          />
          <Button variant="contained" color="primary" className="btnSubmit">
            Submit
          </Button>
        </Grid>
      </Grid>
      <div className="navigation">
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Los Angeles" value="los-angeles" />
          <BottomNavigationAction label="San Francisco" value="san-francisco" />
          <BottomNavigationAction label="New York" value="new-york" />
          <BottomNavigationAction label="Seattle" value="seattle" />
          <BottomNavigationAction label="Chicago" value="chicago" />
          <BottomNavigationAction label="Boston" value="boston" />
        </BottomNavigation>
      </div>
      <div className="contact-header-bottom"></div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(ContactHeader);