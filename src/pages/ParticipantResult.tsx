import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'number' | 'name' | 'manito' ;
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'number', label: 'Number', minWidth: 20 },
  { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
  { id: 'manito', label: 'Manito', minWidth: 100, align: 'center' } 
];

interface Data {
  number: number;
  name: string;
  manito: string;
}
const rows = [
  {
    number : 1,
    name : '김삿갓',
    manito : '홍범도'
  },
  {
    number : 2,
    name : '홍범도',
    manito : '김좌진'
  },
  {
    number : 3,
    name : '김좌진',
    manito : '안중근'
  },
  {
    number : 4,
    name : '안중근',
    manito : '최재형'
  },
  {
    number : 5,
    name : '유관순',
    manito : '김상옥'
  }
  ];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:'50px',
  },
  container: {
    maxHeight: 440,
  },
});

function ParticipantResult() {
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container maxWidth="sm" >
    <div> 마니또 기간이 종료되었습니다. </div>
    <div> 이후에도 마니또가 아니더라도 함께 동역하는 삶이 되길바라며!</div>
    <div> 아래에는 여러분들의 '마니또' 입니다. :)  </div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
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
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}

export default ParticipantResult;






