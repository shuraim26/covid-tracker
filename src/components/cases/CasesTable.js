import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';

const CasesTable = ({ data }) => {

  const columns = [
    { title: 'State', field: 'state' },
    { title: 'City', field: 'city' },
    { title: 'Active', field: 'active' },
    { title: 'Confirmed', field: 'confirmed' },
    { title: 'Deceased', field: 'deceased' },
    { title: 'Recovered', field: 'recovered' }
  ];

  const [shouldRender, setShouldRender] = useState(false);

  const [rows, setRows] = useState([{}]);

  useEffect(() => {
    setRows(mapDataToTable(data));
  },[data]);

  const mapDataToTable = dat => {
    let mappedData = []
    for (let [stateKey, stateVal] of Object.entries(dat)) {
      const state = stateKey;
      const districtData = stateVal.districtData;

      for (let [districtKey, districtVal] of Object.entries(districtData)) {
        let objData = {};

        objData.state = state;
        objData.city = districtKey;
        objData.active = districtVal.active;
        objData.confirmed = districtVal.confirmed;
        objData.deceased = districtVal.deceased;
        objData.recovered = districtVal.recovered;

        mappedData = [...mappedData, objData];
      }
    }
    setShouldRender(true);
    return mappedData;
  }

  return (shouldRender ?
   (
    <MaterialTable
      style ={{ backgroundColor: "#5076A7", color: "#ffffff" }}
      title="Nationwide Analytics"
      columns={columns}
      data={rows}
      fixedHeader
      options={{
        headerStyle: { backgroundColor: "#233F5C", color: "#ffffff" },
        rowStyle: { backgroundColor: "#325B84", color: "#ffffff" },
        searchFieldStyle: { color: "#ffffff" },
        pageSize: 10,
        pageSizeOptions: [10, 20, 30]
      }}
    />
  ) :
   (<CircularProgress style={{ marginLeft: "50%" }} />))
}

export default CasesTable
