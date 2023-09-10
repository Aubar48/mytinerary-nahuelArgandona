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
              className="flex flex-col items-center px-2"
            >
              <div className="font-bold text-lg bg-amber-600 mt-1 rounded-lg  border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800">
                <div className="relative">
                  <img
                    src={itinerary.photo}
                    alt={itinerary.name}
                    className="w-96 h-60 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
                  />
                  <p className="absolute top-0 right-0 z-50 text-lg font-bold ">
                    {itinerary.like}=❤️
                  </p>
                  <h1 className="text-center font-bold text-lg bg-amber-600 rounded mt-1 ">
                    Name: {itinerary.name}
                  </h1>
                </div>
                <div className="flex gap-2 justify-center">
                  <p className="text-lg font-bold mt-1">
                    Price: {"💵".repeat(itinerary.price)}
                  </p>
                  <p className="text-lg font-bold mt-1">
                    Duration: {itinerary.duration} min
                  </p>
                </div>
                <div className="flex justify-center gap-2 mt-1">
                  {itinerary.tags.map((element, indexMap) => (
                    <p
                      key={indexMap}
                      className="text-amber-600 bg-amber-100 rounded"
                    >
                      {element}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center items-end ">
                  <img
                    src={itinerary.profilePicture}
                    alt={itinerary.profileName}
                    className="mt-2 w-28 h-28 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
                  />
                </div>
                <h1 className="text-center font-bold text-lg">
                  {itinerary.profileName}
                </h1>
              </div>

              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Activities"
                  className="mt-2 flex flex-col items-center font-bold text-lg bg-amber-600 rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
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
