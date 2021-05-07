import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn from './views/SignIn';
import NavBar from './components/NavBar';
import React, {Component} from 'react'
import Home from './views/Home';
import Footer from './components/Footer';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'sign_in'
    }
  }

  render() {
    const {page} = this.state.page

    var v = page === 'sign_in' ? <SignIn /> : <Home />
    return (
      <div className="App">
        <NavBar />
        {v}
        <Footer />
      </div>
    )
  }
}

export default App
