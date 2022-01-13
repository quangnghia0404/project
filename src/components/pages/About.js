import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';
import ScrollButton from '../scrolltop/scrollToTop';
import PieChart from './mainpages/chart/Chart'
import Sumary from './mainpages/content/Sumary';


export default function About() {
    return <>
        <h1 className='yugitoken'>

        </h1>

        <PieChart />
        <hr style={{ border: '5px solid #000' }} />
        <ScrollButton />
        <Sumary />
        <Footer />
    </>;
}
