import * as React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/user/userSlice";
import cn from "classnames";

import "./index.scss";
import Container from "../../components/layout/container/container";
import BaseCard from "../../components/UI/BaseCard";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [state, setState] = React.useState({ email: "", password: "", name: "" });
  const [passwordError, setError] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e: any) => {
    e.preventDefault();
    setError(false);
    if (
      !state.password.trim().match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g)
    ) {
      setError(true);
      return;
    }
    dispatch(login(state));
    history.push("/profile");
  };

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: "password" | "email" | "name",
  ) => {
    if (inputType === "name") {
      setState({ ...state, name: e.target.value });
    }
    if (inputType === "password") {
      setState({ ...state, password: e.target.value });
    } else if (inputType === "email") {
      setState({ ...state, email: e.target.value });
    }
  };

  return (
    <section className="login">
      <Container>
        <BaseCard>
          <form action="" className="login__form" onSubmit={submitHandler}>
            <div className="login__input-wrapper">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler(e, "name")}
              />
            </div>
            <div className="login__input-wrapper">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler(e, "email")}
              />
            </div>
            <div className="login__input-wrapper">
              <label htmlFor="password">Password: </label>
              <input
                className={cn({ "login__input-error": passwordError })}
                type="password"
                id="password"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeInputHandler(e, "password")
                }
              />
            </div>
            {passwordError && <span className="login__error-msg">Entered invalid password</span>}
            <button className="login__btn">Submit</button>
          </form>
        </BaseCard>
      </Container>
    </section>
  );
};

export default Login;
