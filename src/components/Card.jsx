export const Card = () => {
  const cityGroupCard = [
    {
      id: "1",
      name: "The Canada of Córdoba",
      urls: ["The_Canada_of_Cordoba.jpg"],
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "2",
      name: "Sarmiento Park of Córdoba",
      urls: ["Sarmiento_Park_Stairs_Viewpoint.jpg"],
      descripción:
        "A well-known staircase with checkered tiles that goes up to a viewpoint with views of the park and the horizon.",
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
            <h2 className="flex justify-center font-bold text-black ">
              {city.name}
            </h2>
            <p>{city.descripción}</p>
            <a
              href="#"
              className="flex justify-center items-center w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                text-white font-bold py-1 px-1 hover:text-yellow-300"
            >
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
