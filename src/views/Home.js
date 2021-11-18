import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import MatchHistory from '../components/sections/MatchHistory';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <MatchHistory />
      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default Home;