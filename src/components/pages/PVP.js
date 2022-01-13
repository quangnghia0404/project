import React from 'react';
import Footer from '../footer/Footer';
import ReactPlayer from "react-player";
import './mainpages/video/PVP.css'
import ScrollButton from '../scrolltop/scrollToTop';

export default function PVP() {
  return (
    <>
      <h1 className='marketing'>
        <div className="heading white-heading" style={{ padding: "50px" }, { fontSize: "60px", color: "red" }}>PVP</div>
      </h1>
      {/* <div className='video'>
        <div class="container">
          <div className="line" />
          <h2 class="title">
            <span class="title-word title-word-1">Wellcome </span>
            <span class="title-word title-word-2">to </span>
            <span class="title-word title-word-3">YGO</span>
          </h2>
          <div className="line" />

        </div>
        <div className='content_text' >
          <h4>A world where Gods from different cultures combat for honor and glory</h4>
          <p>A war takes place that shakes the entire universe, causing Gods of different civilizations and heroes to clash with each other.
            .</p>
        </div>
        <div className="player-wrapper" style={{ padding: "50px", textAlign: "center" }}>
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
      </div> */}
      <ScrollButton />
      <div className="flex-container">
        <div className="flex-item-left">
          <p>PVP: In the PVP battle mode, players will select cards, arrange them according to formation and tactics, and engage in battles with other players to earn rewards and stake YG token items.</p>
          <div className="heading white-heading a">Combat Mechanism</div>
          <table style={{ align: "center" }}>
            <tr>
              <td>Step 1:</td>
              <td>The player sets a deck of cards</td>

            </tr>
            <tr>
              <td>Step 2: </td>
              <td>Players access the PVP room, choose the number of YGO bets (if they win, they will receive 95% of the set amount of YGO; if they lose, they will lose all this YGO) choose "Start PVP"</td>

            </tr>
            <tr>
              <td>Step 3:</td>
              <td>The system will randomly assign opponents to challenge (Maximum 1 minute waiting time)</td>

            </tr>
            <tr>
              <td>Step 4: </td>
              <td>Announce the results: YGO wins and EXP is received</td>

            </tr>

          </table>
        </div>
        <div className="flex-item-right">
          <ReactPlayer

            url="https://www.youtube.com/watch?v=4R06mZH9kuU&t=4s&ab_channel=YUGI"
            className="react-player"
            playing={false}
            width="auto"
            height="600px"
            controls={true}
            volume={1}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
