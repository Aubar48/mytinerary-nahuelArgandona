import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cities/carousel")
      .then((response) => {
        setCarouselData(response.data.data_carousel);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching carousel data from API: ", error);
        setIsLoading(false);
      });
  }, []);

  // Agregamos el código para dividir el cityGroupCarousel en fragmentos
  const chunkedCityGroups = [];
  for (let i = 0; i < carouselData.length; i += 1) {
    chunkedCityGroups.push(carouselData.slice(i, i + 1));
  }

  return (
    <div className="rounded shadow-amber-400 shadow-md md:mb-1">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop
        width={"100%"}
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          chunkedCityGroups.map((cityGroup, groupIndex) => (
            <div key={groupIndex}>
              {cityGroup.map((carouselItem, index) => (
                <div key={index} className="relative">
                  <img
                    src={carouselItem.photo}
                    alt={carouselItem.city}
                    className="w-full h-48 md:h-72 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};



