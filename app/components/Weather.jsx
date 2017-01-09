import React, { Component } from 'react';
import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends Component {
  state = {
      isLoading: false
  };
  handleSearch = (location) => {
    let that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
      .then(function(temp) {
        that.setState({
          location, temp, isLoading: false
        });
      })
      .catch(function(errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false, location: false, temp: false});
      });
  };
  render() {
    let {location, temp, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}