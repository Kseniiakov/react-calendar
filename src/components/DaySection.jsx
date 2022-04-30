import React from "react"
import "./DaySection.css"

class DaySection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="daySection">
                <h2 className="dayHeader">{this.props.dayWeek}</h2>
                <div className="dayNumber">{this.props.day}</div>
            </section>
        )
    }
}

export default DaySection;