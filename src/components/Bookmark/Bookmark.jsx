import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h3 className="text-2xl p-4 mt-4 bg-slate-300 rounded-lg">{title}</h3>
    </div>
  );
};

export default Bookmark;
