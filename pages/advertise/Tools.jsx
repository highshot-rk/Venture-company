import React  from "react";
import {
  Grid,
  Chip,
  makeStyles
} from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  { id: 1, img: 'language', text: 'Languages', chips: ['Java', 'C#', 'Objective C', 'Python', 'Groovy', 'Swift', 'Kotlin', 'PHP', 'Rust', 'Scala'] },
  { id: 2, img: 'framework', text: 'Frameworks', chips: ['JDBC/JPA', 'JMS', 'Hibernate', '.NET', 'EJB', 'Apache Camel', 'Nodejs', 'Firebase', 'LDAP/Active Directory'] },
  { id: 3, img: 'mobile-tool', text: 'Mobile', chips: ['iOS', 'Android', 'HTML5', 'React', 'Xamarin', 'Javascript'] },
  { id: 4, img: 'web', text: 'Web', chips: ['Vue', 'Sass', 'Coffee', 'Angular', 'WebGL'] },
  { id: 5, img: 'database', text: 'Database Management', chips: ['NoSQL', 'MySQL', 'Oracle SQL', 'PostgreSQL'] },
  { id: 6, img: 'cloud', text: 'Cloud', chips: ['Amazon Web services', 'Google Cloud', 'Oracle Cloud', 'IBM Cloud', 'Microsoft Azure'] },
]

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function Tools(props) {
  const classes = useStyles();

  return (
    <div className="tools px-sm-80 py-sm-80">
      <div className="title pb-sm-16">Tools & Technologies our software developers use</div>
      <div className="description mt-16">From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.</div>
      <Grid container spacing={2} className="mt-sm-70 tools-grid">
        {DATA.map((item, index) => (
          <Grid key={index} item lg={index < 2 ? 6 : 3} md={index < 2 ? 6 : 3} xs={12} className="grid-item">
            <div className="flex flex-column p-sm-24 card-item">
              <div className="flex flex-middle mb-12">
                <img src={`/assets/images/${item.img}.png`} alt={`${item.img}`} />
                <span className="ml-sm-16 tool-description">{item.text}</span>
              </div>
              <div className={classes.chipRoot}>
                {item.chips && item.chips.map((chip, index) => (
                  <Chip
                    key={index}
                    label={chip}
                    color="primary"
                    variant="outlined"
                  />
                ))}
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
)(Tools);