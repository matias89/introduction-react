import React, { Component } from "react";
import Product from "../../components/products/Product";

import { API_URL } from "../../constants";
import { get, post } from "../../utils/services";

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
    post(`${API_URL}/posts`, {
      userId: 1,
      id: 1010,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }).then(response => console.log(">>> R", response));
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
