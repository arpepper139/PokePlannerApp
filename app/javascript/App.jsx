import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Homepage from './homepage/Homepage';
import PokemonPage from './pokemon/PokemonPage';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Homepage} />
      <Route path='/home' component={Homepage} />
      <Route path='/pokemon' component={PokemonPage} />
    </Router>
  )
};

export default App;
