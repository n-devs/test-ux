import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { logIn } from './Authentication';

import 'bootstrap/dist/css/bootstrap.css';

import Images from './images.png';




function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {

  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault();
    logIn(this.email.value, this.pw.value)
      .catch((error) => {
        this.setState(setErrorMsg('Invalid username/password.'))
      })
  }
  // resetPassword = () => {
  //   resetPassword(this.email.value)
  //     .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
  //     .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  // }

  render() {
    return (
      <div>
        <div style={{ height: 250 }} >
          <div style={{ height: "30%" }} />
          <div style={{ width: "70%", margin: "auto auto" }} >
            <center>
              <img style={{ width: "252px", height: "167px" }} src={Images} />
            </center>
          </div>
        </div>
        <form style={{ width: "70%", margin: "0 auto" }} onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label for="exampleEmail">Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email" />
          </div >
          <div className="form-group" >
            <label for="examplePassword">Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div >
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <button type="submit" className="btn btn-primary" style={{ width: 100 }} >Login</button>
        </form>
      </div>

    );
  }
}



export default Login;
