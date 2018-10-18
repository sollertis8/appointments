import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button, Icon, Card, Col} from 'react-materialize';
import TimeCard from './time-card';
import './cards-list.css';

export default class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: false
        }
    }
    render() {
        const times = [
            "9:00 am",
            "10:00 am",
            "11:00 am",
            "12:00 pm",
            "1:00 pm",
            "2:00 pm",
            "3:00 pm",
            "4:00 pm",
            "5:00 pm"
        ];

        let handleCardColor = () => {

            return this.state.available === true
                ? "time-card-white"
                : "time-card-red"
        }

        const cards_list = times.map((time, i, selected, instructions, name, phone) => <div className={handleCardColor()} key={i}>
            <TimeCard
                {...time}
                card_times={time}
                selected_label="You selected:"
                selected_time={time}
                instructions="Please Enter Your Name and Phone Number Below"
                name_label="Name:"
                name={name}
                phone_label="Phone:"
                phone={phone}/>
        </div>)
        return (
            <div className="cards-list">
                {cards_list}
            </div>
        )
    }
}