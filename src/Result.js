import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch, Link } from 'react-router-dom'
import { Button } from 'reactstrap';

import Images from './Stop_hand.png';
import 'bootstrap/dist/css/bootstrap.css';

function goBack() {
    window.history.back();
}

export default class Result extends Component {

   
    render() {
        return (
            <div style={Outer} >
                <center>
                    <img style={{ width: "252px", height: "252px" }} src={Images} />
                </center>
                <a href="/home">
                    <Button id="Btn_finish" style={Btn_finish} onClick={() => goBack()} color="success">กลับ</Button>{' '}
                </a>
            </div>
        )
    }
}

var Outer = {
    display: "block",
    height: "50%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "70%",
}

var Btn_finish = {
    display: "block",
    height: "20%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: "80%",
    bottom: 0,
    width: "70%",
}