import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from "react-redux";
import { COLORS } from '../../app/config';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiAccordion-root': {
      borderBottom: '1px solid #E6E6E6',
      position: 'unset',
      boxShadow: 'unset',
      '&:first-child': {
        borderTop: '1px solid #E6E6E6',
      },
      '& .MuiAccordionSummary-root:hover': {
        color: COLORS.PRIMARY,
        '& .MuiIconButton-label': {
          color: COLORS.PRIMARY,
        },
      }
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: 0
    },
    '& .MuiAccordionSummary-root': {
      alignItems: 'flex-start',
    }
  },
  heading: {
    fontSize: 16,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  secondarySubHeading: {
    fontSize: 16,
    color: '#566378',
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  secondaryActiveHeading: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  contentActive: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
  chipRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const DATA = [
  {
    id: 1,
    name: 'Services',
    content: 'Intellectsoft has the domain expertise, tools, and technologies to create software development professional services of all kinds. By erasing the operating inefficiencies that slow growth, we help our clients to create and capture value and improve business results.',
    chips: ['Custom App Development', 'Web Application Development', 'Custom Software Development', 'Product Development Services', 'Product Engineering', 'Enterprise Software Development']
  },
  {
    id: 2,
    name: 'Technologies',
    content: 'We help our clients accelerate description by designing flexible, scalable software development solutions to help them become more innovative and efficient.',
    chips: ['Internet of Things', 'Artificial Intelligence', 'Augmented Reality', 'Blockchain', 'Cloud computing', 'FinTech', 'HealthTech', 'InsurTech']
  },
  {
    id: 3,
    name: 'Solutions',
    content: 'Whether it is a consumer-oriented app or a transformative enterprise-class solution, we are a software development services agency providing a full scope of engineering services for global organizations and Fortune 1000 companies.',
    chips: ['IT Consulting', 'Architecture Design', 'DevOps', 'Cyber Security', 'Maintenance and Support', 'Project Recovery Services', 'QA and Testing', 'Technological Services']
  },
  {
    id: 4,
    name: 'Platforms',
    content: 'Ready to eliminate pitfalls, accelerate transformation, and catalyze revenue growth? Two words: get digital. We use the latest tools, technologies, and platforms to boost our transformation efforts and improve your business outcomes.',
    chips: ['iOS App Development', 'Android App Development', 'Window App Development', 'Hybrid Platform', 'Microsoft Azure Solutions', 'HTML5 Development', 'iPad App Development']
  },
  {
    id: 5,
    name: 'Team Extension',
    content: 'Quickly finding software engineers with the right expertise and high loyalty for software projects is in our culture. In essence, team extension is a better, modern version of the dedicated team approach.',
    chips: ['App Developers', 'Dedicated Teams','Staff Augmentation', 'Outsourcing Software Development']
  },
]

function Catalogue(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };

  return (
    <div className="catalogue px-sm-80 py-sm-80">
      <div className="title pb-sm-16">Complete Services Catalogue</div>
      <div className="description mt-16 mb-sm-60">Our services portfolio offers strategic IT and technology consulting, solutions development, full lifecycle management of custom products, applications, and system integration.</div>
      <Grid container spacing={4} className="catalogue-card">
				<Grid container item xs={12} className="card-item">
          <div className="flex flex-top flex-column w-100">
            <div className={classes.root}>
              {DATA.map((item, index) => (
                <Accordion key={index} square expanded={expanded === item.id} onChange={handleChange(item.id)}>
                  <AccordionSummary
                    expandIcon={
                      expanded !== item.id 
                      ? <AddIcon />
                      : <RemoveIcon style={{ color: COLORS.PRIMARY }} />
                    }
                  >
                    <div className="flex flex-column">
                      <Typography className={`${expanded === item.id ? classes.secondaryActiveHeading : classes.secondaryHeading} mb-12`}>{item.name}</Typography>
                      <Typography className={expanded === item.id ? classes.secondaryActiveHeading : classes.secondarySubHeading}>{item.content}</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
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
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
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
)(Catalogue);