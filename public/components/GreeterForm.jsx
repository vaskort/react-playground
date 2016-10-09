var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
    // this.props.onNewMessage(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter message" ref="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;