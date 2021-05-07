import React, {Component} from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      small_dev: window.innerWidth < 576,
      show_menu: false
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand px-5 justify-content-between primary">
        <a href="#" className="navbar-brand">
          <img src="../logo192.png" className="col-2" />
        </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Unirse</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Ingresar</a>
            </li>
          </ul>
      </nav>
    )
  }

  toggleMenu = () => {
    this.setState({
      show_menu: !this.state.show_menu
    })
    console.log(this.state.show_menu)
  }
}

export default NavBar
