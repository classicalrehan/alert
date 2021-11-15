import React, { Component } from 'react';

class AlertType extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-header">
                    <h4 className="card-title">Select Alert Type</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Alert Type</label>                                                              
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">                                
                                <input type="checkbox" className="alertType" value="overall" name="alertType[]"/> Overall                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">                                
                                <input type="checkbox" className="alertType" value="weekday_specific" name="alertType[]"/> Weekday Specific                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">                                
                                <input type="checkbox" className="alertType" value="special_occasion_specific" name="alertType[]"/> Special Occassion Specific                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlertType;