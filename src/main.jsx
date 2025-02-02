import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import BooksContextProvider from './components/Context/BooksContext.jsx';

createRoot(document.getElementById('root')).render(
  <BooksContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </BooksContextProvider>
)
