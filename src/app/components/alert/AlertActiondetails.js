import React, { Component } from 'react';

class AlertActiondetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const {
            alertReciever,
            handleInputChange
        } = this.props;
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
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={event => handleInputChange(event, "alertReciever")}
                                    name="alertReciever"
                                    value={alertReciever}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
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
                    </div> */}
                </div>
                <div className="card-footer">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </div>
        );
    }
}

export default AlertActiondetails;