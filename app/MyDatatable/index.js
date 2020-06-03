const React = require('react');
const { useState, useEffect } = require('react');
require('./index.css');

function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === 'desc') {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

function MyDatatable({
  heading,
  tableData: { columns, rowBody },
  wrapperStyle,
}) {
  const [sortOrder, SetSortOrder] = useState('asc');
  const [rowData, SetRowData] = useState([]);

  useEffect(() => {
    SetRowData([...rowBody]);
  }, []);

  function sortData(property) {
    const sortedData = rowBody.sort(dynamicsort(property, sortOrder));
    SetSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    SetRowData([...sortedData]);
  }

  return (
    <div className="my-table">
      <h1>{heading}</h1>
      <table style={wrapperStyle}>
        <tr>
          {columns.map(({ headerName, field, sortable }) => (
            <th key={field} onClick={() => (sortable ? sortData(field) : {})}>
              {headerName}
              {sortable && (
                <i class={`arrow ${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
              )}
            </th>
          ))}
        </tr>
        {rowData.map((row) => (
          <tr>
            {columns.map(({ field }) => (
              <td>{row[field]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

module.exports = MyDatatable;
