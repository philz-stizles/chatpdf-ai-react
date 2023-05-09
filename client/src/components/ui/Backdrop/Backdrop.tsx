import { MouseEvent, PropsWithChildren } from "react";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  onClose: (e: MouseEvent<HTMLElement>) => void;
};

const Backdrop = ({ children, onClose }: PropsWithChildren<BackdropProps>) => {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      {children}
    </div>
  );
};

export default Backdrop;
