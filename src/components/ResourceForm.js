// src/components/ResourceForm.js
import React, { useState } from 'react';

const ResourceForm = ({ addResource }) => {
  const [resourceName, setResourceName] = useState('');
  const [resourceFile, setResourceFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resourceFile) {
      addResource({ name: resourceName, file: resourceFile });
      setResourceName('');
      setResourceFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={resourceName}
        onChange={(e) => setResourceName(e.target.value)}
        placeholder="Enter resource name"
        required
      />
      <input
        type="file"
        onChange={(e) => setResourceFile(e.target.files[0])}
        required
      />
      <button type="submit">Add Resource</button>
    </form>
  );
};

export default ResourceForm;
