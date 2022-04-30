import React from "react";
import DaySection from "./components/DaySection";
import CalendarSection from "./components/CalendarSection"

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