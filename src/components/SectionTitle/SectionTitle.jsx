import PropTypes from 'prop-types';

const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className='text-center my-10'>
            <p className='text-primary pb-2'>--- {subheading} ---</p>
            <h1 className="uppercase text-2xl border-y py-2 md:w-80 mx-auto">{heading}</h1>
        </div>
    );
};
// props-type validation
SectionTitle.propTypes = {
    subheading: PropTypes.string,
    heading: PropTypes.string
};
export default SectionTitle; 