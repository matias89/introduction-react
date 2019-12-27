import React, { Component } from "react";
import Product from "../../components/products/Product";

import { API_URL } from "../../constants";
import { get, post, _get, test } from "../../utils/services";

class Products extends Component {
  constructor(props) {
    super(props);
    this.buildProducts = this.buildProducts.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    get(`${API_URL}/posts`).then(posts => {
      this.setState({
        posts,
        inputValue: ""
      });
    });
    const t = test(`${API_URL}/posts`, `${API_URL}/posts`, `${API_URL}/posts`);
    t.then(r => {
      console.log('>>> R', r);
    });
  }

  handleOnSubmit() {
    console.log(this.state.inputValue);
  }

  handleOnChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  buildProducts() {
    return this.state.posts.map(post => {
      const { id, userId, title, body } = post;
      return (
        <div key={id} className="col-4">
          <Product id={id} userId={userId} title={title} body={body} onChange={this.handleOnChange} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-success" onClick={this.handleOnSubmit}>
          Submit
        </button>
        <div className="row">{this.buildProducts()}</div>
      </div>
    );
  }
}

export default Products;
