import React from "react";
import DaysWeek from "./DaysWeek";
import Dates from "./Dates";

class CalendarSection extends React.Component {
    render() {
        return (
            <section>
                <h2>July</h2>
                <div className="wrapperCalendarContent">
                    <DaysWeek/>
                    <Dates/>
                </div>
            </section>
        )
    }
}

export default CalendarSection;