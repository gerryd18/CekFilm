import React from "react";
import { Search } from "lucide-react";

const Button = ({ buttonText, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded flex items-center justify-center gap-x-2"
      onClick={onClick}
    >
      <Search size={20} />
      {buttonText}
    </button>
  );
};

export default Button;
