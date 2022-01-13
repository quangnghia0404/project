import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';
import Slide from '../slideshow/Slide'
import SlideHome from '../slideshow/SlideHome'
import Card from './mainpages/content/Card'
import CardHover from './mainpages/content/CardHover'
import CardContent from './mainpages/content/CardContent'
import Video from './mainpages/video/Video'
import Slideprofile from '../slideshow/SlideProfile'
import Roadmap from './mainpages/content/Roadmap';
import ScrollButton from '../scrolltop/scrollToTop';
import Cards from './mainpages/content/Cards';



export default function Home() {
  return (
    <>
      {/* <SlideHome /> */}
      <div className='home'>
        {/* <a href="https://mytheria.io/">
          <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/271269776_3000737086841900_8728070211358611157_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b9115d&_nc_ohc=zoq1K9drlDsAX8SSwZg&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8qqUATooLmdjbYXRAYt9hlj5BOUkNjIw-fz8L57LVnpw&oe=61DB8FF8" alt="" width="50px"
            height="50px" />
        </a>
        <a href="https://mytheria.io/">
          <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/271269776_3000737086841900_8728070211358611157_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=b9115d&_nc_ohc=zoq1K9drlDsAX8SSwZg&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8qqUATooLmdjbYXRAYt9hlj5BOUkNjIw-fz8L57LVnpw&oe=61DB8FF8" alt="" width="50px"
            height="50px" />
        </a> */}
      </div>

      <Card />
      <Video />
      <CardContent />
      <Cards />
      <Roadmap />
      <Slide />
      <CardHover />
      <Slideprofile />
      <ScrollButton />
      <Footer />
    </>
  );
}
