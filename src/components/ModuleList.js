import React from 'react';
import ResourceList from './ResourseList';
import ResourceForm from './ResourceForm';
import LinkForm from './Link';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDrop from './DragDrop';

const ModuleList = ({
  modules,
  deleteModule,
  renameModule,
  addResource,
  deleteResource,
  renameResource,
  addLink,
  deleteLink,
  renameLink,
  moveResource,
  moveLink
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
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
              {/* <ResourceList
                resources={module.resources}
                deleteResource={(resourceIndex) => deleteResource(moduleIndex, resourceIndex)}
                renameResource={(resourceIndex, newName) =>
                  renameResource(moduleIndex, resourceIndex, newName)
                }
              /> */}
              <ResourceForm addResource={(resources)=>addResource(moduleIndex,resources)} 
              resources={module.resources}
              deleteResource={(resourceIndex)=>deleteResource(moduleIndex,resourceIndex)}/>
              <LinkForm addLink={(link) => addLink(moduleIndex, link)} />
              <DragAndDrop
                resources={module.resources}
                links={module.links}
                moveResource={(dragIndex, hoverIndex) => moveResource(moduleIndex, dragIndex, hoverIndex)}
                moveLink={(dragIndex, hoverIndex) => moveLink(moduleIndex, dragIndex, hoverIndex)}
              />
            </li>
          ))}
        </ul>
      </div>
    </DndProvider>
  );
};

export default ModuleList;
