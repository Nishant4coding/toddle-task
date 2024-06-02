import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FiMoreVertical } from 'react-icons/fi';

const ItemType = {
  RESOURCE: 'resource',
  LINK: 'link',
};

const DraggableItem = ({ id, name, type, index, moveItem, onEdit, onDelete }) => {
  const [, ref] = useDrag({
    type,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: type,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div ref={(node) => ref(drop(node))} className="border p-2 rounded mb-2 flex justify-between items-center">
      {name}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <FiMoreVertical />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
            <button
              onClick={() => {
                const newName = prompt('Enter new name:', name);
                if (newName) {
                  onEdit(id, newName);
                }
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(id);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableItem;
