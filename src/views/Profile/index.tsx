import * as React from "react";

import "./index.scss";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const userName = JSON.parse(localStorage.getItem("auth")!).name;

  return <div className="profile">{userName}</div>;
};

export default Profile;
