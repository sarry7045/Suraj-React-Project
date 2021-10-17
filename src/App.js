import React from "react";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import Contactus from "./Components/pages/Contactus";
import ScrollToTop from "./Components/ScrollToTop";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/contactus" exact component={Contactus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
