var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'Message from the component'
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var name = this.props.name.value;

    alert(name);

  },
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" value="name" />
          <button>Set name </button>
        </form>
      </div>
    );
  }
});

var firstName = 'Vasilis';

ReactDOM.render(
  <Greeter firstName="Vasilis" message="message from the render" />,
  document.getElementById('app')
);
