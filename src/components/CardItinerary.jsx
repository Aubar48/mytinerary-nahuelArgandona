/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { CardsActivities } from "./CardsActivities";
import user_actions from "../redux/actions/users";
const { read_user } = user_actions;
export const CardItinerary = ({ itinerary, user }) => {
  const user1 = useSelector((store) => store.users.userItineraries);
  const dispatch = useDispatch();

  // Estado para almacenar los comentarios y el comentario nuevo
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Función para manejar el cambio en el campo de entrada del comentario
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // Función para manejar el envío del comentario
  const handleSubmitComment = () => {
    if (newComment.trim() !== "") {
      // Agrega el nuevo comentario al array de comentarios
      setComments([...comments, newComment]);
      // Limpia el campo de entrada
      setNewComment("");
    }
  };
  useEffect(() => {
    dispatch(read_user({ user_id: user }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center px-2">
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
            <p key={indexMap} className="text-amber-600 bg-amber-100 rounded">
              {element}
            </p>
          ))}
        </div>
        <div>
          <div className="flex justify-center items-end ">
            <img
              src={user1.photo}
              alt={user1.name}
              className="mt-2 w-28 h-28 object-cover rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
            />
          </div>
          <h1 className="text-center font-bold text-lg">{user1.name}</h1>
        </div>
      </div>

      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Activities"
          className="w-96 h-auto mt-2 flex flex-col items-center font-bold text-lg bg-amber-600 rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800"
        >
          <CardsActivities nameItinerary={itinerary.name} />
        </AccordionItem>
      </Accordion>
      <div className="mt-2 flex flex-col rounded-lg border-solid border-2 shadow-amber-400 shadow-md border-amber-400 hover:border-sky-800">
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div className="flex flex-col w-96 h-auto ">
          <textarea
            placeholder="Agregar un comentario..."
            value={newComment}
            onChange={handleCommentChange}
            className="rounded-md h-24"
          ></textarea>
          <button
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={handleSubmitComment}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
