import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdPayments, MdRestaurant } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useTheme from "../hooks/useTheme";


const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    const theme = useTheme()


    return (
        <div className="flex flex-col md:flex-row">
            {/* side bar */}
            <div className="w-full md:w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/admin-home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/add-items'><MdRestaurant /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manage-items'><FaList /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/manage-booking'><FaBook /> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/all-users'><FaUsers /> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to='/dashboard/user-home'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><MdPayments /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaAd /> Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><FaList /> My Bookings</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><IoMenu /> Menu</NavLink></li>
                    <li><NavLink to='/'><FaShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;