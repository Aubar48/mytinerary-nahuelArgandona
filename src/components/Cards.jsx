import { useState } from "react";
import cityGroupCards from "../utils/data";
import { NavLink } from "react-router-dom";
export const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCityCards = cityGroupCards.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg mb-4 max-w-[40rem] border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
        />
      </div>
      {filteredCityCards.length === 0 && (
        <div className="mt-4 text-center flex justify-center h-96">
          <img
            src="https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif"
            className="max-w-full"
          />
        </div>
      )
      
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center  min-h-[29.1vh]">
        {filteredCityCards.map((city, index) => (
          <div
            key={index}
            className="xl:min-h-[45vh] min-h-[59vh] border rounded-lg shadow-amber-400 shadow-md border-amber-400 flex flex-col"
          >
            <div className="relative h-60">
              <img
                className="object-cover w-full h-full rounded-t-lg"
                src={city.urls[0]}
                alt={city.name}
              />
              <div className="absolute bottom-0 text-center w-full">
                <p className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-1">
                  {city.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex flex-row gap-5 justify-center text-center ">
                <p className="font-bold text-lg ">
                  {city.pais}
                </p>
                <p className="font-bold text-lg ">
                  {city.provincia}
                </p>
              </div>
              <NavLink
                to={"/cities/" + city.name}
                className="text-lg bg-amber-600 rounded font-bold py-1 px-4 text-center hover:text-yellow-300"
              >
                View More
              </NavLink>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};
