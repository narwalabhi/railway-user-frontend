import {
  Grid,
  makeStyles,
  Paper,
  Card,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router";
import SeatsCard from "./SeatsCard";
import StyledRadio from "./SeatsCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FormRow(props) {
  const { val1, val2, val3 } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography component="subtitle1" variant="subtitle1" color="primary">
            {val1}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4} wrap="wrap">
        <Paper className={classes.paper}>
          <Typography component="subtitle1" variant="subtitle1" color="primary">
            {val2}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography component="subtitle1" variant="subtitle1" color="primary">
            {val3}
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export class SearchItem extends React.Component {
  // const classes = useStyles();
  // const { tripSchedule } = props;

  state = { train: {}, fromStation: {}, toStation: {} };

  useStyles = makeStyles((theme) => ({
    root: {
      //   display: "flex",
      //   padding: "2%",
      width: "80%",
      flexGrow: 1,
    },
    grid: {
      margin: "0px",
      padding: "2%",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    headerPaper: {
      width: "100%",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  classes = this.useStyles;

  constructor(props) {
    super(props);
    this.tripSchedule = props.tripSchedule;
  }

  componentDidMount() {
    this.loadTrain();
  }

  loadTrain = async () => {
    console.log(this.tripSchedule);
    try {
      const trainData = await axios.get(
        "http://localhost:8084/train/get/" + this.tripSchedule.trainNo,
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            authorization:
              
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyd2FsQGdtYWlsLmNvbSIsImV4cCI6MTYxOTY2MTg1NywiaWF0IjoxNjE5NTc1NDU3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.O7qOKen-ug9hiagTnd1ULPCbhAjzFLoYt-KQ_tdn9P0"},
        }
      );
      const fromStationData = await axios.get(
        "http://localhost:8084/train/stations/get/" +
          trainData.data.fromStationCode,
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            authorization:
              
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyd2FsQGdtYWlsLmNvbSIsImV4cCI6MTYxOTY2MTg1NywiaWF0IjoxNjE5NTc1NDU3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.O7qOKen-ug9hiagTnd1ULPCbhAjzFLoYt-KQ_tdn9P0"},
        }
      );
      const toStationData = await axios.get(
        "http://localhost:8084/train/stations/get/" +
          trainData.data.toStationCode,
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyd2FsQGdtYWlsLmNvbSIsImV4cCI6MTYxOTY2MTg1NywiaWF0IjoxNjE5NTc1NDU3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.O7qOKen-ug9hiagTnd1ULPCbhAjzFLoYt-KQ_tdn9P0"},
        }
      );
      this.setState({
        train: trainData.data,
        fromStation: fromStationData.data,
        toStation: toStationData.data,
      });
      console.log(trainData.data);
      console.log(fromStationData.data);
      console.log(toStationData.data);
    } catch (err) {
      console.log(err);
    }
  };

  getDuration = (hrs, mns) => {
    return hrs + " hrs " + mns + "mns";
  };

  getFromText(time, name, date) {
    return time + " | " + name + " | " + date;
  }

  bookNow = (classType) => {
    console.log(classType);
    localStorage.setItem("tripSchedule", JSON.stringify(this.tripSchedule));
    localStorage.setItem("train", JSON.stringify(this.state.train));
    localStorage.setItem("fromStation", JSON.stringify(this.state.fromStation));
    localStorage.setItem("toStation", JSON.stringify(this.state.toStation));
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Card>
          <Grid container>
            <Grid container item xs={12}>
              <FormRow
                val1={this.state.train.name}
                val2={"Runs on: M T W T F S S"}
                val3={this.state.train.name}
              />
            </Grid>
            <Grid container item xs={12}>
              <FormRow
                val1={this.getFromText(
                  this.state.train.departure,
                  this.state.fromStation.name,
                  this.tripSchedule.tripDate
                )}
                val2={this.getDuration(
                  this.state.train.durationHrs,
                  this.state.train.durationMns
                )}
                val3={this.getFromText(
                  this.state.train.arrival,
                  this.state.toStation.name,
                  this.tripSchedule.tripDate
                )}
              />
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs = {2}>
                <SeatsCard value={"FAC"} title={"1AC"} seatsCount={this.tripSchedule.firstAcAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
              <Grid item xs = {2}>
                <SeatsCard value={"2AC"} title={"2AC"} seatsCount={this.tripSchedule.secondAcAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
              <Grid item xs = {2}>
                <SeatsCard value={"3AC"} title={"3AC"} seatsCount={this.tripSchedule.thirdAcAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
              <Grid item xs = {2}>
                <SeatsCard value={"FC"} title={"FC"} seatsCount={this.tripSchedule.firstClassAcAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
              <Grid item xs = {2}>
                <SeatsCard value={"CC"} title={"CC"} seatsCount={this.tripSchedule.chairCarAcAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
              <Grid item xs = {2}>
                <SeatsCard value={"SL"} title={"SL"} seatsCount={this.tripSchedule.sleeperAvailableSeats} handleClick={this.bookNow}/>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}
