import classes from "./Pricing.module.css";
import { Modal } from "../../ui";
import { MouseEvent } from "react";
import { useNavigate } from "react-router";
import { signOut } from "../../../services/firebase";
import useAuthContext from "../../../context/auth-context";

type PricingProps = {
  className?: string;
  onClose: (e: MouseEvent<HTMLElement>) => void;
};

const Pricing = ({ className, onClose }: PricingProps) => {
  const { currentUser, setCurrentUser } = useAuthContext();
  const navigate = useNavigate();
  const pricingClasses = `${classes.Pricing}${
    className ? ` ${className}` : ""
  }`;

  const checkoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/checkout");
    onClose(e);
  };

  const logoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    signOut();
    setCurrentUser(undefined);
    onClose(e);
  };

  const modalContent = (
    <div className={pricingClasses}>
      {currentUser && (
        <div className={classes.auth}>
          <p>{currentUser.email}</p>
          <button onClick={logoutHandler}>Sign out</button>
        </div>
      )}
      <div className={classes.prices}>
        <div className={classes.price}>
          <div className={classes["price-header"]}>
            <h3>Free</h3>
            <p>current</p>
          </div>
          <div className={classes["price-body"]}>
            <h2>
              <strong>$0</strong>
              <span>/mo</span>
            </h2>
            <ul>
              <li>
                <strong>120 pages</strong>/PDF
              </li>
              <li>
                <strong>10 MB</strong>/PDF
              </li>
              <li>
                <strong>3 PDFs</strong>/days
              </li>
              <li>
                <strong>50 questions</strong>/days
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.price}>
          <div className={classes["price-header"]}>
            <h3>Plus</h3>
          </div>
          <div className={classes["price-body"]}>
            <h2>
              <strong>$0</strong>
              <span>/mo</span>
            </h2>
            <ul>
              <li>
                <strong>120 pages</strong>/PDF
              </li>
              <li>
                <strong>10 MB</strong>/PDF
              </li>
              <li>
                <strong>3 PDFs</strong>/days
              </li>
              <li>
                <strong>50 questions</strong>/days
              </li>
            </ul>
          </div>
          <div className={classes["price-footer"]}>
            <button onClick={checkoutHandler}>Get Plus</button>
          </div>
        </div>
      </div>

      {!currentUser && (
        <div className={classes["sign-in"]}>
          Already have an account? <span>Sign in</span>
        </div>
      )}
    </div>
  );

  return (
    <Modal title="Upgrade to ChatPDF Plus" onClose={onClose}>
      {modalContent}
    </Modal>
  );
};

export default Pricing;
