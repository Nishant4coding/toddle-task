import React, { useState } from 'react';
import { FaTrash, FaEdit, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Resource = ({ resource, onRename, onDelete, onMove, index, length }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(resource.name);

  const handleRename = () => {
    onRename(resource.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="resource">
      {isEditing ? (
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      ) : (
        <p>{resource.name}</p>
      )}
      {isEditing ? (
        <button onClick={handleRename}>Save</button>
      ) : (
        <FaEdit onClick={() => setIsEditing(true)} />
      )}
      <FaTrash onClick={() => onDelete(resource.id)} />
      {index > 0 && <FaArrowUp onClick={() => onMove(resource.id, 'up')} />}
      {index < length - 1 && <FaArrowDown onClick={() => onMove(resource.id, 'down')} />}
    </div>
  );
};

export default Resource;
