import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Foods from "../Pages/Foods";
import RegisterCard from "../Pages/RegisterCard";
import LoginCard from "../Pages/LoginCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/registerCard",
        element: <RegisterCard />,
      },
      {
        path: "/loginCard",
        element: <LoginCard />,
      },
    ],
  },
]);
export default router;
