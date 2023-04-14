import React from "react";

const Button = ({ label, handler }) => {
  return (
    <div>
      <button
        onClick={handler}
        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
