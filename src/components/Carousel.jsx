import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export const Carousel2 = () => {
  const [cityGroupCarousel, setCityGroupCarousel] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cities/carousel")
      .then((response) => {
        if (Array.isArray(response.data.data_carousel)) {
          setCityGroupCarousel(response.data.data_carousel);
        } else {
          console.error("API response is not an array: ", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API: ", error);
      });
  }, []);

  // Helper function to remove file extension
  const removeExtension = (filename) => {
    return filename.split(".")[0];
  };

  // Helper function to remove file extension and replace underscores with spaces
  const formatFileName = (filename) => {
    return removeExtension(filename).replace(/_/g, " ");
  };

  // Split the cityGroupCarousel into arrays of 4 items each
  const chunkedCityGroups = [];
  for (let i = 0; i < cityGroupCarousel.length; i += 4) {
    chunkedCityGroups.push(cityGroupCarousel.slice(i, i + 4));
  }

  return (
    <div
      className=""
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <Carousel
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop
        width={"100%"}
      >
        {chunkedCityGroups.map((cityGroup, index) => (
          <div
            className="grid max-md:grid-cols-1 md:grid-cols-2  rounded gap-3 "
            key={index}
          >
            {cityGroup.map((city) => (
              <div
                key={city._id}
                className="relative shadow-amber-400 shadow-md border-amber-400 h-52 rounded border-solid border-2 hover:border-sky-800"
              >
                <img
                  src={city.photo}
                  alt={city.city}
                  className="w-full h-full rounded object-cover"
                />
                <div className="absolute bottom-0 w-full font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-1">
                  <p>{formatFileName(city.city)}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
