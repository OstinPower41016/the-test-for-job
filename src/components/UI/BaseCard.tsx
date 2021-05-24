import * as React from "react";
import cn from "classnames";

import "./styles/BaseCard.scss";

interface IBaseCardProps {
  children: any;
  className?: string;
}

const BaseCard: React.FunctionComponent<IBaseCardProps> = (props) => {
  return (
    <div className={cn("card", { [props.className!]: props.className })}>{props.children}</div>
  );
};

export default BaseCard;
