import FoodCurd from "../../components/FoodCurd/FoodCurd";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {
         items.map((item,idx)=><FoodCurd
         key={idx}
         item={item}
         ></FoodCurd>)
        }
        </div>
    );
};
// props-type validation
OrderTab.propTypes = {
    items: PropTypes.array,
};
export default OrderTab;