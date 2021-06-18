import React, { useState } from "react";
import { Grid, Chip } from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  {
    step: 1,
    description: 'Answer three questions so we can better help you with finding the right grants for your entity',
    question: '1. What industry below best describes your entity?',
    chips: [
      'Research & Science',
      'Police Brutality',
      'Healthcare',
      'Affordable Housing',
      'Economic Development',
      'Agriculture and Environment',
      'Technology',
      'Woman Owned',
      'Other'
    ],
    img: 'question-1.png'
  },
  {
    step: 2,
    description: 'Answer three questions so we can better help you with finding the right grants for your entity',
    question: '2. Are you a registered 501 (c) 3 non profit organization?',
    chips: [
      'Yes',
      'No',
    ],
    img: 'question-2.png'
  },
  {
    step: 3,
    description: 'Answer three questions so we can better help you with finding the right grants for your entity',
    question: '3. What can Venture Plans do to better serve your needs?',
    chips: [
      'Grant Proposal & Budget',
      'Full Grant(s) Application Management',
    ],
    img: 'question-3.png'
  },
  {
    step: 4,
    description: 'Fill out our contact form so one of our accredited advisors can get in touch with you for your free consultation',
    question: '1. What is your full name, email, and phone number?',
    chips: [
      'Full Name',
      'Email',
      'Phone Number',
      'Submit'
    ],
    img: 'question-4.png'
  },
]

function Questions(props) {
  const [step, setStep] = useState(1);

  const onChip = () => {
    if (step === 4)
      return

    setStep(step + 1);
  }

  return (
    <div className="grants-questions">
      <Grid container spacing={6}>
        {DATA.map((item, index) => (
          item.step === step && 
            <React.Fragment key={index}>
              <Grid item lg={7} md={7} xs={12} className="question-grid">
                <div className="question-container">
                  <div className="question-title">Your trusted partner in navigating through uncertain times. Let’s accelerate your growth.</div>
                  <div className="question-description">{item.description}</div>
                  <div className="question-wrapper">
                    <div className="question-step">
                      <span className="question">{item.question}  </span>
                      <span className="step">{item.step !== 4 ? `Question ${item.step} / 3` : 'Contact Information'}</span>
                    </div>
                    <div className="question-content">
                      {item.chips.map((chip, index) => (
                        <Chip
                          key={index}
                          label={chip}
                          color="primary"
                          variant="outlined"
                          className="chip"
                          onClick={onChip}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={5} md={5} xs={12}>
                <img src={`/assets/images/grants/${item.img}`} className="question-img" alt="question" />
              </Grid>
            </React.Fragment>
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
)(Questions);