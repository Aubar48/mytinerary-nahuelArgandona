import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Carousel2 = () => {
  const cityGroupCarousel = [
    {
      id: "1",
      name: "Córdoba capital",
      urls: [
        "Sacred_Heart_Church.jpg",
        "Sarmiento_Park_Stairs_Viewpoint.jpg",
        "Bicentennial_Civic_Center.jpg",
        "The_Canada_of_Cordoba.jpg",
      ],
    },
    {
      id: "2",
      name: "Córdoba Capital",
      urls: [
        "The_Council.jpg",
        "Bicentennial_walk.jpg",
        "Museo_Palacio_Ferreyra.jpg",
        "Museum_of_Emilio_Caraffa.jpg",
      ],
    },
    {
      id: "3",
      name: "Córdoba Capital",
      urls: [
        "Urban_Man_by_Antonio_Segu.jpg",
        "Walk_of_the_Good_Shepherd.jpg",
        "Zoo_Garden.jpg",
        "Park_San_Martin.jpg",
      ],
    },
    {
      id: "4",
      name: "Córdoba Capital",
      urls: [
        "Urban_Man_by_Antonio_Segu.jpg",
        "Walk_of_the_Good_Shepherd.jpg",
        "Zoo_Garden.jpg",
        "Park_San_Martin.jpg",
      ],
    },
  ];

  // Helper function to remove file extension
  const removeExtension = (filename) => {
    return filename.split(".")[0];
  };

  // Helper function to remove file extension and replace underscores with spaces
  const formatFileName = (filename) => {
    return removeExtension(filename).replace(/_/g, " ");
  };

  return (
    <div className="">
      <Carousel
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop
        width={"100%"}
      >
        {cityGroupCarousel.map((city) => (
          <div
            className="grid max-md:grid-cols-1 md:grid-cols-2  rounded gap-2 "
            key={city.id}
          >
            {city.urls.map((url, index) => (
              <div
                key={index}
                className="relative shadow-amber-400 shadow-md border-amber-400 h-52"
              >
                <img
                  src={url}
                  alt={city.name}
                  className="w-full h-full rounded "
                />
                <div className="absolute bottom-0 w-full text-center font-bold text-lg text-yellow-400 animate-pulse shadow-amber-400 shadow-md border-amber-400 ">
                  <p>{formatFileName(url)}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
