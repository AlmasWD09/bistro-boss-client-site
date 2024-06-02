import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"
import CustomButton from "../../../components/CustomButton/CustomButton";

const Featured = () => {
    
    return (
        <div className="h-[600px] bgImg bg-fixed text-white flex flex-col justify-center items-center mt-10">
            <SectionTitle 
            subheading={'Check it out'}
            heading={'From Our Menu'}
            />
            <div className="flex items-center ">
                <div>
                    <img className="w-[80%] mx-auto rounded" src={featured} alt="" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-lg">March 20, 2023</h3>
                    <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                    <p>Bistro Boss is a culinary delight, offering a variety of delicious dishes crafted with fresh, high-quality ingredients. Our menu is designed to satisfy diverse tastes, ensuring a memorable dining experience for every guest.</p>
                    <CustomButton text={'Read More'} />
                </div>
            </div>
        </div>
    );
};

export default Featured;