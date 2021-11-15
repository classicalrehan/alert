import React, { Component } from 'react';
import AlertActiondetails from './AlertActiondetails';
import AlertName from './AlertName';
import AlertType from './AlertType';
import OverallAlert from './OverallAlert';
import OverallAlertWithFrequency from './OverallAlertWithFrequency';
import SpecialOccassionAlertWithFrequency from './SpecialOccassionAlertWithFrequency';
import SpecialOccassionAlertWithoutFrequency from './SpecialOccassionAlertWithoutFrequency';
import WeekdaySpecificAlertWithFrequency from './WeekdaySpecificAlertWithFrequency';
import WeekdaySpecificAlertWithoutFrequency from './WeekdaySpecificAlertWithoutFrequency';

class AddAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertType: "Overall"

        }

        // Correctly Bind class methods to reacts class instance
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        if (event.target.id === "alertType") {
            this.setState({
                ["alertType"]: this.sanitizeInput(event.target.value.trim())
            });
        }

    }
    sanitizeInput(input) {
        return input
            .trim()
            .replace(/[^-a-zA-Z0-9$&#%@+/ ]\-$/gi, "")
            .replace(/ {2,}/g, " ");
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <section className="content">
                    <div className="container-fluid">
                        <AlertType/>
                        <AlertName/>
                        <OverallAlert/>
                        {/* <OverallAlertWithFrequency/>
                        <WeekdaySpecificAlertWithoutFrequency/>
                        <WeekdaySpecificAlertWithFrequency/>
                        <SpecialOccassionAlertWithoutFrequency/>
                        <SpecialOccassionAlertWithFrequency/> */}
                        <AlertActiondetails/>
                    </div>
                    {/* /.container-fluid */}
                </section >
            </React.Fragment >
        );
    }
}

export default AddAlert;