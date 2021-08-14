import * as React from 'react';
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'Number', headerName: '순번', width: 90 },
  {
    field: 'Participants',
    headerName: '참가자',
    width: 150,
    editable: true,
  },
  /*{
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },*/
];
const rows = [
  {
    id : 1,
    number : 1,
    name : '홍범도',
    manito : '김삿갓'
  }
  ];

function Admin() {
  return (
    <Container maxWidth="sm"> 
      <div> Master setting </div>
        //시작 전 - 참가자 수 조정 및 이름 변경
        //수정버튼 
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
              //시작 후 - 종료시간 수정
        //종료시간 표시 및 참가자 리스트 

    </Container>
  );
}

export default Admin;
