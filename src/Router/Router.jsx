import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from './../Pages/Login/Login';
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from './../Pages/Dashboard/MyCart/MyCart';
import PaymentSuccess from '../Pages/Dashboard/PaymentSuccess/PaymentSuccess';
import PaymentFailed from "../Pages/Dashboard/PaymentFailed/PaymentFailed";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/signUp",
            element: <SignUp/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/payment/success/:id",
            element: <PaymentSuccess/>,
          },
          {
            path: "/payment/fail/:id",
            element: <PaymentFailed/>,
          },
        
        ],
      },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "/dashboard/myCart",
            element: <MyCart/>,
          },
      
        
       
        ],
      },
  ]);