import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Token from '../models/Token'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
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
          <A link="offers" text="Ofertas" />
          <A link="candidates" text="Candidatos" />
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
      <nav className="navbar navbar-expand px-4 justify-content-between primary">
        <Link to="/" className="navbar-brand">
          <img width="30" src="../logo192.png" />
        </Link>
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
