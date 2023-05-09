import { MouseEvent, useState } from "react";
import classes from "./Footer.module.css";
import { Container } from "..";
import { NavLink } from "react-router-dom";
import Pricing from "../../home/Pricing/Pricing";
import { signInWithGoogle } from "../../../services/firebase";
import useAuthContext from "../../../context/auth-context";
import { GoogleAuthProvider } from "@firebase/auth";

const Footer = () => {
  const { currentUser } = useAuthContext();
  const [showPricing, setShowPricing] = useState(false);

  const loginHandler = () => {
    if (!currentUser) {
      signInWithGoogle()
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } else {
      showPricingHandler();
    }
  };

  const showPricingHandler = () => {
    setShowPricing(true);
  };

  const hidePricingHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowPricing(false);
  };

  return (
    <>
      {showPricing && <Pricing onClose={hidePricingHandler} />}
      <footer className={classes.footer}>
        <Container>
          <nav className={classes["footer-nav"]}>
            <ul>
              <li>
                <button onClick={loginHandler}>My Account</button>
                <span>-</span>
              </li>
              <li>
                <button onClick={showPricingHandler}>Pricing</button>
                <span>-</span>
              </li>
              <li>
                <NavLink to="">API</NavLink> <span>-</span>
              </li>
              <li>
                <NavLink target="_blank" to="https://twitter.com/philz_stizles">
                  Twitter
                </NavLink>{" "}
                <span>-</span>
              </li>
              <li>
                <NavLink to="">Contact</NavLink> <span>-</span>
              </li>
              <li>
                <NavLink to="">Policy</NavLink> <span>-</span>
              </li>
              <li>
                <NavLink to="">Terms</NavLink> <span>-</span>
              </li>
              <li>
                <NavLink to="">Imprint</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
