import React, { useState } from 'react';
import ResourceList from './ResourseList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDrop from './DragDrop';
import AddResourceModal from '../custom/R_Modal';
import AddLinkModal from '../custom/L_Modal';
import { FiMoreVertical } from 'react-icons/fi';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BsPlusSquare, BsLink, BsPencilSquare, BsTrash } from "react-icons/bs";

const ModuleList = ({
  modules,
  deleteModule,
  renameModule,
  addResource,
  deleteResource,
  addLink,
  deleteLink,
  moveResource,
  moveLink,
  editResource,
  editLink,
}) => {
  const [isResourceModalOpen, setResourceModalOpen] = useState(false);
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const openResourceModal = (moduleIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setResourceModalOpen(true);
    setIsMenuOpen(null);
  };

  const openLinkModal = (moduleIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setLinkModalOpen(true);
    setIsMenuOpen(null);
  };

  const closeResourceModal = () => setResourceModalOpen(false);
  const closeLinkModal = () => setLinkModalOpen(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <ul className="space-y-4">
          {modules.map((module, moduleIndex) => (
           
            <li key={moduleIndex} className="p-4 border rounded shadow relative  ">
               <div className=' items-center gap-16 justify-between flex'>
              <h2 className="text-2xl font-semibold"><IoMdArrowDropdownCircle /></h2>
              <div
                onChange={(e) => renameModule(moduleIndex, e.target.value)}
                className="font-bold p-2 rounded mr-2 mb-2 w-full flex flex-row justify-between items-center"
              >{module.name}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(isMenuOpen === moduleIndex ? null : moduleIndex)}
                  className="focus:outline-none"
                >
                  <FiMoreVertical />
                </button>
                {isMenuOpen === moduleIndex && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-md text-lg font-semibold z-10 p-2">
                    <button
                      onClick={() => openResourceModal(moduleIndex)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    >
                      <BsPlusSquare className="mr-2" /> Add Resource
                    </button>
                    <hr />
                    <button
                      onClick={() => openLinkModal(moduleIndex)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center" 
                    >
                      <BsLink className="mr-2" /> Add Link
                    </button>
                    <hr />
                    <button
                      onClick={() => renameModule(moduleIndex, prompt('Enter new module name'))}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    >
                      <BsPencilSquare className="mr-2" /> Rename Module
                    </button>
                    <hr />
                    <button
                      onClick={() => deleteModule(moduleIndex)}
                      className="block w-full text-left px-4 py-2 text-red-500 flex items-center"
                    >
                      <BsTrash className="mr-2" /> Delete Module
                    </button>
                  </div>
                )}
                </div>
              </div>
              </div>
              <hr />
              <div className='pl-16 pr-16'>
              <DragAndDrop
                resources={module.resources}
                links={module.links}
                moveResource={(dragIndex, hoverIndex) => moveResource(moduleIndex, dragIndex, hoverIndex)}
                moveLink={(dragIndex, hoverIndex) => moveLink(moduleIndex, dragIndex, hoverIndex)}
                editResource={(resourceId, newName) => editResource(moduleIndex, resourceId, newName)}
                deleteResource={(resourceId) => deleteResource(moduleIndex, resourceId)}
                editLink={(linkId, newName) => editLink(moduleIndex, linkId, newName)}
                deleteLink={(linkId) => deleteLink(moduleIndex, linkId)}
              />
              </div>
            </li>
          ))}
        </ul>
        <AddResourceModal
          isOpen={isResourceModalOpen}
          onClose={closeResourceModal}
          addResource={(resource) => addResource(currentModuleIndex, resource)}
        />
        <AddLinkModal
          isOpen={isLinkModalOpen}
          onClose={closeLinkModal}
          addLink={(link) => addLink(currentModuleIndex, link)}
        />
      </div>
    </DndProvider>
  );
};

export default ModuleList;
