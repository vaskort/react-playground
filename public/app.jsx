var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Jen';

ReactDOM.render(
  <Greeter name={firstName} message="message from the render" />,
  document.getElementById('app')
);
