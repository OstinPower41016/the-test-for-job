import * as React from "react";
import { Redirect, Route } from "react-router-dom";

interface IPrivateRouterProps {
  component: any;
  path: any;
}

const PrivateRouter: React.FunctionComponent<IPrivateRouterProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("auth") ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;
