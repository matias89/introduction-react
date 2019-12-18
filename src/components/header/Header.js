import React, { Component } from "react";
import Nav from "../nav/Nav";

class Header extends Component {
  render() {
    return (
      <header className="bg-light p-3">
        <Nav />
      </header>
    );
  }
}

export default Header;
