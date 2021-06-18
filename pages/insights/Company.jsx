import React from "react";
import { connect } from "react-redux";

function Company(props) {

  return (
    <div className="contact-feature text-center">
      <div className="title">As seen on</div>
      <div className="company-card-container">
        <div className="company-card">
          <img src="/assets/images/contact/bbc.png" alt="bbc" />
        </div>
        <div className="company-card">
          <img src="/assets/images/contact/times.png" alt="times" />
        </div>
        <div className="company-card">
          <img src="/assets/images/contact/cbs.png" alt="cbs" />
        </div>
        <div className="company-card">
          <img src="/assets/images/contact/nbc.png" alt="nbc" />
        </div>
        <div className="company-card">
          <img src="/assets/images/contact/fox.png" alt="fox" />
        </div>
      </div>
      <div className="gray-container"></div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Company);