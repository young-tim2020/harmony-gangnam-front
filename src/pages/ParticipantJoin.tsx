import React from "react";
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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


function ParticipantJoin() {

  const classes = useStyles();
  return (
    <Container maxWidth="sm" >
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
    <form className={classes.root} noValidate autoComplete="off">
    
     <div>    마니또 등록해주세요~    </div>
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
export default ParticipantJoin;

// function ParticipantLink() {

//   const classes = useStyles();
//   return (
    
//     <form className={classes.root} noValidate autoComplete="off">
//      <div>ParticipantJoin</div>
//     <div>
//       <TextField required id="standard-required" label="이름"></TextField>
//     </div>
//     <div>
//       <Button size="large" variant="contained" color="primary" href="/">
//           등록
//         </Button> 
//     </div>
//     </form>
//   );
// }

//export default ParticipantLink;
