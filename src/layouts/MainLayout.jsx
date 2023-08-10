import Nav2 from "../components/Nav2";
import { Footer } from "./../components/Footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <Nav2/>
      <Outlet />
      <Footer />
    </>
  );
};
