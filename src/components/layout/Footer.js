import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PollIcon from '@material-ui/icons/Poll';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const Footer = () => {

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const onChange = (e, val) => setValue(val);

  let location = useLocation().pathname;

  useEffect(() => {
    let currIndex = 0;

    switch(location) {
      case "/" :
        currIndex = 0;
        break;

      case "/hotspot-tracker" :
        currIndex = 1;
        break;

      default :
        currIndex = 0;
    }

    setValue(currIndex);

  },[location]);

  return (
    <BottomNavigation
      value={value}
      onChange={onChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Cases Analytics" icon={<PollIcon />} />
      <BottomNavigationAction component={Link} to="/hotspot-tracker" label="Hotspot Tracker" icon={<NewReleasesIcon />} />
    </BottomNavigation>
  )
}

export default Footer
