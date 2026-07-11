import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Wraps decorative, non-essential components (like the 3D holo core / starfield).
// If they throw for any reason (WebGL unavailable, a Three.js error, etc.), this
// stops the crash from taking down the entire page — it just renders nothing here.
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Decorative component failed to render:", error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}