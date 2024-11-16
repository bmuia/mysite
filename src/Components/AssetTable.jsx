import React from 'react';

const AssetTable = ({ assets, onEdit, onDelete, category }) => (
  <div className="mb-4">
    <h3 className="h4 text-dark">{category}</h3>
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Cost</th>
            <th>Accumulated Depreciation</th>
            <th>Net Book Value (NBV)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.cost || '-'}</td>
              <td>{item['Acc.Depreciation'] || '-'}</td>
              <td>{item.NBV || '-'}</td>
              <td>
                <button
                  onClick={() => onEdit(item)}
                  className="btn btn-success btn-sm m-1"
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AssetTable;
