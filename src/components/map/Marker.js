import React from 'react';
import red_marker from "./marker_assets/red_marker.png";
import orange_marker from "./marker_assets/orange_marker.png";
import green_marker from "./marker_assets/green_marker.png";
import Chip from '@material-ui/core/Chip';

const Marker = ({ color }) => {

  let markerUrl;
  let chipColor;

  color = color === null ? "Information not available" : color;

  switch(color) {
    case "Red Zone" :
      markerUrl = red_marker;
      chipColor = "#f97171"
      break;

    case "Orange Zone" :
      markerUrl = orange_marker;
      chipColor = "#fdbe70"
      break;

    case "Green Zone" :
      markerUrl = green_marker;
      chipColor = "#9dff9a"
      break;

    default :
      markerUrl = green_marker;
      chipColor = "#ffffff"
  }

  const styles = {
    chip: {
      backgroundColor: chipColor,
      marginLeft: "-55px",
      marginBottom: "5px",
      fontWeight : "bold"
    },
    marker: {
      height: "40px"
    }
  }

  return (
    <div>
      <Chip label={`You are in a ${color}`} style={styles.chip} />
      <img src={markerUrl} alt="marker" style={styles.marker} />
    </div>
  )
}

export default Marker
