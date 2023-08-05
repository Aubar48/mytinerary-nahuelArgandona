import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Carousel2 = () => {
  const cityGroup = [
    {
      index: "1",
      name: "trelew",
      urls: ["/trelew1.jpg", "/trelew2.jpg"],
    },
    {
      index: "2",
      name: "trelew",
      urls: ["/trelew3.jpg", "/trelew4.jpg"],
    },
    {
      index: "3",
      name: "trelew",
      urls: ["/trelew5.jpg", "/trelew6.jpg"],
    },
    // ...
  ];

  return (
    <div className="flex">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop
        width={"50%"}
      >
        {cityGroup.map((city, index) => (
          <div className="grid grid-cols-2 gap-4" key={index}>
            <img
              src={city.urls[0]}
              alt={city.name}
              className="w-full h-60 rounded"
            />
            <img
              src={city.urls[1]}
              alt={city.name}
              className="w-full h-60 rounded"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
