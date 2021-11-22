import React, { Component } from 'react';
//import BootstrapTable from 'react-bootstrap-table-next';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import columns from './AlertListColumns';
import alerts from './AlertListData';


class AlertList extends Component {
    constructor(props) {
        super(props);
    }
    actionCellFormatter(cell, row) {
        return (
            <div>
                <a href={"alert/edit/" + row.id}>Edit | </a>                
                <a href={"alert/delete/" + row.id}>Delete </a>
            </div>
        );
    }
    render() {
        return (
            <Container>               
                <BootstrapTable data={alerts} hover={true} >
                    <TableHeaderColumn dataAlign="left" dataField='alertType' isKey={true}>Alert Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='alertName'>Alert Code</TableHeaderColumn>
                    <TableHeaderColumn dataField='action' dataFormat={this.actionCellFormatter} >Action</TableHeaderColumn>
                </BootstrapTable>
            </Container>
        );
    }
}

export default AlertList;