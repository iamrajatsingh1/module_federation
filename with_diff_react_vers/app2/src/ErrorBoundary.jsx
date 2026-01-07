import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Federated module error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ color: "red" }}>
          Failed to load remote application.
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
