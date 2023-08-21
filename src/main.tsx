import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './stores/store.ts'
import 'tippy.js/dist/tippy.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
      <BrowserRouter  >
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
        </HelmetProvider>
      </BrowserRouter>
    


  </React.StrictMode>,
)
