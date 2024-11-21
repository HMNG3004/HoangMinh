import React from "react";
import HeaderBar from "../component/header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../routes/ScrollToTop";
const MainLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="grid min-h-screen w-full">
        <div className="flex flex-col w-full">
          <div>
            <HeaderBar />
          </div>
          <div className="relative">
            <div className="grid flex-1 items-start gap-4 sm:px-0 sm:py-0 md:gap-4 mt-12">
              <div className="container mx-auto py-12">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
