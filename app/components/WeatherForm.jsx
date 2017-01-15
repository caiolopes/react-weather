import React from 'react';

export default class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const location = this.state.location;
    if (location.length > 0) {
      this.setState({location: ''});
      this.props.onSearch(location);
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <button className="button expanded hollow" type="submit">Get Weather</button>
        </div>
      </form>
    );
  }
}
