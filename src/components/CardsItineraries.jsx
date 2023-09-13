/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { getItinerariesAsync } from "../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CardItinerary } from "./CardItinerary";

export const CardsItineraries = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const infoItinerary = useSelector(
    (store) => store.itinerariesReducer.itineraries
  );

  useEffect(() => {
    dispatch(getItinerariesAsync(params.id));
  }, []);

  return (
    <>
      {infoItinerary == "" ? (
        <p className="text-center font-bold text-lg mt-4">
          ¡Sorry, there are no itineraries available for this city!
        </p>
      ) : (
        infoItinerary.map((itinerary, key) => {
          return (
            <CardItinerary
              key={key}
              user={infoItinerary[0].city_id.admin_id}
              itinerary={itinerary}
            />
          );
        })
      )}
    </>
  );
};
