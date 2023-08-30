import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CardsActivities } from "./CardsActivities";
import { CardsItineraries } from "./CardsItineraries";
export const DetailsCity = () => {
  const params = useParams();
  const [infoCity, setInfoCity] = useState({});
  useEffect(() => {
    axios(`http://localhost:3000/api/cities/${params.id}`)
      .then((response) => setInfoCity(response.data.response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="px-2 min-h-[78.5vh] flex flex-col items-center ">
        <h2 className="text-center font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1 w-full">
          City Details
        </h2>
        <img
          src={infoCity.photo}
          alt=""
          className="w-full h-96 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
        />
        <div className="flex gap-10 w-full text-center justify-center">
          <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1">
            City: {infoCity.city}
          </h1>
          <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1">
            Country: {infoCity.country}
          </h1>
        </div>
        <div className="flex gap-2 max-md:flex-col">
          <h2 className="font-bold text-lg ">Fundation: {infoCity.fundation}</h2>
          <h2 className="font-bold text-lg ">Population: {infoCity.population}</h2>
          <h2 className="font-bold text-lg ">featured Location: {infoCity.featuredLocation}</h2>
        </div>

        <p className="font-semibold text-base px-2">
          Description: {infoCity.description}
        </p>
        <h2 className="text-center font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1 w-full">
          Itineraries
        </h2>
        <div className="flex max-md:flex-col ">
          <CardsItineraries />
        </div>
        <h2 className="text-center font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1 w-full">
          Activities
        </h2>
        <div className="flex max-md:flex-col">
          <CardsActivities />
        </div>
        <NavLink
          to={"/cities/"}
          className="text-lg bg-amber-600 rounded font-bold py-1 px-4 text-center hover:text-yellow-300 mt-4"
        >
          Back City
        </NavLink>
      </div>
    </>
  );
};
