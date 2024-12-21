import { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import HOCWithRouter from "./HOC";

type ErrorBoundaryProps = {
  children: ReactNode;
  location?: any; // Optional
  navigate?: any; // Optional
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps = {
    location: {},
    navigate: () => {},
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidUpdate(
    prevProps: Readonly<ErrorBoundaryProps>,
    prevState: Readonly<ErrorBoundaryState>
  ): void {
    if (
      prevProps.location?.pathname !== this.props.location?.pathname &&
      this.state.hasError
    ) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("ComponentError:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorPage>
          <h2>Something Went Wrong</h2>
        </ErrorPage>
      );
    }
    return this.props.children;
  }
}

const ErrorPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;

export default HOCWithRouter(ErrorBoundary);
