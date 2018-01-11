import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../btn.css';


function goBack() {
    window.history.back();
}

export default class Phone extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    render() {
        return (
            <div>
            <Form style={Outer} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label style={{ fontSize: "150%" }} >ช่องทางติดต่อ</Label>
                    <Container>
                        <Row>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>P</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Phone</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Line</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Facebook</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Col>
                                <Input ref={(phone) => this.phone = phone} placeholder="Phone, Line, Facebook" />
                            </Col>
                        </Row>
                    </Container>
                </FormGroup>
                <Button id="Btn_phone_next" style={Btn_phone_next} color="success">Next</Button>{' '}
            </Form>
            <Button id="Btn_back" style={Btn_back} onClick={() => goBack()} outline color="secondary">กลับ</Button>{' '}
            </div>
        )
    }
}

var Btn_back = {
    border: "1px solid #A9A9A9",
}

var Btn_phone_next = {
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