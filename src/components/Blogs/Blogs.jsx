import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <p className="text-4xl font-bold">Blogs</p>
    </div>
  );
};

export default Blogs;
