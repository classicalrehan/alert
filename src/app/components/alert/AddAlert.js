import React, { Component } from 'react';
import AlertActiondetails from './AlertActiondetails';
import AlertName from './AlertName';
import AlertFrequency from './AlertFrequency';
import FrequencyVolume from './FrequencyVolume';
import { ajaxCall } from '../../util/ajaxConfig';
import API from '../../util/config';

class AddAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertName: "",
            alertCode: "",
            alertType: "overall",
            alertFrequency: "without_frequency",
            startDate: new Date(),
            endDate: new Date(),
            atDay: "",
            onceIn: 8,
            sendMin: [],
            sendMax: [],
            openViewRateCountMin: [],
            openViewRateCountMax: [],
            clickRateMin: [],
            clickRateMax: [],
            windowSize: [],
            alertReciever: "",
            formBeingSubmitted: false
        }
        // Correctly Bind class methods to reacts class instance
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /**
     * 
     * @param {*} event 
     * @param {*} inputPropName 
     * @param {*} isArray 
     * @param {*} index 
     */
    handleInputChange(event, inputPropName, isArray = false, index = null) {
        const newState = Object.assign({}, this.state);
        if (inputPropName === "startDate" || inputPropName === "endDate") {
            newState[inputPropName] = event;
        }
        else if (isArray === true) {
            newState[inputPropName][index] = parseInt(event.target.value);
        } else {
            newState[inputPropName] = event.target.value;
        }
        this.setState(newState);
    }
    /**
     * 
     * @param {*} event 
     */
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formBeingSubmitted: true
        })
        let data = {
            alertName: this.state.alertName,
            alertCode: this.state.alertCode,
            alertType: this.state.alertType,
            alertFrequency: this.state.alertFrequency,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            atDay: this.state.atDay,
            onceIn: this.state.onceIn,
            alertReciever: this.state.alertReciever
        } = this.state;

        let defaultObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        };
        var url = this.state.API_URL_BLOG;
        console.log(defaultObj);
        // ajaxCall(url, defaultObj).then(
        //     json => {
        //         this.props.history.push("/alert");
        //     },
        //     error => {
        //         this.setState({
        //             showAlert: "danger",
        //             viewConfirmationBox: true,
        //             alertTitle: "Error!",
        //             alertDescription: "Error in adding post information."
        //         });
        //     }
        // );
        event.preventDefault();
    }

    /**
   *
   */
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
    }
    render() {
        const alertProps = {
            alertName: this.state.alertName,
            alertCode: this.state.alertCode,
            alertType: this.state.alertType,
            alertFrequency: this.state.alertFrequency,
            atDay: this.state.atDay,
            onceIn: this.state.onceIn,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            alertReciever: this.state.alertReciever,
            handleInputChange: this.handleInputChange
        }
        return (
            <React.Fragment>
                <section className="content">
                    <div className="container-fluid">
                        <form
                            onSubmit={this.handleSubmit}
                            method="post"
                        >
                            <AlertName {...alertProps} />
                            <AlertFrequency {...alertProps} />
                            <FrequencyVolume {...alertProps} />
                            <AlertActiondetails {...alertProps} />
                        </form>
                    </div>
                    {/* /.container-fluid */}
                </section >
            </React.Fragment >
        );
    }
}

export default AddAlert;