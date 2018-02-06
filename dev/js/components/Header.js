import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search Movies</Link></li>
                <li><Link to="/view-movies">View All Movies</Link></li>
                <li><Link to="/">About Us</Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;