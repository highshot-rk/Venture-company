import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, BottomNavigation, BottomNavigationAction, Grid } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { COLORS } from '../../app/config'
import Culture from './Culture';
import Diverse from './Diverse';
import Passion from './Passion';
import Corporation from './Corporation';
import Share from '../common/Share';
import Ready from '../common/Ready';
import Footer from '../common/Footer';

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
    height: 60,
    background: 'unset',
    '& .MuiBottomNavigationAction-root': {
      flex: 'unset',
      maxWidth: 'unset',
      color: '#353535',
      fontSize: '14px',
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

function AboutUs(props) {
  const classes = useStyles();
  const [value, setValue] = useState('about-us');
  const [isReadMore, setIsReadMore] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="about-us">
      <div className="image-containter">
        <Grid container spacing={2} className="h-100">
          <Grid item xs={12} className="about-container">
            <div className="about-wrapper">
              <div className="about-text">Venture Plans, your dream starts with us</div>
              <div className="title mt-24">About Us</div>
              <div className="mt-24 description">Global consulting firm with a speciality in innovation, Technology, Digital Transformation, Financing and Revenue Growth.</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="navigation">
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="About Us" value="about-us" />
          <BottomNavigationAction label="Our Culture" value="our-culture" />
          <BottomNavigationAction label="Diverse Environment" value="diverse-environment" />
          <BottomNavigationAction label="Our Passion" value="our-passion" />
          <BottomNavigationAction label="Our Team" value="our-team" />
          <BottomNavigationAction label="Ready To Talk" value="ready-to-talk" />
          <BottomNavigationAction label="Employment At Venture Plans" value="venture-plans" />
        </BottomNavigation>
        <Share />
      </div>
      <div className="about-us-wrapper">
        <span>ABOUT </span><span>US</span>
        {!isReadMore ? (
          <>
            <div className="text">
              Venture Plans is a  sophisticated team of diverse industry specific consultants, financial and legal advisors, and digital masters from elite universities with institutional-caliber capabilities. We endeavor to provide greater focus and heightened service for our global clients. Venture Plans Supports  high-tech firms with an emphasis  growth, marketing, and go to market strategy focused through financial institutions and private equity. With deep customer analysis and marketing best practices we shape companies strategies in over 150 + Industries with our business plans, and digital innovation to accelerate top-line growth. At venture plans our model is to provide deep insight to help companies win in the Long term. We have considerable operating expertise in software and product management and development in our technology division, to help our clients with every aspect of their business objectives.
            </div>
            <div className="blur">
              At venture At venture plans our model is to provide deep insight to help companies win in the Long term. At venture plans our model is to provide deep insight to help companies win in the Long term.
            </div>
          </>
        )
          :
          <div className="text readMore">
            Venture Plans is a  sophisticated team of diverse industry specific consultants, financial and legal advisors, and digital masters from elite universities with institutional-caliber capabilities. We endeavor to provide greater focus and heightened service for our global clients. Venture Plans Supports  high-tech firms with an emphasis  growth, marketing, and go to market strategy focused through financial institutions and private equity. With deep customer analysis and marketing best practices we shape companies strategies in over 150 + Industries with our business plans, and digital innovation to accelerate top-line growth. At venture plans our model is to provide deep insight to help companies win in the Long term. We have considerable operating expertise in software and product management and development in our technology division, to help our clients with every aspect of their business objectives.
          </div>
        }
        <div onClick={() => setIsReadMore(!isReadMore)} className="flex flex-middle flex-center btnReadMore">
          read more
          {!isReadMore && <ArrowDropDownIcon />}
          {isReadMore && <ArrowDropUpIcon />}
        </div>
      </div>
      <Culture />
      <Diverse />
      <Passion />
      <Corporation />
      <Ready
        data={SELECT_DATA}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(AboutUs);