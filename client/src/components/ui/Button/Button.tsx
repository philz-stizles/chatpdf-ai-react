import React, { PropsWithChildren } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  className?: string;
  white?: boolean;
  solid?: boolean;
};

const Button = ({
  className,
  children,
  solid,
  white,
}: PropsWithChildren<ButtonProps>) => {
  let btnClasses = `${classes.button}${className ? ` ${className}` : ""}`;

  if (white) {
    btnClasses += " " + classes.white;
  }

  btnClasses += ` ${solid ? classes.solid : classes.outlined}`;

  return <button className={btnClasses}>{children}</button>;
};

export default Button;
