import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuid } from 'uuid';

import { StoreContext } from '../store';

const TABLE_MAPPING = {
    soNumber: 'Sales Order',
    dateCreated: 'Date',
    companyRefNumber: 'Po Ref',
    itemNumber: 'Line item',
    shipAddress1: 'Ship To',
    companyName: 'Customer',
    pnUpper: 'Part Number',
    openFlag: 'Open Flag'
};

export const TableComponent = () => {
    const { state: { filteredCurrentOrders } } = useContext(StoreContext);

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            Object.values(TABLE_MAPPING).map((value) => (
                                <TableCell align="center" key={value}>{value}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredCurrentOrders.map((row) => {
                            return (
                                <TableRow key={row['soNumber']}>
                                    {
                                        Object.keys(TABLE_MAPPING).map((value) => {
                                            return <TableCell align="center" key={uuid()}>{row[value]}</TableCell>
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </Paper>
    )
}
