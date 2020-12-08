import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from  'clarifai'
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'c2365a688dc6458a95c6434e293b8f51'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',

    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
    .predict(
    "",
    "")
    .then (
      function(response) {
        console.log(response);
      },
      function(err) {

      }
    )
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    )
  }
}

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

export default App;
