import React, { Component } from 'react';
import './App.css';

var {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('../node_modules/react-spark-scroll/lib/spark-scroll-gsap.js')({
    invalidateAutomatically: true
});


class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-Background">
          <div className="App-Diamond"></div>
          <div className="App-BigBox"></div>
          <div className="App-Project"></div>
          <SparkScroll.div
            className="App-Project"
            timeline={{
              topBottom: {transform: 'translate3d(1000px,0px,0px)'},
              centerCenter: {transform: 'translate3d(0px,0px,0px)'}
            }}>
          </SparkScroll.div>
          <SparkScroll.div
            className="App-Project"
            timeline={{
              topBottom: {transform: 'translate3d(-1000px,0px,0px)'},
              centerCenter: {transform: 'translate3d(0px,0px,0px)'}
            }}>
          </SparkScroll.div>
          <SparkScroll.div
            className="App-Project"
            timeline={{
              topBottom: {transform: 'translate3d(1000px,0px,0px)'},
              centerCenter: {transform: 'translate3d(0px,0px,0px)'}
            }}>
          </SparkScroll.div>
          <SparkScroll.div
            className="App-Project"
            timeline={{
              topBottom: {transform: 'translate3d(-1000px,0px,0px)'},
              centerCenter: {transform: 'translate3d(0px,0px,0px)'}
            }}>
          </SparkScroll.div>
          <SparkScroll.div
            className="App-Project"
            timeline={{
              topBottom: {transform: 'translate3d(1000px,0px,0px)'},
              centerCenter: {transform: 'translate3d(0px,0px,0px)'}
            }}>
          </SparkScroll.div>
          <div className="App-Project"></div>
          <div className="App-Skateboard"></div>
          <div className="App-Creature"></div>
        </div>
      </div>
    );
  }
}

export default App;
