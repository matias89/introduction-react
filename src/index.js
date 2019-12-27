import React from "react";
import { render } from "react-dom"; // ReactDOM.render

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Views
import Contact from "./views/contact/Contact";
import Products from "./views/products/Products";
import Todo from './views/todo/Todo';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/todo">TODO List</Link>
          </li>
        </ul>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      </Router>
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("app"));
