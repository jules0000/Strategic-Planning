
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a link to the head before rendering
document.head.innerHTML += `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
`;

createRoot(document.getElementById("root")!).render(<App />);
