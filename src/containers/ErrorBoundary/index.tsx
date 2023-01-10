import { ErrorBoundaryProps, ErrorBoundaryState } from './models';
import { Component, ReactNode, ErrorInfo } from 'react';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		alert(error.message);
		console.error(error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<h1>
					Oops, something went wrong... We are doing our best to fix the issue.
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
