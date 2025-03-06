import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/GlobalStyles.css'
import "@radix-ui/themes/styles.css";

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
