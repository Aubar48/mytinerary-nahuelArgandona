import { Banner } from "../components/Banner";
import { ParentComponents } from "../components/ParentComponents";
export const Home = () => {
  return (
    <>
      <div className="min-h-[79.4vh]">
        <Banner />
        <ParentComponents />
      </div>
    </>
  );
};
