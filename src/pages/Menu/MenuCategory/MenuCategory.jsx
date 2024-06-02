import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PropTypes from 'prop-types';
import SectionCover from "../../../Shared/SectionCover/SectionCover";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const MenuCategory = ({items,bgImg, title,description}) => {
    return (
        <div>
            {
                title &&  <SectionCover
                bgImg={bgImg}
                title={title}
                description={description}
                />
            }
            <div className="grid md:grid-cols-2 gap-6 my-10">
            {
                 items?.map(item=><MenuItems
                 key={item._id}
                 item={item}
                 ></MenuItems>)
            
            }
            </div>
            <div>
            <Link to={`/order/${title}`}>
            <CustomButton text={'Order Now'}/>
            </Link>
            </div>
        </div>
    );
};
// props-type validation
MenuCategory.propTypes = {
    items: PropTypes.array,
    bgImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
 
};
export default MenuCategory;