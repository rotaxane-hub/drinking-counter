import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Title from './Title';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const useStyles = makeStyles({
  container: {
    height: '100%',
  },
  grid: {
    width: '100%',
    margin: 16,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Today's status</Title>
      <Grid container direction={'column'} className={classes.container}>
        <Grid item className={classes.grid}>
          <Typography component="p" variant="h5">
            {/* 飲酒５杯
            <LocalDrinkIcon />
            <LocalDrinkIcon />
            <LocalDrinkIcon />
            <LocalDrinkIcon />
            <LocalDrinkIcon /> */}
            休肝１日目
            <Brightness3Icon />
          </Typography>
        </Grid>
        <Grid item className={classes.grid}>
          <Typography color="textSecondary">on 5 December, 2020</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
