import React from "react";

interface IErrorBoundaryProps {
  message: string;
}

interface IErrorBoundaryState {
  caughtError: Object;
}

/**
 * See https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html#introducing-error-boundaries
 */
export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  message: string = "";

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.message = props.message;
    this.state = {
      caughtError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: Object): void {
    this.setState({ caughtError: error });
  }

  render(): JSX.Element | React.ReactNode {
    const { children } = this.props;
    const { caughtError } = this.state;
    if (caughtError) {
        console.error(this.state.caughtError)
    }
    if (caughtError) return <div>{this.message}</div>;
    // return the children
    return children;
  }
}
