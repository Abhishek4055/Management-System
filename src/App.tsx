import React from "react";
import HeaderComp from "./Component/navPages/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Component/navPages/Home";
import About from "./Component/navPages/About";
import OrderSummery from "./Component/pages/OrderSummery";
import "./App.scss";
import ToDoes from "./Component/pages/todo/ToDoes";
import EmployeeDetabaseIndex from "./Component/pages/EmployeeDatabase/EmployeeDetabaseIndex";

// Error component
const ErrorPage: React.FC<{ message: string }> = ({ message }) => (
  <>
    <h3>Oops!...</h3>
    <p>{message}</p>
  </>
);

// Routes configuration
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
    errorElement: (
      <ErrorPage message="Found something wrong in the main page...404" />
    ),
    children: [
      { index: true, element: <EmployeeDetabaseIndex /> },
      {
        path: "home",
        element: <Home />,
        errorElement: (
          <ErrorPage message="Found something wrong on the order page...404" />
        ),
      },
      {
        path: "order_summary",
        element: <OrderSummery />,
        errorElement: (
          <ErrorPage message="Found something wrong on the order page...404" />
        ),
      },
      {
        path: "toDoes",
        element: <ToDoes />,
        errorElement: (
          <ErrorPage message="Found something wrong on the To-Does page...404" />
        ),
      },
      {
        path: "employeeDatabese",
        element: <EmployeeDetabaseIndex />,
        errorElement: (
          <ErrorPage message="Found something wrong on the Employee Database page...404" />
        ),
      },
      {
        path: "about",
        element: <About />,
        errorElement: (
          <ErrorPage message="Found something wrong on the About page...404" />
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={route} />;
};

export default App;
