
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import CustomButton from "../../../components/CustomButton/CustomButton";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menus] = useMenu()
    const popularMenu = menus.filter(item=>item.category === 'popular')
  
    return (
        <div>
            <SectionTitle 
            subheading={'Check it out'}
            heading={'From our menu'}
            />
            <div className="grid md:grid-cols-2 gap-6 mb-10">
            {
                 popularMenu?.map(item=><MenuItems
                 key={item._id}
                 item={item}
                 ></MenuItems>)
            
            }
            </div>
            <div className="flex justify-center ">
                <CustomButton text={'View All Menu'} />
   
            </div>
        </div>
    );
};

export default PopularMenu;