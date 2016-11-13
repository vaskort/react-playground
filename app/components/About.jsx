var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center pageTitle">About</h1>
      <p>Welcome to the about page</p>
      <p>This is a mini-project to learn ReactJS. You can search for a city to check its weather</p>
      <p>Check the repo on <a href="https://github.com/vaskort/react-playground" target="_blank">GitHub</a></p>
    </div>
  );
}

module.exports = About;
