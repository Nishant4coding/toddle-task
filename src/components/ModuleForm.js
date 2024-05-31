import React, { useState } from 'react';

const ModuleForm = ({ addModule }) => {
  const [moduleName, setModuleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addModule(moduleName);
    setModuleName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Enter module name"
        className="border p-2 rounded mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Module
      </button>
    </form>
  );
};

export default ModuleForm;
