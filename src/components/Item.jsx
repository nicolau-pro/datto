import React, { Component } from 'react';

class Item extends Component {
  state = { fuel: this.props.fuel, perc: '' };

  handleChange = (event) => {
    this.props.handleChange(event.target.id.match(/\d+/)[0], event.target.value);
  };

  handleDelete = (event) => {
    this.props.handleDelete(event.target.id.match(/\d+/)[0]);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let { fuel, perc } = this.props.data;
    const percStyle = perc + '%';
    let index = this.props.index;

    return (
      <li>
        <div className='perc-bar' style={{ width: percStyle }}></div>

        <span className='perc'>
          {perc}
          <button type='button' id={'delete_' + index} onClick={this.handleDelete}>
            <i className='im im-x-mark'></i>
            <span>Delete {fuel}</span>
          </button>
        </span>

        <span className='fuel'>
          <form onSubmit={this.handleSubmit}>
            <label id={'form_' + index} htmlFor={'input_' + index}>
              {fuel}
            </label>
            <input type='text' id={'input_' + index} placeholder='Resource type' onChange={this.handleChange} value={fuel} />
          </form>
        </span>
      </li>
    );
  }
}

export default Item;
