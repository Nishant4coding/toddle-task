// src/components/ModuleForm.js
import React, { useState } from 'react';

const ModuleForm = ({ addModule }) => {
  const [moduleName, setModuleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addModule(moduleName);
    setModuleName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Enter module name"
        required
      />
      <button type="submit">Add Module</button>
    </form>
  );
};

export default ModuleForm;
