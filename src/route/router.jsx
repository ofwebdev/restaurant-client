import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import Order from "../pages/Order/Order.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Secrete from "../pages/Shared/Secrete.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import MyCart from "../pages/Dashboard/MyCart.jsx";
import DashBoard from "../Layout/DashBoard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "private",
        element: (
          <PrivateRoute>
            <Secrete />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
    ],
  },
]);
