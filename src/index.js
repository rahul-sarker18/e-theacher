import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usercontext from "./Components/Context/Usercontext";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    <Usercontext>
      <App />
    </Usercontext>
  </React.StrictMode>
  </QueryClientProvider>
);


reportWebVitals();
