import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './styles';
import { store } from '../../../store';
import { useHistory } from 'react-router-dom';

const columns = [
    {
        id: 'index',
        label: '#',
        minWidth: 30,
        align: 'center',
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'username',
        label: 'Username',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'website',
        label: 'Website',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'hours',
        label: 'Hours',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'note',
        label: 'Note',
        minWidth: 100,
        align: 'center',
    },
];

function createData(index, { name, username, website }, hours, note) {
    return { index, name, username, website, hours, note };
}

export const ListItems = () => {
    const classes = useStyles();
    const [ page, setPage ] = React.useState(0);
    const [ rowsPerPage, setRowsPerPage ] = React.useState(10);
    const { trackedUsers } = store.getState().users;
    const [ rows, setRows ] = React.useState([]);
    const history = useHistory();

    useEffect(() => {
        setRows((trackedUsers || []).map((val, index) => (createData(index, val.user, val.hours, val.note))));
    }, [trackedUsers]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const routeChange = (id) => {
        history.push(`/list/${id}`);
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow onClick={()=> routeChange(row.index)} hover role='checkbox' tabIndex={-1} key={row.index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
