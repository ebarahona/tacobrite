import React from 'react';
import { withRouter } from 'react-router-dom';

class CategoryEventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.clickIt = this.clickIt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  select(category) {
    document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
    document.getElementById(category).classList.add("selected");
  }

  clickIt(category) {
    this.props.update("category", category);

    if (category == null) {
      this.select("All");
    } else {
      this.select(category);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/events/search");
  }

  render() {
    return (
      <div className="categories">
        <header>
          <div>Popular in</div>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="San Francisco" />
            <button></button>
          </form>
        </header>

        <div className="cat-options">
          <div id="All" className="selected" onClick={() => this.clickIt(null)}>All</div>
          <div id="Beef" onClick={() => this.clickIt("Beef")}>Beef</div>
          <div id="Breakfast" onClick={() => this.clickIt("Breakfast")}>Breakfast</div>
          <div id="Chicken" onClick={() => this.clickIt("Chicken")}>Chicken</div>
          <div id="Fish" onClick={() => this.clickIt("Fish")}>Fish</div>
          <div id="Pork" onClick={() => this.clickIt("Pork")}>Pork</div>
          <div id="Vegan" onClick={() => this.clickIt("Vegan")}>Vegan</div>
          <div id="Vegetarian" onClick={() => this.clickIt("Vegetarian")}>Vegetarian</div>
        </div>
      </div>
    )
  }
}

export default withRouter(CategoryEventIndex);