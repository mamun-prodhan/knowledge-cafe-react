import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-[60px] h-[60px]"
            src={author_img}
            alt={`author image`}
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="me-5">{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark className="text-2xl text-red-600"></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="my-4 text-4xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="me-2">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
