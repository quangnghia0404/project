import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';
import ScrollButton from '../scrolltop/scrollToTop';
import Roadmap from './mainpages/content/Roadmap';

export default function Roadmaps() {
  return (
    <>
      <div className='products'>
        <div className="heading white-heading" style={{ padding: "50px" }, { fontSize: "60px" }}>ROAD MAP</div>
      </div>
      <Roadmap />
      <ScrollButton />
      <Footer />
    </>
  )
}
