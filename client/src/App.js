import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SocialLinks from './Components/SocialLinks'
import TopNav from './Components/TopNav';
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Vids from './views/Vids/Vids';
import Shows from './views/Shows/Shows';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <TopNav/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/dawghousetv'>
          <Vids/>
        </Route>
        <Route exact path='/shows'>
          <Shows/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <SocialLinks/>
    </BrowserRouter>
    </>
  );
}

export default App;
