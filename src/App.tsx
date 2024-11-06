import React from "react";
import HeaderComp from "./Component/navPages/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Component/navPages/Home";
import About from "./Component/navPages/About";
import OrderSummery from "./Component/pages/OrderSummery";
import "./App.scss";
import ToDoes from "./Component/pages/todo/ToDoes";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <HeaderComp />
        <div className="app-body">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "/",
        children: [
          { index: true, element: <Home /> },
          {
            path: "order_summary",
            element: <OrderSummery />,
            errorElement: (
              <>
                <h3> Opps!...</h3>
                <p> Found Some thing issue in order pages....404</p>
              </>
            ),
          },
          {
            path: "toDoes",
            element: <ToDoes />,
            errorElement: (
              <>
                <h3> Opps!...</h3>
                <p> Found Some thing issue in To does page....404</p>
              </>
            ),
          },
        ],
        errorElement: (
          <>
            <h3> Opps!... </h3>
            <p> Found Some thing issue in home page....404</p>
          </>
        ),
      },

      {
        path: "about",
        element: <About />,
        errorElement: (
          <>
            <h3> Opps!...</h3>
            <p> Found Some thing issue....404</p>
          </>
        ),
      },
    ],
    errorElement: (
      <>
        <h3> Opps!...</h3>
        <p> Found Some thing issue main page....404</p>
      </>
    ),
  },
]);
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
