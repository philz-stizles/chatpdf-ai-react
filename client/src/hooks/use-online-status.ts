import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  const onlineHandler = () => {
    setIsOnline(true);
  };

  const offlineHandler = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline",offlineHandler);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
