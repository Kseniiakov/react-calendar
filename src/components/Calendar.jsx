import React from "react";
import './Calendar.css'
import DaySection from "./DaySection";
import CalendarSection from "./CalendarSection"

const myDate = new Date();
const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: myDate };
    }

    render() {
        return (
            <div className="wrapperCalendar">
                <DaySection day={this.state.date.getDate()} dayWeek={daysWeek[this.state.date.getDay()]} />
                <CalendarSection/>
            </div>
        )
    }
}

export default Calendar;