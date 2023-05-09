import { Fragment, MouseEvent, PropsWithChildren } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Backdrop } from "..";
import { IoClose } from "react-icons/io5";

const portalElement = document.getElementById("modal") as HTMLDivElement;

type ModalProps = {
  title?: string;
  onClose: (e: MouseEvent<HTMLElement>) => void;
};

const Modal = ({ title, children, onClose }: PropsWithChildren<ModalProps>) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <div className={classes.modal}>
          <div className={classes.header}>
            <h4 className={classes.title}>{title}</h4>
            <span className={classes.close} onClick={onClose}><IoClose className={classes.icon} /></span>
          </div>
          <div className={classes.body}>{children}</div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
