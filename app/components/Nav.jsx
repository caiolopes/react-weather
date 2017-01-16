import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    e.preventDefault();
    const location = encodeURIComponent(this.refs.city.value);
    if (location.length > 0) {
      this.refs.city.value = "";
      window.location.hash = '#/?location=' + location;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">ReactWeather</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link
                to="/examples"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  placeholder="Search weather by city"
                  ref="city"/>
              </li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
