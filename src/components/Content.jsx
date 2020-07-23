import React, { Component } from 'react';
import Item from './Item';

class Content extends Component {
  compare = (a, b) => {
    a = a.perc;
    b = b.perc;
    return a > b ? -1 : a < b ? 1 : 0;
  };

  render() {
    const items = this.props.data.data ? this.props.data.data.generationmix.sort(this.compare) : undefined;

    return (
      <section className='content'>
        {items && items.length > 0 ? (
          <>
            <h1>
              Resources <span>{items.length}</span>
            </h1>
            <ul>
              {items.map((item, index) => (
                <Item
                  key={index}
                  data={item}
                  index={index}
                  handleChange={this.props.handleChange}
                  handleDelete={this.props.handleDelete}></Item>
              ))}
            </ul>
          </>
        ) : (
          <h1>{items ? 'No resources to display' : 'Loading resources'}</h1>
        )}
      </section>
    );
  }
}

export default Content;
