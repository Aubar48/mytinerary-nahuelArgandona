import React, { useState } from "react";
export const Cards = () => {
  const cityGroupCards = [
    {
      id: "1",
      name: "Sacred Heart Church (of the Capuchin Fathers).",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Sacred_Heart_Church.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Visit the Sacred Heart Church in Cordoba, an architectural masterpiece by the Capuchin Fathers. Experience a blend of spiritual serenity and captivating design.",
    },
    {
      id: "2",
      name: "Sarmiento Park Stairs Viewpoint",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Sarmiento_Park_Stairs_Viewpoint.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Experience Cordoba's charm from a new perspective at the Sarmiento Park Stairs Viewpoint. Climb the stairs and relish panoramic city vistas that beautifully blend urban life with natural splendor.",
    },
    {
      id: "3",
      name: "Bicentennial Civic Center",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Bicentennial_Civic_Center.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Explore the Bicentennial Civic Center in Cordoba, a modern hub of culture and events. Immerse yourself in its architectural marvels and vibrant atmosphere.",
    },
    {
      id: "4",
      name: "The Cañada of Córdoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "5",
      name: "The Council",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Council.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "6",
      name: "Bicentennial walk",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Bicentennial_walk.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "7",
      name: "Museo Palacio Ferreyra",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Museo_Palacio_Ferreyra.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "8",
      name: "Museum of Emilio Caraffa",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Museum_of_Emilio_Caraffa.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "9",
      name: "Urban Man by Antonio Segu",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Urban_Man_by_Antonio_Segu.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "10",
      name: "Walk of the Good Shepherd",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Walk_of_the_Good_Shepherd.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "11",
      name: "Zoo Garden of Córdoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Zoo_Garden.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "12",
      name: "Park San Martin",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["Park_San_Martin.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "13",
      name: "The Canada of Cordoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "14",
      name: "The Cañada of Córdoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "15",
      name: "The Cañada of Córdoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
    {
      id: "16",
      name: "The Cañada of Córdoba",
      pais: "Argentina",
      provincia: "Córdoba capital",
      urls: ["The_Canada_of_Cordoba.jpg"],
      msj: "Find your perfect trip, designed by insiders who know and love their cities! ",
      descripción:
        "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCityCards = cityGroupCards.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />
      {filteredCityCards.length === 0 && (
        <div className="text-center text-red-600 mb-4">
          Sorry, no results found.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCityCards.map((city, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-amber-400 shadow-md border-amber-400 flex flex-col"
          >
            <img
              className="object-cover w-full h-32 rounded-t-lg"
              src={city.urls[0]} // Use the first URL from the urls array
              alt={city.name}
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-bold text-black text-xl mb-2">
                  Name: {city.name}
                </h2>
                <h4 className="font-bold text-black text-xl mb-2">
                  Country: {city.pais}
                </h4>
                <h4 className="font-bold text-black text-xl mb-2">
                  Province: {city.provincia}
                </h4>

                <p className="text-gray-800 mt-2">{city.descripción}</p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                  text-black font-bold py-1 px-1 hover:text-yellow-300 text-center"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredCityCards.length === 0 && (
        <div className="mt-4 text-center flex justify-center h-96">
          <img
            src="https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif"
            className="max-w-full"
          />
        </div>
      )}
    </div>
  );
};
