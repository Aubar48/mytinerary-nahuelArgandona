/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@nextui-org/react";

export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] shadow-lg shadow-amber-400 focus:bg-amber-400 px-2 bg-white hover:bg-amber-400 rounded-xl w-[100px] flex justify-center items-center mx-1 "
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] shadow-lg shadow-amber-400 focus:bg-amber-400 px-2 bg-white hover:bg-amber-400 rounded-xl w-[100px] flex justify-center items-center mx-1 font-serif"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                className="h-[50px] text-[20px] shadow-lg shadow-amber-400  focus:bg-amber-400 px-2 bg-white hover:bg-amber-400 rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer font-serif"
              >
                {each.title}
              </span>
            )
      )}
      {photo && (
        <Avatar
          isBordered
          radius="sm"
          color="warning"
          className="shadow-lg shadow-amber-400 h-[50px] w-[50px] object-cover bg-white rounded-xl mx-1 hidden lg:flex"
          src={photo}
        />
      )}
    </div>
  );
}
