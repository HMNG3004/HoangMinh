import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    // { name: "Projects", path: "/projects" },
    // { name: "Resume", path: "/resume" },
    // { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const currentPage = navItems.find((item) =>
      location.pathname.startsWith(item.path)
    );
    document.title = currentPage
      ? `${currentPage.name} | Hoang Minh`
      : "Hoang Minh";
  }, [location.pathname]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const getActiveLinkStyle = (itemPath: string) => {
    const activeClass =
      "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500";
    const inactiveClass =
      "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    // Check if the item path is exactly `/` for Home
    if (itemPath === "/" && location.pathname === "/") {
      return activeClass;
    } else if (itemPath !== "/") {
      return location.pathname.startsWith(itemPath)
        ? activeClass
        : inactiveClass;
    }
  };

  const handleClick = (path: string) => {
    navigate(path);
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="w-9/10 flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://www.hoangminhng.social"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://avatars.githubusercontent.com/u/181040697?v=4"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg  md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              HMNG3004's space
            </span>
          </a>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={toggleNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkStyle(
                      item.path
                    )}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderBar;
