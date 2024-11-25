import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../page/MainLayout";
import { lazy, Suspense } from "react";
import HomePage from "../page/Home";

const Blog = lazy(() => import("../page/Blog"));
const Projects = lazy(() => import("../page/Projects"));
const Resume = lazy(() => import("../page/Resume"));
const Contact = lazy(() => import("../page/Contact"));
const About = lazy(() => import("../page/About"));
const Error = lazy(() => import("../page/Error"));

const DailyCapstoneNov25th = lazy(
  () => import("../page/Blog/DailyCapstone/2-Nov25th")
);
const DailyNov21st = lazy(() => import("../page/Blog/DailyPost/Nov21st"));
const CSharpInterview = lazy(
  () =>
    import("../page/Blog/SeriesReviewKnowledge/3_PartThree/PartThree_CSharp")
);
const BackendInterviewQuestion = lazy(
  () => import("../page/Blog/SeriesReviewKnowledge/2_PartTwo/PartTwo_Backend")
);
const ReviewPartOne = lazy(
  () => import("../page/Blog/SeriesReviewKnowledge/Part_one")
);
const Nov2nd = lazy(() => import("../page/Blog/DailyPost/Nov2nd"));
const Oct16th = lazy(() => import("../page/Blog/DailyPost/Oct16th"));
const DailyCapstone = lazy(() => import("../page/Blog/DailyCapstone/1-Nov4th"));
const FirstBlog = lazy(() => import("../page/Blog/FirstBlog"));

export const Route = createBrowserRouter([
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
            path: "blog/nhat-ky-lam-no-le-cho-do-an-tot-nghiep",
            element: (
              <Suspense fallback={<></>}>
                <DailyCapstone />
              </Suspense>
            ),
          },
          {
            path: "blog/nguoi-gioi-se-tra-gia-bang-su-co-don",
            element: (
              <Suspense fallback={<></>}>
                <Oct16th />
              </Suspense>
            ),
          },
          {
            path: "blog/cang-lon-to-cang-thich-nhung-nguoi-diu-dang",
            element: (
              <Suspense fallback={<></>}>
                <DailyNov21st />
              </Suspense>
            ),
          },
          {
            path: "blog/hom-nay-minh-hoi-suy-tu",
            element: (
              <Suspense fallback={<></>}>
                <Nov2nd />
              </Suspense>
            ),
          },
          {
            path: "blog/series-on-tap-kien-thuc-p1",
            element: (
              <Suspense fallback={<></>}>
                <ReviewPartOne />
              </Suspense>
            ),
          },
          {
            path: "blog/backend-question-interview",
            element: (
              <Suspense fallback={<></>}>
                <BackendInterviewQuestion />
              </Suspense>
            ),
          },
          {
            path: "blog/CSharp-interview-question",
            element: (
              <Suspense fallback={<></>}>
                <CSharpInterview />
              </Suspense>
            ),
          },
          {
            path: "blog/chill-cuoi-tuan-voi-do-an-tot-nghiep",
            element: (
              <Suspense fallback={<></>}>
                <DailyCapstoneNov25th />
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
  {
    path: "*",
    element: (
      <Suspense fallback={<></>}>
        <Error />
      </Suspense>
    ),
  },
]);
