import { Link, NavLink } from "react-router-dom";
import "../../styles.css"

const Navbar = () => {

   const webName = "Taj Tech Mart";
   const webLogo = "https://i.ibb.co/T1NnN4d/TTM-logo.png";
 
   const links = (
     <>
       <li>
         <NavLink
           to="/"
           className={({ isActive }) =>
             isActive ? "menu-active" : "menu-inactive"
           }
         >
           Home
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/products"
           className={({ isActive }) =>
             isActive ? "menu-active" : "menu-inactive"
           }
         >
           Products
         </NavLink>
       </li>
       <li>
         <NavLink
           to="/aboutUs"
           className={({ isActive }) =>
             isActive ? "menu-active" : "menu-inactive"
           }
         >
           About Us
         </NavLink>
       </li>
 
{/*  
       {user?.email && (
         <>
           <li>
             <NavLink
               to="/recommendMe"
               className={({ isActive }) =>
                 isActive ? "menu-active" : "menu-inactive"
               }
             >
               Recommendations For Me
             </NavLink>
           </li>
           <li>
             <NavLink
               to="/myQueries"
               className={({ isActive }) =>
                 isActive ? "menu-active" : "menu-inactive"
               }
             >
               My Queries
             </NavLink>
           </li>
           <li>
             <NavLink
               to="/myRecommend"
               className={({ isActive }) =>
                 isActive ? "menu-active" : "menu-inactive"
               }
             >
               My Recommendations
             </NavLink>
           </li>
         </>
       )} */}
     </>
   );
   
   return (
      <div>
      <div className="navbar lit-bg2 rounded-b-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="md:btn md:btn-ghost  md:text-2xl lg:text-2xl text-xl font-bold dark-color md:underline md:underline-offset-2 underline underline-offset-2 lg:ml-2"
          >
            <img src={webLogo} alt="" className="w-0 md:w-10" />
            {webName}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal lg:text-base px-1 gap-2 md:w-[600px] mx-auto justify-center">
            {links}
          </ul>
        </div>

        {/* <div className="w-[40%] justify-end gap-2">
          
          {user && (
            <div
              className="tooltip tooltip-bottom rounded-full w-10 md:w-14"
              data-tip={user.displayName}
            >
              <img
                src={user?.photoURL || <FaRegUserCircle />}
                alt=""
                className="rounded-full border-2 md:border-4 border-orange-300 md:w-14 md:h-14"
              />
            </div>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-outline btn-accent lg:mr-6"
            >
              Log Out
            </button>
          ) : (
            <div className="">
              <Link
                to="/login"
                className="btn btn-outline lg:btn-outline btn-error lg:btn-error lg:text-xl btn-sm lg:btn mr-2"
              >
                Login
              </Link>
            </div>
          )}
        </div> */}
        <div className="w-[40%] justify-end gap-2">
              <Link
                to="/login"
                className="btn btn-outline lg:btn-outline btn-accent lg:btn-accent lg:text-xl btn-sm lg:btn mr-2"
              >
                Login
              </Link>
            </div>
      </div>
    </div>
   );
};

export default Navbar;