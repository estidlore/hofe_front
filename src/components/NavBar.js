import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand px-5 justify-content-between primary">
        <Link to="/" className="navbar-brand">
          <img src="../logo192.png" className="col-2" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link">Unirse</Link>
          </li>
          <li className="nav-item ms-4">
            <Link to="/sign-in" className="nav-link">Ingresar</Link>
          </li>
          <li className="nav-item ms-5">
            {/* <Link to="/candidate-info" className="nav-link">Candidate Info</Link> */}
          </li>
          <li className="nav-item ms-4">
            <Link to="/offer-info" className="nav-link">Offer Info</Link>
          </li>
          <li className="nav-item ms-4">
            <Link to="/porfile-company" className="nav-link">Porfile Company</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
