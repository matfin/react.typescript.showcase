import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Today&apos;s Amazing Fact
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}