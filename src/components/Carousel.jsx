import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Carousel2 = () => {
  const cityGroup = [
    {
      id: "1",
      name: "trelew",
      urls: ["/trelew1.jpg", "/trelew2.jpg", "/trelew3.jpg", "/trelew4.jpg"],
    },
    {
      id: "2",
      name: "cba",
      urls: ["/cba1.jpg", "/cba2.jpg", "/cba3.jpg", "/cba4.jpg"],
    },
  ];

  // Helper function to get the city by id
  const getCityById = (id) => {
    return cityGroup.find((city) => city.id === id);
  };

  return (
    <div className="flex items-center justify-around max-sm:justify-between rounded">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop
        width={"100%"}
      >
        {cityGroup.map((city) => (
          <div className="grid grid-cols-2 gap-2 " key={city.id}>
            <div>
              <img
                src={getCityById(city.id).urls[0]}
                alt={city.name}
                className="w-full h-60 rounded"
              />
              <p>{city.name}</p>
            </div>

            <div>
              <img
                src={getCityById(city.id).urls[1]}
                alt={city.name}
                className="w-full h-60 rounded"
              />
              <p>{city.name}</p>
            </div>
            <div>
              <img
                src={getCityById(city.id).urls[2]}
                alt={city.name}
                className="w-full h-60 rounded"
              />
              <p>{city.name}</p>
            </div>
            <div>
              <img
                src={getCityById(city.id).urls[3]}
                alt={city.name}
                className="w-full h-60 rounded"
              />
              <p>{city.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
