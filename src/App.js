import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import CandidateInfo from './views/CandidateInfo';
import OfferInfo from './views/OfferInfo';
import PorfileCompany from './views/PorfileCompany';
import CandidatesList from './views/CandidatesList';
import Offers from './views/Offers';
import PorfileCandidate from './views/PorfileCandidate';
import Footer from './components/Footer';

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
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
          <Route exact path="/candidate-info">
            <CandidateInfo /> 
          </Route>
          <Route exact path="/offer-info">
            <OfferInfo /> 
          </Route>
          <Route exact path="/porfile-company">
            <PorfileCompany /> 
          </Route>
          <Route exact path="/list-candidates">
            <CandidatesList /> 
          </Route>
          <Route exact path="/offers">
            <Offers /> 
          </Route>
          <Route exact path="/porfile-candidate">
            <PorfileCandidate /> 
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App
