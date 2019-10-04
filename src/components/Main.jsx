import React, { Component } from "react";
import Aside from "./Aside";
import Content from "./Content";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Aside />
          <Content
            data={this.props.data}
            handleChange={this.props.handleChange}
            handleDelete={this.props.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
