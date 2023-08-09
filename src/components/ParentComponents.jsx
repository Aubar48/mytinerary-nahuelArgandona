import { Card } from "./Card";
import { Carousel2 } from "./Carousel";

export const ParentComponents = () => {
  return (
    <div className="grid max-md:grid-flow-row md:grid-flow-col items-center md:gap-32 ">
      <Card />
      <Carousel2 />
    </div>
  );
};
