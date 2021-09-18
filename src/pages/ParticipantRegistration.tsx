import React, { FormEvent, useEffect } from "react";
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import axios from "axios";
import {HOST, BACKEND_SERVER} from "../common/constants";
import { url } from "inspector";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        marginTop:'200px',
      },
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center"
    },
  }),
);

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function ParticipantRegistration() {
  const classes = useStyles();
  const query = useQuery();
  const programId = query.get("program");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    axios.get(`${BACKEND_SERVER}/manito?programId=${programId}`) 

    axios.post(`${BACKEND_SERVER}/manito/paticipant`,{})
    
    
     
  }
  return (
    <Container maxWidth="sm" className={classes.container} component="main" >
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}> 
     <div>
      <TextField required id="standard-required" label="이름"></TextField>
     </div>
     <div>
      <Button size="large" variant="contained" color="primary" href="/Main">
          등록
        </Button> 
     </div>
    </form>
    </Grid>
    </Container>
  );
}
export default ParticipantRegistration;
