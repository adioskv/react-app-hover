import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ActiveProvider } from './providers/ActiveProvider';
import { FieldProvider } from './providers/FieldProvider';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <ActiveProvider>
      <FieldProvider>
        <App />
      </FieldProvider>
    </ActiveProvider>
  </React.StrictMode>
);
