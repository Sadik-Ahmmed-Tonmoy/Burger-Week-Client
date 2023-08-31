import Logo from "../../assets/Group-1/Logo/Place Your Logo Here (Double Click to Edit).png";
import bikeLogo from "../../assets/Group-1/Design/Vector Smart Object.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <div className="">
      <div
        className="w-full md:fixed md:h-20 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      ></div>
      <div className="navbar md:bg-transparent z-10 md:fixed font-extrabold">
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
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <img className="ms-3 md:h-12 h-6" src={Logo} alt="" />
        </div>
        {/* pc */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="hidden md:block" src={bikeLogo} alt="" />
          <p className="ms-8">
            Express Delivery <span>+880123456789</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
