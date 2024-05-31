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
      <h2 className="text-2xl font-semibold mb-4">Modules</h2>
      <ul className="space-y-4">
        {modules.map((module, moduleIndex) => (
          <li key={moduleIndex} className="p-4 border rounded shadow">
            <input
              type="text"
              value={module.name}
              onChange={(e) => renameModule(moduleIndex, e.target.value)}
              className="border p-2 rounded mr-2 mb-2 w-full"
            />
            <button
              onClick={() => deleteModule(moduleIndex)}
              className="bg-red-500 text-white p-2 rounded mb-2"
            >
              Delete
            </button>
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
