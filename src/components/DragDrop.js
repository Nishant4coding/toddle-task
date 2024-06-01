import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = {
  RESOURCE: 'resource',
  LINK: 'link',
};

const DraggableItem = ({ id, name, type, index, moveItem }) => {
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

  return (
    <div ref={(node) => ref(drop(node))} className="border p-2 rounded mb-2">
      {name}
    </div>
  );
};

const DragAndDrop = ({ resources, links, moveResource, moveLink }) => {
  const moveItem = (dragIndex, hoverIndex, type) => {
    if (type === ItemType.RESOURCE) {
      moveResource(dragIndex, hoverIndex);
    } else {
      moveLink(dragIndex, hoverIndex);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Resources</h3>
      {resources.map((resource, index) => (
        <DraggableItem
          key={resource.id}
          id={resource.id}
          name={resource.name}
          type={ItemType.RESOURCE}
          index={index}
          moveItem={(dragIndex, hoverIndex) => moveItem(dragIndex, hoverIndex, ItemType.RESOURCE)}
        />
      ))}
      <h3 className="text-xl font-semibold mb-2">Links</h3>
      {links.map((link, index) => (
        <DraggableItem
          key={link.id}
          id={link.id}
          name={link.name}
          type={ItemType.LINK}
          index={index}
          moveItem={(dragIndex, hoverIndex) => moveItem(dragIndex, hoverIndex, ItemType.LINK)}
        />
      ))}
    </div>
  );
};

export default DragAndDrop;
