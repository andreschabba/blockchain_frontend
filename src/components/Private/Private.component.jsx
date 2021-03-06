import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { admin } = useAuth();

  return <Route {...rest} render={() => (admin ? children : <Redirect to="/" />)} />;
}

export default Private;
