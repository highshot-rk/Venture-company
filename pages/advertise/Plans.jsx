import React  from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  { id: 1, img: 'approach', title: '360 Approach', content: 'From ideation to delivery, and ongoing support, we cover the full lifecycle of enterprise application design, integration, and management through our IS360 framework.' },
  { id: 2, img: 'centricity', title: 'Client - Centricity', content: 'Intellectsoft’s boutique format allows us to maintain a highly customized approach, build a long-term partnership, and remain focused on specific tasks at hand.' },
  { id: 3, img: 'domain', title: 'Domain Expertise', content: 'We possess exceptional domain expertise and in-depth knowledge of niche technologies: from solution architecture to firefighting projects.' },
  { id: 4, img: 'market', title: 'Time-To-Market', content: 'High level expertise and a number of solutions accelerators enable fast product rollout, quick customizations, and smooth delivery. As a result, you get reduced development costs with speedier market entry.' },
  { id: 5, img: 'class', title: 'A-Class Team', content: 'With over 13 years of experience, we leverage our deep technology knowledge and unparalleled software engineering expertise to ensure digital transformation maturity across the enterprise.' },
]

function Plans(props) {
  return (
    <div className="plans">
      <div className="p-sm-80">
        <div className="title pb-sm-16">Why Choose Ventureplans</div>
        <div className="description mt-16 mb-sm-60">Using deep domain expertise of our software developers, we create impactful digital solutions that drive meaningful change with a strategic vision.</div>
        <Grid container spacing={2} className="plans-card">
          {DATA.map((item, index) => (
            <Grid key={index} item className="plan-grid">
              <div className="front flex flex-middle flex-center flex-column card-item">
                <img src={`/assets/images/${item.img}.png`} alt={`${item.img}`} />
                <span className="card-title">{item.title}</span>
              </div>
              <div className="back">
                <div>{item.content}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="plan-image-container px-sm-80 mt-sm-80">
        <Grid container spacing={2} className="plan-image-grid">
          <Grid item lg={6} md={6} xs={12}>
            <div className="white-text">GET A PERFECT MASH-UP OF DEDICATED ENGINEERS, TOP TECH SKILLS, AND STELLAR PROJECT IDEAS.</div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Button variant="outlined" className="mt-16 btnTalk">
              Talk To Us
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Plans);