import { useState } from "react";
import cityGroupCards from "../utils/data";
import { NavLink } from "react-router-dom";
export const Cards = () => {
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCityCards = cityGroupCards.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2" >


    <div className="flex justify-center">
    <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 rounded-lg mb-4 max-w-[40rem] border-solid border-2  shadow-amber-400 shadow-md border-amber-400"
      />
    </div>
      
      {filteredCityCards.length === 0 && (
        <div className="text-center text-red-600 mb-4">
          Sorry, no results found.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
        {filteredCityCards.map((city, index) => (
          <div
            key={index}
            className="xl:min-h-[45vh] min-h-[59vh] border rounded-lg shadow-amber-400 shadow-md border-amber-400 flex flex-col"
          >
            <img
              className="object-cover w-full h-32 rounded-t-lg"
              src={city.urls[0]} 
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
                <NavLink
                  to={'/cities/'+ city.name }
                  className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                  text-black font-bold py-1 px-1 hover:text-yellow-300 text-center"
                >
                  View More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredCityCards.length === 0 && (
        <div className="mt-4 text-center flex justify-center h-96 min-h-[66.3vh] ">
          <img
            src="https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif"
            className="max-w-full"
          />
        </div>
      )}
    </div>
  );
};
