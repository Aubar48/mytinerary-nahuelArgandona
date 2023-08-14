import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { MainLayout } from "./layouts/MainLayout";
import { HomeCities } from "./components/HomeCities";

import "./App.css";
import { DetailsCity } from "./components/DetailsCity";
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
          element:<DetailsCity/>
        },
        {
          path: "*",
          element:<Component404/>
        }
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
