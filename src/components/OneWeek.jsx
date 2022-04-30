import React from "react";
import Day from "./Day";

class OneWeek extends React.Component {
    render() {
        return (
        <div className="OneWeek">
            <Day/>
            <Day/>
            <Day/>
            <Day number={'1'}/>
            <Day number={'2'}/>
            <Day number={'3'}/>
            <Day number={'4'}/>
        </div>
        )
    }
}

export default OneWeek;