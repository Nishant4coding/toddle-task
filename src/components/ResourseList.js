// src/components/ResourceList.js
import React from 'react';

const ResourceList = ({ resources, deleteResource, renameResource }) => {
  return (
    <div>
      <h3>Resources</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <input
              type="text"
              value={resource.name}
              onChange={(e) => renameResource(index, e.target.value)}
            />
            <button onClick={() => deleteResource(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
