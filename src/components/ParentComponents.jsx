import { Card } from "./Card";
import { Carousel2 } from "./Carousel";

export const ParentComponents = () => {
  return (
    <div className="grid max-md:grid-flow-row md:grid-flow-col gap-5 ">
      <Card />
      <Carousel2 />
    </div>
  );
};
