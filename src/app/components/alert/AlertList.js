import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import columns from './AlertListColumns';
import alerts from './AlertListData';


class AlertList extends Component {
    render() {
        return (
            <Container>
                <BootstrapTable keyField='id' data={alerts} columns={columns} />
            </Container>            
        );
    }
}

export default AlertList;