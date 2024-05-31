import React, { useState } from 'react';
import { FaTrash, FaEdit, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Resource from './Resource';

const Module = ({ module, onRename, onDelete, onAddResource, onRemoveResource, onRenameResource, onMoveResource, onMoveModule }) => {
  const [newResourceName, setNewResourceName] = useState('');
  const [newResourceType, setNewResourceType] = useState('link');
  const [newResourceLink, setNewResourceLink] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(module.name);

  const handleRename = () => {
    onRename(module.id, newName);
    setIsEditing(false);
  };

  const handleAddResource = () => {
    if (newResourceName) {
      const newResource = {
        id: Date.now(),
        name: newResourceName,
        type: newResourceType,
        link: newResourceLink,
      };
      onAddResource(module.id, newResource);
      setNewResourceName('');
      setNewResourceLink('');
    }
  };

  return (
    <div className="module">
      {isEditing ? (
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      ) : (
        <h3>{module.name}</h3>
      )}
      {isEditing ? (
        <button onClick={handleRename}>Save</button>
      ) : (
        <FaEdit onClick={() => setIsEditing(true)} />
      )}
      <FaTrash onClick={() => onDelete(module.id)} />
      <FaArrowUp onClick={() => onMoveModule(module.id, 'up')} />
      <FaArrowDown onClick={() => onMoveModule(module.id, 'down')} />
      <div className="resources">
        {module.resources.map((resource, index) => (
          <Resource
            key={resource.id}
            resource={resource}
            onRename={(id, newName) => onRenameResource(module.id, id, newName)}
            onDelete={(id) => onRemoveResource(module.id, id)}
            onMove={(id, direction) => onMoveResource(module.id, id, direction)}
            index={index}
            length={module.resources.length}
          />
        ))}
        <input
          value={newResourceName}
          onChange={(e) => setNewResourceName(e.target.value)}
          placeholder="Add a new resource"
        />
        <select value={newResourceType} onChange={(e) => setNewResourceType(e.target.value)}>
          <option value="link">Link</option>
          <option value="image">Image</option>
          <option value="pdf">PDF</option>
        </select>
        {newResourceType === 'link' && (
          <input
            value={newResourceLink}
            onChange={(e) => setNewResourceLink(e.target.value)}
            placeholder="Resource link"
          />
        )}
        <button onClick={handleAddResource}>Add</button>
      </div>
    </div>
  );
};

export default Module;
