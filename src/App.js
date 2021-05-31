import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import CandidateInfo from './views/CandidateInfo';
import OfferInfo from './views/OfferInfo';
import Profile from './views/Profile';
import Candidates from './views/Candidates';
import Offers from './views/Offers';
import Footer from './components/Footer';

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateVacant from './views/vacant/CreateVacant';
import _404 from './views/_404';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp /> 
          </Route>

          <Route exact path="/create-vacant">
            <CreateVacant /> 
          </Route>

          <Route exact path="/candidate-info">
            <CandidateInfo /> 
          </Route>
          <Route exact path="/offer-info">
            <OfferInfo /> 
          </Route>

          <Route exact path="/profile">
            <Profile /> 
          </Route>

          <Route exact path="/candidates">
            <Candidates /> 
          </Route>

          <Route exact path="/offers">
            <Offers /> 
          </Route>

          <Route path="/">
            <_404 />
          </Route>

        </Switch>
        <Footer />
      </Router>

    </div>
  )
}
