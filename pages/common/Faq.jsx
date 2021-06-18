import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
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
      background: 'unset',
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
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  secondarySubHeading: {
    color: '#566378',
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  secondaryActiveHeading: {
    color: COLORS.PRIMARY,
    textTransform: 'capitalize',
    textAlign: 'left'
  },
  contentActive: {
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
    name: 'Can I get free consultation with Ventureplans?',
    content: 'Intellectsoft has the domain expertise, tools, and technologies to create software development professional services of all kinds. By erasing the operating inefficiencies that slow growth, we help our clients to create and capture value and improve business results.',
  },
  {
    id: 2,
    name: 'How to choose a software development services company?',
    content: 'We help our clients accelerate description by designing flexible, scalable software development solutions to help them become more innovative and efficient.',
  },
  {
    id: 3,
    name: 'What are the biggest benefits of outsourcing a software development services firm?',
    content: 'Whether it is a consumer-oriented app or a transformative enterprise-class solution, we are a software development services agency providing a full scope of engineering services for global organizations and Fortune 1000 companies.',
  },
  {
    id: 4,
    name: 'How to reduce software development services costs?',
    content: 'Ready to eliminate pitfalls, accelerate transformation, and catalyze revenue growth? Two words: get digital. We use the latest tools, technologies, and platforms to boost our transformation efforts and improve your business outcomes.',
  },
  {
    id: 5,
    name: 'What are the most popular types of software development services?',
    content: 'Quickly finding software engineers with the right expertise and high loyalty for software projects is in our culture. In essence, team extension is a better, modern version of the dedicated team approach.',
  },
  {
    id: 6,
    name: 'Can I get free consultation with Ventureplans?',
    content: 'Quickly finding software engineers with the right expertise and high loyalty for software projects is in our culture. In essence, team extension is a better, modern version of the dedicated team approach.',
  },
]

function Catalogue(props) {
  const { description } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };

  return (
    <div className="faq">
      <div className="title border pb-sm-8">F.A.Q</div>
      <div className="description">{description}</div>
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
                    <Typography
                      className={`${expanded === item.id ? classes.secondaryActiveHeading : classes.secondaryHeading}`}
                    >
                      {item.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className={`${expanded === item.id ? classes.secondaryActiveHeading : classes.secondaryHeading}`}
                    >
                      {item.content}
                    </Typography>
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