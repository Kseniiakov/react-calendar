import React from "react"

class DaySection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <h2>{this.props.dayWeek}</h2>
                <div>{this.props.day}</div>
            </section>
        )
    }
}

export default DaySection;