import React, { Component } from 'react';

class Registration extends Component  {
  constructor (props) {
    super();
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onSubmitSignUp = () => {
    fetch('https://floating-inlet-71925.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json(response))
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
    .catch(err => {console.log(err)})
  }

  onNameChange = (event) => {
    if(event.target.value.length >= 5) 
    {
      this.setState({name: event.target.value});
    } else {
      console.log('invalid name - name must contain 5 to 20 characters')
    }
  }

  onEmailChange = (event) => {
    if(event.target.value.search('@') > 0 && event.target.value.length >= 5) 
      {
        this.setState({email: event.target.value});
      } else {
        console.log('invalid email');
      }
  }
  
  onPasswordChange = (event) => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,50})");
    if(strongRegex.test(event.target.value))
    {
      this.setState({password: event.target.value})
    } else {
      console.log('invalid password - password must contain 8 to 50 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }
  }  

  handleKeyPress = (event) => {
    if(event.charCode === 13) {
      this.onSubmitSignUp();
    }
  };

  render () {
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">      
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="email-address">Name</label>
                <input 
                onChange={this.onNameChange}
                onKeyPress = { this.handleKeyPress }
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name" />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                <input 
                onChange={this.onEmailChange}
                onKeyPress = { this.handleKeyPress }
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                <input 
                onChange={this.onPasswordChange}
                onKeyPress = { this.handleKeyPress }
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                onClick={this.onSubmitSignUp}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                type="submit" 
                value="Sign up" />
            </div>
          </div>
        </main>
      </article>
    ); 
  }
}

export default Registration;