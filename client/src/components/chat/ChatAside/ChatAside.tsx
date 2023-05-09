import { useRef } from "react";
import { IoAdd, IoFileTrayOutline, IoPerson, IoRefresh } from "react-icons/io5";
import classes from "./ChatAside.module.css";

const ChatAside = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const selectFileHandler = () => {};

  return (
    <div className={classes["chat-aside"]}>
      <div className={classes["new-chat"]} onClick={selectFileHandler}>
        <div className={classes["new-chat__content"]}>
          <input type="file" ref={hiddenFileInput} accept=".pdf" />
          <div className={classes.new}>
            <IoAdd className={classes.icon} />
            <span>New Chat</span>
          </div>

          <h3 className={classes.label}>Drop PDF Here</h3>
        </div>
      </div>
      <ul className={classes.uploads}></ul>
      <ul className={classes.menu}>
        <li><IoRefresh /> Reset Chat</li>
        <li><IoPerson /> My Account</li>
      </ul>
      <ul className={classes.footer}>
        <li>Home</li>
        <li>API</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
};

export default ChatAside;
