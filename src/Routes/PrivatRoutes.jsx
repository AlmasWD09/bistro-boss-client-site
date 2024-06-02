import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivatRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-md text-emerald-900"></span>
                <span className="loading loading-bars loading-lg text-emerald-900"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};
// props-type validation
PrivatRoutes.propTypes = {
    children: PropTypes.object,
};
export default PrivatRoutes;