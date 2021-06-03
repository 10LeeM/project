import { Badge } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import paths from "../routes/paths";
import { getCart } from "../store/slices/cartSlice";
import "./navigation.css";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const cart = useSelector(getCart);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="image/logo.png" alt="" width="75px" />
          </Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              {" "}
              <Link to="/">HOME</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.doctorshome}>DOCTORS</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.pharmacyhome}>PHARMACY</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.login}>ACCOUNT</Link>
            </li>
          </ul>
        </nav>
        <Link to={paths.cart} >
      
          <img
            src="image/cart.png"
            width="30px"
            height="30px"
            className="checkout"
            alt=""
          />
          {cart.length && <Badge badgeContent={cart.length} />}
        </Link>
        <img src="image/menu.png" className="menu-icon" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
