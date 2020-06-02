const React = require('react');
const { AgGridReact } = require('ag-grid-react');
require('ag-grid-community/dist/styles/ag-grid.css');
require('ag-grid-community/dist/styles/ag-theme-alpine.css');

function Datatable({ heading, tableData: { columns, rowBody }, wrapperStyle }) {
  return (
    <div className="my-lib-data-table">
      <h1>{heading}</h1>
      <div className="ag-theme-alpine" style={{ ...wrapperStyle }}>
        <AgGridReact columnDefs={columns} rowData={rowBody}></AgGridReact>
      </div>
    </div>
  );
}

module.exports = Datatable;
