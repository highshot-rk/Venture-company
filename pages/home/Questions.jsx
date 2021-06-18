import React, { useState } from "react";
import { Grid, Chip } from "@material-ui/core";
import { connect } from "react-redux";

const DATA = [
  {
    step: 1,
    description: 'Answer three questions so we can better help you with your Business objectives',
    question: '1. What phase is your business in?',
    chips: [
      'Start-up',
      'Seeking Exit',
      'In-revenue',
      'Acquisition',
      'M&A',
      'IPO & ICO',
    ],
    img: 'question-1.png'
  },
  {
    step: 2,
    description: 'Answer three questions so we can better help you with your Business objectives',
    question: '2. What service best suits your needs?',
    chips: [
      'Raise Capital',
      'Software or App Development',
      'Write a Business Plan',
      'Request For Proposal',
      'Grant Proposal',  
      'Data and Market Trend Reports',
      'Due Diligence Certification',
      'Investment Portfolios',
      'Digital Transformation',
      'Agile Implementation',
      'Restructring',
      'Automation',
      'Digital Marketing',
      'Legals',
      'Crowdfunding',
      'Private Placement Memorandum',
      'E-B5, E-2 VISA',
      'Cannabis Licensing & Aplication Support',
      'Tax Planing',
      'Growth Strategy Implementation',
      'Intellectual Property',
      'Mangement Consulting',
      'Artificial Intelligence', 
    ],
    img: 'question-2.png'
  },
  {
    step: 3,
    description: 'Answer three questions so we can better help you with your Business objectives',
    question: '3. What is your industry?',
    chips: [
      'Technology',
      'Fintechnology',
      'Real Estate',
      'Health Care',
      'Artificial Intelligence',
      'Consumer goods & Manufacturing',
      'Real Estate',
      'Cannabis',
      'Autombile Manufacturing',
      'Clean Tech',
      'Education & E-Learning',
      'Robotics',
      'Advanced Consumer goods & Manufacturing',
      'Automation',
      'Quantum Information Science ',
      '5-G Advanced Wireless Technology',
      'Biotechnlogy',
      'Pharmaceutical',
      'Non-Profit Organization',
      'Finance',
      'Virtual Reality',
      'Oil & Gas',
      'Electric Automobile Manufacturing',
      '3-D Printing',
      'Gaming',
      'Cybersecuri  ty',
      'Biometrics',
      'Cultivation',
      'Block Chain',
      'Aerospace & Defense  ',
      'Law, Financial Consulting & Accounting',
      'Consumer Product & Services ',
      'Software, Apps, & Telecomunications',
      'Medical Technology, Health & Fitness',
      'Other',
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
  const [isSecondAll, setIsSecondAll] = useState(false);
  const [isThirdAll, setIsThirdAll] = useState(false);

  const onChip = () => {
    if (step === 4)
      return

    setStep(step + 1);
  }

  const onSeeAll = () => {
    if (step === 2)
      setIsSecondAll(true)
    else if (step === 3)
      setIsThirdAll(true)
  }

  const getChips = (chips) => {
    if (step == 2 && !isSecondAll)
      return chips.slice(0, 12);
    else if (step === 3 && !isThirdAll)
      return chips.slice(0, 4);

    return chips;
  }
   
  return (
    <div className="home-questions">
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
                      {getChips(item.chips).map((chip, index) => (
                        <Chip
                          key={index}
                          label={chip}
                          color="primary"
                          variant="outlined"
                          className="chip"
                          onClick={onChip}
                        />
                      ))}
                      {step === 2 && !isSecondAll && <div className="see-all" onClick={() => onSeeAll()}>See All</div>}
                      {step === 3 && !isThirdAll && <div className="see-all" onClick={() => onSeeAll()}>See All</div>}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={5} md={5} xs={12}>
                <img src={`/assets/images/home/${item.img}`} className="question-img" alt="question" />
              </Grid>
            </React.Fragment>
        ))}
      </Grid>
      <div className="left-border">Across sectors, we identify new markets , scale revenue, improve operations and provide financing support</div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Questions);