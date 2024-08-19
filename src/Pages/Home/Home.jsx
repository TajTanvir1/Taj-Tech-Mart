import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Products from "../Products/Products";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Taj Tech Mart | Home</title>
         </Helmet>
         <Products></Products>
      </div>
   );
};

export default Home;