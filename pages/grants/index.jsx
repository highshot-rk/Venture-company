import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, BottomNavigation, BottomNavigationAction, Grid, Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { COLORS } from '../../app/config';
import Feature from './Feature';
import ClientWord from './ClientWord';
import Process from './Process';
import Questions from './Questions';
import Team from './Team';
import Business from './Business';
import Share from '../common/Share';
import Faq from '../common/Faq';
import Ready from '../common/Ready';
import Footer from '../common/Footer';
import { EgretServiceSearch } from '../../egret'

const SELECT_DATA = [
	{ id: 1, name: 'Incestor Bussines Plans' },
	{ id: 2, name: 'Industry Market Reports' },
	{ id: 3, name: 'Immigraation Business Plans (E-2, EB-5, L-1)' },
	{ id: 4, name: 'Grants' },
	{ id: 5, name: 'Request for Proposaals' },
  { id: 6, name: 'Financial Modeling' },
  { id: 7, name: 'Private Placement Memorandum' },
  { id: 8, name: 'Cannabis Application Support' },
  { id: 9, name: 'SBA Lender Application Support' },
];

const useStyles = makeStyles({
  root: {
    height: 60,
    background: 'unset',
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

const options = [
  'Writing Grant Proposals',
  'Grants For Non Profit Organizations 501 (c) 3',
  'Competitive Vs Continuation Funding',
  'Federal Grants',
  'Formula Non Competitive Grant Applications ',
  'Local and Passthrough Grants',
];

function Grants(props) {
  const classes = useStyles();
  const [value, setValue] = useState('overview');
  const [isReadMore, setIsReadMore] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="grants">
      <div className="image-containter">
        <Grid container spacing={2} className="h-100">
          <Grid item xs={12} className="grants-container">
            <div className="grants-wrapper">
              <div className="grants-text">Venture Plans, your dream starts with us</div>
              <div className="title mt-12">Grant Application Support</div>
              <div className="grants-text mt-12">
                <div>The four main types of grants are: </div>
                <div>Competitive Funding, Formula Funding,  Continuation Funding, Pass through funding </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="navigation">
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Overview" value="overview" />
          <BottomNavigationAction label="Grant Types" value="grant-types" />
          <BottomNavigationAction label="Grant Application Process" value="grant-process" />
          <BottomNavigationAction label="Assessment" value="assessment" />
          <BottomNavigationAction label="Ready To Talk" value="ready-to-talk" />
          <BottomNavigationAction label="Business Plan Samples" value="business-plan-samples" />
          <BottomNavigationAction label="Our Team" value="our-team" />
        </BottomNavigation>
        <Share />
      </div>
      <div className="grants-us-wrapper">
        <div className="title border pb-sm-10 text-center">
          <span className="black">Grant application support </span>
          <span className="primary">Overview</span>
        </div>
        {!isReadMore ? (
          <>
            <div className="text">
              We have assisted many nonprofits and for profit enterprises  receive millions of dollars in competitive funding support, formula funding, continuation funding, and pass through funding in state and federal level applications. <br /><br />
              Venture Plans focuses on offering comprehensive federal government proposal and application management support,  top-tier industry specific proposal experts, and and has a track record for producing consistent, cost-effective, and efficient outcomes. <br /><br />
              A well-prepared, designed, and packaged grant application is the key to success. Learn more below. 
            </div>
            <div className="blur">
              A well-prepared, designed, and packaged grant application is the key to success. Learn more below. A well-prepared, designed, and packaged grant
            </div>
          </>
        )
          :
          <div className="text readMore">
            We have assisted many nonprofits and for profit enterprises  receive millions of dollars in competitive funding support, formula funding, continuation funding, and pass through funding in state and federal level applications. <br /><br />
            Venture Plans focuses on offering comprehensive federal government proposal and application management support,  top-tier industry specific proposal experts, and and has a track record for producing consistent, cost-effective, and efficient outcomes. <br /><br />
            A well-prepared, designed, and packaged grant application is the key to success. Learn more below. 
          </div>
        }
        <div onClick={() => setIsReadMore(!isReadMore)} className="flex flex-middle flex-center btnReadMore">
          read more
          {!isReadMore && <ArrowDropDownIcon />}
          {isReadMore && <ArrowDropUpIcon />}
        </div>

        <Grid container spacing={6}>
          <Grid item lg={6} md={6} xs={12}>
          <EgretServiceSearch options={options} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="text-align-left grants-content">
              The requirements for the grant  instituion comes  in a guidelines  doc that outlines  what needs to be included in the grant  application  and abstract/proposal in the form of a checklist.  Its important to note that even if they use different terms or ask questions in a different order, most funders want the same details.
              <br />
              <br />     
              Some funders need you to complete their own application forms or cover sheets. After the initial contact with the funding institution get a copy of your guidelines and send it to a professional financial consulting.
              <br />
              <br />
              Typically, you can apply to several funders and ask for partial funding from each.The amount of all your funding requests should, in principle, equal about 200 percent of the money you actually need. This allows for the possibility that certain funders would reject you or give you less than you asked for.
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="grants-application">
        <div className="title">Submit Your Grant Application Today</div>
        <div className="sub-title">We’ve raised more than $650M for our clients</div>
        <div className="flex flex-middle flex-center btnWrapper">
          <Button variant="contained" color="primary" className="btnConsultation">
            Book a Free Consultation
          </Button>
        </div>
      </div>

      <Feature />
      <ClientWord />
      <Process />
      <Questions />
      <Team />
      <Faq
        description={'Frequently Asked Questions on Grants'}
      />
      <Ready
        data={SELECT_DATA}
      />
      <Business />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Grants);