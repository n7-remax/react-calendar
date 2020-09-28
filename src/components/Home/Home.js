import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'

function CalendarInput(props) {
    const formatDate = moment(props.date)
    return (
        <div className="calendar-overlay">
            <form>
                <div className="cross" onClick={props.closeForm}>&#128473;</div>
                <div className="month-input">
                    <label>Month</label>
                    <input type="text" defaultValue={formatDate.format('MMMM')} />
                </div>
                <div className="day-input">
                    <label>Day</label>
                    <input type="text" defaultValue={formatDate.format('Do dddd')} />
                </div>
            </form>
        </div>
    )
}

function Home() {
    const [dateState, setDateState] = useState((new Date()));
    const [inputState, setInputState] = useState({
        showInput: false,
    });

    const toggleInputHandler = () => {
        setInputState({ showInput: true })
    }
    return (
        <div className="Home">
            {
                inputState.showInput ? <CalendarInput date={dateState} closeForm={() => setInputState({ showInput: false })} />
                    : null
            }
            <div className="home-wrapper">
                <div className="home-heading">
                    <h1>Choose the day for the meeting</h1>
                </div>
                <div className="home-text">
                    <p>We encourage you to book your appointment online.</p>
                    <p>This will save you time.</p>
                </div>
            </div>
            <div className="Calendar">
                <Calendar
                    locale="en-EN"
                    next2Label={null}
                    prev2Label={null}
                    onChange={(date) => { setDateState(date); toggleInputHandler() }}
                    value={dateState}
                    formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                />
            </div>

        </div>
    );
}

export default Home;
