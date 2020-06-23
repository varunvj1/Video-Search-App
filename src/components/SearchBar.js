import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              //   placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          {/* <button className="ui button" type="submit">
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
