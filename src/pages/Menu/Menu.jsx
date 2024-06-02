import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import CustomButton from "../../components/CustomButton/CustomButton";
import bannerImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert.jpg"
import pizzaImg from "../../assets/menu/pizza.jpg"
import saladImg from "../../assets/menu/salad.jpg"
import soupImg from "../../assets/menu/soup.jpg"
import SectionCover from "../../Shared/SectionCover/SectionCover";

const Menu = () => {
    const [menus] = useMenu()
    const dessertMenu = menus.filter(item => item.category === 'dessert')
    const soupMenu = menus.filter(item => item.category === 'soup')
    const saladMenu = menus.filter(item => item.category === 'salad')
    const pizzaMenu = menus.filter(item => item.category === 'pizza')
    const offeredMenu = menus.filter(item => item.category === 'offered')
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            <div>
                {/*================= Our menu part start ================================= */}
                <SectionCover 
                 bgImg={bannerImg}
                 title={'Our Menu'}
                 description={'Explore our diverse menu featuring gourmet dishes crafted with fresh ingredients. From appetizers to desserts, enjoy a culinary journey that satisfies every palate. Discover your next favorite meal with us'}
                />
                {/*================= Our menu part end =================================== */}


                {/* =================== Offered menu items part start ========================= */}
                <SectionTitle subheading={"Don't Miss"} heading={"Today's Offfer"} />
                <MenuCategory
                    items={offeredMenu}
                ></MenuCategory>
                {/* =================== Offered menu items part end =========================== */}


                {/* =================== Dessert menu items part start ========================= */}
               <div>
               <MenuCategory
                bgImg={dessertImg}
                title={'Dessert'}
                description={'Indulge in our decadent dessert selection, featuring rich chocolate cakes, creamy cheesecakes, and fresh fruit tarts. Satisfy your sweet tooth with these exquisite treats, perfect for ending any meal on a high note'}
                    items={dessertMenu}
                ></MenuCategory>
               </div>
                {/* =================== Dessert menu items part end =========================== */}


                {/* =================== Pizza menu items part start ========================= */}
                <div>
               <MenuCategory
                bgImg={pizzaImg}
                title={'Pizza'}
                description={'Experience the perfect pizza with our hand-tossed crust, zesty tomato sauce, and a blend of melted cheeses. Choose from classic pepperoni, veggie delight, or gourmet options for a delicious, satisfying meal'}
                    items={pizzaMenu}
                ></MenuCategory>
             
               </div>
                {/* =================== Pizza menu items part end =========================== */}



                {/* =================== Salad menu items part start ========================= */}
                <div>
               <MenuCategory
                bgImg={saladImg}
                title={'SaladS'}
                description={"Savor our fresh salads, brimming with crisp greens, vibrant veggies, and tangy dressings. From classic Caesar to exotic quinoa bowls, enjoy a healthy, flavorful meal that's both nutritious and delicious. Perfect for any occasion"}
                    items={saladMenu}
                ></MenuCategory>
               </div>
                {/* =================== Salad menu items part end =========================== */}



                {/* =================== Soups menu items part start ========================= */}
                <div>
               <MenuCategory
                bgImg={soupImg}
                title={'Soups'}
                description={"Warm up with our delightful soups, featuring hearty chicken noodle, creamy tomato bisque, and savory minestrone. Each bowl is crafted with fresh ingredients, offering comfort and flavor in every spoonful. Perfect for any season"}
                    items={soupMenu}
                ></MenuCategory>
               
               </div>
                {/* =================== Soups menu items part end =========================== */}

            </div>
        </>
    );
};

export default Menu;