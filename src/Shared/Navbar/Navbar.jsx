
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useTheme from "../../hooks/useTheme";
import { CiDark, CiLight } from "react-icons/ci";



const Navbar = () => {
  const { user, logOut } = useAuth()
  const {handleChangeTheme,mode} = useTheme()
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useCart()
  
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className=" px-6 py-4  bg-slate-200 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto  lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to='/'><h2 className="text-2xl font-semibold">Bistro Boss</h2></Link>
              
              {/* toggle theme add */}
              <button onClick={handleChangeTheme} className="border-2 border-primary p-1 rounded-full dark:border-slate-400">
                {mode === 'dark'? <CiLight className="text-3xl text-primary"/> : <CiDark className="text-3xl text-primary"/>}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <TiThMenu className="text-2xl " />
                ) : (
                  <IoMdClose className="text-2xl " />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
              }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Home
              </NavLink>
              <NavLink to='/menu' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Our Menu
              </NavLink>

              <NavLink to='/order/salad' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Order
              </NavLink>

              {/* shopping curd */}
              <NavLink to='/dashboard/cart'>
              <button className="flex items-center ml-6 lg:ml-0">
              <FaShoppingCart className="w-6 h-8 dark:text-white" />
                <div className="bg-green-500 text-xs text-white px-1 rounded-2xl">{cart.length}</div>
              </button>
              </NavLink>


              <NavLink to='/signUp' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                SignUp
              </NavLink>
            </div>

            {
              user ? <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full' title={user?.displayName}>
                    <img
                      referrerPolicy='no-referrer'
                      src={user?.photoURL}
                      alt=''
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <div className='justify-between'>{user.displayName}</div>
                  </li>
                  <li className='mt-2'>
                    <button
                      onClick={logOut}
                      className='bg-gray-200 block text-center'>Logout</button>
                  </li>
                </ul>
              </div>
                :
                <Link to='/login'>
                  <button className="px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</button>
                </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
