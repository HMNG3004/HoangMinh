import React from "react";

interface TagProps {
  name: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ name, color }) => {
  return (
    <span className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded ${color}`}>
      {name}
    </span>
  );
};

export default Tag;
