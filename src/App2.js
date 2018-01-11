import React, { Component } from 'react';;
import *as firebase from "firebase";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import $ from "jquery";
import { Button } from 'reactstrap';
import './loading.css';

import Phone from './test/Phone'

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

export var dbRef = firebase.database().ref()
export var firebaseAuth = firebase.auth
export var user = firebase.auth().currentUser;


export function logIn(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function signOut() {
  return firebaseAuth().signOut()
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


export default class App extends Component {
  state = {
    authed: false,
    loading: true,
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

const Home = () => (
  <div>
    <Button id="Btn_test" style={Btn_test} outline color="secondary">เก็บข้อมูล</Button>{' '}
    <div style={Outer} />
    <Button id="Btn_result" style={Btn_result} outline color="secondary">สถิติ</Button>{' '}
    <Button id="Btn_logout" onClick={signOut} style={Btn_logout} outline color="secondary">Logout</Button>{' '}
  </div>
)

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

function goBack() {
  window.history.back();
}

const userName = () => {
  <div>
    <Form style={Outer} onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label style={{ fontSize: "150%" }} >ชื่อเล่น</Label>
        <Input ref={(names) => this.names = names} placeholder="Name" />
      </FormGroup>
      <Button id="Btn_name_next" style={Btn_name_next} color="success">Next</Button>{' '}
    </Form>
    <Button id="Btn_back" style={Btn_back} onClick={() => goBack()} outline color="secondary">กลับ</Button>{' '}
  </div>
}