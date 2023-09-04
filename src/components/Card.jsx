import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const Card = () => {
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/cities")
      .then((response) => setCityData(response.data.response[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className="text-center"
      data-aos="fade-right"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      {cityData && (
        <div className="flex sm max-md:justify-center border rounded-lg h-auto w-auto shadow-amber-400 shadow-md border-amber-400 mb-2 hover:border-sky-800">
          <img
            className="object-cover max-md:w-1/4 max-md:h-auto md:w-1/2 rounded-lg"
            src={cityData.photo}
            alt={cityData.city}
          />
          <div className="flex flex-col max-md:justify-center md:justify-between">
            <h1 className="font-bold text-black text-2xl">
              City: {cityData.city}
            </h1>
            <h2 className="font-bold text-black text-lg">
              Country: {cityData.country}
            </h2>

            <p className="font-semibold text-base">
              Small description: {cityData.smalldescription}
            </p>
            <NavLink
              to={"/cities"}
              className="flex justify-center items-center font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-1 hover:text-yellow-300"
            >
              View More
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
