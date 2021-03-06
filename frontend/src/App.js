import React from "react";
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Loader from "./components/layout/Loader/Loader.js";
import ProductDetails from "./components/Product/ProductDetails.js"
import Products from './components/Product/Product.js'
export default function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/sad" component={Loader} />
        <Route exact path="/products" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}
