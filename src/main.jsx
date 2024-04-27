import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Ragister from "./Pages/Ragister.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Additem from "./Pages/Additem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:4000/craftItems"),
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Ragister /> },
      { path: "/addcraftitem", element: <Additem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
