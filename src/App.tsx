import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { AppRouter } from './router';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <AppRouter />
            </Router>
        </ErrorBoundary>
    );
}

export default App;
