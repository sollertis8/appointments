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

export default class TimeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    handleClick(time) {
        let element = document.getElementById(time);
        element
            .classList
            .toggle("time-card-red");

    }

    render() {

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

            <Row className="appointment-form">
                <Input
                    s={12}
                    type="text"
                    label="Name"
                    className="name"
                    validate="true"
                    placeholder={this.props.name}>
                    <Icon>account_circle</Icon>
                </Input>
                <Input
                    s={12}
                    type="tel"
                    label="Phone Number"
                    className="phone"
                    validate="true"
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