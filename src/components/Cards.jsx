import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "./../apiUrl";
export const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios(apiUrl + "/api/cities")
      .then((response) => setCityData(response.data.response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCityCards = cityData.filter((city) =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="px-2 min-h-[79.4vh] multi_bg_example2 font-serif text-gray-950"
      data-aos="fade-up"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <div className="flex justify-center pt-2 ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg mb-4 max-w-[40rem] border-solid border-2 shadow-amber-400 shadow-md border-amber-400 "
        />
      </div>
      {filteredCityCards.length === 0 && (
        <div className="flex justify-center text-center flex-wrap h-96">
          <img
            src="https://media.giphy.com/media/qkLqpGZhf1ACB8WbTl/giphy.gif"
            className="rounded min-h-[70vh]"
            alt="No results found"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center min-h-[29.1vh]">
        {filteredCityCards.map((city, index) => (
          <div
            key={index}
            className="xl:min-h-[50vh] min-h-[60vh] border rounded-lg shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800 flex flex-col"
          >
            <div className="relative h-60">
              <img
                className="object-cover w-full h-full rounded-t-lg"
                src={city.photo}
                alt={city.city}
              />
              <div className="absolute bottom-0 text-center w-full">
                <p className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-1">
                  {city.city}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex flex-row gap-5 justify-center text-center">
                <h3 className="font-bold text-lg">{city.country}</h3>
              </div>
              <div>
                <p className="font-bold text-sm px-2">
                  {city.smalldescription}
                </p>
              </div>

              <NavLink
                to={"/cities/" + city.city}
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
