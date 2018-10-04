import React, { Component } from 'react';
import { compose } from "recompose";
import { applySetResult, applyUpdateResult } from './stateChanges'
import ApiClient from './api-client';
import List from './List';
import withInfiniteScroll from './hoc/withInfiniteScroll';
import withLoading from './hoc/withLoading';
import './App.css';

const ListWithLoadingWithInfinite = compose(
  withInfiniteScroll,
  withLoading
)(List);


class App extends Component {
  state = {
    hits: [],
    page: null,
    isLoading: false
  };

  componentDidMount() {
    const sanitizePath =  window.location.pathname.substr(1);
    if (sanitizePath !== '') {
      this.input.value = sanitizePath;
      this.fetchStories(sanitizePath, 0);
    }
  }

  onInitialSearch = e => {
    e.preventDefault();
    const { value } = this.input;
    if (value === "") return;
    window.location.pathname = value;
    this.fetchStories(value, 0);
  };

  onPaginatedSearch = e =>
    this.fetchStories(this.input.value, this.state.page + 1);

  fetchStories = (value, page) => {
    this.setState({ isLoading: true });
    ApiClient.fetchStories(value, page)
    //.then(result => console.log(result)); 
    .then(result => this.onSetResult(result, page)); 
  };

  onSetResult = (result, page) =>
    page === 0
      ? this.setState(applySetResult(result))
      : this.setState(applyUpdateResult(result));

  render() {
    return (
      <div className="page">
        <div className="interactions">
          <form type="submit" onSubmit={this.onInitialSearch}>
            <input type="text" ref={node => (this.input = node)} />
            <button type="submit">Search</button>
          </form>
        </div>
        <ListWithLoadingWithInfinite
          list={this.state.hits}
          page={this.state.page}
          onPaginatedSearch={this.onPaginatedSearch}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
