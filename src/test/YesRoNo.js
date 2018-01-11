import React, { Component } from 'react';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../btn.css'


function goBack() {
    window.history.back();
}

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={Texetest}>
                    <center>
                        <h3  >ทดสอบผู้ใช้ครั้งที่ 1</h3>
                    </center>
                </div>
                <Button id="Btn_use" style={Btn_use} outline color="secondary">ใช้</Button>{' '}
                <div style={Outer} />
                <Button id="Btn_notuse" style={Btn_notuse} outline color="secondary">ไม่ใช้</Button>{' '}
                <Button id="Btn_back" style={Btn_back} onClick={() => goBack()} outline color="secondary">กลับ</Button>{' '}
            </div>
        )
    }
}

var Btn_use = {
    border: "0px solid #4CAF50",
}

var Btn_notuse = {
    border: "0px solid #4CAF50",
}

var Btn_back = {
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

var Texetest = {
    display: "block",
    height: "80%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "70%",
}