import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = { data: [] };
  fetchData = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  };

  componentDidMount() {
    this.fetchData("https://api.carbonintensity.org.uk/generation");
    console.log("Loaded");
  }

  handleChange = (id, value) => {
    console.log(id, value);
    var newData = this.state.data;
    newData.data.generationmix[id].fuel = value;
    this.setState({ data: newData });
  };

  handleDelete = id => {
    console.log("delete", id);
    var newData = this.state.data;
    var arr = this.state.data.data.generationmix;
    var newArr = [];
    for (var a in arr) if (a !== id) newArr.push(arr[a]);
    newData.data.generationmix = newArr;
    console.log(newData.data.generationmix);
    console.log(newArr);
    this.setState({ data: newData });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main
          data={this.state.data}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
