/**
 * Sandbox router.
 */
import Error404 from 'components/Error404Page';
import PT from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Payment from './payments';

export default function Router({ base }) {
  const paymentBase = `${base}`;
  return (
    <Switch>
      <Route
        component={() => <Payment base={paymentBase} />}
        path={paymentBase}
      />
      <Error404 />
    </Switch>
  );
}

Router.propTypes = {
  base: PT.string.isRequired,
};
