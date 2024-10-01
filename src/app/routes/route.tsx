import { createHashRouter } from "react-router-dom";
import MainLayout from "../page/MainLayout";
import { lazy, Suspense } from "react";
import HomePage from "../page/Home";
import FirstBlog from "../page/Blog/FirstBlog";

const Blog = lazy(() => import("../page/Blog"));
const Projects = lazy(() => import("../page/Projects"));
const Resume = lazy(() => import("../page/Resume"));
const Contact = lazy(() => import("../page/Contact"));
const About = lazy(() => import("../page/About"));

export const Route = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<></>}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "blog",
            element: (
              <Suspense fallback={<></>}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: "blog/bai-viet-dau-tien",
            element: (
              <Suspense fallback={<></>}>
                <FirstBlog />
              </Suspense>
            ),
          },
          {
            path: "projects",
            element: (
              <Suspense fallback={<></>}>
                <Projects />
              </Suspense>
            ),
          },
          {
            path: "resume",
            element: (
              <Suspense fallback={<></>}>
                <Resume />
              </Suspense>
            ),
          },
          {
            path: "contact",
            element: (
              <Suspense fallback={<></>}>
                <Contact />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<></>}>
                <About />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
