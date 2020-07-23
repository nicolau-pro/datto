import React, { Component } from 'react';
import './styles/App.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './JSON/menu';

class App extends Component {
  state = {
    data: [],
    menu: Menu.items,
  };

  fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
        console.log('Loaded:', data);
      });
  };

  componentDidMount() {
    this.fetchData('https://api.carbonintensity.org.uk/generation');
  }

  handleChange = (id, value) => {
    let newData = this.state.data;
    newData.data.generationmix[id].fuel = value;
    this.setState({ data: newData });
  };

  handleDelete = (id) => {
    let newData = this.state.data;
    const arr = this.state.data.data.generationmix;

    let newArr = [];
    for (let a in arr) if (a !== id) newArr.push(arr[a]);
    newData.data.generationmix = newArr;
    this.setState({ data: newData });

    console.table(newArr);
  };

  render() {
    return (
      <>
        <Header />
        <Main data={this.state.data} menu={this.state.menu} handleChange={this.handleChange} handleDelete={this.handleDelete} />
        <Footer />
      </>
    );
  }
}

export default App;
