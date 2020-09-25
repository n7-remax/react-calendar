import React from 'react';
import Calendar from './Calendar/Calendar';

function Home() {
    return (
        <div className="Home">
            
                <div className="home-wrapper">
                    <div className="home-heading">
                        <h1>Choose the day for the meeting</h1>
                    </div>
                    <div className="home-text">
                        <p>We encourage you to book your appointment online.</p>
                        <p>This will save you time.</p>
                    </div>
                </div>
                <div className="calendar-box">
                    <Calendar />
                </div>
            
        </div>
    );
}

export default Home;
