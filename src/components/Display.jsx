/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="flex ms-5 absolute z-50 top-[70px] left-[70px] gap-2 flex-col bg-tertiary p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] hover:text-yellow-300 focus:bg-sky-700  px-2 bg-white hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] hover:text-yellow-300 focus:bg-sky-700 px-2 bg-white hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                style={{ backgroundColor: { hover: each.hover } }}
                className="h-[50px] text-[20px] hover:text-yellow-300 focus:bg-sky-700 px-2 bg-white hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
              >
                {each.title}
              </span>
            )
      )}
    </div>
  );
}