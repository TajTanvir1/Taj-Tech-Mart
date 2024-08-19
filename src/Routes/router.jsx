import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Products from "../Pages/Products/Products";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error from "../Pages/Shared/Error";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/products",
            element: <Products></Products>,
         },
         {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
         },
      ]
   }
])

export default router;