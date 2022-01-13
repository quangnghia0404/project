import React from 'react';
import './Video.css'
import ReactPlayer from "react-player";


const Video = () => {
    return (
        <div className='video'>
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
            <div className="player-wrapper" style={{ padding: "30px", textAlign: "center" }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=YpHmFfmb7Io&t=1s&ab_channel=YUGI"
                    className="react-player"
                    playing={false}
                    width="auto"
                    height="570px"
                    controls={true}
                    volume={1}

                />
            </div>
        </div>
    );
}

export default Video;
