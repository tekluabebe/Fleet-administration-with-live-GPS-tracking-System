import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css'
import {ContextProvider} from './context/ContextProvider';


createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App/>
  </ContextProvider>
);
