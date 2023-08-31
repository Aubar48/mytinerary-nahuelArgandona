/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

export const CardsActivities = ({ nameItinerary }) => {
  const [infoActivity, setInfoActivity] = useState([]);
  const [noActivities, setNoActivities] = useState(false);

  useEffect(() => {
    axios(`http://localhost:3000/api/activities/itinerary/${nameItinerary}`)
      .then((response) => {
        const activitiesData = response.data.response;
        if (activitiesData.length === 0) {
          setNoActivities(true);
        } else {
          setInfoActivity(activitiesData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setNoActivities(true);
      });
  }, []);

  return (
    <>
      {noActivities ? (
        <p className="text-center font-bold text-lg mt-4">
          ¡Lo siento, no hay actividades disponibles para este itinerario!
        </p>
      ) : (
        infoActivity.map((activity) => {
          return (
            <div key={activity._id} className="flex flex-col items-center px-4">
              <img
                src={activity.photo}
                alt={activity.name}
                className="w-96 h-60 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
              />
              <h1 className="font-bold text-lg bg-amber-600 px-2 py-1 rounded mt-2">
                {activity.name}
              </h1>
            </div>
          );
        })
      )}
    </>
  );
};
