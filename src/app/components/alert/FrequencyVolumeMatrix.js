import React, { Component } from 'react';
import { FrequencyVolumeMatrixConstant } from '../../util/constant';
import { prependZero } from "../../util/commonFunctions";
class FrequencyVolumeMatrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.alertType + " - " + this.props.alertFrequency
        };
        this.getMatrix = this.getMatrix.bind(this);
    }

    getMatrix(props) {
        let alertFrequency = props.alertFrequency;
        let onceIn = parseInt(props.onceIn);
        var total = 1;
        if (alertFrequency === FrequencyVolumeMatrixConstant.WITH_FREQUENCY_VALUE) {
            total = FrequencyVolumeMatrixConstant.MAX_FREQUENCY_HOURS;
        }
        const list = [];
        var windowCount = 1;
        var index = -1;
        for (var i = 1; i <= total; i += onceIn) {
            var start = prependZero(i - 1);
            var end = prependZero(i + onceIn - 1);
            list.push(
                <React.Fragment key={i}>
                    <div className={(this.props.alertFrequency === "with_frequency" ? "form-group row" : "form-group row hide")}>
                        <div className="col-md-12">
                            <label className="col-form-label pl-15">Window {windowCount} ({start} - {end})</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="min"
                                    onChange={event => this.props.handleInputChange(event, "sendMin", true, index)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="max"
                                    onChange={event => this.props.handleInputChange(event, "sendMax", true, index)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="min"
                                    onChange={event => this.props.handleInputChange(event, "openViewRateCountMin", true, index)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="max"
                                    onChange={event => this.props.handleInputChange(event, "openViewRateCountMax", true, index)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="min"
                                    onChange={event => this.props.handleInputChange(event, "clickRateMin", true, index)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="max"
                                    onChange={event => this.props.handleInputChange(event, "clickRateMax", true, index)}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
            windowCount++; index++;
        }
        return list;

    }
    render() {

        const listItems = this.getMatrix(this.props);
        return (
            <React.Fragment>
                {listItems}
            </React.Fragment>
        );
    }
}

export default FrequencyVolumeMatrix;