import React  from "react";
import { connect } from "react-redux";

import Header from "./Header";
import CustomService from './CustomServices';
import CustomDevelopment from './CustomDevelopment';
import Plans from './Plans';
import Tools from './Tools';
import About from './About';
import Catalogue from './Catalogue';
import ClientWord from './ClientWord';
import Client from './Client';
import Faq from '../common/Faq';
import Ready from '../common/Ready';
import Footer from '../common/Footer';

const SELECT_DATA = [
	{ id: 1, name: 'Commercial Real Estate' },
	{ id: 2, name: 'Cannabis Application Support' },
	{ id: 3, name: 'Consumer Product & services' },
	{ id: 4, name: 'Clean Tech, Fitness' },
	{ id: 5, name: 'Financial Services' },
  { id: 6, name: 'Medical Technology, Biotech, Healthcare' },
  { id: 7, name: 'Education & E-Learning' },
];

function Advertise(props) {
  return (
    <div className="advertise">
      <Header />
      <CustomService />
      <CustomDevelopment />
      <Plans />
      <Tools />
      <ClientWord />
      <Client />
      <About />
      <Catalogue />
      <Faq
        description={'Do you have any question?'}
      />
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
)(Advertise);