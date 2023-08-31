import { Banner } from "../components/Banner";
import { ParentComponents } from "../components/ParentComponents";
export const Home = () => {
  return (
    <>
      <div className="min-h-[78.5vh]">
        <Banner />
        <ParentComponents />
      </div>
    </>
  );
};
