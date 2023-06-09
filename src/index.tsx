import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";
import { About, Billsplit, Blog, FAQ, Home, WageAdvance } from "./pages";
import { FaqList, ListComponent } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListComponent />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/wageadvance",
    element: <WageAdvance />,
  },
  {
    path: "/billsplit",
    element: <Billsplit />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
