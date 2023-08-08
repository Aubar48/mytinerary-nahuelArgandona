import { Carousel } from "react-responsive-carousel";
export const Banner = () => {
  const cityGroup = [
    {
      id: "1",
      name: "Córdoba Capital",
      urls: ["Bandera_cordoba.jpg"],
    },
    {
      id: "2",
      name: "Argentina",
      urls: ["Bandera_Argentina.jpg"],
    },
  ];

 
  return (
    <div className="rounded shadow-amber-400 shadow-md mb-5">
      <Carousel
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={6000}
        infiniteLoop
        width={"100%"}
      >
        {cityGroup.map((city) => (
          <div className="" key={city.id}>
            {city.urls.map((url, index) => (
              <div key={index} className="relative  ">
                <img
                  src={url}
                  alt={city.name}
                  className="w-full h-96 rounded "
                />
                
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
