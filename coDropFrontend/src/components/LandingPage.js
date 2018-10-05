import React, { Component } from 'react';
import '../App.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="part1">
          <div className="CoDropMan">
            <img src="/CoDropManOnDrain.png" alt=""/>
          </div>
          <div className="topHeader">
          {/* <img src="/waterSplat.png" alt="" className="splat"/> */}
            <h2>“when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.” </h2>
            <h5>― Why The Lucky Stiff</h5>
          </div>
        </div>

        <div className="part2">
          <h1>Second section</h1>
        </div>
      </div>
    );
  }
}
export default LandingPage;