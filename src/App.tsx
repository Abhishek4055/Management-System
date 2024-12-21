import React, { lazy, Suspense } from "react";
import "./App.scss";
import styled from "styled-components";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComp from "./Component/navPages/header";
import LoadingPage from "./Component/utils/LoadingPage";
import ErrorBoundery from "Component/utils/ErrorBoundery";
import YoutubleIndex from "Component/pages/YouTuble/Index/YoutubleIndex";
import ErrorPage from "Component/utils/ErrorPage";
import { ERROR_MESSAGE } from "Component/config";
import RestroCollection from "Component/pages/Swiggy/utils/RestroCollection";
// import RestaureantWithFood from "Component/pages/Swiggy/SwiggyPages/Rasturent/RestaureantWithFood";

// Lazy-loaded components
const Home = lazy(() => import("./Component/navPages/Home"));
const About = lazy(() => import("./Component/navPages/About"));
const OrderSummery = lazy(() => import("./Component/pages/OrderSummery"));
const ToDoes = lazy(() => import("./Component/pages/todo/ToDoes"));
const EmployeeDatabaseIndex = lazy(
  () => import("./Component/pages/EmployeeDatabase/EmployeeDetabaseIndex")
);
const SwiggyHeader = lazy(
  () => import("./Component/pages/Swiggy/SwiggyHeader")
);
const SwiggyIndex = lazy(() => import("./Component/pages/Swiggy/SwiggyIndex"));
const ZomatoIndex = lazy(() => import("./Component/pages/Zomato/ZomatoIndex"));

// Home Layout
const HomeLayout: React.FC = () => (
  <div className="App">
    <ErrorBoundery>
      <HeaderComp />
    </ErrorBoundery>
    <div className="app-body">
      <ErrorBoundery>
        <Suspense
          fallback={
            <LoadingContainer>
              <LoadingPage />
            </LoadingContainer>
          }
        >
          <Outlet />
        </Suspense>
      </ErrorBoundery>
    </div>
  </div>
);

const SwiggyLayout = () => {
  return (
    <SwiggyMain className="swiggy_layout">
      <ErrorBoundery>
        <SwiggyHeader />
      </ErrorBoundery>
      <ErrorBoundery>
        <Suspense
          fallback={
            <LoadingContainer>
              <LoadingPage />
            </LoadingContainer>
          }
        >
          <Outlet />
        </Suspense>
      </ErrorBoundery>
    </SwiggyMain>
  );
};

// Routes configuration
const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "order_summary",
        element: <OrderSummery />,
      },
      {
        path: "toDoes",
        element: <ToDoes />,
      },
      {
        path: "employeeDatabase",
        element: <EmployeeDatabaseIndex />,
      },
    ],
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
  },
  {
    path: "/swiggy_restaurants",
    element: <SwiggyLayout />,
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
    children: [
      {
        index: true,
        element: <SwiggyIndex />,
      },
      {
        path: "collection/:id",
        element: <RestroCollection />,
      },
    ],
  },

  {
    path: "/zomato",
    element: <ZomatoIndex />,
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
  },
  {
    path: "/youtuble",
    element: <YoutubleIndex />,
    errorElement: <ErrorPage message={ERROR_MESSAGE} />,
  },
]);

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <LoadingContainer>
          <LoadingPage />
        </LoadingContainer>
      }
    >
      <RouterProvider router={route} />
    </Suspense>
  );
};

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwiggyMain = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
