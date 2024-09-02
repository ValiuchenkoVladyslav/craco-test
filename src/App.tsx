import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SignupForm} from "./components/SignupForm";
import {AppLayout} from "./layouts/AppLayout/AppLayout";
import {UserInfo} from "./components/UserInfo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <p>Главная</p>,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/user",
      element: <UserInfo />,
    },
  ].map(route => ({
    path: route.path,
    element: <AppLayout>{route.element}</AppLayout>,
  })),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
