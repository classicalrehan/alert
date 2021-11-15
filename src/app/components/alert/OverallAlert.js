import React, { Component } from 'react';

class OverallAlert extends Component {
    render() {
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">Overall Alert</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-md-2">
                            <label>Trigger Frequency</label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control">
                                <option>Overall</option>
                                <option>Overall Freq</option>
                            </select>
                        </div>                        
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">Send</label>
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">Open/View Rate/Count</label>
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">Click Rate</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="min" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="max" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="min" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="max" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="min" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="max" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default OverallAlert;