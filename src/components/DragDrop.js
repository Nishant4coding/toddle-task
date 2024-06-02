import React from 'react';
import DraggableItem from './DraggableItem';

const ItemType = {
  RESOURCE: 'resource',
  LINK: 'link',
};

const DragAndDrop = ({ resources, links, moveResource, moveLink, editResource, deleteResource, editLink, deleteLink }) => {
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
          onEdit={editResource}
          onDelete={deleteResource}
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
          onEdit={editLink}
          onDelete={deleteLink}
        />
      ))}
    </div>
  );
};

export default DragAndDrop;
