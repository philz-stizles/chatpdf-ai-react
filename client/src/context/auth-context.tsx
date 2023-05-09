import { User } from "@firebase/auth";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthContextType = {
  currentUser?: User;
  setCurrentUser: (user?: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User>();

  const setCurrentUserHandler = (user?: User) => {
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser: setCurrentUserHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export default useAuthContext;
