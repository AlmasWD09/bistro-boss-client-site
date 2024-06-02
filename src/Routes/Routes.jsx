import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivatRoutes from "./PrivatRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
    ],
  },






  {
    path: '/dashboard',
    element: <PrivatRoutes>
      <Dashboard />
    </PrivatRoutes>,
    children: [
      // only user related routes
      {
        path: 'cart',
        element: <Cart />,
      },



      // admin related routes
      {
        path: 'add-items',
        element: <AdminRoutes>
          <AddItems />
        </AdminRoutes>
      },
      {
        path:'manage-items',
        element:<AdminRoutes>
          <ManageItems />
        </AdminRoutes>
      },
      {
        path:'update-item/:id',
        loader:({params}) => fetch(`http://localhost:5000/menu/api/singleMenu/get/${(params.id)}`),
        element:<AdminRoutes>
          <UpdateItem />
        </AdminRoutes>
      },
      {
        path: 'all-users',
        element: <AdminRoutes>
          <AllUsers />
        </AdminRoutes>
      },

    ]
  },






  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
]);

export default router;