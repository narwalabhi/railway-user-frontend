import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 125,
    },
    title: {
      fontSize: 14,
      color:'black'
    },
    pos: {
      marginBottom: 12,
    },
  });
export default function SeatsCard(props) {
    
    const classes = useStyles();
  
    const {title, seatsCount, value, handleClick} = props;

    return (
     <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" component="subtitle1" color="textSecondary">
          AVAILABLE-{seatsCount}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/book">     <Button variant="contained" color="primary" component="span" onClick={()=> handleClick(value)}>
          Book Now
        </Button>
        </Link>
      </CardActions>
    </Card>
    );
  }