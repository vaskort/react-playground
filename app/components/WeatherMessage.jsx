var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
    var {temp, location} = this.props;

    return (
      <p>It is {temp} in {location}</p>
    );
  }

});

module.exports = WeatherMessage;
