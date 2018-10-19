import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import CardsList from './cards';
import './appointments.css';

// parent appointments component
export default class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card-container">
                <h1 className="title">Appointments</h1><CardsList/></div>
        )
    }
}