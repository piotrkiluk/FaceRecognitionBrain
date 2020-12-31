import React, { Component } from 'react';

class SignIn extends Component {

  constructor (props) {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  };

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  };

  onSubmitSignIn = () => {
    fetch('https://floating-inlet-71925.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        }
      })
  };

  handleKeyPress = (event) => {
    if(event.charCode === 13) {
      this.onSubmitSignIn();
    }
  };

  render () {
    const { onRouteChange } = this.props
    return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">      
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
              <input 
                onChange = { this.onEmailChange }
                onKeyPress = { this.handleKeyPress }
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
              <input 
              onChange = { this.onPasswordChange }
              onKeyPress = { this.handleKeyPress }
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password" />
            </div>
          </fieldset>
          <div className="">
            <input 
              onClick = { this.onSubmitSignIn }
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
              type="submit" 
              value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <p onClick={() => onRouteChange('register')} className="f5 link dim black db pointer">Register</p>
          </div>
        </div>
      </main>
    </article>
    );
  }
}

export default SignIn;