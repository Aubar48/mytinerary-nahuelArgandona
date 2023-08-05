import { Card } from "./Card";
import { Carousel2 } from "./Carousel";

export const ParentComponents = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card />
      <Carousel2 />
    </div>
  );
};
