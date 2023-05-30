import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import Main from "./Layout/Main.jsx";
import Home from "./pages/Home/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Order from "./pages/Order/Order.jsx";
import Login from "./pages/Login/Login.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Register from "./pages/Register/Register.jsx";
import Secrete from "./pages/Shared/Secrete.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
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
        path: "order/:category",
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
