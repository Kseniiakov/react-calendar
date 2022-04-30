import React from "react";
import OneDayWeek from "./OneDayWeek";

class DaysWeek extends React.Component {
    render() {
        return (
        <div className="DaysWeek">
            <OneDayWeek day={'S'}/>
            <OneDayWeek day={'M'}/>
            <OneDayWeek day={'T'}/>
            <OneDayWeek day={'W'}/>
            <OneDayWeek day={'T'}/>
            <OneDayWeek day={'F'}/>
            <OneDayWeek day={'S'}/>
        </div>
        )
    }
}

export default DaysWeek;