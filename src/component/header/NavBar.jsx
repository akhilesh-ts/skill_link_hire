import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { FiAlignJustify } from "react-icons/fi";
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg p-2 lg:px-16 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignJustify className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li className=" text-white ">
              <a className="bg-[var(--color-blue)]">Contact Us</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="skilllink Hire" className=" w-20  h-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="font-medium text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium text-sm">
              About Us
            </Link>
          </li>
          <li>
            <details>
              <summary className="font-medium text-sm">Services</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/blog" className="font-medium text-sm">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium text-sm">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[var(--color-blue)] text-white font-light rounded-xl hidden md:block">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
