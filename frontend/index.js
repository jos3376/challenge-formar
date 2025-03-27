import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que esta ruta sea correcta
import App from './App.jsx'; // Asegúrate de que esta ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
