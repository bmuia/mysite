import React from 'react';

const AssetForm = ({ newAsset, handleInputChange, handleSubmit, handleCancel, isEditing }) => (
  <div className="container bg-white p-5 rounded shadow-lg mt-5">
    <h3 className="text-center">{isEditing ? 'Update Asset' : 'Add Asset'}</h3>
    <form onSubmit={handleSubmit}>
      <div className="row">

        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input
              type="number"
              name="id"
              id="id"
              value={newAsset.id}
              onChange={handleInputChange}
              disabled={true}
              className="form-control"
            />
          </div>
        </div>

        {/* Title Field */}
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newAsset.title}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="cost" className="form-label">Cost</label>
            <input
              type="number"
              name="cost"
              id="cost"
              value={newAsset.cost}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="Acc.Depreciation" className="form-label">Accumulated Depreciation</label>
            <input
              type="number"
              name="Acc.Depreciation"
              id="Acc.Depreciation"
              value={newAsset['Acc.Depreciation']}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="NBV" className="form-label">Net Book Value (NBV)</label>
            <input
              type="number"
              name="NBV"
              id="NBV"
              value={newAsset.NBV}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-3">
        <button
          type="submit"
          className="btn btn-primary"
        >
          {isEditing ? 'Update Asset' : 'Add Asset'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
);

export default AssetForm;
