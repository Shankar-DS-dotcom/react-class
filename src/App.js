import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing'
import Navbar from './components/elements/Navbar';
import Routes from './components/routing/Routes';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
}

export default App;
