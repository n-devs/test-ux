import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../btn.css';


function goBack() {
    window.history.back();
}

export default class userName extends Component {
    render() {
        return (
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
        )
    }
}

var Btn_back = {
    border: "1px solid #A9A9A9",
}

var Btn_name_next = {
    display: "block",
    height: "20%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: "60%",
    bottom: 0,
    width: "40%",
    fontSize: "120%",
    border: "1px solid #A9A9A9",
}

var Outer = {
    // background: "#A9A9A9",
    display: "block",
    height: "30%",
    margin: "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "70%",
}