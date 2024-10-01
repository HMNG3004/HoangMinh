import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const HomePage: React.FC = () => {
  const posts = [
    {
      title: "Giới thiệu về mình",
      date: "October 1, 2024",
      description:
        "Chào bạn! Mình là Hoàng Minh, một sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT - TPHCM. Mình yêu thích công nghệ và đang dấn thân vào con đường phát triển web và di động.",
      link: "#/blog/bai-viet-dau-tien",
    },
  ];
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/HMNG3004",
      icon: <Github />, // Placeholder for GitHub icon
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      icon: <Linkedin />, // Placeholder for LinkedIn icon
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yourprofile",
      icon: <Twitter />, // Placeholder for Twitter icon
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/hoangminhng.dev/",
      icon: <Facebook />, // Placeholder for Facebook icon
    },
    {
      name: "Gmail",
      link: "mailto:yourname@gmail.com",
      icon: <Mail />, // Placeholder for Gmail icon
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="text-left w-4/5">
        <h1 className="text-5xl font-bold text-gray-800">Hi, I’m Hoang Minh</h1>
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
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{post.date}</p>
            <p className="text-gray-700 mt-4">{post.description}</p>
            <a
              href={post.link}
              className="text-blue-600 font-semibold mt-6 block"
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
