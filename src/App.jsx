import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { MainLayout } from "./layouts/MainLayout";
import { HomeCities } from "./components/HomeCities";

import "./App.css";
import { DetailsCity } from "./components/DetailsCity";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Component404 } from "./components/Component404";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import user_actions from "./redux/actions/users.js";
import Profile from "./components/Profile";
const { signin_token } = user_actions;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cities",
          element: <HomeCities />,
        },
        {
          path: "/cities/:id",
          element: <DetailsCity />,
        },
        {
          path: "/signin",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <Component404 />,
        },
      ],
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(signin_token());
    }
  }, []);
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
