import React, { Component } from 'react'
import *as firebase from "firebase";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';

import Images from './images.png';

import 'bootstrap/dist/css/bootstrap.css';
import './btn.css'
import './loading.css';


// config Firebase

var config = {
    apiKey: "AIzaSyBFD6eyb5x7XhqUYs9S74uddJrgKN-SCsY",
    authDomain: "testux-a1273.firebaseapp.com",
    databaseURL: "https://testux-a1273.firebaseio.com",
    projectId: "testux-a1273",
    storageBucket: "testux-a1273.appspot.com",
    messagingSenderId: "458691747929"
};
firebase.initializeApp(config);

var firebaseAuth = firebase.auth

function logIn(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
};

function signOut() {
    return firebaseAuth().signOut()
};

function resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email)
}


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }


function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />}
        />
    )
}
function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/Home', setState: { from: props.location } }} />}
        />
    )
}





export default class App extends React.Component {
    state = {
        loadding: true,
        authed: false
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }
    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        return this.state.loading === true ?
            <div className="text-center" style={{ padding: '20%' }}>
                <div id="inTurnBlurringTextG">
                    <div id="inTurnBlurringTextG_1" className="inTurnBlurringTextG">L</div>
                    <div id="inTurnBlurringTextG_2" className="inTurnBlurringTextG">o</div>
                    <div id="inTurnBlurringTextG_3" className="inTurnBlurringTextG">a</div>
                    <div id="inTurnBlurringTextG_4" className="inTurnBlurringTextG">d</div>
                    <div id="inTurnBlurringTextG_5" className="inTurnBlurringTextG">i</div>
                    <div id="inTurnBlurringTextG_6" className="inTurnBlurringTextG">n</div>
                    <div id="inTurnBlurringTextG_7" className="inTurnBlurringTextG">g</div>
                </div>
            </div> : (
                <BrowserRouter>
                    <Switch>
                        {this.state.authed
                            ? <PrivateRoute authed={this.state.authed} exact component={Home} />
                            : <PublicRoute authed={this.state.authed} exact component={Login} />}
                    </Switch>
                </BrowserRouter>
            );
    }
}

class Home extends Component {

    render() {
        return (
            <div>
                <Button id="Btn_test" style={Btn_test} outline color="secondary">เก็บข้อมูล</Button>{' '}
                <div style={Outer} />
                <Button id="Btn_result" style={Btn_result} outline color="secondary">สถิติ</Button>{' '}
                <Button id="Btn_logout" onClick={signOut} style={Btn_logout} outline color="secondary">Logout</Button>{' '}
            </div>
        )
    }
}

var Btn_test = {
    border: "0px solid #4CAF50",
}

var Btn_result = {
    border: "0px solid #4CAF50",
}

var Btn_logout = {
    border: "1px solid #A9A9A9",
}

var Outer = {
    background: "#A9A9A9",
    display: "block",
    height: "50%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "1%",
}

function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}

class Login extends Component {

    state = {
        loginMessage: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        logIn(this.email.value, this.pw.value)
            .catch((error) => {
                this.setState(setErrorMsg('Invalid username/password.'))
            })
    }

    resetPassword = () => {
        resetPassword(this.email.value)
            .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
            .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }

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
