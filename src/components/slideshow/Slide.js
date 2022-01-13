import React from 'react';
import './Slide.css'
import { Carousel } from 'react-carousel-minimal';

const Slide = () => {

    const data = [
        {
            image: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/p960x960/270040726_1266095003859822_3204563908372810057_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=-XzuWTd_ZYQAX-rfwat&_nc_ht=scontent.fdad1-3.fna&oh=00_AT_6OxE0fuNUQwSeKvdUeYo7YyOFxes6H8iknIm7A1r7QA&oe=61E33838",

        },
        {
            image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/p180x540/271186625_1264456450690344_2308761378813144799_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UxmMKayfMGYAX93dYA4&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-aWrc1RTDs3vH7R_hpxlaAg_VEdpRhW4p_H_MGuSEzjg&oe=61E430B3",

        },
        {
            image: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/271189650_1264456464023676_2616006332608025532_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WiGDeQx9FPkAX-XY5K0&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8-8O8_8_o2v-EjXIbegSTgoT9eqNEq7ov3-UqOasEiKw&oe=61E29BE9",

        },

    ];


    return (
        <div className="Slide">
            <div style={{ textAlign: "center" }}>
                <div className="line" />
                <div class="three">
                    <h2>Backers and Partners</h2>
                </div>
                <div className="line" />
                <div style={{
                    paddingTop: "10px",
                }}>
                    <Carousel
                        data={data}
                        time={1000}
                        width="auto"
                        height="auto"
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="20px"
                        slideBackgroundColor="white"
                        slideImageFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Slide;
