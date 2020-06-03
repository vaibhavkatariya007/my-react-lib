(function (window) {
  'use strict';
  const React = require('react');
  const ReactDOM = require('react-dom');
  const Datatable = require('./Datatable/index.js');
  const MyDatatable = require('./MyDatatable/index.js');
  require('./index.css');
  class ThirdPartyTable extends React.Component {
    render() {
      return <Datatable {...this.props} />;
    }
  }
  class MyOwnTable extends React.Component {
    render() {
      return <MyDatatable {...this.props} />;
    }
  }

  function defineMyLib() {
    var MyLib = {};
    MyLib.logger = function (data) {
      console.log(data);
    };
    MyLib.DataTable = function (element, heading, tableData, wrapperStyle) {
      ReactDOM.render(
        <ThirdPartyTable
          heading={heading}
          tableData={tableData}
          wrapperStyle={wrapperStyle}
        />,
        element
      );
    };
    MyLib.MyDataTable = function (element, heading, tableData, wrapperStyle) {
      ReactDOM.render(
        <MyOwnTable
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
