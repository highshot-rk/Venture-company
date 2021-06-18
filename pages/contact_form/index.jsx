import React  from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { EgretTextField, EgretSelect } from '../../egret'
import { COLORS } from '../../app/config'

const SELECT_DATA = [
	{ id: 1, name: 'Business Inquiry: I\'m looking for  Venture Plans business services' },
	{ id: 2, name: 'Partnership Request: I have a business and I am looking for operation resources or capital' },
	{ id: 3, name: 'Press / Media: I\'m looking to feature you in our press release' },
	{ id: 4, name: 'Speaker Request: I\'m looking for a speaker at our event' },
	{ id: 5, name: 'Vendor Inquiry: I\'m looking to sell our product to you' },
  { id: 6, name: 'Career Information: I\'m looking to work with Venture Plans' },
  { id: 7, name: 'Other' },
];

function ContactForm(props) {

  return (
    <div className="contact-form py-sm-30">
      <Grid container className="contact-card" spacing={6}>
        <Grid item lg={6} md={6} xs={12} className="card-item">
          <div className="title-wrapper">
            <span className="title-black">Contact Us</span>
            <span className="title-small">Contact Information</span>
          </div>
          <div className="title-description">Fill out the form below so we can book your consultation with one of our creditive advisors</div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="card-item">
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="card-item">
          <div className="flex flex-column">
            <span className="reason-title">Reason for inquiry:</span>
            <EgretSelect
              className="select-service"
              placeholder="Select a inquiry"
              data={SELECT_DATA}
              backgroundcolor={COLORS.WHITE}
              color={COLORS.BLACK}
              bordercolor={'none'}
              borderradius={0}
              boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
              iconcolor={'#707070'}
              hassearch={false}
            />
          </div>
          <div className="about-you">About You</div>
          <EgretTextField
            placeholder="Full Name"
            className="mt-16"
            borderradius={0}
            bordercolor={'transparent'}
            boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
          />
          <EgretTextField
            placeholder="Phone Number"
            className="phone-number"
            borderradius={0}
            bordercolor={'transparent'}
            boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
          />
          <EgretTextField
            placeholder="Your Email Address"
            className="email"
            borderradius={0}
            bordercolor={'transparent'}
            boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
          />
          <EgretSelect
            className="select-country"
            placeholder="Select Country/Region"
            data={SELECT_DATA}
            backgroundcolor={COLORS.WHITE}
            color={COLORS.BLACK}
            bordercolor={'none'}
            borderradius={0}
            boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
            iconcolor={'#707070'}
            hassearch={false}
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="contact-textarea">
          <div className="content-description">
            How do you know of Venture Plans ? Please give us some general information about your inquiry today. It will help us come up with solutions, before your free consultation.
          </div>
          <EgretTextField
            placeholder="Type more info"
            className="mt-sm-40"
            borderradius={0}
            multiline
            rows={14}
            bordercolor={'transparent'}
            boxshadow={'0 3px 6px rgba(0, 0, 0, 0.16)'}
            style={{ background: '#FAFAFA' }}
          />
          <Button variant="contained" color="primary" className="btnSubmit">
            Submit
          </Button>
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
)(ContactForm);