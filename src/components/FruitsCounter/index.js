// Write your code here
import React, { Component } from 'react';
import './index.css';

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0
  };

  eatMango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1
    }));
  };

  eatBanana = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas + 1
    }));
  };

  render() {
    const { mangoes, bananas } = this.state;

    return (
      <div className="fruits-counter-container">
        <h1 className="fruits-counter-heading">
          Bob ate <span className="fruit-count">{mangoes}</span> mangoes{' '}
          <span className="fruit-count">{bananas}</span> bananas
        </h1>
        <div className="fruits-images-container">
          <div className="fruit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <button className="fruit-button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
            <button className="fruit-button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitsCounter;
