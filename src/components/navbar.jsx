import React from 'react';

// require('../css/navbar.less')

export default class Navbar extends React.Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="nav navbar-nav navbar-logo mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Falcon Analysis</a>
        </li>
      </ul>
    </nav>
    );
  }
}
