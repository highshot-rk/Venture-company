import React from "react";
import { Grid, Button } from "@material-ui/core";
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { EgretServiceSearch } from '../../egret'

const options = [
  'Investor Business Plans',
  'Industry Market Reports',
  'Grants',
  'Request for Proposals',
  'Pitch Deck',
  'Financial Modeling',
  'Private Placement Memrandum',
  'Cannabis Application Support',
  'SBA Lender Application Support',
  'Investor Business Plans 1',
  'Industry Market Reports 1',
  'Grants 1',
  'Request for Proposals 1',
  'Pitch Deck 1',
  'Financial Modeling 1',
  'Private Placement Memrandum 1',
  'Cannabis Application Support 1',
  'SBA Lender Application Support 1',
  'Investor Business Plans 2',
  'Industry Market Reports 2',
  'Grants 2',
  'Request for Proposals 2',
  'Pitch Deck 2',
  'Financial Modeling 2',
  'Private Placement Memrandum 2',
  'Cannabis Application Support 2',
  'SBA Lender Application Support 2',
];

function Services(props) {

  const playIcon = () => {
    return (
      <div className="play-icon">
        <PlayArrowIcon className="icon" />
      </div>
    )
  }

  return (
    <div className="contact-services text-center">
      <div className="title border pb-sm-10">
        <span className="black">Our </span>
        <span className="primary">Services</span>
      </div>
      <Grid container spacing={8} className="service-container">
				<Grid item lg={6} md={6} xs={12} className="">
          <EgretServiceSearch options={options} />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="">
          <div className="video-container">
            <ReactPlayer
              url='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
              controls
              playIcon={playIcon()}
              light
              width="100%"
              height="100%"
            />
          </div>
          <div className="text-align-left service-content">
            Your journey to full potential begins with a detailed, clear-eyed assessment of where you stand today. 
            Only Bain offers a Manufacturing Full Potential Diagnostic that provides a standardized 
            approach and proprietary benchmarks that give you a <span style={{ color: '#FF0000' }}>qualitative and quantitative</span> assessment of your starting point.
            <br />
            <br />
            Available as either a rapid (2-4 days) or comprehensive (4-6 weeks) assessment, our diagnostic assesses four critical facets 
            of manufacturing: supply chain, footprint design, <span style={{ color: '#00A1F1' }}>plant performance,</span> and digital/Industry 4.0.
            <br />
            <br />
            See where you’re strong, where you lag, and what the savings potential can be when you improve specific elements of 
            your performance and capability. Our benchmarking database of 250+ plants across a wide variety of industries captures 
            today’s most relevant KPIs, allowing you to visualize your current state, spot areas of opportunity and prioritize 
            the actions that will vault you ahead of your competitors.
          </div>
        </Grid>
      </Grid>
      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="btnConsultation">
          BOOK A CONSULTATION
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
)(Services);