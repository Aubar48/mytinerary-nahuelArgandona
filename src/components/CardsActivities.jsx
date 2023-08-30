import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CardsActivities = () => {
  const params = useParams();
  const [infoActivity, setInfoActivity] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/api/activities/itinerary/${params.id}`)
      .then((response) => setInfoActivity(response.data.response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {infoActivity.map((activities) => {
        return (
          <div
            key={activities._id}
            className="flex flex-col items-center px-4"
          >
            <img
              src={activities.photo}
              alt={activities.name}
              className="w-96 h-60 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400"
            />
            <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-2">
              {activities.name}
            </h1>
          </div>
        );
      })}
    </>
  );
};
