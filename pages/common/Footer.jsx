import React, { useState, useEffect }  from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { EgretTextField } from '../../egret'
import { isMobile, debounce } from "../../app/utils";

function Footer(props) {
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
    <div className="footer">
      <Grid container spacing={2} className="footer-container">
        <Grid item lg={6} md={6} xs={12} className="mb-sm-70">
          <div className="image-wrapper">
            <img src="/assets/images/footer-mark.png" alt="footer-mark" />
            <div className="flex flex-middle email-content">
              <img src="/assets/images/mail.png" alt="footer-mark" />
              <span className="mail-title">Email Us</span>
            </div>
          </div>
        </Grid>
        {!isMobileScreen &&
          <Grid item lg={6} md={6} xs={12} className="flex flex-end">
            <div className="flex social-wrapper">
              <div className="social-item">
                <img className="normal" src="/assets/images/linkedin.png" alt="linkedin" />
                <img className="active" src="/assets/images/linkedin-active.png" alt="linkedin" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/twitter.png" alt="twitter" />
                <img className="active" src="/assets/images/twitter-active.png" alt="twitter" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/facebook.png" alt="facebook" />
                <img className="active" src="/assets/images/facebook-active.png" alt="facebook" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/youtube.png" alt="youtube" />
                <img className="active" src="/assets/images/youtube-active.png" alt="youtube" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/instagram.png" alt="instagram" />
                <img className="active" src="/assets/images/instagram-active.png" alt="instagram" />
              </div>
            </div>
          </Grid>
        }
        <Grid item lg={6} md={6} xs={12}>
          <div className="footer-description">In a constantly changing world, remain ahead, join our mailing list to get access to industry trends and market shifts.</div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="mb-sm-50">
          <div className="flex flex-middle">
            <EgretTextField
              placeholder="Your Email Address"
              bordercolor={'transparent'}
              className="footer-input"
            />
            <Button variant="contained" color="primary" className="btnSubmit" style={{ minWidth: isMobileScreen ? 100 : 150}}>
              Submit
            </Button>
          </div>
        </Grid>
        {isMobileScreen &&
          <Grid item lg={6} md={6} xs={12} className="flex flex-middle flex-center my-30">
            <div className="flex flex-middle social-wrapper">
              <div className="social-item">
                <img className="normal" src="/assets/images/linkedin.png" alt="linkedin" />
                <img className="active" src="/assets/images/linkedin-active.png" alt="linkedin" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/twitter.png" alt="twitter" />
                <img className="active" src="/assets/images/twitter-active.png" alt="twitter" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/facebook.png" alt="facebook" />
                <img className="active" src="/assets/images/facebook-active.png" alt="facebook" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/youtube.png" alt="youtube" />
                <img className="active" src="/assets/images/youtube-active.png" alt="youtube" />
              </div>
              <div className="social-item">
                <img className="normal" src="/assets/images/instagram.png" alt="instagram" />
                <img className="active" src="/assets/images/instagram-active.png" alt="instagram" />
              </div>
            </div>
          </Grid>
        }
				{!isMobileScreen &&
          <Grid item lg={12} md={12} xs={12} className="mb-20">
            <div className="flex flex-middle flex-space-between">
              <img src="/assets/images/secure.png" alt="secure" />
              <span className="footer-item">© 2010 -2021 Venture Plans, Inc.</span>
              <span className="footer-item">Los Angeles</span>
              <span className="footer-item">San Francisco</span>
              <span className="footer-item">Chicago</span>
              <span className="footer-item">New York</span>
              <span className="footer-item">Boston</span>
              <span className="footer-item">Austin</span>
              <span className="footer-item">Privacy</span>
              <span className="footer-item">Terms of use</span>
              <span className="footer-item">Contact</span>
              <span className="footer-item">Top</span>
            </div>
          </Grid>
        }
        {isMobileScreen &&
          <>
            <Grid item xs={4}>
              <div className="flex flex-column mobile-footer">
                <span className="footer-item">Los Angeles</span>
                <span className="footer-item">San Francisco</span>
                <span className="footer-item">Chicago</span>
                <span className="footer-item">New York</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="flex flex-column mobile-footer">
                <span className="footer-item">Boston</span>
                <span className="footer-item">Austin</span>
                <span className="footer-item">Privacy</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="flex flex-column mobile-footer">
                <span className="footer-item">Terms of use</span>
                <span className="footer-item">Contact</span>
                <span className="footer-item">Top</span>
              </div>
            </Grid>
            <Grid item xs={12} className="mt-70 mb-20">
              <img src="/assets/images/secure.png" alt="secure" />
              <div className="footer-item">© 2010 -2021 Venture Plans, Inc.</div>
            </Grid>
          </>
        }
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Footer);