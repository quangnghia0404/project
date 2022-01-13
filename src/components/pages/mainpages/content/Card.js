import React from 'react';
import image1 from '../../../../images/yugi1.jpg'
import image2 from '../../../../images/bai.jpg'
import image3 from '../../../../images/yugi5.jpg'
import './Card.css'

const Card = () => {
    return (
        <div className='card'>
            {/* Hello world */}
            <div className="row">
                <div className="heading white-heading">CREATE-AND-EARN FROM YOUR ITEMS</div>
                <div className="image">
                    <div id="zoom-In">
                        <figure>
                            <img src={image1} alt="" />
                        </figure>

                        <p>
                            You could earn attractive incomes because your artworks could be traded and auctioned.
                        </p>
                    </div>
                </div>
                <div className="image">
                    <div id="zoom-In">
                        <figure>
                            <img src={image2} alt="" />
                        </figure>

                        <p>
                            You could earn attractive incomes because your artworks could be traded and auctioned.
                        </p>
                    </div>
                </div>
                <div className="image">
                    <div id="zoom-In">
                        <figure>
                            <img src={image3} alt="" />
                        </figure>

                        <p>
                            You could earn attractive incomes because your artworks could be traded and auctioned.
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
            {/* <div class="abc">
                <a href="https://web.telegram.org/k/">JOIN OUR COMUNITY</a>
            </div> */}

        </div>

    );
}

export default Card;
