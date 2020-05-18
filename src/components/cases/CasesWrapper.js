import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CasesTable from "./CasesTable";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px 0"
  },
  loader: {
    marginLeft: "50%"
  }
});

const CasesWrapper = () => {

  const classes = useStyles();

  const [shouldRender, setShouldRender] = useState(false);

  const [data, setData] = useState({});

  const getData = async () => {
    const resp = await axios.get("https://api.covid19india.org/state_district_wise.json");
    console.log("Data response", resp.data);
    setData(resp.data);
    setShouldRender(true);
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className={classes.root}>
      {( shouldRender ? <CasesTable data={data} /> : <CircularProgress className={classes.loader} /> )}
    </div>
  )
}

export default CasesWrapper;
