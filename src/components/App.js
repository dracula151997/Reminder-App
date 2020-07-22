import React, { Component } from 'react'
import { ADD_REMINDER, CLEAR_REMINDERS } from '../types'
import { connect } from 'react-redux'
import { add_reminder, remove_reminders, remove_all_reminders } from '../actions/indexAction'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'

class App extends Component {
    state = {
        text: '',
        date: new Date()
    }

    setStartDate = (date) => {
        this.setState({date: date})
    }


    render_reminders = () => {
        const { reminders } = this.props;
        return (
            <ul className='list-group'>
                {

                    reminders != null ? reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className='list-group-item'>
                                <div>{reminder.text}</div>
                                <div>{moment(reminder.date).fromNow()}</div>
                                <div className='clear_reminder_btn btn btn-danger' onClick={() => this.props.remove_reminders(reminder.id)}>X</div>

                            </li>
                        )
                    }) : null
                }
            </ul>
        )
    }
    render() {
        console.log("Props: ", this.props);
        return (
            <div className='container_style'>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/meeting-14/64/alarm-remind-bell-reminder-ring-512.png"
                    width='150px'
                    height='150px' />
                <div className='reminder-title'>
                    <h1>What should you do?</h1>
                </div>

                <input
                    className=' text_input_style form-control'
                    placeholder='What you think...?'
                    type='text'
                    value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })} />

                <DatePicker
                    selected={this.state.date}
                    onChange={date => this.setStartDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    width='100%'
                    placeholderText='when...?'
                    timeCaption="time"
                    className='text_input_style form-control'
                    value={this.state.date}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />

                <button
                    className='text_input_style btn btn-primary btn-block'
                    onClick={() => {
                        this.props.add_reminder(this.state.text, this.state.date)
                        this.setState({ text: '', date: '' })
                    }}>Add Reminder</button>

                <button
                    className='btn btn-danger btn-block'
                    onClick={() => this.props.remove_all_reminders()}>Clear Reminders</button>

                {this.render_reminders()}


            </div>
        )
    }
}


export default connect(state => {
    return {
        reminders: state
    }
}, { add_reminder, remove_reminders, remove_all_reminders })(App) 