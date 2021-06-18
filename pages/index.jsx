import React  from "react";
import { connect } from "react-redux";

import HomeHeader from "./home/HomeHeader";
import Questions from './home/Questions';
import Values from './home/Values';
import Overview from './home/Overview';
import ClientWord from './home/ClientWord';
import Company from './home/Company';
import Sectors from './home/Sectors';
import Insights from './home/Insights';
import Subscribe from './home/Subscribe';
import Ready from './common/Ready';
import Footer from './common/Footer';

const SELECT_DATA = [
	{ id: 1, name: 'Commercial Real Estate' },
	{ id: 2, name: 'Cannabis Application Support' },
	{ id: 3, name: 'Consumer Product & services' },
	{ id: 4, name: 'Clean Tech, Fitness' },
	{ id: 5, name: 'Financial Services' },
  { id: 6, name: 'Medical Technology, Biotech, Healthcare' },
  { id: 7, name: 'Education & E-Learning' },
];

function Home(props) {
  return (
    <div className="home">
      <HomeHeader />
      <Questions />
      <Values />
      <Overview />
      <ClientWord />
      <Ready
        data={SELECT_DATA}
      />
      <Company />
      <Sectors />
      <Insights />
      <Subscribe />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Home);