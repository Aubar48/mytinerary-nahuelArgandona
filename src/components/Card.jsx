export const Card = () => {
  const cityGroupCard = [
    {
      id: "1",
      name: "The Cañada of Córdoba",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj:"Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north."
    },
  ];
  return (
    <div>
      {cityGroupCard.map((city, index) => (
        <div
          key={index}
          className="flex sm max-md:justify-center border rounded-lg h-auto w-auto shadow-amber-400 shadow-md border-amber-400 mb-2"
        >
          <img
            className="object-cover max-md:w-1/4 max-md:h-auto md:w-1/2 rounded-lg"
            src={city.urls[0]} // Use the first URL from the urls array
            alt={city.name}
          />
          <div className="flex flex-col max-md:justify-center md:justify-between">
            <h2 className="flex justify-center font-bold text-black text-3xl ">
              {city.name}
            </h2>
            <h4 className="font-bold text-black ">
              {city.msj}
            </h4>
            <p>{city.descripción}</p>
            <a
              href="/cities"
              className="flex justify-center items-center font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-1 hover:text-yellow-300"
            >
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
