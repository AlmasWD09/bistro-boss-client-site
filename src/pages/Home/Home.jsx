import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CheifService from "./CheifService/CheifService";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recomments from "./Recomments/Recomments";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <div>
                <Banner />
                <Category />
                <CheifService />
                <PopularMenu />
                <Recomments />
                <Featured />
                <Testimonials />
            </div>
        </>
    );
};

export default Home;