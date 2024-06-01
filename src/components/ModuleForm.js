import React, { useState } from "react";

const ModuleForm = ({ addModule }) => {
  const [moduleName, setModuleName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addModule(moduleName);
    setModuleName("");
  };

  return (
    <section className="flex flex-row justify-center items-center ">
        <button type="submit" className="bg-[#AF273E] text-white pr-4 pl-4 rounded">
         + Add ^
        </button>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="Enter module name"
          className="border p-2 rounded mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Module
        </button>
      </form>
    </section>
  );
};

export default ModuleForm;
