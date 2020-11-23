import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Title from './Title';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import Brightness3Icon from '@material-ui/icons/Brightness3';

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
            休肝２日目 <HotelOutlinedIcon />
            <Brightness3Icon />
          </Typography>
        </Grid>
        <Grid item className={classes.grid}>
          <Typography color="textSecondary">on 23 November, 2020</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
