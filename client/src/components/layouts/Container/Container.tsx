import { PropsWithChildren } from "react";
import classes from "./Container.module.css";

const Container = ({ children }: PropsWithChildren) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
