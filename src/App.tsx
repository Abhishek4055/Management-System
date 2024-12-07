import React, { lazy, Suspense } from "react";
import HeaderComp from "./Component/navPages/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import LoadingPage from "./Component/utils/LoadingPage";
import styled from "styled-components";

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

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
            <EmployeeDetabaseIndex />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "order_summary",
        element: (
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
            <OrderSummery />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "toDoes",
        element: (
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
            <ToDoes />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "employeeDatabese",
        element: (
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
            <EmployeeDetabaseIndex />
          </Suspense>
        ),
        errorElement: <ErrorPage message={ERROR_MESSAGE} />,
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={
              <LoadingContainer>
                <LoadingPage />
              </LoadingContainer>
            }
          >
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
