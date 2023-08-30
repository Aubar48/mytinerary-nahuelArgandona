import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const CardsItineraries = () => {
  const params = useParams();
  const [infoItinerary, setInfoItinerary] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/api/itineraries/city/${params.id}`)
      .then((response) => setInfoItinerary(response.data.response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {infoItinerary.map((itinerary) => {
        return (
          <div
            key={itinerary._id}
            className="flex flex-col items-center px-4"
          >
            <img
              src={itinerary.photo}
              alt={itinerary.name}
              className="w-96 h-60 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
            />
            <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-2">
              {itinerary.name}
            </h1>
            <div className="flex gap-2">
            <p className="text-lg font-bold mt-2">Price: {"💵".repeat(itinerary.price)}</p>
            <p className="text-lg font-bold mt-2">Duration: {itinerary.duration}</p>
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
          </div>
        );
      })}
    </>
  );
};
