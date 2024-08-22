import React from "react";

export class ErrorBoundary extends React.Component<{type: string}, {hasError: boolean}> {

    // this react class component lifecycle method which is used for error scenarios
    public static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    // this react class component lifecycle method which is used to catch errors
    public componentDidCatch(error: any, errorInfo: any) {
        console.error("ErrorBoundary" + this.props.type);
        console.error(`ErrorBoundary.${this.props.type}.${error}`, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <div>Error</div>;
        }

        return this.props.children;
    }
}