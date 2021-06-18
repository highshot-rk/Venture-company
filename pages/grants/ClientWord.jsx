import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Button,
} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { connect } from "react-redux";

const DATA = [
  { id: 1, text: 'Venture Plans has extensive experience and a proven track record for securing grant applications targeting nationwide federal funding. They backed us in achieving a 3.5 M rise. They are friendly, experienced, and talented. Grant approvals in the U.S. have been highly competitive, Covid had reduced our income by 50 %, and we needed urgent assistance from an experienced team to advise and provide grant application support.', name: 'Jack K-  Boulon D Amour' },
  { id: 2, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 3, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 4, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 5, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
]

function ClientWord(props) {
  const [isReadMore, setIsReadMore] = useState(false)

  return (
    <div className="client-word">
      <div className="title border pb-sm-10">OUR CLIENT WORDS</div>
      <div className="description">See how we’ve helped our clients achieve their business goals.</div>
      <Carousel
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
          <IconButton
            aria-label="left"
            onClick={() => onClickHandler()}
            className="leftArrow"
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
          <IconButton
            aria-label="right"
            onClick={() => onClickHandler()}
            className="rightArrow"
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      >
        {DATA.map((item, index) => (
          <Grid key={index} container spacing={4} className="word-card">
            <Grid container item lg={6} md={6} xs={12} className="card-item">
              <div className="flex flex-top flex-column">
                <img className="quote-img" src="/assets/images/grants/quote.png" alt="quote" />
                <div className={`word-content ${!isReadMore ? null : 'full'}`}>{item.text}</div>
                <div onClick={() => setIsReadMore(!isReadMore)} className="flex flex-middle flex-center mt-40 btnReadMore">
                  read more
                  {!isReadMore && <ArrowDropDownIcon />}
                  {isReadMore && <ArrowDropUpIcon />}
                </div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12} className="card-item">
              <div className="flex flex-column">
                <img className="face-img" src="/assets/images/grants/face-1.png" alt="face" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12} className="card-item">
              <div className="client-name mt-sm-80">{item.name}</div>
            </Grid>
          </Grid>
        ))}
      </Carousel>
      <Grid container spacing={6} className="card-container-wrapper">
        <Grid item lg={4} md={4} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="circle mb-sm-10">1</div>
              <span>Rapid Execution</span>
            </div>
            <div className="card-text">Choose from 5-day standard and expedited options. Deadlines met. </div>
            <div className="card-img">
              <img src="/assets/images/grants/client-card-1.png" alt="client-img" />
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="circle mb-sm-10">2</div>
              <span>Ivy League Trained</span>
            </div>
            <div className="card-text">Put the best & brightest to work on Your businesses future.</div>
            <div className="card-img">
              <img src="/assets/images/grants/client-card-2.png" alt="client-img" />
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12} className="card-container">
          <div className="card-wrapper">
            <div className="card-header">
              <div className="circle mb-sm-10">3</div>
              <span>Custom Narrative & Forecasts </span>
            </div>
            <div className="card-text">Put the best & brightest to work on Your businesses future.</div>
            <div className="card-img">
              <img src="/assets/images/grants/client-card-3.png" alt="client-img" />
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="mt-16 btnConsultation">
          Book A CONSULTATION
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
)(ClientWord);