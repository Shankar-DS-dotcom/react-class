import React from 'react';
import { Route } from 'react-router-dom';
import Services from '../landing/Services';
import Contact from '../landing/Contact';
import About from '../landing/About';
import Main from '../landing'
const Routes = () => {
  return (
    <section className='container'>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
    </section>
  );
};

export default Routes;
