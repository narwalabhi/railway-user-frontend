import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import PassengerList from "./PassengerList";
import BookView from "./viewBook";

const BookingStepper = () => {
  const tripSchedule = JSON.parse(localStorage.getItem("tripSchedule"));
  const train = JSON.parse(localStorage.getItem("train"));
  const fromStation = JSON.parse(localStorage.getItem("fromStation"));
  const toStation = JSON.parse(localStorage.getItem("toStation"));
  const values = JSON.parse(localStorage.getItem("values"));
  const selectedClass = localStorage.getItem("selectedClass");

  const [activeStep, setActiveStep] = useState(0);
  const [passengers, setPassengers] = useState([
    {
      id: 0,
      name: "",
      age: "",
      gender: "",
    },
  ]);

  const bookTicket = () => {
    const bookRequestBody = {
      tripId: tripSchedule.tripId,
      tripDate: tripSchedule.tripDate,
      trainId: train.id,
      seats : {
        [selectedClass]: (passengers.length)
      },
      email:"anarwal@gmail.com",
      passengers:passengers
    }
    const ticket = axios.post(
      "http://localhost:8084/booking/book",bookRequestBody,
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyd2FsQGdtYWlsLmNvbSIsImV4cCI6MTYxOTczNjY0OCwiaWF0IjoxNjE5NjUwMjQ4LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.6wdYVMxoXAImRVbWhX5K3DAJCrXm2szSWWAdQkMlIk0"
        },
      }
    ).then(res => {console.log(JSON.stringify(res.data) +" res")});
    console.log(JSON.stringify(bookRequestBody))
    console.log(JSON.stringify(ticket.data))
    
  }

  const handleNextClick = () => {
    if(activeStep>=2){
      bookTicket();
    }
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const addNewRow = (passenger) => {
    if(passengers.length < 6)
    setPassengers([
      ...passengers,
      { index: Math.random(), name: passenger.name, age: passenger.age, gender: passenger.gender },
    ]);
    console.log(passenger);
    console.log(passengers);
  };

  const clickOnDelete = (record) => {
    
    console.log(passengers);
    setPassengers(passengers.filter((r) => r.id !== record.id));
    
    console.log(passengers);
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
            setBookDetails={setPassengers}
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
