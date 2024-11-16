import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { blogs } from "../../api/dataBlog";
import { BlogsListViewModel } from "../../models/Blogs";
import { blogTagStatuses } from "../../constants/status/blogTagStatuses";
import Tag from "../../component/ui/tag";
import { ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [blogsList, setBlogsList] = React.useState<BlogsListViewModel[]>([]);

  const blogsData = blogs;

  useEffect(() => {
    setBlogsList(blogsData);
  }, [blogsData]);

  const handleNavigate = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const getTagColor = (tag: string) => {
    const status = blogTagStatuses.find((status) => status.name === tag);
    return status ? status.color : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 w-4/5 mb-10">
        My Blog Posts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 w-4/5">
        {blogsList
          .sort((a, b) => b.time.getTime() - a.time.getTime())
          .map((blog, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <Tag name={blog.tag} color={getTagColor(blog.tag)} />
                <span className="text-sm">
                  {formatDate(blog.time.toString())}
                </span>
              </div>
              {/* Card Content */}
              <div className="grid grid-cols-8 place-content-center">
                <div className="col-span-7">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {blog.title}
                  </h2>
                </div>
                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() => handleNavigate(blog.slug)}
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
