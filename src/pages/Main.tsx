import {
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      height: "90vh",
    },
    textField: {},
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  })
);

function Main() {
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:5000/main")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <Card style={{ flex: 1 }}>
        <form className={classes.form} noValidate action="/manito">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography variant="h5">Welcom to Manito</Typography>
            <Typography variant="body1">
              시작 시간과 종료 시간을 설정 후 시작해주세요.
            </Typography>

            <Grid item xs={12}>
              <TextField
                id="datetime-local"
                label="시작 시간"
                name="start"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="datetime-local"
                label="종료 시간"
                name="end"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
              >
                마니또 Start!!
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

export default Main;
