(function (window) {
  'use strict';
  const React = require('react');
  const ReactDOM = require('react-dom');
  const Datatable = require('./Datatable/index.js');
  require('./index.css');
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return <Datatable {...this.props} />;
    }
  }

  function defineMyLib() {
    var MyLib = {};
    MyLib.logger = function (data) {
      console.log(data);
    };
    MyLib.DataTable = function (element, heading, tableData, wrapperStyle) {
      ReactDOM.render(
        <App
          heading={heading}
          tableData={tableData}
          wrapperStyle={wrapperStyle}
        />,
        element
      );
    };
    return MyLib;
  }
  window.MyLib = defineMyLib();
})(window);
