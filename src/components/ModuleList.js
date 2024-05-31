// src/components/ModuleList.js
import React from 'react';
import ResourceList from './ResourseList';
import ResourceForm from './ResourceForm';

const ModuleList = ({
  modules,
  deleteModule,
  renameModule,
  addResource,
  deleteResource,
  renameResource,
}) => {
  return (
    <div>
      <h2>Modules</h2>
      <ul>
        {modules.map((module, moduleIndex) => (
          <li key={moduleIndex}>
            <input
              type="text"
              value={module.name}
              onChange={(e) => renameModule(moduleIndex, e.target.value)}
            />
            <button onClick={() => deleteModule(moduleIndex)}>Delete</button>
            <ResourceForm
              addResource={(resource) => addResource(moduleIndex, resource)}
            />
            <ResourceList
              resources={module.resources}
              deleteResource={(resourceIndex) => deleteResource(moduleIndex, resourceIndex)}
              renameResource={(resourceIndex, newName) =>
                renameResource(moduleIndex, resourceIndex, newName)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
