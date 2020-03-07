import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from '../landing/Services';
import Contact from '../landing/Contact';
import NotFound from '../elements/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
