import React, { Component } from 'react';

export default class List extends Component {
  render() {
    console.log('List rendered');
    return (
      <div>
        <ul>
          <li>
            List
          </li>
          <li>
            Of
          </li>
          <li>
            Items
          </li>
          <li>
            In
          </li>
          <li>
            Here
          </li>
        </ul>
      </div>
    );
  }
}