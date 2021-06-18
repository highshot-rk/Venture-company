import React from "react";
import {
  Grid,
  IconButton,
} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { connect } from "react-redux";

const DATA = [
  { id: 1, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 2, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 3, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 4, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
  { id: 5, text: 'I am a serial entrepreneur and investor. I have founded multi-million dollar enterprise level companies from the early 1990’s. Our direct contact for corporate planning, restructuring, financial advisory, business plans, and transactions structuring is Arleo Dordar and venture plans. In Los Angeles, Century City, Arleo Dordar helped prepare an excellent comprehensive business plan for our multi-chain coffee shop franchise.', name: 'Jack K-  Boulon D Amour' },
]

function ClientWord(props) {

  return (
    <div className="client-word px-sm-80 pt-sm-80">
      <div className="title pb-sm-16 mb-sm-40">OUR CLIENTS WORDS</div>
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
            color="primary"
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
          <IconButton
            aria-label="right"
            onClick={() => onClickHandler()}
            className="rightArrow"
            color="primary"
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      >
        {DATA.map((item, index) => (
          <Grid key={index} container spacing={4} className="word-card">
            <Grid container item lg={6} md={6} xs={12} className="card-item">
              <div className="flex flex-top flex-column">
                <img className="quote-img" src="/assets/images/quote.png" alt="quote" />
                <div className="word-content">{item.text}</div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12} className="card-item">
              <div className="flex flex-column">
                <img className="face-img" src="/assets/images/face-1.png" alt="face" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12} className="card-item">
              <div className="client-name mt-sm-80">{item.name}</div>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(ClientWord);