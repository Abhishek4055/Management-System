import { ComponentType, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HOCWithRouter = <P extends object>(MyComponent: ComponentType<P>) => {
  const NewComponent = (props: P) => {
    const navigate = useNavigate();
    const location = useLocation();

    // console.log(navigate);
    // console.log(location);
    return <MyComponent {...props} navigate={navigate} location={location} />;
  };

  return memo(NewComponent);
};

export default HOCWithRouter;
