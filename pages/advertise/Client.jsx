import React, { useRef }  from "react";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="image-item"><img alt="" src="/assets/images/client-1.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-2.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-3.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-4.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-5.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-1.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-2.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-3.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-4.png" /></div>,
  <div className="image-item"><img alt="" src="/assets/images/client-5.png" /></div>,
];

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 5 },
};

function Client(props) {
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

  return (
    <div className="client px-sm-80 py-sm-80">
      <div className="title pb-sm-16">Our Clients</div>
      <div className="description mt-16">From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.</div>
      <div className="client-image-container mt-sm-40">
        <AliceCarousel
          mouseTracking
          infinite={true}
          disableDotsControls={true}
          items={items}
          responsive={responsive}
          renderPrevButton={({ isDisabled }) => <CustomLeftArrow />}
          renderNextButton={({ isDisabled }) => <CustomRightArrow />}
          ref={(el) => clientImageCarousel.current = el}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Client);