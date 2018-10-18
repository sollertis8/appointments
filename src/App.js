import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Appointments from './appointments';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <main>
          <Route exact path="/" component={Appointments}/>
        </main>
      </div>
    </Router>
  );
}