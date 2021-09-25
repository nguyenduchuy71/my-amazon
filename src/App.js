import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";
import SearchPage from "./pages/SearchPage";
import ProductDetails from "./pages/ProductDetails";
import ProductsCaterory from "./pages/ProductsCaterory";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/search/:text">
            <SearchPage />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/category/:name">
            <ProductsCaterory />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
