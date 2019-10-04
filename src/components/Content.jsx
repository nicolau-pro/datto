import React, { Component } from "react";
import Item from "./Item";

class Content extends Component {
  compare = (a, b) => {
    a = a.perc;
    b = b.perc;
    return a > b ? -1 : a < b ? 1 : 0;
  };

  render() {
    var items = this.props.data.data
      ? this.props.data.data.generationmix.sort(this.compare)
      : [];
    return (
      <React.Fragment>
        <section className="content">
          <ul>
            {items.map((item, index) => (
              <Item
                key={index}
                data={item}
                index={index}
                handleChange={this.props.handleChange}
                handleDelete={this.props.handleDelete}
              ></Item>
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
