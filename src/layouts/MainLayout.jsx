import { Nav } from "./../components/Nav";
import { Footer } from "./../components/Footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <Nav className="bg-indigo-600 w-full h-screen" />
      <Outlet />
      <Footer />
    </>
  );
};
