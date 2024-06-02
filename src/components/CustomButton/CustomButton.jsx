import PropTypes from "prop-types"

const CustomButton = ({text}) => {
    return (
        <div>
            <button className="border-b-4 border-black rounded-b-xl px-4 text-lg">{text}</button>
        </div>
    );
};
// props-types validation
 CustomButton.propTypes = {
    text:PropTypes.string
 }
export default CustomButton;
