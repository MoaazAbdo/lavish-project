import React from 'react'
import './App.css';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/HomePage/Home';
import Footer from './components/Pages/Footer/Footer';
import Services from './components/Pages/Services/Services';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import ScrollTopBtn from './components/ScrollTopBtn';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollTopBtn />
      <Navbar />
      <Switch>
        <Route exact path="/lavish-project" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
