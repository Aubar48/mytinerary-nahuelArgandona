import { useEffect} from "react";
import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardsItineraries } from "./CardsItineraries";
import { cityOneAction } from "../redux/actions/cityOneActions.js";

export const DetailsCity = () => {
  const params = useParams();
  
  const dispatch=useDispatch()
  const infoCity = useSelector(store => store.cityOneReducered.cityOne)
  useEffect(() => {
   
    dispatch(cityOneAction(params.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="px-2 min-h-[79.4vh] flex flex-col items-center multi_bg_example2 font-serif text-gray-950"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <h2 className="text-center font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1 w-full">
          City Details
        </h2>
        <img
          src={infoCity.photo}
          alt=""
          className="w-full h-96 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
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
          <h2 className="font-bold text-lg ">
            Fundation: {infoCity.fundation}
          </h2>
          <h2 className="font-bold text-lg ">
            Population: {infoCity.population}
          </h2>
          <h2 className="font-bold text-lg ">
            featured Location: {infoCity.featuredLocation}
          </h2>
        </div>

        <p className="font-base text-lg px-2">
          Description: {infoCity.description}
        </p>
        <h2 className="text-center font-bold text-lg bg-amber-600 px-2 py-1 rounded m-1 w-full">
          Itineraries
        </h2>
        <div className="flex max-xl:flex-col">
          <CardsItineraries />
        </div>

        <NavLink
          to={"/cities/"}
          className="w-full text-lg bg-amber-600 rounded font-bold py-1 px-4 text-center hover:text-yellow-300 mt-4"
        >
          Back City
        </NavLink>
      </div>
    </>
  );
};
