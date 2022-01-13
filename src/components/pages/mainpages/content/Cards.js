import React from 'react';
import './Cards.css'

const Cards = () => {
    return (
        <div className='carddss'>
            <div class="abc">
                <div className="heading white-heading">PLAY & EARN
                    WITH VARIOUS GAME MODES

                </div>
            </div>
            <div className="containerrr">
                <div className="cardsssss">
                    <div className="card__header">
                        <img
                            src="https://source.unsplash.com/600x400/?computer"
                            alt="card__image"
                            className="card__image"
                            width={600}
                        />
                    </div>
                    <div className="card__body">

                        <h4>FREE TO PLAY</h4>
                        <p style={{ color: 'black' }}>
                            With no barrier to entry, there's nothing to stop you and your friends from joining and playing the game
                        </p>
                    </div>

                </div>
                <div className="cardsssss">
                    <div className="card__header">
                        <img
                            src="https://source.unsplash.com/600x400/?food"
                            alt="card__image"
                            className="card__image"
                            width={600}
                        />
                    </div>
                    <div className="card__body">

                        <h4>OWN, TRADE & AUCTION</h4>
                        <p style={{ color: 'black' }}>
                            You own your own cards. Your cards are secured on the block chain. Collect rare cards, build your deck and trade it on the market with community members.
                        </p>
                    </div>

                </div>
                <div className="cardsssss">
                    <div className="card__header">
                        <img
                            src="https://source.unsplash.com/600x400/?car,automobile"
                            alt="card__image"
                            className="card__image"
                            width={600}
                        />
                    </div>
                    <div className="card__body">

                        <h4>CREATE NEW GODS

                        </h4>
                        <p style={{ color: 'black' }}>
                            Bring in your mythologies and cultures by creating your own Gods. Do you have what it takes to create a God that is fun to play, loved by everyone in the world, and profitable? Join GodForge and submit your artwork.
                        </p>
                    </div>

                </div>
                <div className="cardsssss">
                    <div className="card__header">
                        <img
                            src="https://source.unsplash.com/600x400/?car,automobile"
                            alt="card__image"
                            className="card__image"
                            width={600}
                        />
                    </div>
                    <div className="card__body">

                        <h4 >CHAMPION BASED
                            CARD GAME</h4>
                        <p style={{ color: 'black' }}>
                            Gameplay is simple but you have to decide your own strategy in each battle: Combine Gods from other Pantheons, alter position of Gods and Mortals to be the Winner!
                        </p>
                    </div>

                </div>
                <div className='tele'>
                    <a href="https://mytheria.io/" >
                        <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/266710481_317081073640858_7447442999942558565_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RwqBAMUN16EAX8hKIyF&_nc_ht=scontent.fdad1-1.fna&oh=03_AVKR5U2JuoZCxm_MguiAYIo8-sHMNpkJYXXGeRM7BICpHg&oe=620517C4" alt="" width="500px"
                            height="200px" />
                    </a>
                </div>
            </div>
        </div>


    );
}

export default Cards;
