import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../images/carousel/carousel1.jpg'
import carousel2 from '../../images/carousel/carousel2.jpg'
import carousel3 from '../../images/carousel/carousel3.jpg'
import carousel4 from '../../images/carousel/carousel4.jpg'


const CustomCarousel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop interval={'4000'} verticalSwipe={'standard'}>
                <div>
                    <img src={carousel1} alt='' />
                    <p className="legend">Rose</p>
                </div>
                <div>
                    <img src={carousel2} alt='' />
                    <p className="legend">Hyacinth</p>
                </div>
                <div>
                    <img src={carousel3} alt='' />
                    <p className="legend">Peruvian Lily</p>
                </div>
                <div>
                    <img src={carousel4} alt='' />
                    <p className="legend">Chrysanthemum</p>
                </div>
        </Carousel>
    );
};

export default CustomCarousel;