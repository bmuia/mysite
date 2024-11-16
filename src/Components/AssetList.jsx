import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data'; 
import AssetTable from './AssetTable';
import AssetForm from './AssetForm';

const AssetList = () => {
  const navigate = useNavigate(); 
  const [assets, setAssets] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newAsset, setNewAsset] = useState({
    id: null,
    title: '',
    cost: '',
    'Acc.Depreciation': '',
    NBV: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const nonCurrentAssets = assets.filter(item => item.title && item.id <= 3);
  const currentAssets = assets.filter(item => item.title && item.id >= 4 && item.id <= 11);
  const equityAndLiabilities = assets.filter(item => item.title && item.id >= 12 && item.id <= 17);
  const liabilities = assets.filter(item => item.title && item.id >= 18 && item.id <= 24);

  const updateAsset = (id, updatedAsset) => {
    setAssets(prevAssets =>
      prevAssets.map(item => (item.id === id ? { ...item, ...updatedAsset } : item))
    );
    resetForm('Asset updated successfully!');
  };

  const deleteAsset = (id) => {
    setAssets(prevAssets => prevAssets.filter(item => item.id !== id));
  };

  const openEditForm = (asset) => {
    setIsEditing(true);
    setCurrentAsset(asset);
    setNewAsset({ ...asset });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAsset(prevAsset => ({
      ...prevAsset,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && currentAsset) {
      updateAsset(currentAsset.id, newAsset);
    }
  };

  const resetForm = (message = '') => {
    setShowForm(false);
    setIsEditing(false);
    setNewAsset({
      id: null,
      title: '',
      cost: '',
      'Acc.Depreciation': '',
      NBV: ''
    });
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCancel = () => {
    resetForm();
  };

  const handleBackToAdvert = () => {
    navigate('/'); 
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Asset and Liabilities Overview</h2>

      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}

      <button 
        className="btn btn-secondary mb-4" 
        onClick={handleBackToAdvert}
      >
        Back to Advert
      </button>

      <AssetTable
        assets={nonCurrentAssets}
        onEdit={openEditForm}
        onDelete={deleteAsset}
        category="Non-Current Assets"
      />
      <AssetTable
        assets={currentAssets}
        onEdit={openEditForm}
        onDelete={deleteAsset}
        category="Current Assets"
      />
      <AssetTable
        assets={equityAndLiabilities}
        onEdit={openEditForm}
        onDelete={deleteAsset}
        category="Equity and Liabilities"
      />
      <AssetTable
        assets={liabilities}
        onEdit={openEditForm}
        onDelete={deleteAsset}
        category="Liabilities"
      />

      {/* Modal Overlay (Dimmed Background) */}
      {showForm && (
        <>
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50" 
            style={{ zIndex: 999 }} 
          />
          <div className="d-flex justify-content-center align-items-center position-fixed top-50 start-50 translate-middle" style={{ zIndex: 1000 }}>
            <AssetForm
              newAsset={newAsset}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
              isEditing={isEditing}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AssetList;
