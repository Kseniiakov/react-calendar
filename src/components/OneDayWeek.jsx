import React from "react";

class OneDayWeek extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>{this.props.day}</div>
        )
    }
}

export default OneDayWeek;