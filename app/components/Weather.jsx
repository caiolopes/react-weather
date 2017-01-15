import React, { Component } from 'react';
import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

export default class Weather extends Component {
  state = {
      isLoading: false
  };
  handleSearch = (location) => {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location)
      .then(function(temp) {
        that.setState({
          location, temp, isLoading: false
        });
      })
      .catch(function(error) {
        that.setState({
          isLoading: false,
          errorMessage: error.message
        });
      });
  };
  render() {
    let { location, temp, isLoading, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
