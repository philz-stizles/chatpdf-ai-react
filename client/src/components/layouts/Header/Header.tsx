import { Button } from "../../ui";
import { BsDiscord } from "react-icons/bs";
import classes from "./Header.module.css";
import Container from "../Container/Container";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <h1 className={classes["header-title"]}>Chat with any PDF</h1>
        <div className={classes["header-actions"]}>
          <Button>
            <BsDiscord />
            Join Discord
          </Button>
          <Button>
            <IoLogoTwitter />
            Post to Twitter
          </Button>
          <Button>
            <IoLogoFacebook />
            Share on facebook
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
