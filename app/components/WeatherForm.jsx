var React = require('react');

var WeatherForm = React.createClass({

  render: function() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter City name"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
