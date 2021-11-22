import React, { Component } from 'react';
import { AlertNameConstant } from '../../util/constant';
import {generateOptions} from '../../util/commonFunctions';
import { AlertTypeConstant } from '../../util/constant';
class AlertName extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const {
            alertName,
            alertType,
            alertCode,
            handleInputChange
        } = this.props;

        let alertTypeOptions = generateOptions(AlertTypeConstant.alertTypeArr);
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">{AlertNameConstant.ALERT_DETAILS_TITLE}</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="form-group">
                                <label>{AlertNameConstant.ALERT_NAME_LABEL}</label>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Alert Name"
                                    onChange={event => handleInputChange(event, "alertName")}
                                    value={alertName}
                                    name="alertName"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="form-group">
                                <label>{AlertNameConstant.ALERT_CODE_LABEL}</label>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Alert Code"
                                    onChange={event => handleInputChange(event, "alertCode")}
                                    value={alertCode}
                                    name="alertCode"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="form-group">
                                <label>{AlertNameConstant.ALERT_TYPE_LABEL}</label>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="form-group">
                                <select value={alertType} className="form-control" name="alertType" onChange={event => handleInputChange(event, "alertType")}>
                                    {alertTypeOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlertName;