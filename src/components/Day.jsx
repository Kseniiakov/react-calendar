import React from "react";

class Day extends React.Component {
    render() {
        console.log(this.props.number);
        if(this.props.number !== undefined) {
            return (
                <div className="calendarDay">{this.props.number}</div>
            )
        } else {
            return (
                <div className="calendarDay"></div>
            )
        }
        
    }
}

export default Day;