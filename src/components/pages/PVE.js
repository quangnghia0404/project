import React from 'react';
import Footer from '../footer/Footer';
import ReactPlayer from "react-player";
import './mainpages/video/PVE.css'
import ScrollButton from '../scrolltop/scrollToTop';

export default function PVE() {
  return (
    <>
      <ScrollButton />
      <h1 className='consulting'>
        <div className="heading white-heading" style={{ padding: "50px" }, { fontSize: "60px", color: "red" }}>PVE</div>
      </h1>
      <div className="flex-container">
        <div className="flex-item-f">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=YpHmFfmb7Io&t=1s&ab_channel=YUGI"
            className="react-player"
            playing={false}
            width="auto"
            height="600px"
            controls={true}
            volume={1}
          />

        </div>
        <div className="flex-item-r">
          <div className="center">
            <p>PVE: Players can be awarded with YGO after passing the levels successfully, these YGO will be automatically sent to the player's account. The daily YGO gained through PVE by every account is also limited, and the rewards will increase as the difficulty of the level</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
