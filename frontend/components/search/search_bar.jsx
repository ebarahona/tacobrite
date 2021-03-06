import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }
  
  submitSearch() {
    this.props.history.push("/events/search");
  }
  
  render() {
    return(
      <div className="search-bar-container">
        <img src={window.images.magnifying_glass} />
        <form onSubmit={this.submitSearch}>
          <input className="search-bar" placeholder="search for events" />
          <button></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);