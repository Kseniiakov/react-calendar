import React from "react";
import DaySection from "./components/DaySection";

const myDate = new Date();
const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: myDate};
    }

    render() {
        return (
            <div className="wrapperCalendar">
                <DaySection day={this.state.date.getDate()} dayWeek={daysWeek[this.state.date.getDay()]} />
                <section>
                    <h2>July</h2>
                    <div className="wrapperCalendarContent">
                        <div className="wrapperDays">
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className="wrapperDates">

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Calendar;