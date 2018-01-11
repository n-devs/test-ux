import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Images from '../hp-finished-icon.png'
import 'bootstrap/dist/css/bootstrap.css';


export default class Home extends Component {
    render() {
        return (
            <div style={Outer} >
                <center>
                    <img style={{ width: "252px", height: "167px" }} src={Images} />
                </center>
                <Button id="Btn_finish" style={Btn_finish}  color="success">สำเร็จ</Button>{' '}
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