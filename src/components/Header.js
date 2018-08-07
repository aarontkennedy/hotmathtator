import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="grid-x grid-padding-x">
        <h3 className="cell">
          <img className="Header-icon" alt="Hot Mathtator" src="/images/hotTator.gif" />
          <Link to="/" className="Header-title" > Hot Mathtator!</Link>
        </h3>
      </header>);
  }

}

export default Header;