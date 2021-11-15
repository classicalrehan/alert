import React, { Component } from 'react';

class AlertActiondetails extends Component {
    render() {
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">Action Details</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>To</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Cc</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </div>
        );
    }
}

export default AlertActiondetails;