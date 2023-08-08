import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Carousel2 = () => {
  const cityGroup = [
    {
      id: "1",
      name: "Chubut Trelew",
      urls: [
        "Regional_Museum.jpg",
        "Astronomical_Center.jpg",
        "Paleontological_Museum.jpg",
        "Punta_Tombo.jpg",
      ],
    },
    {
      id: "2",
      name: "Córdoba Capital",
      urls: [
        "Sacred_Heart_Church.jpg",
        "Sarmiento_Park_Stairs_Viewpoint.jpg",
        "Bicentennial_Civic_Center.jpg",
        "The_Canada_of_Cordoba.jpg",
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
    <div className="flex items-center justify-around max-sm:justify-between rounded shadow-amber-400 shadow-md  ">
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
            {city.urls.map((url, index) => (
              <div key={index} className="relative  ">
                <img
                  src={url}
                  alt={city.name}
                  className="w-full h-60 rounded "
                />
                <div className="absolute bottom-0 w-full text-center font-semibold text-yellow-400 animate-pulse ">
                  <p>{city.name}</p>
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
