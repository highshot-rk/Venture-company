import React  from "react";
import { Grid } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { connect } from "react-redux";

const DATA = [
  { id: 1, img: 'mobile', title: 'Mobile Development', content: 'Meet your demanding deadlines with our mobile app development services that converge a mobile platform, custom development, and the latest tech.' },
  { id: 2, img: 'ux-ui', title: 'UX / UI Design', content: 'Our services in software development allow you to create the products as you envisioned it with a mature design team. We rely on established standards and ten-year expertise.' },
  { id: 3, img: 'qa', title: 'QA Testing', content: 'Automated software testing, established standards, streamlined Q&A testing lifecycle — use our testing services to ensure the smooth operation of your software services.' },
  { id: 4, img: 'development-team', title: 'Development Team', content: 'Quickly hire the right tech talent for your project with our decade-long expertise. We will help you build a loyal and easily scalable software development team.' },
  { id: 4, img: 'consulting', title: 'IT Consulting', content: 'Enlist our top minds to perform a successful digital transformation of your enterprise that goes in line with your business objectives.' },
  { id: 6, img: 'engineering', title: 'Product Engineering', content: 'Use a powerful combination of profound tech expertise, mature, low-risk processes, and proven experience in a variety of business domains to turn your business idea into reality.' },
]

function CustomServices(props) {
  return (
    <div className="custom-services px-sm-80 py-sm-80">
      <div className="title pb-sm-16">Our Core Custom Software Development Services</div>
      <div className="description mt-16">From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.</div>
      <Grid container className="service-card">
        {DATA.map((item, index) => (
          <Grid key={index} item lg={4} md={4} xs={12} className="card-item">
            <div className="item-description flex flex-middle flex-column py-sm-48">
              <img className={`${item.img}`} src={`/assets/images/${item.img}.png`} alt={`${item.img}`} />
              <span className="card-title">{item.title}</span>
            </div>
            <div className="item-link px-sm-30 py-sm-20">
              <div className="link-title mb-sm-8">{item.title}</div>
              <div className="">{item.content}</div>
              <div className="flex flex-middle mt-sm-8">
                <span className="font-weight-bold">View More</span>
                <ChevronRightIcon className="view-arrow" style={{ color: '#FFFFFFF' }} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(CustomServices);