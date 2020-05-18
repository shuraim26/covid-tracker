import React from 'react';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Download from "./components/layout/Download";
import MapWrapper from "./components/map/MapWrapper";
import CasesWrapper from "./components/cases/CasesWrapper";

const App = () => {

  return (
    <Router>
      <Header />
      <Container style={{ padding: "0 2%" }} maxWidth="xxl">
        <Switch>
          <Route exact path="/" component={CasesWrapper} />
          <Route exact path="/hotspot-tracker" component={MapWrapper} />
        </Switch>
      </Container>
      <Download />
      <Footer />
    </Router>
  );
}

export default App;