import PropTypes from 'prop-types';

const MenuItems = ({item}) => {
    const{image,name,recipe,price} = item || {}
    return (
        <div className="flex space-x-6">
            <img className='rounded-b-full rounded-r-full w-[30%]' src={image} alt={name} />
            <div>
                <h3 className="text-xl">{name}</h3>
                <small>{recipe}</small>
            </div>
            <p className="text-xl">${price}</p>
        </div>
    );
};
// props-type validation
MenuItems.propTypes = {
    item: PropTypes.object,
};
export default MenuItems;