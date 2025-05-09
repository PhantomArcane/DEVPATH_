
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// GitHub Pages redirect script
(function() {
  // If we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      history.replaceState(null, '', redirect.replace(window.location.origin, ''));
    }
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
