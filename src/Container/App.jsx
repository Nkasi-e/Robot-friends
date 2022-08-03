import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";

//A state is an object that describes your application

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  //fetching data with an asynchronous fetch function
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    //filtering array
    const filterUser = robots.filter((user) => {
      return (
        user.username.toLowerCase().includes(searchfield.toLowerCase()) ||
        user.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        user.email.toLowerCase().includes(searchfield.toLowerCase())
      );
    });
    //if it's taking time to load
    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Peers</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterUser} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
