import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
    Button,
    Icon,
    Card,
    Col,
    Modal,
    Form,
    Row,
    Input,
    validate
} from 'react-materialize';
import './time-card.css';
import {required, nonEmpty, length, isTrimmed} from './validators';

export default class TimeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    // Change time card to red when the form is submitted
    handleClick(time) {
        let element = document.getElementById(time);
        element
            .classList
            .toggle("time-card-red");

        let saved = document.getElementById("time-saved");
        saved.style.display = "block";

    }

    render() {

        // appointment modal
        let modal = <Modal
            header=''
            fixedFooter
            trigger={< Card index = {
            this.props.parentIndex
        } > {
            this.props.card_times
        } < /Card>}>
            <div className="selected-label">{this.props.selected_label}</div>
            <div className="selected-time">&nbsp; {this.props.selected_time}</div>
            <div className="instructions">{this.props.instructions}</div>
            <div className="time-saved" id="time-saved">Your appointment has been saved.</div>
            <Row className="appointment-form">
                <Input
                    s={12}
                    type="text"
                    label="Name"
                    className="name"
                    validate
                    Validators={[required, nonEmpty, isTrimmed]}
                    placeholder={this.props.name}>
                    <Icon>account_circle</Icon>
                </Input>
                <Input
                    s={12}
                    validate
                    type="tel"
                    label="Phone Number"
                    className="phone"
                    Validators={[required, nonEmpty, isTrimmed]}
                    placeholder={this.props.phone}>
                    <Icon>phone</Icon>
                </Input>
                <Button
                    waves='light'
                    index={this.props.index}
                    onClick={this
                    .handleClick
                    .bind(null, this.props.selected_time)}>Submit</Button>
            </Row>
        </Modal>

        return <div>{modal}</div>
    }
}