import React from 'react';
import './CardHover.css'
import image1 from '../../../../images/yugi1.jpg'
import image2 from '../../../../images/bai.jpg'
import image3 from '../../../../images/yugi5.jpg'

const Cardhover = () => {
    return (
        <>
            <div className='wrapper_card'>

                <div className="containers">
                    <div class="abc">
                        <div className="heading white-heading">WHAT PEOPLE ARE SAYING</div>
                        <p>
                            What is YGO?
                            In this chaotic world where the evil guys are dominating, YGO decided to take on the status quo! This time YGO
                            is fighting for his own glory to become the best player in YGO. YGO is also fighting
                            to beat the evils in the society who dominated all the resources
                            or deprived others right and happiness
                        </p>
                    </div>

                    <div className="box">
                        <span />
                        <div className="text">
                            <h2>TechBullion</h2>
                            <p>
                                The first-ever create-to-earn NFT
                                game in the history of blockchain
                                technology, YGO: Clash of
                                Pantheons.
                            </p>
                            <a>Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <span />
                        <div className="text">
                            <h2>Cryptodaily</h2>
                            <p>
                                YGO is the first-of-its-kind play-to-earn and create-to-earn NFT game that presents a fierce and savage fantasy world.
                            </p>
                            <a >Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <span />
                        <div className="text">
                            <h2>Benzinga</h2>
                            <p>
                                The game graphic is highly appraised by users for the excellent sharpness, visuals and aesthetics amongst NFT games in the market.

                            </p>
                            <a >Read More</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className='img-button'>
                <figure>
                    <a href="https://mytheria.io/" >
                        <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/266710481_317081073640858_7447442999942558565_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RwqBAMUN16EAX8hKIyF&_nc_ht=scontent.fdad1-1.fna&oh=03_AVKR5U2JuoZCxm_MguiAYIo8-sHMNpkJYXXGeRM7BICpHg&oe=620517C4" alt="" width="500px"
                            height="200px" />
                    </a>
                </figure>

            </div>
        </>

    );
}

export default Cardhover;
