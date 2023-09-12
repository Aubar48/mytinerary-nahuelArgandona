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
      className="text-center font-serif text-gray-950 px-10"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="50"
      data-aos-duration="1000"
    >
      {cityData && (
        <div className="bg-slate-200 flex max-md:mt-2 max-md:justify-center border rounded-lg h-auto w-auto shadow-amber-400 shadow-md border-amber-400 mb-2 hover:border-sky-800  ">
          <div className="flex flex-col max-md:justify-center md:justify-between">
            <img
              className="object-cover h-48 w-auto  rounded-lg"
              src={cityData.photo}
              alt={cityData.city}
            />
            <div className="flex justify-center gap-2">
              <h1 className="font-bold max-md:text-sm text-xl ">
                {cityData.city}
              </h1>
              <h2 className="font-bold max-md:text-sm text-xl ">
                {cityData.country}
              </h2>
            </div>

            <p className="font-medium text-base ">
              {cityData.smalldescription}
            </p>
            <NavLink
              to={"/cities"}
              className="flex justify-center items-center font-bold  text-lg bg-amber-600 px-2 py-1 rounded mt-1 hover:text-yellow-300"
            >
              View More
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
