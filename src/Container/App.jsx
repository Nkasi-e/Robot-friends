import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});
//A state is an object that describes your application

const App = ({ searchField, onSearchChange }) => {
  const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => setRobots({ robots: users }));
  }, []);

  // const onSearchChange = (e) => {
  //   setSearchField(e.target.value);
  // };

  //filtering array
  const filterUser = robots.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchField.toLowerCase()) ||
      user.name.toLowerCase().includes(searchField.toLowerCase()) ||
      user.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  //if it's taking time to load
  return !robots.length ? (
    <h3>Loading...</h3>
  ) : (
    <div className="tc">
      <h1 className="f1">Robot Peers</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterUser} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
