import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import moment from "moment";
import { FormEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import {copyToClipboard} from "../common/util";
import {HOST, BACKEND_SERVER} from "../common/constants";


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

const useStartEndDefault = () => {
  const now = moment();
  const start = now.add(30, "minutes").format("YYYY-MM-DDTH:mm");
  const end = now.add(7, "days").format("YYYY-MM-DDTH:mm");
  return [start, end]
}

function Main() {
  const classes = useStyles();

  const [startDefault, endDefault] = useStartEndDefault();
  let [start, setStart] = useState(startDefault);
  let [end, setEnd] = useState(endDefault);

  let [adminLinkId, setAdminLinkId] = useState(undefined);
  let [joinLinkId, setJoinLinkId] = useState(undefined);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .post(`${BACKEND_SERVER}/manito`, {
        start,
        end,
      })
      .then(function (response) {
        const { data } = response || {};
        setJoinLinkId(data.linkId);
        setAdminLinkId(data.adminLinkId);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function getLinkDisplay(joinLink: string, adminLink: string) {
    return (
        <Container className={classes.container} component="main" maxWidth="sm">
          <Card style={{flex: 1, padding: "30px", flexGrow: 1}}>
            <Grid container spacing={4} style={{flex: 1, padding: "30px"}}>
              <Grid item xs={10} style={{flexGrow: 1}}>
                <Tooltip title={joinLink}>
                  <Typography
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                  >{`참가자 등록 링크 : ${joinLink}`}</Typography>
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      copyToClipboard(joinLink)
                    }}
                >
                  복사
                </Button>
              </Grid>
              <Grid item xs={10}>
                <Typography
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                >{`마니또 관리 링크 : ${adminLink}`}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={() => {
                  copyToClipboard(adminLink)
                }}>
                  복사
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
    );
  }

  if (joinLinkId && adminLinkId) {
    const joinLink = `${HOST}/participants/registration?program=${joinLinkId}`;
    const adminLink = `${HOST}/admin?secret=${adminLinkId}`;
    return getLinkDisplay(joinLink, adminLink);
  }

  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <Card style={{ flex: 1 }}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                defaultValue={start}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
                defaultValue={end}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
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
