var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 88
    }
  },

  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23
    })
  },

  render: function() {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <WeatherMessage location={location} temp={temp}></WeatherMessage>
      </div>
    );
  }

});

module.exports = Weather;
