import React, { Component } from 'react'
import './uitest.scss';

class TestList extends Component {

  render() {
    return (
      <div>
        <select>
          <option>
            Alice
          </option>
          <option>
            Bob
          </option>
        </select>
      </div>
    );
  }
}

export default class UITest extends Component {
  render() {
    return (
      <div className="test-block">
        Hello
        <TestList></TestList>
      </div>
    )
  }
}
