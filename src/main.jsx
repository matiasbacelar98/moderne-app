import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import EntranceProvider from './context/entranceContext';
import { QueryClientProvider, queryClient } from './api/reactQueryConfig';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <EntranceProvider>
            <App />
          </EntranceProvider>

          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
