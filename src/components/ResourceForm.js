import React, { useState } from 'react';

const ResourceForm = ({ addResource }) => {
  const [resourceName, setResourceName] = useState('');
  const [resourceFile, setResourceFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (resourceFile) {
      try {
        await addResource({ name: resourceName, file: resourceFile });
        setResourceName('');
        setResourceFile(null);
      } catch (err) {
        setError('Failed to add resource');
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={resourceName}
        onChange={(e) => setResourceName(e.target.value)}
        placeholder="Enter resource name"
        className="border p-2 rounded mr-2"
        required
      />
      <input
        type="file"
        onChange={(e) => setResourceFile(e.target.files[0])}
        className="border p-2 rounded mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Resource
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default ResourceForm;
