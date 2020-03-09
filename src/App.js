import React, { Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/elements/Navbar';
import Footer from './components/elements/Footer';
import Routes from './components/routing/Routes';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
