import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { EgretTextField } from '../../egret'
import { isMobile, debounce } from "../../app/utils";

const UNIVERSITIES = [
  'FINRA',
  'Harvard-Business',
  'Yale',
  'Harvard',
  'CBV',
  'National',
  'Institute',
  'Peking',
]

function Subscribe(props) {
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

  return (
    <>
      <div className="home-subscribe">
        {!isMobileScreen
        ?
          <>
            <div className="text-container">
              <div className="title">
                Subscribe to get our digital transformation E-book.
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis quam fermentum, rutrum sem quis, vulputate nisl. Aenean nec est enim. Donec
                velit quam, sodales in nulla facili
              </div>
              <div className="flex flex-middle">
                <EgretTextField
                  placeholder="Your Email Address"
                  bordercolor={'transparent'}
                  className="footer-input"
                />
                <Button variant="contained" color="primary" className="btnSubmit" style={{ minWidth: isMobileScreen ? 100 : 150}}>
                  Get It Free
                </Button>
              </div>
            </div>
            <img src="/assets/images/home/subscribe.svg" alt="subscribe" />
          </>
        :
        <>
          <div className="title">
            Subscribe to get our digital transformation E-book.
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis quam fermentum, rutrum sem quis, vulputate nisl. Aenean nec est enim. Donec
            velit quam, sodales in nulla facili
          </div>
          <img src="/assets/images/home/subscribe.svg" alt="subscribe" />
          <EgretTextField
            placeholder="Your Email Address"
            bordercolor={'transparent'}
            className="footer-input"
          />
          <Button variant="contained" color="primary" className="btnSubmit" style={{ minWidth: isMobileScreen ? 100 : 150}}>
            Get It Free
          </Button>
        </>
        }
      </div>
      <div className="home-venture">
        <div className="container">
          <div className="small">careerS</div>
          <div className="title">Venture Plans & You</div>
          <div className="btnWrapper">
            <Button variant="outlined" color="secondary" className="btnSubmit">
              START HERE
            </Button>
          </div>
        </div>
      </div>
      <div className="university-wrapper">
        {UNIVERSITIES.map((item, index) => (
          <div className="image-wrapper" key={index}>
            <img key={index} src={`/assets/images/grants/${item}.png`} alt="university" />
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Subscribe);