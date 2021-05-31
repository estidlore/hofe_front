import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Token from '../models/Token'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }

  render() {
    var list;
    var token = Token.instance;
    if (!this.state.loggedIn) {
      list = (
        <ul className="navbar-nav">
          <A link="sign-up" text="Unirse" />
          <A link="sign-in" text="Ingresar" />
        </ul>
      );
    } else if (token.role === "candidate") {
      list = (
        <ul className="navbar-nav">
          <A link="profile" text="Perfil" />
          <A link="vacants" text="Vacantes" />
          <A link="postulations" text="Postulaciones" />
        </ul>
      );
    } else { // enterprise
      list = (
        <ul className="navbar-nav">
          <A link="profile" text="Perfil" />
          <A link="vacants" text="Vacantes" />
          <A link="tests" text="Pruebas" />
        </ul>
      );
    }
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
          <li className="nav-item ms-4">
            <Link to="/offers" className="nav-link">Ofertas</Link>
          </li> 
          <li className="nav-item ms-4">
            <Link to="/porfile-candidate" className="nav-link">Perfil Candidato</Link>
          </li>  
        </ul>
        {list}
      </nav>
    );
  }
}

function A({link, text}) {
  return (
    <li className="nav-item">
      <Link to={"/" + link} className="nav-link">{text}</Link>
    </li>
  )
}
