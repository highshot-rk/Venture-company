import React  from "react";
import { connect } from "react-redux";

import ContactHeader from './ContactHeader';
import Help from './Help';
import Services from './Services';
import Feature from './Feature';
import Ready from '../common/Ready';
import Footer from '../common/Footer';

const SELECT_DATA = [
	{ id: 1, name: 'Investor Business Plans' },
	{ id: 2, name: 'Software or Application Development' },
	{ id: 3, name: 'Private Placement Memorandum' },
	{ id: 4, name: 'Grants' },
	{ id: 5, name: 'Request for Proposals' },
  { id: 6, name: 'Cannabis Application Support' },
  { id: 7, name: 'Merger & Acquistion' },
  { id: 8, name: 'Immigration Business Plans (E-2, EB-5, L-1)' },
];

function ContactUs(props) {

  return (
    <div className="contact-us">
      <ContactHeader />
      <Help />
      <Services />
      <Feature />
      <Ready
        data={SELECT_DATA}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(ContactUs);