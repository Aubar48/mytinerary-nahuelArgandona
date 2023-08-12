import { Card } from "./Card";
import { Carousel2 } from "./Carousel";

export const ParentComponents = () => {
  return (
    <div className="grid max-md:grid-flow-row md:grid-flow-col items-center md:gap-10 min-h-[47.2vh] px-2 ">
      <Card />
      <Carousel2 />
    </div>
  );
};
