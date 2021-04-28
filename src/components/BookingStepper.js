import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useState } from "react";
import PassengerList from "./PassengerList";
import BookView from "./viewBook";

const BookingStepper = () => {
  const tripSchedule = JSON.parse(localStorage.getItem("tripSchedule"));
  const train = JSON.parse(localStorage.getItem("train"));
  const fromStation = JSON.parse(localStorage.getItem("fromStation"));
  const toStation = JSON.parse(localStorage.getItem("toStation"));
  const values = JSON.parse(localStorage.getItem("values"));

  const [activeStep, setActiveStep] = useState(0);
  const [passengers, setPassengers] = useState([
    {
      index: Math.random(),
      name: "",
      age: "",
      gender: "",
    },
  ]);

  const handleNextClick = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const addNewRow = (e) => {
    if(passengers.length < 6)
    setPassengers([
      ...passengers,
      { index: Math.random(), name: "", age: "", gender: "" },
    ]);
  };

  const clickOnDelete = (record) => {
    setPassengers(passengers.filter((r) => r !== record));
  };

  const renderSwitch = () => {
    switch (activeStep) {
      case 0:
        console.log(train, tripSchedule);
        return (
          <BookView
            values={values}
            train={train}
            tripSchedule={tripSchedule}
            fromStation={fromStation}
            toStation={toStation}
          />
        );
      case 1:
        return (<div style={{width:'80%'}}>
          <PassengerList
            add={addNewRow}
            delete={clickOnDelete.bind(this)}
            bookDetails={passengers}
          />
          </div>
        );
      case 2:
        return "";
      default:
        return "foo";
    }
  };

  return (
      <div style={{ backgroundColor: "white" }}>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Confirm details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add Passengers</StepLabel>
          </Step>
          <Step>
            <StepLabel>Book</StepLabel>
          </Step>
        </Stepper>
        {renderSwitch()}
        <Button style={{marginLeft:'2%'}} variant="outlined" color="primary" onClick={handlePrevClick}>
          Back
        </Button>
        <Button variant="outlined" color="primary" onClick={handleNextClick}>
          Next
        </Button>
      </div>
  );
};

export default BookingStepper;
