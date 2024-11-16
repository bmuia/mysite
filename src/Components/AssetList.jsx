import React, { useState } from 'react';
import data from './data';

const AssetList = () => {
  // Initialize state with data
  const [assets, setAssets] = useState(data);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [currentAsset, setCurrentAsset] = useState(null); // The asset being edited
  const [isEditing, setIsEditing] = useState(false); // State to track if we're in update mode or create mode
  const [newAsset, setNewAsset] = useState({
    id: assets.length + 1,
    title: '',
    cost: '',
    'Acc.Depreciation': '',
    NBV: ''
  }); // State to hold the new asset input data
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message

  // Separate data into categories
  const nonCurrentAssets = assets.filter(item => item.title && item.id <= 3); // Non-Current Assets
  const currentAssets = assets.filter(item => item.title && item.id >= 4 && item.id <= 11); // Current Assets
  const equityAndLiabilities = assets.filter(item => item.title && item.id >= 12 && item.id <= 17); // Equity and Liabilities
  const liabilities = assets.filter(item => item.title && item.id >= 18 && item.id <= 24); // Liabilities

  // Function to handle create (add a new asset)
  const createAsset = (newAsset) => {
    setAssets(prevAssets => [...prevAssets, newAsset]);
    resetForm('Asset created successfully!');
  };

  // Function to handle update (edit an asset)
  const updateAsset = (id, updatedAsset) => {
    if (!id) {
      return; // If id is null or undefined, don't proceed with update
    }
    setAssets(prevAssets => 
      prevAssets.map(item => 
        item.id === id ? { ...item, ...updatedAsset } : item
      )
    );
    resetForm('Asset updated successfully!');
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAsset(prevAsset => ({
      ...prevAsset,
      [name]: value
    }));
  };

  // Function to reset form state and display success message
  const resetForm = (message) => {
    setShowForm(false);
    setIsEditing(false);
    setNewAsset({
      id: assets.length + 1,
      title: '',
      cost: '',
      'Acc.Depreciation': '',
      NBV: ''
    });
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000); // Hide success message after 3 seconds
  };

  // Function to handle delete (remove an asset)
  const deleteAsset = (id) => {
    setAssets(prevAssets => prevAssets.filter(item => item.id !== id));
  };

  // Function to open the form for creating a new asset
  const openCreateForm = () => {
    setIsEditing(false);
    setNewAsset({
      id: assets.length + 1, // Auto-generate new ID
      title: '',
      cost: '',
      'Acc.Depreciation': '',
      NBV: ''
    });
    setShowForm(true);
  };

  // Function to open the form for updating an existing asset
  const openEditForm = (asset) => {
    setIsEditing(true);
    setCurrentAsset(asset); // Set the current asset to be edited
    setNewAsset({ ...asset });
    setShowForm(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && currentAsset) {
      updateAsset(currentAsset.id, newAsset); // Update the asset
    } else if (!isEditing) {
      createAsset(newAsset); // Create a new asset
    }
  };

  return (
    <div>
      <h2>Asset and Liabilities Overview</h2>

      {/* Success Message */}
      {successMessage && <div style={{ color: 'green', marginBottom: '20px' }}>{successMessage}</div>}

      {/* Non-Current Assets Section */}
      <h3>Non-Current Assets</h3>
      <table border="1" cellPadding="10">
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
          {nonCurrentAssets.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.cost || '-'}</td>
              <td>{item['Acc.Depreciation'] || '-'}</td>
              <td>{item.NBV || '-'}</td>
              <td>
                <button onClick={() => openEditForm(item)}>Update</button>
                <button onClick={() => deleteAsset(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Current Assets</h3>
      <table border="1" cellPadding="10">
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
          {currentAssets.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.cost || '-'}</td>
              <td>{item['Acc.Depreciation'] || '-'}</td>
              <td>{item.NBV || '-'}</td>
              <td>
                <button onClick={() => openEditForm(item)}>Update</button>
                <button onClick={() => deleteAsset(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Equity and Liabilities Section */}
      <h3>Equity and Liabilities</h3>
      <table border="1" cellPadding="10">
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
          {equityAndLiabilities.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.cost || '-'}</td>
              <td>{item['Acc.Depreciation'] || '-'}</td>
              <td>{item.NBV || '-'}</td>
              <td>
                <button onClick={() => openEditForm(item)}>Update</button>
                <button onClick={() => deleteAsset(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Liabilities Section */}
      <h3>Liabilities</h3>
      <table border="1" cellPadding="10">
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
          {liabilities.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.cost || '-'}</td>
              <td>{item['Acc.Depreciation'] || '-'}</td>
              <td>{item.NBV || '-'}</td>
              <td>
                <button onClick={() => openEditForm(item)}>Update</button>
                <button onClick={() => deleteAsset(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to Add New Asset */}
      <button onClick={openCreateForm}>Add New Asset</button>

      {/* Show the form for create/update */}
      {showForm && (
        <div>
          <h3>{isEditing ? 'Update Asset' : 'Add New Asset'}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>ID:</label>
              <input
                type="number"
                name="id"
                value={newAsset.id}
                onChange={handleInputChange}
                disabled={isEditing} // Disable the ID field for updates
              />
            </div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={newAsset.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Cost:</label>
              <input
                type="number"
                name="cost"
                value={newAsset.cost}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Accumulated Depreciation:</label>
              <input
                type="number"
                name="Acc.Depreciation"
                value={newAsset['Acc.Depreciation']}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Net Book Value (NBV):</label>
              <input
                type="number"
                name="NBV"
                value={newAsset.NBV}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit">{isEditing ? 'Update Asset' : 'Add Asset'}</button>
              <button type="button" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AssetList;
