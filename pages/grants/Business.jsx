import React, { useState } from "react";
import { Grid, Link } from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  {
    id: 1,
    img: 'business-1.png',
    name: 'Tech Investor Business Plan',
    link: ''
  },
  {
    id: 2,
    img: 'business-2.png',
    name: 'Bank Plan (SBA)',
    link: ''
  },
  {
    id: 3,
    img: 'business-3.png',
    name: 'Cannabis Business Plan',
    link: ''
  },
  {
    id: 4,
    img: 'business-4.png',
    name: 'Real Estate Business Plan',
    link: ''
  },
];

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

function Business(props) {
  const [isLoadMore, setIsLoadMore] = useState(false)

  return (
    <>
      <div className="grants-business text-center">
        <div className="title border pb-sm-10">Business Plan Samples</div>
        <div className="description">
        We avoid cookie-cutter and boilerplate plans. Here are some of our custom business plans written by our Elite MBA Consultants 
        </div>
        <Grid container spacing={6}>
          {DATA.map((item, index) => (
            <Grid item lg={3} md={3} xs={12} key={index}>
              <div className="card-wrapper">
                <div className="card-header">
                  <img src={`/assets/images/grants/${item.img}`} alt="card" style={{ border: '1px solid #707070' }} />
                </div>
                <div className="card-text">
                  <div className="book">{item.name}</div>
                  <Link href='#'>{'Download (PDF)'}</Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="download-description">
          Please download a pdf to view our sample business plans
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
)(Business);