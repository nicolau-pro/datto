import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { fuel: this.props.fuel, perc: "" };
  }

  handleChange = event => {
    this.props.handleChange(event.target.id, event.target.value);
  };

  handleDelete = event => {
    this.props.handleDelete(event.target.id);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { fuel, perc } = this.props.data;
    const percStyle = perc + "%";
    var index = this.props.index;
    return (
      <React.Fragment>
        <li>
          <div>
            <div className="percBar" style={{ width: percStyle }}></div>
            <div className="perc">
              {perc}
              <button type="button" id={index} onClick={this.handleDelete}>
                <i className="im im-x-mark" id={index}></i>
              </button>
            </div>
            <div className="fuel">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id={this.props.index}
                  placeholder="Resource type"
                  onChange={this.handleChange}
                  value={fuel}
                />
              </form>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default Item;
