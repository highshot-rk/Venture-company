import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import ReactPlayer from 'react-player'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { connect } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { EgretServiceSearch } from '../../egret'

const options = [
  'Business Consulting ',
  'Financing',
  'Automation and Digital transformation',
  'Agile Development',
  'Research &  Data Analysis  ',
  'Financial Modeling',
  'Who we are',
  'Talk to Us '
];

function Overview(props) {
  const [isReadMore, setIsReadMore] = useState(false)

  const playIcon = () => {
    return (
      <div className="play-icon">
        <PlayArrowIcon className="icon" />
      </div>
    )
  }

  return (
    <div className="home-overview">
      <div className="title border pb-sm-10 text-center">
        <span className="black">Our Company </span>
        <span className="primary">Overview</span>
      </div>
      {!isReadMore ? (
        <>
          <div className="text">
            Venture Plans is a  sophisticated team of diverse industry-specific consultants with a deep focus in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook.<br /><br />
            Venture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. Through deep customer analysis and marketing best practices, we shape companies’ business strategies and digitally transform operation models to accelerate top-line growth. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.
          </div>
          <div className="blur">
            Venture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. Through deep customer analysis and marketing best practices, we shape companies’ business strategies and digitally transform operation models to accelerate top-line growth. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.
          </div>
        </>
      )
        :
        <div className="text readMore">
          Venture Plans is a  sophisticated team of diverse industry-specific consultants with a deep focus in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook.<br /><br />
          Venture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. Through deep customer analysis and marketing best practices, we shape companies’ business strategies and digitally transform operation models to accelerate top-line growth. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.<br /><br />
          At venture Plans, we tailor your strategy with precision to meet your individual needs. We accelerate growth by encouraging our clients to avoid Cookie-cutter strategic planning as it delivers inferior results. With wider industry experience, Venture Plans has helped a wide array of clients thrive in hospitality, real estate, SaaS & technology, professional services, health care, cannabis, and many more. Our firm has access to industry-leading tools, databases, and analysis software that can provide market research data that is accurate and up-to-date. Our mission is to help companies build capabilities that will compete to win in the long term. Our mission is to help companies across all sectors transform and grow by developing new markets, optimizing sales, operations, technology, and financing.
        </div>
      }
      <div onClick={() => setIsReadMore(!isReadMore)} className="flex flex-middle flex-center btnReadMore">
        read more
        {!isReadMore && <ArrowDropDownIcon />}
        {isReadMore && <ArrowDropUpIcon />}
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
            Our chief-level business consulting services come in an array of sub branches like restructuring and investment strategy.  We are experts in change management, technology and financing.  Our customer focused analysis has proven to drive revenue growth. 
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
)(Overview);