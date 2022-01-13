import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';
import ReactPlayer from "react-player";
import ScrollButton from '../scrolltop/scrollToTop';

export default function UniqueFeatures() {
  return (
    <>
      <ScrollButton />
      <h1 className='services'></h1>

      <div >
        <div className="line" />
        <div class="three">
          <h2 style={{ textAlign: 'center' }}>PVP</h2>
        </div>
        <div className="line" />
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
                <td>Players access the PVP room, choose the number of YGC bets (if they win, they will receive 95% of the set amount of YGC; if they lose, they will lose all this YGC) choose "Start PVP"</td>

              </tr>
              <tr>
                <td>Step 3:</td>
                <td>The system will randomly assign opponents to challenge (Maximum 1 minute waiting time)</td>

              </tr>
              <tr>
                <td>Step 4: </td>
                <td>Announce the results: YGC wins and EXP is received</td>

              </tr>

            </table>
          </div>
          <div className="flex-item-right">
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
        </div>
      </div>
      <div className="line" />
      <div class="three">
        <h2 style={{ textAlign: 'center' }}>PVE</h2>
      </div>
      <div className="line" />
      <div className="flex-container">
        <div className="flex-item-f">
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
        <div className="flex-item-r">
          <div className="center">
            <p>PVE: Players can be awarded with YGO after passing the levels successfully, these YGO will be automatically sent to the player's account. The daily YGO gained through PVE by every account is also limited, and the rewards will increase as the difficulty of the level</p>
          </div>
        </div>
      </div>
      <Footer /></>
  );
}
