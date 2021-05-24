import * as React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import PrivateRouter from "./utils/PrivateRouter";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRouter path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default MainRouter;
