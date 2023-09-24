import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from './theme';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={theme} portalZIndex={1}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
