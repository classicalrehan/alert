import React, { Component } from 'react';
import FrequencyVolumeMatrix from './FrequencyVolumeMatrix';
import {FrequencyVolumeConstant} from '../../util/constant';
class FrequencyVolume extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
    }

    render() {       
        const title = this.props.alertType.replace(/_/g, ' ') +" - "+this.props.alertFrequency.replace(/_/g, ' ');
        return (
            <div className="card card-default mt-10">
                <div className="card-header">
                    <h4 className="card-title frequencyVolumeTitle">{title} </h4>
                </div>
                {/* /.card-header */}
                <div className="card-body">                    
                    {/* <div className="form-group row">
                        <div className="col-md-12">
                            <label className="col-form-label pl-15">Window 1 (00-08)</label>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">{FrequencyVolumeConstant.SEND}</label>
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">{FrequencyVolumeConstant.OPEN_VIEW_COUNT}</label>
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label pl-15">{FrequencyVolumeConstant.CLICK_RATE}</label>
                        </div>
                    </div>
                    <FrequencyVolumeMatrix {...this.props}/>                    
                </div>                
            </div>
        );
    }
}

export default FrequencyVolume;