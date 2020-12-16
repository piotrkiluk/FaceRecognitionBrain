import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from  'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import SignIn from './Components/SignIn/SignIn';
import Registration from './Components/Registration/Registration';
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
      imageUrl: 'https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg',
      box: {},
      route: 'signIn',
      isSignedIn: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }

  onRouteChange = (route) => {
    if (route === 'signIn') {
        this.setState({isSignedIn: false});
      } else if(route === 'home') {
        this.setState({isSignedIn: true});
      }
    this.setState({route: route});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => { 
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
 
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

  render() {
    const { imageUrl, box, route, isSignedIn} = this.state
    return (  
      <div className="App">
        <Particles className='particles' params={particleOptions}/>
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}  
        />        
        { route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition 
                imageUrl = {imageUrl}
                box = {box}/>
            </div>
          : (
              route === 'signIn'
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Registration onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    )
  }
}

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

export default App;
