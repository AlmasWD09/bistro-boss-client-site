import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../../src/assets/home/01.jpg"
import img2 from "../../../../src/assets/home/02.jpg"
import img3 from "../../../../src/assets/home/03.jpg"
import img4 from "../../../../src/assets/home/04.jpg"
import img5 from "../../../../src/assets/home/05.jpg"
import img6 from "../../../../src/assets/home/06.jpg"


const Banner = () => {
    return (
        <>
           <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>  
        </>
    );
};

export default Banner;