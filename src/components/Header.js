import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    let classes = "grid-x grid-padding-x ";
    if (this.props.gameMode) {
      classes += " show-for-medium";
    }

    return (
      <header className={classes}>
        <h3 className="cell">
          <img className="Header-icon" alt="Hot Mathtator" src="/images/hotTator.gif" />
          <Link to="/" className="Header-title" > Hot Mathtator!</Link>
        </h3>
      </header>);
  }

}

export default Header;