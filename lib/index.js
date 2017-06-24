/*
 * This is the main entry point for your package, export your components here.
 *
 * You can import other modules here, including external packages. When
 * bundling using rollup you can mark those modules as external and have them
 * excluded or, if they have a jsnext:main entry in their package.json (like
 * this package does), let rollup bundle them into your dist file.
 */

import React, { Component } from 'react';

import { makeHappyText, makeSadText } from './utils';

import './index.css';

/**
 * Simple stateful component. Stateless components can also be exported.
 */
class Example extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  handleButtonClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick()}>Click me!</button>
        <h2>1: Am I Happy?</h2>
        <div>{makeHappyText(this.state.clicked)}</div>
        <h2>2: Am I Sad?</h2>
        <div>{makeSadText(this.state.clicked)}</div>
      </div>
    );
  }
}

/**
 * Simple stateless component.
 */
const Hello = () => <div>Hi!</div>;

export { Example, Hello };
