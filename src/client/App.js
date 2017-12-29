import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import Header from './components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

export default {
  component: App
};
