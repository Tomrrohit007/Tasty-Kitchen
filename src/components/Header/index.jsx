import { useEffect } from "react";
import {
  Link,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";
import { CartGlobal } from "../CartContext/CartListContext";
import { HeaderGlobal } from "../CartContext/HeaderContext";
import "./index.css";
import { motion as m } from "framer-motion";

function Header() {
  const { cartList } = CartGlobal();
  const { activeRoute, changeRoute } = HeaderGlobal();
  const cartCount = cartList.length;

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    changeRoute(location.pathname);
  });

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate replace to="/login" />;
  }

  const onClickLogo = () => {
    navigate("/");
    changeRoute(location.pathname);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="header-main-cont">
          <button className="nav-bar" onClick={onClickLogo}>
            <img
              src="https://res.cloudinary.com/dzqa2dgzj/image/upload/v1675343273/login_logo_lw9aq0.png"
              alt=""
              className="header-img"
            />
            <p className="name">Tasty Kitchens</p>
          </button>
          <ul className="links">
            <Link className="linkss" to="/">
              <li className="nav-links home">
                <button
                  className={
                    activeRoute === "/cart" || activeRoute === "/payment"
                      ? ""
                      : "active"
                  }
                >
                  Home
                </button>
              </li>
            </Link>
            <Link className="linkss" to="/cart">
              <li className="nav-links cart">
                <button
                  className={
                    activeRoute === "/cart" || activeRoute === "/payment"
                      ? "active"
                      : ""
                  }
                >
                  Cart{" "}
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </button>
              </li>
            </Link>
            <li className="nav-links">
              <m.button
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="logout-btn"
                onClick={onClickLogout}
              >
                Logout
              </m.button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
