import React from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import Content from './views/Content';

export enum EnumRouter {
  MAIN = '/',
}

export const router = createBrowserRouter([
  { path: EnumRouter.MAIN, element: <Content/> },
  { path: '*', element: <Navigate to={EnumRouter.MAIN} replace={true}/> },
]);
