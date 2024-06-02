import PropTypes from 'prop-types';

const SectionCover = ({bgImg,title,description}) => {
    
    return (
        <div className="h-[400px] flex justify-center items-center rounded" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-3/5 mx-auto bg-black/60 p-8 text-white text-center rounded space-y-2">
                <h1 className="text-4xl font-semibold text-white uppercase">{title}</h1>
                <p className="w-10/12 mx-auto">{description}</p>
            </div>
        </div>
    );
};

// props-type validation
SectionCover.propTypes = {
    bgImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};
export default SectionCover;