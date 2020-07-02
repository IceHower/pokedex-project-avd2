import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import PokeInfo from '../pages/PokeInfo/index'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:name" component={PokeInfo} />
  </Switch>
);

export default Routes;
