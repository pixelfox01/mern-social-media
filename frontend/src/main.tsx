import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "@/components/ui/toaster.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Login from "./pages/authentication/Login.tsx";
import Register from "./pages/authentication/Register.tsx";
import ProtectedLayout from "./layouts/ProtectedLayout.tsx";
import Home from "./pages/home/Home.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
