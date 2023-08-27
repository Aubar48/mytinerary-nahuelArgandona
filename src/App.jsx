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
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Component404 />,
        },
      ],
    },
  ]);
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
