import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  {
    id: 1,
    img: 'team-1.png',
    name: 'Arleo Dordar',
    job: 'Financial Advisor, CEO',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-1.png',
  },
  {
    id: 2,
    img: 'team-2.png',
    name: 'Amaris Olguin',
    job: 'Harvard Business Analyst, Vice President',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-2.png',
  },
  {
    id: 3,
    img: 'team-1.png',
    name: 'Arleo Dordar',
    job: 'Financial Advisor, CEO',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-1.png',
  },
  {
    id: 4,
    img: 'team-2.png',
    name: 'Amaris Olguin',
    job: 'Harvard Business Analyst, Vice President',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-2.png',
  },
  {
    id: 5,
    img: 'team-1.png',
    name: 'Arleo Dordar',
    job: 'Financial Advisor, CEO',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-1.png',
  },
  {
    id: 6,
    img: 'team-2.png',
    name: 'Amaris Olguin',
    job: 'Harvard Business Analyst, Vice President',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.',
    university: 'university-2.png',
  },
]

function Team(props) {
  const [isLoadMore, setIsLoadMore] = useState(false)

  return (
    <div className="grants-team text-center">
      <div className="title border pb-sm-10">OUR TEAM</div>
      <div className="description">
        Our Finra and Harvard accredited Industry Consultants have decades of cumulative
        experience preparing business plans that helped entrepreneurs raise capital.
      </div>
      <Grid container spacing={6} className="grants-card-wrapper">
        {DATA.slice(0, isLoadMore ? 6 : 2).map((item, index) => (
          <Grid item lg={6} md={6} xs={12} key={index}>
            <div className="card-wrapper">
              <div className="card-header">
                <img src={`/assets/images/grants/${item.img}`} alt="card" />
              </div>
              <div className="card-text">
                <div className="name">{item.name}</div>
                <div className="job">{item.job}</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque est id congue suscipit. Pellentesque velren interdum est. Suspendisse potenti. Pellentesque sagittis accumsan lectus, vitae pretium lacus bibendum vel.
                </div>
                <img className="university" src={`/assets/images/grants/${item.university}`} alt="university" />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="flex flex-middle flex-center btnWrapper">
        <Button onClick={() => setIsLoadMore(!isLoadMore)} variant="contained" color="primary" className="mt-16 btnConsultation">
          {!isLoadMore ? `Load More` : `Load Less`}
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
)(Team);