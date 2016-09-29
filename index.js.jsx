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
  //Module exports a function that can Render its component, instead of exporting the component itself;
  //This function will be available inside the html, thanks to Webpack setup.
  render: function(props, containerElementId){
    ReactDOM.render(
      React.createElement(Index, props),
      document.getElementById(containerElementId)
    );
  }
}