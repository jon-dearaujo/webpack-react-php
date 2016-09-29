import React from 'react';
import ReactDOM from 'react-dom';
class Index extends React.Component {
  render(){
    return <div>
      <span>My current value is {this.props.value}, and it came from backend through props</span>
    </div>
  }
}

module.exports = {
  render: function(props, containerElementId){
    ReactDOM.render(
      React.createElement(Index, props),
      document.getElementById(containerElementId)
    );
  }
}