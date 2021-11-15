import React, { Component } from 'react';

class AlertName extends Component {
    render() {
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title">Alert Details</h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="form-group">
                                <label>Alert Name</label>                                                              
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Alert Name"/>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default AlertName;