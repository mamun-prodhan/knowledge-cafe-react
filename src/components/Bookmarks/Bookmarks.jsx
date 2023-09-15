import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-500 ms-5 px-4 py-2 mt-6">
      <h2 className="text-3xl font-bold text-violet-950 p-6 border-2 rounded-lg border-l-blue-800">
        Spent time on read:{readingTime} min
      </h2>
      <h2 className="text-3xl">Bookmarks:{bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};
export default Bookmarks;
