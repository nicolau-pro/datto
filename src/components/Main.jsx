import React, { Component } from 'react';
import Aside from './Aside';
import Content from './Content';

class Main extends Component {
  render() {
    return (
      <main>
        <Aside data={this.props.menu} />
        <Content data={this.props.data} handleChange={this.props.handleChange} handleDelete={this.props.handleDelete} />
      </main>
    );
  }
}

export default Main;
