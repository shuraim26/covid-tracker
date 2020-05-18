import React, { useEffect, useState } from 'react';
import Map from "./Map";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px 0"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
    marginTop: 20,
    color: "#2C647A"
  },
  loader: {
    marginLeft: "50%"
  }
});

const MapWrapper = () => {

  const [location, setLocation] = useState({
    lat: 19.075983,
    lng : 72.877655
  });

  const [shouldRender, setShouldRender] = useState(false);

  const [color, setColor] = useState("green");

  const [address, setAddress] = useState("");

  const [time, setTime] = useState({});

  const getColor = async (lat, lng) => {

    const postBody = {
      "key": "YOUR_API_KEY",
      "latlngs": [[lat, lng]]
    }

    const resp = await axios.post("https://data.geoiq.io/dataapis/v1.0/covid/locationcheck", postBody);
    console.log("Hotspot response", resp)

    setColor(resp.data.data[0].districtZoneType);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const currLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log("current location", currLocation);
      getColor(position.coords.latitude, position.coords.longitude);
      setLocation(currLocation);
      setTime(getTime());
      getAddress(position.coords.latitude, position.coords.longitude);
      setShouldRender(true);
    });
  },[]);

  const getAddress = async (lat, lng) => {

    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBbTgMN2PbMKxffDmjq_abDKdM1HjeWKWc`);
    console.log("Address Response", resp.data);

    setAddress(resp.data.results[0].formatted_address);
  }

  const getTime = () => {
    const today = new Date();
    const now = today.toLocaleString();
    return now;
  }

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Current Location
        </Typography>
        {
          shouldRender ?
          (
            <div>
              <Typography color="textSecondary">
                {address}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <strong>Updated on: </strong>{time}
              </Typography>
              <Map loc={location} color={color} />
            </div>
          ) :
          (
            <div>
              <Typography color="textSecondary">
                Please allow location access
              </Typography>
              <CircularProgress className={classes.loader} />
            </div>
          )
        }
      </CardContent>
    </Card>
  )
}

export default MapWrapper;
