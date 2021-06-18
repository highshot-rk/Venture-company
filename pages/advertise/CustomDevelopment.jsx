import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        '& .normal': {
          display: 'none',
        },
        '& .active': {
          display: 'block',
        },
      },
      '& .MuiAccordionSummary-root:not(:hover)': {
        '& .inactive-content': {
          '& .normal': {
            display: 'block',
          },
          '& .active': {
            display: 'none',
          },
        },
        '& .active-content': {
          '& .normal': {
            display: 'none',
          },
          '& .active': {
            display: 'block',
          },
        }
      }
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: 0
    },
    '& .MuiAccordionSummary-content': {
      alignItems: 'center',
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    textTransform: 'capitalize'
  },
  contentActive: {
    fontSize: theme.typography.pxToRem(16),
    color: COLORS.PRIMARY,
  }
}));

const DATA = [
  { id: 1, name: 'planning' },
  { id: 2, name: 'designing' },
  { id: 3, name: 'defining' },
  { id: 4, name: 'building' },
  { id: 5, name: 'testing' },
  { id: 6, name: 'deployment' },
  { id: 7, name: 'maintenance' },
]

function CustomDevelopment(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };

  return (
    <div className="custom-development px-sm-80 pt-sm-80">
      <Grid container spacing={4} className="development-card">
				<Grid container item lg={6} md={6} xs={12} className="card-item">
          <div className="flex flex-top flex-column pb-sm-48">
            <div className="title pb-sm-16">Custom Software Development</div>
            <div className="description mt-16 mb-sm-40">From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.</div>
            <div className={classes.root}>
              {DATA.map((item, index) => (
                <Accordion key={index} square expanded={expanded === item.id} onChange={handleChange(item.id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: expanded === item.id ? COLORS.PRIMARY : null }} />}
                    style={{ color: expanded === item.id ? COLORS.PRIMARY : null }}
                  >
                      <div className={`img-content ${expanded !== item.id ? 'inactive-content' : 'active-content'}`}>
                        <img className="normal" src={`/assets/images/${item.name}.png`} alt={item.name} />
                        <img className="active" src={`/assets/images/${item.name}_active.png`} alt={item.name} />
                      </div>
                    <Typography className={classes.secondaryHeading}>{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={expanded === item.id ? classes.contentActive : null}>
                      We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          {new Array(6).fill('').map((item, index) => (
            <Grid key={index} item lg={2} md={2} xs={4} className="company-item">
              <img src={`/assets/images/company-${index + 1}.png`} alt={`company-item-${index}`} />
            </Grid>
          ))}
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="card-item">
          <div className="flex flex-column py-sm-50">
            <img src="/assets/images/development_animation.gif" alt="animation" />
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
)(CustomDevelopment);