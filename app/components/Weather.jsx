var React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm></WeatherForm>
        <WeatherMessage></WeatherMessage>
      </div>
    );
  }

});

module.exports = Weather;
