import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const DetailsCity = () => {
  const params = useParams();
  console.log(params.id);
  const [infoCity, setInfoCity] = useState({});
  useEffect(() => {
    axios(`http://localhost:3000/api/cities/${params.id}`)
      .then((response) => setInfoCity(response.data.response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="min-h-[78.5vh] flex flex-col items-center p-4 ">
        <img src={infoCity.photo} alt="" />
        <h1 className="">{infoCity.city} </h1>
        <h2 className="">{infoCity.country}</h2>
        <p className="">{infoCity.description}</p>
      </div>
    </>
  );
};
