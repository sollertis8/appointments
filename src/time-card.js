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
    Input
} from 'react-materialize';
import './time-card.css';

export default class TimeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
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
            <div className="selected-label">{this.props.selected_label
}</div>
            <div className="selected-time">&nbsp; {this.props.selected_time}</div>
            <div className="instructions">{this.props.instructions}</div>
            <Row className="appointment-form">
                <Input
                    s={12}
                    type="text"
                    label="Name"
                    className="name"
                    placeholder={this.props.name}/>
                <Input
                    s={12}
                    type="tel"
                    label="Phone Number"
                    className="phone"
                    placeholder={this.props.name}/>
            </Row>
        </Modal>

        return <div>{modal}</div>
    }
}