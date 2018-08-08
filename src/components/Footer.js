import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            Hot Mathtator by
            <a href="http://aarontkennedy.github.io" target="_blank" rel="noopener noreferrer">Aaron Kennedy</a>
          </li>
          <li>
            <a href="https://github.com/aarontkennedy/hotmathtator" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </li>
          <li>Music by <a href="http://rapternal.com" target="_blank" rel="noopener noreferrer">rapternal.com</a></li>
        </ul>
      </footer >);
  }

}

export default Footer;