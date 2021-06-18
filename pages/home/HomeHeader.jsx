import React, { useRef, useState, useEffect } from "react";
import { makeStyles, BottomNavigation, BottomNavigationAction, Button } from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { connect } from "react-redux";
import { EgretTextField, EgretSelect } from '../../egret'
import { COLORS } from '../../app/config'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { isMobile, debounce } from "../../app/utils";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const useStyles = makeStyles({
  root: {
    height: 60,
    background: 'unset',
    '& .MuiBottomNavigationAction-root': {
      flex: 'unset',
      maxWidth: 'unset',
      color: '#ffffff',
      opacity: 0.6,
      '&:hover': {
      },
      '&.Mui-selected': {
        opacity: 1,
        borderBottom: `5px solid ${COLORS.PRIMARY}`
      },
      '& .MuiBottomNavigationAction-label': {
        fontSize: '1em',
      }
    }
  },
});

function HomeHeader(props) {
  const classes = useStyles();
  const clientImageCarousel = useRef(null)
  const [value, setValue] = useState('together');
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    setIsMobileScreen(isMobile());
		if (window) {
			const listenWindowResizeRef = listenWindowResize();
			// LISTEN WINDOW RESIZE
			window.addEventListener("resize", listenWindowResizeRef);

			return () => {
				window.removeEventListener("resize", listenWindowResizeRef);
			}
		}
	}, []);

	const listenWindowResize = () => {
		return debounce(() => {
		  setIsMobileScreen(isMobile());
		}, 100);
	};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = [
    <div className="image-item"><img alt="" src={`/assets/images/home/slide${isMobileScreen ? '-mobile-' : '-'}1.png`} /></div>,
    <div className="image-item"><img alt="" src={`/assets/images/home/slide${isMobileScreen ? '-mobile-' : '-'}2.png`} /></div>,
    <div className="image-item"><img alt="" src={`/assets/images/home/slide${isMobileScreen ? '-mobile-' : '-'}3.png`} /></div>,
    <div className="image-item"><img alt="" src={`/assets/images/home/slide${isMobileScreen ? '-mobile-' : '-'}4.png`} /></div>,
    <div className="image-item"><img alt="" src={`/assets/images/home/slide${isMobileScreen ? '-mobile-' : '-'}5.png`} /></div>,
  ];

  return (
    <div className="home-header">
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={5000}
        disableButtonsControls
        infinite={true}
        disableDotsControls={true}
        items={items}
        responsive={responsive}
        // renderPrevButton={({ isDisabled }) => <></>}
        // renderNextButton={({ isDisabled }) => <></>}
        ref={(el) => clientImageCarousel.current = el}
      />
      <div className="container">
        <div className="title">DEEP EXPERTISE IN CAPITAL RAISING</div>
        <div className="find-out">
          FIND OUT HOW
          <ArrowRightAltIcon />
        </div>
        <div className="description">Global consulting firm with a speciality in innovation, Technology, Digital Transformation, Financing and Revenue Growth.</div>
        <div className="btnWrapper">
          <Button variant="outlined" color="secondary" className="btnSubmit">
            LET’S WORK TOGETHER
          </Button>
        </div>
      </div>
      <div className="gradient"></div>
      <div className="navigation">
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
          <BottomNavigationAction value="together" label="Let’s work together" />
          <BottomNavigationAction value="digital" label="Digital Transformation" />
          <BottomNavigationAction value="industries" label="Industries of the future" />
          <BottomNavigationAction value="recruiting" label="Recruiting talent" />
          <BottomNavigationAction value="investors" label="Investors for a strong economoy" />
          <BottomNavigationAction value="consulting" label="Value of consulting firms" />
        </BottomNavigation>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(HomeHeader);