import React, { Component } from 'react';

class OverallAlertWithFrequency extends Component {
    render() {
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">Overall Alert with frequency</h4>
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
                        <div className="col-md-1">
                            <label>Once in</label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control">
                                <option>Once in 2 hours</option>
                                <option>Once in 3 hours</option>
                                <option>Once in 4 hours</option>
                                <option>Once in 6 hours</option>
                                <option>Once in 8 hours</option>
                                <option>Once in 12 hours</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <label className="col-form-label pl-15">Window 1 (00-08)</label>
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
                    <div className="form-group row">
                        <div className="col-md-12">
                            <label className="col-form-label pl-15">Window 2 (08-16)</label>
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
                <div className="card-footer">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-2">
                        <select className="form-control">
                            <option>Once in 2 hours</option>
                            <option>Once in 3 hours</option>
                            <option>Once in 4 hours</option>
                            <option>Once in 6 hours</option>
                            <option>Once in 8 hours</option>
                            <option>Once in 12 hours</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" value="Add more frequency" className="btn btn-primary" />
                    </div>

                </div>
            </div>
        );
    }
}

export default OverallAlertWithFrequency;