import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogsListViewModel } from "../../models/Blogs";
import { blogs } from "../../api/dataBlog";
import { formatDate } from "../../utils/formatDate";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [blogsList, setBlogsList] = React.useState<BlogsListViewModel[]>([]);

  const blogsData = blogs;

  const shuffleAndSelect = (array: BlogsListViewModel[], count: number) => {
    // Shuffle the array
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    // Take the first 'count' elements
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const randomBlogs = shuffleAndSelect(blogs, 6);
    setBlogsList(randomBlogs);
  }, []);

  useEffect(() => {
    setBlogsList(blogsData);
  }, [blogsData]);

  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/HMNG3004",
      icon: <Github />, // Placeholder for GitHub icon
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hoang-minh-ng-083b12236/",
      icon: <Linkedin />, // Placeholder for LinkedIn icon
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/hoangminhng.dev/",
      icon: <Facebook />, // Placeholder for Facebook icon
    },
    {
      name: "Gmail",
      link: "mailto:ngminh3004@gmail.com",
      icon: <Mail />, // Placeholder for Gmail icon
    },
  ];

  const handleNavigate = (slug: string) => {
    navigate(`/blog/${slug}`);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-left w-4/5">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
          Hi, I’m Hoang Minh
        </h1>
        <p className="text-xl text-gray-600 mt-4">A Software Engineer</p>
        <p className="text-lg text-gray-500 mt-2">Welcome to my blog</p>

        {/* Social Links */}
        <div className="mt-8 flex space-x-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <span className="sr-only">{social.name}</span>
              {social.icon}
              {/* Placeholder for actual icons */}
            </a>
          ))}
        </div>
      </div>

      <section className="py-4"></section>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 w-4/5">
        {blogsList.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {formatDate(post.time.toString())}
            </p>
            <a
              className="text-blue-600 font-semibold mt-6 block cursor-pointer"
              onClick={() => handleNavigate(post.slug)}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
