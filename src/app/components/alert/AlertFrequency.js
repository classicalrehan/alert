import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generateOptions } from '../../util/commonFunctions';
import { AlertFrequencyConstant } from '../../util/constant';
class AlertFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {
            alertType,
            alertFrequency,
            startDate,
            onceIn,
            atDay,
            handleInputChange
        } = this.props;
        let onceInOptions = generateOptions(AlertFrequencyConstant.onceInArr);
        let atDatOptions = generateOptions(AlertFrequencyConstant.atDayArr);
        let alertFrequencyOptions = generateOptions(AlertFrequencyConstant.alertFrequencyArr);
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">Set Alert Frequency</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-md-2">
                            <label>Trigger Frequency</label>
                        </div>
                        <div className="col-md-4">
                            <select value={alertFrequency} className="form-control" name="alertFrequency" onChange={event => handleInputChange(event, "alertFrequency")}>
                                {alertFrequencyOptions}
                            </select>
                        </div>
                    </div>
                    <div className={(alertFrequency === "with_frequency" ? "form-group row" : "form-group row hide")}>
                        <div className="col-md-2">
                            <label>Once in</label>
                        </div>
                        <div className="col-md-4">
                            <select value={onceIn} className="form-control" onChange={event => handleInputChange(event, "onceIn")} >
                                {onceInOptions}
                            </select>
                        </div>
                    </div>
                    <div className={(alertType !== "overall" ? "form-group row" : "form-group row hide")}>
                        <div className="col-md-2">
                            <label>At day</label>
                        </div>
                        <div className="col-md-4">
                            <select value={atDay} className="form-control" onChange={event => handleInputChange(event, "atDay")} >
                                {atDatOptions}
                            </select>
                        </div>
                    </div>
                    <div className={(alertType === "special_occassion_specific" ? "form-group row" : "form-group row hide")}>
                        <div className="col-md-2">
                            <label>From Date</label>
                        </div>
                        <div className="col-md-3">
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={event => handleInputChange(event, "startDate")}
                                className="form-control"
                                placeholderText="Start Date"
                                minDate={new Date()}
                            />
                        </div>
                        <div className="col-md-2">
                            <label>End Date</label>
                        </div>
                        <div className="col-md-3">
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={event => handleInputChange(event, "endDate")}
                                className="form-control"
                                placeholderText="End Date"
                                minDate={startDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlertFrequency;