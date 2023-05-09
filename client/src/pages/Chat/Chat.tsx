import ChatAside from "../../components/chat/ChatAside/ChatAside";
import ChatMain from "../../components/chat/ChatMain/ChatMain";
import classes from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={classes.chat}>
      <ChatAside />
      <ChatMain />
    </div>
  );
};

export default Chat;
