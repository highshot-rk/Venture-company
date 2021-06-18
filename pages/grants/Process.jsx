import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { connect } from "react-redux";

function Process(props) {
  const [processReadMores, setProcessReadMores] = useState([false, false, false])

  const onProcessReadMore = (index) => {
    const temp = [...processReadMores];
    temp[index] = !temp[index];
    setProcessReadMores(temp);
  }

  return (
    <div className="grants-process text-center">
      <div className="title border pb-sm-10">GRANT APPLICATION PROCESS</div>
      <div className="description mt-16">An accurate business proposal that outlines the requirements to achieve a large  specific project</div>
      <div className="process-card-container">
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="circle">1</div>
              <div className="card-text">
                <div className="process-title">Research</div>
                <div className={`text ${processReadMores[0] ? 'full' : null}`}>Grants are available from government agencies, state associations, and private corporations. The government website grants.gov, the local Business Development Center, and charities like the Local, State, or nationwide  Initiatives Support Corp are all places venture plans starts byresearching and finding the top eligible choices that fit well with your entity and for your application.</div>
                <div onClick={() => onProcessReadMore(0)} className="flex flex-middle flex-center mt-20 btnReadMore">
                  read more
                  {!processReadMores[0] && <ArrowDropDownIcon />}
                  {processReadMores[0] && <ArrowDropUpIcon />}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <img src="/assets/images/grants/process-1.png" alt="process" />
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <img src="/assets/images/grants/process-2.png" alt="process" />
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="circle">2</div>
              <div className="card-text">
                <div className="process-title">Guidelines & Requirements</div>
                <div className={`text ${processReadMores[1] ? 'full' : null}`}>After the initial research phase, we dive deeper in disecting the guidelines of the top compatible grants that match your venture’s needs. We start looking at the requirements and checklist of the stated guidelines, to see how we are going to create a compelling business model, sustainability plan for a proper budgeting strategy for a ongoing long term funding portal.</div>
                <div onClick={() => onProcessReadMore(1)} className="flex flex-middle flex-center mt-20 btnReadMore">
                  read more
                  {!processReadMores[1] && <ArrowDropDownIcon />}
                  {processReadMores[1] && <ArrowDropUpIcon />}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <div className="circle">3</div>
              <div className="card-text">
                <div className="process-title">Grant Proposal and Submission </div>
                <div className={`text ${processReadMores[2] ? 'full' : null}`}>Our team of grant experts draft a grant proposal that is straightforward, precise document written for a specific institution or funding agency with the intention of influencing the supporters to help you because: (1) you have a significant and well-thought-out strategy to pursue a viable cause, and (2) you are accountable and capable of carrying out that plan.</div>
                <div onClick={() => onProcessReadMore(2)} className="flex flex-middle flex-center mt-20 btnReadMore">
                  read more
                  {!processReadMores[2] && <ArrowDropDownIcon />}
                  {processReadMores[2] && <ArrowDropUpIcon />}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="card-wrapper">
              <img src="/assets/images/grants/process-3.png" alt="process" />
            </div>
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
)(Process);