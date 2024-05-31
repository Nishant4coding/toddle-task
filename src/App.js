import React, { useState } from 'react';
import ModuleList from './components/ModuleList';
import ModuleForm from './components/ModuleForm';
import './App.css';

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (name) => {
    setModules([...modules, { name, resources: [] }]);
  };

  const deleteModule = (index) => {
    const newModules = modules.filter((_, i) => i !== index);
    setModules(newModules);
  };

  const renameModule = (index, newName) => {
    const newModules = modules.map((module, i) =>
      i === index ? { ...module, name: newName } : module
    );
    setModules(newModules);
  };

  const addResource = (moduleIndex, resource) => {
    const newModules = modules.map((module, i) =>
      i === moduleIndex
        ? { ...module, resources: [...module.resources, resource] }
        : module
    );
    setModules(newModules);
  };

  const deleteResource = (moduleIndex, resourceIndex) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const newResources = module.resources.filter((_, j) => j !== resourceIndex);
        return { ...module, resources: newResources };
      }
      return module;
    });
    setModules(newModules);
  };

  const renameResource = (moduleIndex, resourceIndex, newName) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const newResources = module.resources.map((resource, j) =>
          j === resourceIndex ? { ...resource, name: newName } : resource
        );
        return { ...module, resources: newResources };
      }
      return module;
    });
    setModules(newModules);
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Course Modules</h1>
      <ModuleForm addModule={addModule} />
      <ModuleList
        modules={modules}
        deleteModule={deleteModule}
        renameModule={renameModule}
        addResource={addResource}
        deleteResource={deleteResource}
        renameResource={renameResource}
      />
    </div>
  );
};

export default App;
