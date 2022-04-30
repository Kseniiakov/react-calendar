import React from "react"

class DaySection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <h2 className="dayHeader">{this.props.dayWeek}</h2>
                <div className="dayNumber">{this.props.day}</div>
            </section>
        )
    }
}

export default DaySection;