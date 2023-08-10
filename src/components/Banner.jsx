import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar los estilos del carousel


export const Banner = () => {
  const cityGroupBanner = [
    {
      id: "1",
      name: "Córdoba Capital",
      urls: ["Bandera_cordoba.jpg"],
    },
    {
      id: "2",
      name: "Argentina ",
      urls: ["Bandera_Argentina.jpg"],
    },
  ];

  return (
    <div className="rounded shadow-amber-400 shadow-md">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop
        width={"100%"}
      >
        {cityGroupBanner.map((city) => (
          <div className="" key={city.id}>
            {city.urls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={city.name}
                  className="w-full max-sm:h-48 h-72 rounded"
                />
                <div className="absolute bottom-20 w-full text-center font-bold text-6xl text-yellow-400 animate-pulse shadow-amber-400 shadow-md ">
                  <p>{city.name}</p> {/* Aquí corregí cityGroupBanner.name a city.name */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};