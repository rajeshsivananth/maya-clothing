import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as AppLogo } from "./../../assets/logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <AppLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
