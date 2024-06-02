import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review, setReview] = useState([])
    const [rating, setRating] = useState(3);

    useEffect(() => {
        fetch('http://localhost:5000/review/api/get')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="max-w-5xl mx-auto">
            <SectionTitle
                subheading={'What Our Clients Say'}
                heading={'Testimonials'}
            />

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[400px]">
                    {
                        review.map((item, idx) => <SwiperSlide
                            key={idx}>
                            <div className="w-3/4 mx-auto h-full flex flex-col justify-center items-center">

                                <div>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        onChange={setRating}
                                    />
                                    <div className="flex justify-center items-center my-1">
                                    <button className="text-center btn btn-xs " type="button" onClick={() => setRating(0)}>
                                       Review Reset
                                    </button>
                                    </div>
                                </div>
                                <p className="text-center">{item.details}</p>
                                <h3 className="text-2xl">{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;