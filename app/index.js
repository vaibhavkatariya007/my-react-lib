(function (window) {
  'use strict';
  const React = require('react');
  const ReactDOM = require('react-dom');
  require('./index.css');
  class App extends React.Component {
    render() {
      return <div>{this.props.name}</div>;
    }
  }

  function defineMyLib() {
    var MyLib = {};
    MyLib.logger = function (data) {
      console.log(data);
    };
    MyLib.DataTable = function (element, name) {
      ReactDOM.render(<App name={name} />, element);
    };
    return MyLib;
  }
  window.MyLib = defineMyLib();
})(window);
