import { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { CardsActivities } from "./CardsActivities";
import { getItinerariesAsync } from "../redux/actions/itinerariesActions";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const CardsItineraries = () => {
  const params = useParams();
  // const [infoItinerary, setInfoItinerary] = useState([]);
  // const [noItineraries, setNoItineraries] = useState(false);

  const dispatch = useDispatch();
  const infoItinerary = useSelector(
    (store) => store.itinerariesReducer.itineraries
  );

  useEffect(() => {
    // axios(`http://localhost:3000/api/itineraries/city/${params.id}`)
    //   .then((response) => {
    //     const itinerariesData = response.data.response;
    //     if (itinerariesData.length === 0) {
    //       setNoItineraries(true);
    //     } else {
    //       setInfoItinerary(itinerariesData);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setNoItineraries(true);
    //   });
    if (infoItinerary.length === 0) {
      dispatch(getItinerariesAsync(params.id));
    }
  }, []);

  return (
    <>
      {infoItinerary == "" ? (
        <p className="text-center font-bold text-lg mt-4">
          ¡Sorry, there are no itineraries available for this city!
        </p>
      ) : (
        infoItinerary.map((itinerary) => {
          return (
            <div
              key={itinerary._id}
              className="flex flex-col items-center px-4 "
            >
              <img
                src={itinerary.photo}
                alt={itinerary.name}
                className="w-96 h-60 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
              />
              <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-2">
                {itinerary.name}
              </h1>
              <div className="flex gap-2">
                <p className="text-lg font-bold mt-2">
                  Price: {"💵".repeat(itinerary.price)}
                </p>
                <p className="text-lg font-bold mt-2">
                  Duration: {itinerary.duration}
                </p>
                <p className="text-lg font-bold mt-2">
                  Like ❤️: {itinerary.like}
                </p>
              </div>
              <div className="flex flex-row gap-2 mt-2">
                {itinerary.tags.map((element, indexMap) => (
                  <p
                    key={indexMap}
                    className="text-amber-600 bg-amber-100 px-2 py-1 rounded"
                  >
                    Hashtag: {element}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={itinerary.profilePicture}
                    alt={itinerary.profileName}
                    className="mt-2 w-20 h-20 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-2">
                    {itinerary.profileName}
                  </h1>
                </div>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Activities"
                  className="flex flex-col items-center font-bold text-lg bg-amber-600 rounded mt-2"
                >
                  <CardsActivities nameItinerary={itinerary.name} />
                </AccordionItem>
              </Accordion>
            </div>
          );
        })
      )}
    </>
  );
};
