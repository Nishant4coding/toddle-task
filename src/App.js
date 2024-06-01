import React, { useState } from 'react';
import ModuleList from './components/ModuleList';
import ModuleForm from './components/ModuleForm';
import './App.css';

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (name) => {
    setModules([...modules, { name, resources: [], links: [] }]);
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

  const addLink = (moduleIndex, link) => {
    const newModules = modules.map((module, i) =>
      i === moduleIndex
        ? { ...module, links: [...module.links, link] }
        : module
    );
    setModules(newModules);
  };

  const deleteLink = (moduleIndex, linkIndex) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const newLinks = module.links.filter((_, j) => j !== linkIndex);
        return { ...module, links: newLinks };
      }
      return module;
    });
    setModules(newModules);
  };

  const renameLink = (moduleIndex, linkIndex, newName) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const newLinks = module.links.map((link, j) =>
          j === linkIndex ? { ...link, name: newName } : link
        );
        return { ...module, links: newLinks };
      }
      return module;
    });
    setModules(newModules);
  };

  const moveResource = (moduleIndex, dragIndex, hoverIndex) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const draggedResource = module.resources[dragIndex];
        const newResources = [...module.resources];
        newResources.splice(dragIndex, 1);
        newResources.splice(hoverIndex, 0, draggedResource);
        return { ...module, resources: newResources };
      }
      return module;
    });
    setModules(newModules);
  };

  const moveLink = (moduleIndex, dragIndex, hoverIndex) => {
    const newModules = modules.map((module, i) => {
      if (i === moduleIndex) {
        const draggedLink = module.links[dragIndex];
        const newLinks = [...module.links];
        newLinks.splice(dragIndex, 1);
        newLinks.splice(hoverIndex, 0, draggedLink);
        return { ...module, links: newLinks };
      }
      return module;
    });
    setModules(newModules);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Course Builder</h1>
      <ModuleForm addModule={addModule} />
      <ModuleList
        modules={modules}
        deleteModule={deleteModule}
        renameModule={renameModule}
        addResource={addResource}
        deleteResource={deleteResource}
        renameResource={renameResource}
        addLink={addLink}
        deleteLink={deleteLink}
        renameLink={renameLink}
        moveResource={moveResource}
        moveLink={moveLink}
      />
    </div>
  );
};

export default App;
