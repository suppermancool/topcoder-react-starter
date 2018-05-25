/**
 * Root router of the app.
 */

import Error404Page from 'components/Error404Page';
import HelloWorld from 'components/HelloWorld';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Sandbox from './Sandbox';

export default function Routes() {
  return (
    <Switch>
      <Route component={HelloWorld} exact path="/" />
      <Route component={() => <Sandbox base="/sandbox" />} path="/sandbox" />
      <Error404Page />
    </Switch>
  );
}
