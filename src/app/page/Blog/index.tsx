import React from "react";
import { useNavigate } from "react-router-dom";

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      title: "Bài viết đầu tiên",
      slug: "bai-viet-dau-tien",
      time: "October 1, 2024",
    },
  ];

  const handleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 w-4/5 mb-10">
        My Blog Posts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 w-4/5">
        {blogs.map((blog, index) => (
          <div
            onClick={() => handleClick(blog.slug)}
            key={index}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Introduce
              </span>
              <span className="text-sm">{blog.time}</span>
            </div>
            {/* Card Content */}
            <div className="">
              <h2 className="text-2xl font-bold text-gray-800">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
