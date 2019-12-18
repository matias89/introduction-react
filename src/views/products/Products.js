import React, { Component } from "react";
import Product from "../../components/products/Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.products = 20;
  }
  buildProducts() {
    const p = [];
    for (let i = 0; i < this.products; i++) {
      p[i] = (
        <div className="col-4">
          <Product />
        </div>
      );
    }
    return p;
  }
  render() {
    return <div className="row">{this.buildProducts()}</div>;
  }
}

export default Products;
