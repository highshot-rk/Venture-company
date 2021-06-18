import React, { useRef }  from "react";
import { IconButton, Button } from "@material-ui/core";
import { connect } from "react-redux";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const data = [
  {
    image: '/assets/images/home/client-1.png',
    name: 'Jack k.',
    word: 'I’m a shareholder and a serial entrepreneur, of multi-million dollar firms since the early 1990’s. Our target for corporate planning, restructuring, financial advisory and deal structuring is Arleo Dordar and venture plans. Arleo Dordar helped draft an excellent business plan for our multi-chain coffee shop franchise in Los Angeles, a century city.'
  },
  {
    image: '/assets/images/home/client-2.png',
    name: 'Jack k.',
    word: 'We featured Arleo Dordar on the Beverly Hills House Wives on Bravo to provide direction on our deal structure. Venture Plans helped prepare a comprehensive business plan for a series A round and helped strengthen our digital marketing systems to help us scale our global e-commerce fashion line. Since then we have gone from breaking even to 35% in revenue growth. '
  },
  {
    image: '/assets/images/home/client-3.png',
    name: 'Andre J. Switzerland Venture Capital ',
    word: 'Grant applications in the U.S. are highly competitive, Covid had reduced our revenue by 50 percent, qualified grant-specific consultants are important for effective grant approvals, we resulted in a 3.5 M raise with the aid of venture plans and were able to prevent furloughs and layoffs. Venture plans  team of market analysts and consultants are highly competent and experienced in strategizing for grant applications.'
  },
  {
    image: '/assets/images/home/client-1.png',
    name: 'Jack k.',
    word: 'I’m a shareholder and a serial entrepreneur, of multi-million dollar firms since the early 1990’s. Our target for corporate planning, restructuring, financial advisory and deal structuring is Arleo Dordar and venture plans. Arleo Dordar helped draft an excellent business plan for our multi-chain coffee shop franchise in Los Angeles, a century city.'
  },
  {
    image: '/assets/images/home/client-2.png',
    name: 'Jack k.',
    word: 'We featured Arleo Dordar on the Beverly Hills House Wives on Bravo to provide direction on our deal structure. Venture Plans helped prepare a comprehensive business plan for a series A round and helped strengthen our digital marketing systems to help us scale our global e-commerce fashion line. Since then we have gone from breaking even to 35% in revenue growth. '
  },
  {
    image: '/assets/images/home/client-3.png',
    name: 'Andre J. Switzerland Venture Capital ',
    word: 'Grant applications in the U.S. are highly competitive, Covid had reduced our revenue by 50 percent, qualified grant-specific consultants are important for effective grant approvals, we resulted in a 3.5 M raise with the aid of venture plans and were able to prevent furloughs and layoffs. Venture plans  team of market analysts and consultants are highly competent and experienced in strategizing for grant applications.'
  },
]

function ClientWord(props) {
  const clientImageCarousel = useRef(null)

  const CustomLeftArrow = () => {
    return <IconButton
            aria-label="left"
            onClick={() => clientImageCarousel.current.slidePrev()}
          >
            <ChevronLeftIcon />
          </IconButton>
  };

  const CustomRightArrow = () => {
    return <IconButton
            aria-label="right"
            onClick={() => clientImageCarousel.current.slideNext()}
          >
            <ChevronRightIcon />
          </IconButton>
  };

  const items = data.map((item, index) => (
    <div className="word-container" key={index}>
      <div className="word-card">
        <div className="image">
          <img src={item.image} alt="image" />
        </div>
        <div className="word">{item.word}</div>
        <div className="rate-container">
          <img className="rate" src="/assets/images/rate.png" alt="rate" />
          <img className="rate" src="/assets/images/rate.png" alt="rate" />
          <img className="rate" src="/assets/images/rate.png" alt="rate" />
          <img className="rate" src="/assets/images/rate.png" alt="rate" />
          <img className="rate" src="/assets/images/rate.png" alt="rate" />
        </div>
        <div className="name">
          <span>{item.name}</span>
          <div className="flex flex-middle">
            <img src="/assets/images/google.png" alt="google" />
            <img src="/assets/images/yelp.png" alt="yelp" />
          </div>
        </div>
      </div>
    </div>
  ))
  
  return (
    <div className="home-client">
      <div className="title-wrapper">
        <div className="title border pb-sm-10">
          <span className="black">What our clients say </span>
          <span className="primary">about us</span>
        </div>
      </div>
      <div className="client-image-container">
        <AliceCarousel
          mouseTracking
          infinite={true}
          disableDotsControls={true}
          items={items}
          responsive={responsive}
          renderPrevButton={({ isDisabled }) => <></>}
          renderNextButton={({ isDisabled }) => <></>}
          ref={(el) => clientImageCarousel.current = el}
        />
      </div>
      <div className="flex flex-middle flex-center btnWrapper">
        <Button variant="contained" color="primary" className="btnConsultation">
          Book a Free Consultation
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