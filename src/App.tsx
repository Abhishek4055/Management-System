import React, { lazy, Suspense } from "react";
import HeaderComp from "./Component/navPages/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import LoadingPage from "./Component/utils/LoadingPage";

// Lazy-loaded components
const Home = lazy(() => import("./Component/navPages/Home"));
const About = lazy(() => import("./Component/navPages/About"));
const OrderSummery = lazy(() => import("./Component/pages/OrderSummery"));
const ToDoes = lazy(() => import("./Component/pages/todo/ToDoes"));
const EmployeeDetabaseIndex = lazy(
  () => import("./Component/pages/EmployeeDatabase/EmployeeDetabaseIndex")
);

const ERROR_MESSAGE = "Found something wrong ...404";

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
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <EmployeeDetabaseIndex />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "order_summary",
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <OrderSummery />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "toDoes",
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <ToDoes />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "employeeDatabese",
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <EmployeeDetabaseIndex />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingPage message="Loading" />}>
            <About />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={route} />;
};

export default App;
