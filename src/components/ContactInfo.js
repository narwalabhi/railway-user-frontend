import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

//   const validateEmail = (event) => {
//     const email = event.target.value;
//     if (emailRegex.test(email)) {
//       setIsValid(true);
//       setMessage('Your email looks good!');
//     } else {
//       setIsValid(false);
//       setMessage('Please enter a valid email!');
//     }
//   };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2%",
  },
  title: {
    fontSize: 14,
    color: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "flex-start",
    color: theme.palette.text.secondary,
  },
  input: {
    width: "80%",
  },
}));

function ContactInfo() {
  let contact = {
    email: "",
    phone: "",
  };

  const classes = useStyles();

  const [Contact, setContact] = useState(contact);

  const fieldVal = (e) => {
    if (e.target.name == "email") {
      if (e.target.value.match(emailRegex) != null) {
        setContact({ ...Contact, [e.target.name]: e.target.value });
      }
    }

    if (e.target.name == "number") {
      if (e.target.value.match(phoneRegex) != null) {
        if (e.target.value.length == 10) {
          setContact({
            ...Contact,
            [e.target.name]: e.target.value,
          });
        } else {
          alert("Please put 10  digit mobile number");
        }
      }
    }
  };

  return (
    <div className={classes.root} spacing={2}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation="12" variant="outlined">
            <Typography className={classes.title}>Contact Info</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container style={{ marginTop: "1%" }}>
          <Grid item xs={6}>
            <TextField
              required
              className={classes.input}
              id="standard-required"
              label="Mobile"
              type="tel"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ContactInfo;
