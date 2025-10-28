import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/jaynagar_mart03">
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
