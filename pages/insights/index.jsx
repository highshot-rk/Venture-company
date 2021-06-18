import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, BottomNavigation, BottomNavigationAction, Grid, Button, Drawer, FormControlLabel, Checkbox } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share'
import { COLORS } from '../../app/config'
import Company from './Company';
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    background: 'unset',
    '& .MuiBottomNavigationAction-root': {
      flex: 'unset',
      maxWidth: 'unset',
      color: '#353535',
      fontSize: 16,
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
}));

const INDUSTRIES_FILTER = ['Business', 'Education', 'Entertainment', 'Finance', 'Food & Drink', 'Investments'];
const SERVICES_FILTER = ['PPM', 'Grants', 'Private Equity', 'Request for Proposal', 'Financials', 'Intellectual Properties', 'Crowd Funding & Reg A+'];

function Insights(props) {
  const classes = useStyles();
  const [value, setValue] = useState('our-latest-insights');
  const [isReadMore, setIsReadMore] = useState(false)
  const [isViewMore, setIsViewMore] = useState(false)
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="insights">
      <div className="image-containter">
        <Grid container spacing={2} className="h-100">
          <Grid item xs={12} className="insights-container">
            <div className="insights-wrapper">
              <div className="title">Venture Plans Insights </div>
              <div className="insights-text">Be the first to learn more about the changes in your industry</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="navigation">
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Our latest insights" value="our-latest-insights" />
          <BottomNavigationAction label="Ready to talk" value="ready-to-talk" />
        </BottomNavigation>
        <Share />
      </div>
      <div style={{ position: 'relative' }}>
        <Drawer
          className="filter-drawer"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className={classes.drawerHeader}>
            <img src="/assets/images/venture-plans.png" alt="venture-plans" />
            <CloseIcon onClick={() => handleDrawerClose()} style={{ cursor: 'pointer' }} />
          </div>
          <div className="flex flex-column filter-group mt-sm-100">
            <div className="filter-title">Industries</div>
            {INDUSTRIES_FILTER.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={false}
                    onChange={handleChange}
                    name={item}
                    color="primary"
                  />
                }
                label={item}
              />
            ))}
            <div className="load-more">Load More</div>
          </div>
          <div className="flex flex-column filter-group mt-sm-40">
            <div className="filter-title">Services</div>
            {SERVICES_FILTER.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={false}
                    onChange={handleChange}
                    name={item}
                    color="primary"
                  />
                }
                label={item}
              />
            ))}
            <div className="load-more">Load More</div>
          </div>
        </Drawer>
        <Grid container spacing={2} className="insights-latest-container">
          <Grid item lg={5} md={5} xs={12}>
            <div className="title border pb-sm-8">
              <span className="black">Latest </span>
              <span className="primary">Insights</span>
            </div>
          </Grid>
          <Grid item lg={7} md={7} xs={12}>
            <div className="latest-wrapper">
              {!isReadMore ? (
                <>
                  <div className="text">
                    Our insights help you be informed of next era of industry news. Through our global networks and intel in the United States we are always informed of the direction of the economy. Take a look at some key tips related to your industry and call one of our senior business analysts for more information about your industry. 
                  </div>
                  <div className="blur">
                    call one of our senior business analysts for more information about your industry.
                  </div>
                </>
              )
                :
                <div className="text readMore">
                  Our insights help you be informed of next era of industry news. Through our global networks and intel in the United States we are always informed of the direction of the economy. Take a look at some key tips related to your industry and call one of our senior business analysts for more information about your industry. 
                </div>
              }
              <div onClick={() => setIsReadMore(!isReadMore)} className="flex flex-middle flex-center mt-20 btnReadMore">
                read more
                {!isReadMore && <ArrowDropDownIcon />}
                {isReadMore && <ArrowDropUpIcon />}
              </div>
            </div>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <div className="flex flex-center btnWrapper">
              <Button variant="contained" color="primary" className="btnFilter" onClick={() => handleDrawerOpen()}>
                <div className="flex flex-middle">
                  <img src="/assets/images/filter.png" alt="filter" />
                  <span className="ml-16">Filter</span>
                </div>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2} className="latest-card-container">
        <Grid item lg={6} md={6} xs={12} className="latest-card-wrapper">
          <div className="latest-card">
            <img src="/assets/images/insights/latest-1.png" alt="latest" />
            <div className="description mt-16">U.S Demand in cyber security at a peak for the next decade </div>
            <div className="card-title py-20">Cyber Security & Data Encryption</div>
            <div className="small-description">As consumer engagement with (and trust in) online services and platforms has grown, the potential for serious cybersecurity breaches and imperiling of consumer data has grown, too. </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="latest-card-wrapper">
          <div className="latest-card">
            <img src="/assets/images/insights/latest-2.png" alt="latest" />
            <div className="description mt-16">U.S Demand in cyber security at a peak for the next decade </div>
            <div className="card-title py-20">Cyber Security & Data Encryption</div>
            <div className="small-description">As consumer engagement with (and trust in) online services and platforms has grown, the potential for serious cybersecurity breaches and imperiling of consumer data has grown, too. </div>
          </div>
        </Grid>
      </Grid>
      <div className="text-center latest-title">
        <div className="title border pb-sm-8">
          <span className="black">OUR LATEST INSIGHTS</span>
        </div>
      </div>
      <Grid container spacing={3} className="card-container">
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-1.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">Commercial Real Estate</div>
              <div className="card-title py-24">Cyber Security & Data Encryption</div>
              <div className="description">Research has shown that superior talent is up to eight times more productive, that the success of an organization is closely tied to the quality of its employees, and that high employee turnover is bad for a company’s bottom line.</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-2.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">Commercial Real Estate</div>
              <div className="card-title py-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-3.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">Commercial Real Estate</div>
              <div className="card-title py-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} xs={12} className="card-wrapper">
          <div className="card-content">
            <img src="/assets/images/insights/card-4.png" alt="card" />
            <div className="card-wrapper">
              <div className="primary-title">Commercial Real Estate</div>
              <div className="card-title py-24">Redesigned Account Planning Transforms an IT Company’s Performance</div>
              <div className="description">New tools and strategies boost year-on-year growth and reenergize the company’s sales pipeline</div>
              <div className="card-read-more">
                <span>read more</span>
                <ShareIcon className="share" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Company />
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
)(Insights);