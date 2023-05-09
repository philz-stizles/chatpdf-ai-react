import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./services/firebase";
import { RootLayout } from "./components/layouts";
import HomePage from "./pages/Home/Home";
// import CheckoutPage from "./pages/Checkout/Checkout";
import useAuthContext from "./context/auth-context";
import ChatPage from "./pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/chats/:id",
      //   element: <ChatPage />,
      // },
    ],
  },
  {
    path: "/chats",
    children: [
      // {
      //   index: true,
      //   element: <HomePage />,
      // },
      {
        path: ":id",
        element: <ChatPage />,
      },
    ],
  },
]);

const App = () => {
  const { setCurrentUser } = useAuthContext();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setCurrentUser(user);
        console.log("uid", uid);
      } else {
        setCurrentUser(undefined);
        console.log("user is logged out");
      }
    });
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
