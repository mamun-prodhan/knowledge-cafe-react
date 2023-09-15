import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <p>blogs</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
