import Logo from "../../assets/Group-1/Logo/Place Your Logo Here (Double Click to Edit).png";
import bikeLogo from "../../assets/Group-1/Design/Vector Smart Object.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import ScrollButton from "../../Components/ScrollButton/ScrollButton";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
const total = cart.reduce((sum, item) => item.price + sum, 0)
  
  return (
    <>
      <div
        className="w-full md:fixed md:h-20 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      ></div>
      <div className="navbar bg-white md:bg-transparent z-10 fixed font-extrabold">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <ScrollButton name={"Home"} to={"home"} />
              </li>
              <li>
                <ScrollButton name={"Menu"} to={"menu"} />
              </li>
              <li>
                <ScrollButton name={" Contact Us"} to={"contactUs"} />
              </li>
            </ul>
          </div>
          <img className="ms-3 md:h-12 h-6" src={Logo} alt="" />
        </div>
        {/* pc */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
          <NavLink to="/"> <ScrollButton name={"Home"} to={"home"} /></NavLink>
            </li>
            <li>
              <ScrollButton name={"Menu"} to={"menu"} />
            </li>
            <li>
              <ScrollButton name={" Contact Us"} to={"contactUs"} />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="hidden md:block" src={bikeLogo} alt="" />
          <p className="ms-8 hidden md:block">
            Express Delivery <span>+880123456789</span>
          </p>

          <div className="flex mx-5 ">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cart?.length}</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white md:bg-transparent shadow-2xl"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">Quantity: {cart?.length}</span>
                  <span className="text-info">Subtotal: ${total}</span>
                  <div className="card-actions">
                <Link to="/dashboard/myCart">    <button className="btn btn-primary btn-block">
                      View cart
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white md:bg-transparent rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={() => logOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
            {!user && (
              <Link to="/login">
                <button className="btn">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
