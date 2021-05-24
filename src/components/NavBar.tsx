import * as React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user/userSlice";
import Container from "./layout/container/container";
import "./styles/NavBar.scss";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  // @ts-ignore
  const isLoggin = useSelector((state) => state.user.isLoggin);
  const dispatch = useDispatch();

  const Login = () => {
    return (
      <Link to="/login" className="navbar__link">
        Login
      </Link>
    );
  };

  const Logout = () => {
    return (
      <Link to="/logout" className="navbar__link" onClick={() => dispatch(logout())}>
        Logout
      </Link>
    );
  };

  return (
    <section className="navbar">
      <Container>
        <nav className="navbar__links">
          <div>
            <Link to="/" className="navbar__link">
              <AiFillHome />
            </Link>
          </div>
          <div>
            <Link to="/profile" className="navbar__link">
              My Profile
            </Link>
            {isLoggin ? <Logout /> : <Login />}
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default NavBar;
