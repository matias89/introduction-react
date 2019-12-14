import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Router>
        </div>
    );
}

render(
    <App />,
    document.getElementById('app')
);