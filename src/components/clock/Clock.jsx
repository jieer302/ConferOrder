import React, { Component } from 'react';
import './clock.css'

class Clock extends Component{
    constructor() {
        super();
        this.state = {
            date: {}
        }
    }
    componentWillMount() {
        var func = function() {
            this.setState({
                date: new Date()
            })
        }.bind(this);
        func();
        setInterval(func, 1000);
    }
    render() {
        var date = this.state.date;
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var hour = (date.getHours()) % 12 * (360 / 12) + (360 / 12) * (minutes / 60);
        var minute = minutes * (360 / 60) + (360 / 60) * (seconds / 60);
        var second = seconds * (360 / 60);
        return (
            <div className="style">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="clockMinuteLine" style={{transform: 'rotateZ('+ minute +'deg)'}}></div>
                    <div className="clockHourLine" style={{transform:  'rotateZ('+ hour +'deg)'}}></div>
                    <div className="clockSecondLine" style={{transform: 'rotateZ('+ second +'deg)'}}></div>
                </div>
            </div>
        )
    }
}

export default Clock;