import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className="">
            <div className="my-10">
              <SectionTitle 
              subheading={'From 11:00am to 10:00pm'}
              heading={'order online'}
              />
            </div>
            {/* swipper */}
            <div className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h1 className='uppercase text-center text-xl -mt-16 text-white font-semibold'>Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-16 text-white font-semibold'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-16 text-white font-semibold'>dessekts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-16 text-white font-semibold'>Pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h1 className='uppercase text-center text-xl -mt-16 text-white font-semibold'>Salads</h1>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Category;