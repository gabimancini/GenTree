import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' 
import { ThirdwebProvider } from 'thirdweb/react';
import { BrowserRouter } from 'react-router-dom';
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThirdwebProvider ><BrowserRouter><App /></BrowserRouter></ThirdwebProvider>
  </React.StrictMode>,
)
