import PropTypes from 'prop-types';

const RecommentsItems = ({category}) => {
    const{image,name,description} = category || {}
    return (
        <div>
            <div className="h-[420px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-60" src={image} alt={name}/>
                    <div className="py-5 text-center">
                        <h3 className="block text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
                        <span className="text-sm text-gray-700 dark:text-gray-200">{description}</span>
                    </div>
                    <div className='flex justify-center mb-4'>
                        <button className='btn'>Add Now</button>
                    </div>
            </div>
        </div>
    );
};
// props-type validation
RecommentsItems.propTypes = {
    category: PropTypes.object,
};
export default RecommentsItems;