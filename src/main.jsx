// Import React's StrictMode to help identify potential problems in the app
import { StrictMode } from 'react';

// Import createRoot from react-dom/client (for React 18+)
import { createRoot } from 'react-dom/client';

// Import global CSS for the project
import './index.css';

// Import the main App component
import App from './App.jsx';

// Create a root container and render the React app into it
// React 18 uses createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps with highlighting potential issues in development */}
    <App />
  </StrictMode>,
);
