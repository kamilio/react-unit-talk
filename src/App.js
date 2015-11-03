import React, { Component } from 'react';
import Homepage from './containers/Homepage'

require('../node_modules/purecss/build/pure.css');
require('../node_modules/pure-typography/css/pure-typography.css');

const style = {
  padding: '2em 2em',
  maxWidth: 1200,
}

export default class App extends Component {
  render() {
    return (
        <div style={style} className="pure-type">
          <div class="banner">
            <h1 class="banner-head">Awesome People<br/>
              @JS Meetup Stuttgart
            </h1>
          </div>
          <div class="l-content">
            <Homepage />

            <div class="pure-g">
              <h1>Thank you</h1>
              <h2>twitter: @kkamilio</h2>
              <p>Check Brandwatch Jobs</p>
              <a href="https://www.brandwatch.com/careers/">https://www.brandwatch.com/careers</a>
            </div>
          </div>
        </div>
    );
  }
}
