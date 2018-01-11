import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch, Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import userName from './test/UserName';
import Result from './Result';

import { signOut } from './Authentication';


import 'bootstrap/dist/css/bootstrap.css';
import './btn.css'

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/Name', state: { from: props.location } }} />}
        />
    )
}

function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/Result', setState: { from: props.location } }} />}
        />
    )
}


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            homePage: true,
            namePage: false
        }
        this.Btn_result = this.Btn_result.bind(this)
        this.Btn_test = this.Btn_test.bind(this);
    }
    Btn_test() {
        this.setState({
            homePage: false,
            namePage: true
        })
    }
    Btn_result() {
        this.setState({
            homePage: false,
            namePage: false
        })
    }

    render() {
        return (this.state.homePage == true ?
            <div>
                <Button id="Btn_test" onClick={this.Btn_test} style={Btn_test} outline color="secondary">เก็บข้อมูล</Button>{' '}
                <div style={Outer} />
                <Button id="Btn_result" onClick={this.Btn_result} style={Btn_result} outline color="secondary">สถิติ</Button>{' '}
                <Button id="Btn_logout" onClick={signOut} style={Btn_logout} outline color="secondary">Logout</Button>{' '}
            </div>
            : <BrowserRouter>
                <Switch>
                    {this.state.namePage
                        ? <PrivateRoute namePage={this.state.namePage} exact Component={userName} />
                        : <PublicRoute namePage={this.state.namePage} exact Component={Result} />}
                </Switch>
            </BrowserRouter>

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