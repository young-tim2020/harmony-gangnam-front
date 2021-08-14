import { Button, Container, Grid, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { useEffect } from "react"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      marginTop:'100px'
      
    },
  })
);

function Main() {
  const classes = useStyles();

  useEffect(()=> {
    axios.get("http://localhost:5000/main")
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
}, []);

  return (
    <Container maxWidth="sm" >
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
       <Button size="large" variant="contained" color="primary" href="/Admin">
          마니또 Start!!
        </Button> 
      </Grid>
      
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="시작 시간"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="종료 시간"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
      
    </Container>
  );
}

export default Main;


